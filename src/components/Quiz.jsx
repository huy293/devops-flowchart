import React, { useState } from 'react'

const quizQuestions = [
  {
    question: "Tại sao trong Dockerfile ta nên viết 'COPY package.json .' và 'RUN npm install' trước khi 'COPY . .'?",
    options: [
      "Để tránh các lỗ hổng bảo mật khi đóng gói image.",
      "Để node_modules nằm trong thư mục gốc của container.",
      "Để tận dụng cơ chế cache layer của Docker, giúp đẩy nhanh tốc độ build khi chỉ sửa code mà không thêm thư viện mới.",
      "Lệnh này không mang ý nghĩa tối ưu, chỉ là thói quen của lập trình viên."
    ],
    correct: 2,
    explanation: "Docker build image theo từng layer (dòng lệnh). Khi rebuild, nếu file package.json không đổi, Docker sẽ lấy cache của layer cài đặt node_modules cũ thay vì chạy lại từ đầu, giúp rút ngắn thời gian build từ vài phút xuống vài giây."
  },
  {
    question: "Loại Service nào trong Kubernetes được sử dụng để phân phối traffic từ bên ngoài Internet vào trong cluster qua IP Public tĩnh do Cloud Provider cấp?",
    options: [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "ExternalName"
    ],
    correct: 2,
    explanation: "Loại Service 'LoadBalancer' sẽ tương tác trực tiếp với Cloud API để thuê một Load Balancer vật lý (ví dụ Classic/Application ALB trên AWS) và định tuyến traffic trực tiếp từ internet vào cluster."
  },
  {
    question: "Để triển khai hạ tầng High Availability trên AWS, các Private Subnets ở 3 Availability Zones (AZs) khác nhau nên kết nối ra internet qua NAT Gateway như thế nào để vừa an toàn vừa tối ưu tính chịu lỗi?",
    options: [
      "Sử dụng 1 NAT Gateway duy nhất đặt ở Public Subnet của AZ đầu tiên để tiết kiệm chi phí.",
      "Cấu hình 3 NAT Gateways phân tán trên cả 3 AZ (mỗi AZ một cái) để đảm bảo cô lập sự cố.",
      "Định tuyến trực tiếp Private Subnet ra Internet Gateway.",
      "Liên kết các Private Subnet thông qua VPC Peering."
    ],
    correct: 1,
    explanation: "Mặc dù 1 NAT Gateway rẻ hơn, nhưng nếu AZ chứa NAT Gateway đó bị sập thì cả 3 Private Subnet đều mất mạng. Do đó, môi trường production tiêu chuẩn yêu cầu chạy 3 NAT Gateways tương ứng với 3 AZ để cô lập sự cố."
  },
  {
    question: "Nguyên tắc bảo mật nào dưới đây là BẮT BUỘC khi chạy container Node.js trong môi trường Production?",
    options: [
      "Luôn luôn chạy container dưới quyền user root mặc định để tránh lỗi ghi file.",
      "Sử dụng chỉ thị 'USER node' trong Dockerfile để chạy container dưới quyền user không có đặc quyền root.",
      "Gắn cờ '--privileged' khi khởi động container.",
      "Vô hiệu hóa tính năng Read-Only Root Filesystem."
    ],
    correct: 1,
    explanation: "Chạy container dưới quyền user không đặc quyền (non-root) là nguyên tắc tối quan trọng để ngăn chặn lỗi thoát container (container escape) - kẻ tấn công nếu chiếm được app cũng không thể lấy quyền root máy chủ vật lý."
  },
  {
    question: "Làm thế nào để truyền API Key bí mật vào Pod trong Kubernetes một cách an toàn và bảo mật nhất?",
    options: [
      "Nhúng trực tiếp API Key vào file YAML Deployment.",
      "Sử dụng ConfigMap và mount vào container dưới dạng biến môi trường.",
      "Khởi tạo một tài nguyên Secret (Opaque) lưu trữ key mã hóa Base64, rồi mount vào Pod dưới dạng Env hoặc file config.",
      "Ghi trực tiếp Key vào mã nguồn trước khi build Dockerfile."
    ],
    correct: 2,
    explanation: "Kubernetes Secret được sinh ra để lưu trữ các thông tin nhạy cảm. Nó được mã hóa base64 và có thể cấu hình phân quyền truy cập chặt chẽ hơn nhiều so với ConfigMap thông thường."
  },
  {
    question: "Khi sử dụng aaPanel trên VPS, nếu ứng dụng Docker chạy cổng 8080 nội bộ, ta cấu hình Nginx Reverse Proxy như thế nào để domain trỏ vào container mà không bị xung đột?",
    options: [
      "Mở cổng 8080 của Docker ra ngoài và bắt người dùng gõ domain kèm port :8080.",
      "Tạo website tĩnh bằng tên miền trên aaPanel, sau đó thiết lập Reverse Proxy trỏ đến Target URL: http://127.0.0.1:8080.",
      "Thay đổi cấu hình cổng mặc định của Nginx trên VPS sang 8080.",
      "Map trực tiếp cổng 80:8080 của container ra cổng 80 của VPS bằng docker-compose."
    ],
    correct: 1,
    explanation: "Tạo website tĩnh trên aaPanel giúp bạn có cấu hình Nginx riêng cho domain đó, sau đó tạo luật proxy chuyển tiếp HTTP/HTTPS sang container đang chạy cổng 8080 ở IP nội bộ, vừa an toàn (không lộ cổng 8080) vừa dễ cài SSL Let's Encrypt."
  },
  {
    question: "Khi sử dụng Watchtower để tự động cập nhật image trên VPS, cờ/tham số nào giúp tự động xóa bỏ các Docker image cũ (unused/dangling) sau khi đã khởi chạy container mới thành công?",
    options: [
      "--interval 300",
      "--cleanup (hoặc biến môi trường WATCHTOWER_CLEANUP=true)",
      "--label-enable",
      "--stop-timeout 30s"
    ],
    correct: 1,
    explanation: "Mỗi khi container được cập nhật, image cũ sẽ bị dán nhãn <none> (dangling). Nếu không sử dụng cờ `--cleanup`, các image thừa này sẽ nằm lại trên đĩa cứng và làm đầy ổ cứng VPS của bạn sau vài lần cập nhật."
  },
  {
    question: "Trong cấu hình GitLab CI/CD (.gitlab-ci.yml), sự khác biệt cốt lõi giữa từ khóa 'cache' và 'artifacts' là gì?",
    options: [
      "Cache dùng để lưu dữ liệu giữa các lần chạy job của pipeline (ví dụ node_modules); Artifacts lưu trữ sản phẩm đầu ra (binary, test report) để chuyển giữa các stage hoặc tải về.",
      "Cache lưu trên VPS local của Runner, Artifacts bắt buộc phải lưu trên Cloud Object Storage.",
      "Hai từ khóa này hoàn toàn giống nhau, có thể dùng thay thế nhau ở mọi vị trí.",
      "Cache bắt buộc phải có cho mọi pipeline, còn Artifacts thì không bao giờ dùng tới."
    ],
    correct: 0,
    explanation: "Cache được thiết kế để tăng tốc độ chạy của job tiếp theo bằng cách lưu các tệp phụ thuộc không thay đổi nhiều. Artifacts được thiết kế để truyền tải dữ liệu đầu ra giữa các stage khác nhau trong cùng một lần chạy pipeline."
  }
];

export default function Quiz() {
  const [stage, setStage] = useState('start') // 'start' | 'play' | 'result'
  const [currentIdx, setCurrentIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedIdx, setSelectedIdx] = useState(null)
  const [answered, setAnswered] = useState(false)

  const startQuiz = () => {
    setCurrentIdx(0)
    setScore(0)
    setSelectedIdx(null)
    setAnswered(false)
    setStage('play')
  }

  const selectOption = (idx) => {
    if (answered) return
    setSelectedIdx(idx)
    setAnswered(true)

    const q = quizQuestions[currentIdx]
    if (idx === q.correct) {
      setScore(prev => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx(prev => prev + 1)
      setSelectedIdx(null)
      setAnswered(false)
    } else {
      setStage('result')
    }
  }

  const getResult = () => {
    const percent = (score / quizQuestions.length) * 100
    let grade = ''
    let feedback = ''

    if (percent === 100) {
      grade = '🛡️ DevOps Architect Master'
      feedback = 'Tuyệt vời! Bạn có kiến thức cực kỳ vững chắc về DevOps ở cấp độ chuyên gia cao cấp.'
    } else if (percent >= 75) {
      grade = '🚀 DevOps Senior'
      feedback = 'Rất ấn tượng! Bạn nắm vững hầu hết các thực tiễn vận hành và kiến trúc hạ tầng.'
    } else if (percent >= 50) {
      grade = '⚙️ DevOps Junior/Mid'
      feedback = 'Khá tốt! Hãy đọc thêm các tài liệu trong cẩm nang để hiểu sâu hơn các kiến thức thực chiến.'
    } else {
      grade = '📚 DevOps Intern/Beginner'
      feedback = 'Đừng nản chí! Đọc kỹ các bài viết thực hành trong cẩm nang sẽ giúp bạn tiến bộ nhanh chóng.'
    }

    return { grade, feedback }
  }

  const { grade, feedback } = getResult()
  const currentQ = quizQuestions[currentIdx]

  return (
    <div className="tab-content active" id="content-quiz">
      <div className="quiz-container glass">
        {stage === 'start' && (
          <div className="quiz-start-panel">
            <h2>Thử Thách Trắc Nghiệm DevOps Senior</h2>
            <p>Bộ câu hỏi trắc nghiệm thực chiến được thiết kế bởi các DevOps Engineer lâu năm. Bạn đã sẵn sàng đo lường mức độ thấu hiểu của mình đối với CI/CD, Docker, Kubernetes, AWS và các sự cố hệ thống thực tế?</p>
            <div className="quiz-rules">
              <span>⏱️ Không giới hạn thời gian</span>
              <span>🔥 {quizQuestions.length} câu hỏi hóc búa</span>
              <span>📖 Giải thích học thuật chi tiết</span>
            </div>
            <button className="quiz-start-btn" onClick={startQuiz}>Bắt Đầu Thử Thách 🚀</button>
          </div>
        )}

        {stage === 'play' && currentQ && (
          <div className="quiz-play-panel">
            <div className="quiz-progress-wrapper">
              <div className="quiz-progress-text">Câu hỏi {currentIdx + 1} / {quizQuestions.length}</div>
              <div className="quiz-progress-bar">
                <div 
                  className="quiz-progress-fill" 
                  style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>
            <div className="quiz-question-box">
              <h3>{currentQ.question}</h3>
            </div>
            <div className="quiz-options-list">
              {currentQ.options.map((opt, idx) => {
                let btnClass = ''
                if (answered) {
                  if (idx === currentQ.correct) {
                    btnClass = 'correct'
                  } else if (idx === selectedIdx) {
                    btnClass = 'incorrect'
                  }
                }

                return (
                  <button
                    key={idx}
                    className={`quiz-option-btn ${btnClass}`}
                    disabled={answered}
                    onClick={() => selectOption(idx)}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            
            {answered && (
              <div className="quiz-explanation-box">
                <h4>💡 Giải thích chi tiết:</h4>
                <p>{currentQ.explanation}</p>
                <button className="quiz-next-btn" onClick={nextQuestion}>
                  {currentIdx + 1 < quizQuestions.length ? 'Câu Tiếp Theo →' : 'Xem Kết Quả →'}
                </button>
              </div>
            )}
          </div>
        )}

        {stage === 'result' && (
          <div className="quiz-result-panel">
            <h2>Kết Quả Thử Thách</h2>
            <div className="quiz-score-badge">
              <span>{score} / {quizQuestions.length}</span>
              <p className="quiz-grade-text">{grade}</p>
            </div>
            <p>{feedback}</p>
            <button className="quiz-restart-btn" onClick={startQuiz}>Làm Lại Trắc Nghiệm 🔄</button>
          </div>
        )}
      </div>
    </div>
  )
}
