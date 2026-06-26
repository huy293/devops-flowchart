import React, { useState } from 'react'

const nodeData = [
  { id: 'plan', title: '1. Plan', subtitle: 'Lập kế hoạch & Yêu cầu', color: '94, 67, 206' },
  { id: 'code', title: '2. Code', subtitle: 'Khởi tạo mã nguồn', color: '26, 91, 176' },
  { id: 'build', title: '3. Build', subtitle: 'Biên dịch đa tầng', color: '11, 107, 88' },
  { id: 'test', title: '4. Test', subtitle: 'Kiểm định tự động', color: '61, 114, 26' },
  { id: 'release', title: '5. Release', subtitle: 'Giải phóng tỷ suất', color: '168, 101, 0' },
  { id: 'deploy', title: '6. Deploy', subtitle: 'Bố trí hạ tầng', color: '137, 43, 25' },
  { id: 'operate', title: '7. Operate', subtitle: 'Vận hành SRE', color: '140, 36, 84' },
  { id: 'monitor', title: '8. Monitor', subtitle: 'Giám sát Observability', color: '140, 41, 50' }
];

const textContent = {
  overview: `
    <div class="reveal-content">
      <div style="font-size: 0.9rem; color: #82b1ff; letter-spacing: 2px; margin-bottom: 0.5rem; font-weight: 600;">LUẬN ÁN HỌC THUẬT: CƠ SỞ KHOA HỌC DEVOPS</div>
      <h2 style="font-size: 2.5rem; border: none; padding: 0;">Tổng Quan Nền Tảng</h2>
      
      <div class="thesis-quote">
        "DevOps không chỉ là một công cụ hay chức danh, nó là sự tiến hóa tự nhiên của tư duy <strong>Agile & Lean</strong> được đem áp dụng vào toàn bộ chuỗi giá trị phân phối phần mềm."<br>— <em>Patrick Debois (Người khai sinh thuật ngữ DevOps)</em>
      </div>

      <p>Được khái niệm hóa lần đầu vào năm 2009, DevOps (Development & Operations) là một mô hình kiến trúc, tập hợp các thực hành kỹ thuật số và khuôn khổ văn hóa giải quyết triệt để <strong>"Bức tường ngăn cách" (The Wall of Confusion)</strong> giữa Đội ngũ phát triển (muốn sự thay đổi) và Đội ngũ vận hành (muốn sự ổn định).</p>
      <p>Về mặt nền tảng học thuật, DevOps kế thừa sâu sắc <strong>Lý thuyết Ràng buộc (Theory of Constraints)</strong> của M. Goldratt và vòng lặp khép kín <strong>PDCA (Plan-Do-Check-Act)</strong> nhằm tối ưu hóa Dòng chảy giá trị công nghệ.</p>

      <div class="thesis-stats">
        <div class="stat-box">
          <div class="stat-value">208x</div>
          <div class="stat-label">Tần suất triển khai</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">106x</div>
          <div class="stat-label">Tốc độ phục hồi (MTTR)</div>
        </div>
        <div class="stat-box">
          <div class="stat-value">7x</div>
          <div class="stat-label">Giảm tỷ lệ lỗi (CFR)</div>
        </div>
      </div>
      <p style="font-size: 0.85rem; color: #a0aec0; text-align: center; margin-top: -10px; margin-bottom: 2rem;">*Nguồn khảo sát khoa học: Báo cáo DORA (DevOps Research and Assessment) State of DevOps.</p>

      <h3>Khung Kiến Thức CALMS Model</h3>
      <p>Giới thuật lý luận thế giới chuẩn hóa DevOps qua cấu trúc mô hình mạng <strong>CALMS</strong>:</p>
      <ul>
        <li><strong>Culture (Văn hóa Trách nhiệm):</strong> Kỷ luật không đổ lỗi.</li>
        <li><strong>Automation (Tự động hóa):</strong> Logic của máy móc thế chỗ thao tác Toil của con người.</li>
        <li><strong>Lean (Tinh gọn vòng đời):</strong> Rút ngắn Kích thước lô (Batch Size).</li>
        <li><strong>Measurement (Đo lường Hệ thống):</strong> Data-driven qua telemetry.</li>
        <li><strong>Sharing (Phân chia tri thức):</strong> Cộng tác vòng lặp chéo.</li>
      </ul>
    </div>
  `,
  plan: `
    <div class="reveal-content">
      <h2><span style="color: rgb(94, 67, 206)">■</span> Giai Đoạn 1: Plan (Kế hoạch Phân tán)</h2>
      <p>Trong khuôn khổ học thuật DevOps, chức năng Plan đánh dấu sự đoạn tuyệt với phương thức quản trị đường thẳng (Waterfall) hoặc BDUF (Big Design Up Front). Thay vào đó, nó định tuyến bằng <strong>Quản lý Sản phẩm Linh hoạt (Agile Product Management)</strong>.</p>
      <div class="thesis-quote">
        Nền tảng của ranh giới Plan là <strong>Định luật Conway (Conway's Law)</strong>: "Bất kỳ bộ máy tổ chức nào thiết kế một hệ thống... chắc chắn sẽ tạo ra một kiến trúc mạng là bản sao mô hình giao tiếp của chính tổ chức ấy."<br>— <em>Melvin Conway, 1967</em>
      </div>
      <h3>Cơ Sở Phương Pháp Luận Tinh Gọn</h3>
      <ul>
        <li><strong>Value Stream Mapping (VSM):</strong> Kỹ thuật mượn từ Hệ thống Sản xuất Toyota nhằm mô phỏng lộ trình luân chuyển dữ liệu và loại bỏ các "Nút Thắt Lãng Phí" (Waste) trước khi hạ quyết tâm viết một dòng code.</li>
        <li><strong>User Stories & Epics:</strong> Phân rã rủi ro thành các tệp yêu cầu cực nhỏ. Mã hóa yêu cầu thành "Vi lặp" phát triển trong từ 1 tới 2 tuần.</li>
      </ul>
      <div class="thesis-example">
        Tập đoàn công nghệ thiết lập kỹ thuật <strong>Sprint Planning đa chiều</strong>. Các Kiến trúc sư (Architecture), Lập trình viên (Dev) và Quản trị Hệ Thống (Ops) cùng tham gia thảo luận ngay từ ngày 0 để chốt cấu trúc Telemetry và NFR định lượng (Tải cực đại, chuẩn quy mô Database). Điều này ứng chiếu lý thuyết <strong>"Shift-Left"</strong> (Khuynh tả) triệt để về vận hành ngay từ vạch xuất phát.
      </div>
    </div>
  `,
  code: `
    <div class="reveal-content">
      <h2><span style="color: rgb(26, 91, 176)">■</span> Giai Đoạn 2: Code (Mã hóa Hệ thống)</h2>
      <p>Code là nơi các yêu cầu trìu tượng biến thành trạng thái Logic hình thức. Chức năng Code trong DevOps không đơn giản là lập trình, mà là bộ quy tắc <strong>Quản lý Trạng thái Cốt lõi (Version Control States)</strong>.</p>
      <div class="thesis-quote">
        "Làm việc với các nhánh cô lập dài hạn (long-lived branches) giống hệt với việc vay nợ tài chính — nợ càng găm lâu, Xung đột Tích hợp (merge conflict) càng gây lãi suất kép dẫn đến dự án sụp đổ."<br>— <em>Jez Humble (Continuous Delivery)</em>
      </div>
      <h3>Trí Tuệ Quản Trị Phân Nhánh</h3>
      <ul>
        <li><strong>Trunk-Based Development (TBD):</strong> Khoa học DevOps minh chứng TBD hiệu suất cao gấp nhiều lần Gitflow. Kỹ sư hòa trộn trực tiếp hàng loạt commit li ti vào nhánh Huyết mạch (Main Trunk) cực nhiều lần mỗi ngày.</li>
        <li><strong>Security Shift-Left (Khóa chặt bằng móc):</strong> Áp dụng các luồng Hook phía mạng máy khác (Local Pre-commit). Ngay khi Kỹ sư bấm lệnh lưu máy tính sẽ kích hoạt thuật toán rà quét Token lộ vi phạm, mật khẩu nhúng cứng.</li>
      </ul>
      <div class="thesis-example">
        <strong>Vận hành kiến trúc Monorepo:</strong> Google duy trì hệ thống quản trị mã một khối (Monorepo) đồ sộ có dung lượng tính bằng Terabyte cho 2 tỷ dòng lệnh. Bằng cách áp dụng quy trình kiểm định TBD tự động tuyệt đối, họ thực thi an toàn xấp xỉ <strong>40.000 commit mã lệnh/ngày</strong> mà không phá vỡ liên kết nội tại của toàn bộ sinh quyển tập đoàn.
      </div>
    </div>
  `,
  build: `
    <div class="reveal-content">
      <h2><span style="color: rgb(11, 107, 88)">■</span> Giai Đoạn 3: Build (Biên dịch Đa Tầng)</h2>
      <p>Chức năng Build là cỗ máy luyện kim giả kim thuật. Về mặt kiến trúc, Build thực hiện chuyển từ <em>Trạng thái Khai báo</em> (văn bản) về <em>Trạng thái Thực thi</em> (Nhị phân/Image).</p>
      <div class="thesis-quote">
        Sợi chỉ đỏ của hệ thống Build là tính <strong>Tất định của phương trình (Determinism)</strong>: Hàm toán học f(Mã Nguồn, Artifact) = Constant. Cùng một Input bắt buộc tạo ra bộ nhị phân sinh thái độc lập 100% giống hệt nhau ở mọi thực thể không gian máy.<br>— <em>Martin Fowler</em>
      </div>
      <h3>Cơ Quản Thiết Lập CI (Continuous Integration)</h3>
      <ul>
        <li><strong>Topology Lưới Lưu Trữ (Build Caching DAG):</strong> Phân tích biểu đồ lưới Đồ thị có hướng (Directed Acyclic Graph) để chỉ cho biên dịch đúng các Fragment bị sửa đổi. Rút thì thực thi từ 1 tiếng xuống còn 30 giây.</li>
        <li><strong>Cấu Trúc Hóa Thạch (Immutable Artifacts):</strong> Khi sản phẩm được hình thành (Docker Image, Jar file), nó bị "niêm phong hóa thạch" bằng Token Hash chuẩn bảo mật mã hóa sinh trắc học SHA-256. Tuyệt đối không Ghi đè (Overwrite).</li>
      </ul>
      <div class="thesis-example">
        Kỹ thuật <strong>Multi-stage dockerization</strong>: Hệ điều hành Pipeline sử dụng lưới Container đa khâu. Giả sử tại khâu 1 chúng ta tải về cỗ máy 1.2GB tài nguyên để dựng Compile, sau quá trình chuyển đổi, ở khâu thứ 2 lõi hệ thống chỉ bóc tách tệp chạy nhỏ lẻ vài MB bỏ vào Container sạch mới. Cách phân rã hạt này khiến tiết diện Tấn Công Học (Attack Surface) bị giảm tiệm cận con số không.
      </div>
    </div>
  `,
  test: `
    <div class="reveal-content">
      <h2><span style="color: rgb(61, 114, 26)">■</span> Giai Đoạn 4: Test (Kiểm Định Xuyên Mạch)</h2>
      <p>Trong thời đại Dây chuyền liên tục (Pipeline), Test không còn là bước thẩm định của loài người, mà là một Lực lượng <strong>Đồng Tuần Tra Cơ Cấu Máy (Automated Defense Mesh)</strong> can thiệp toàn lưu trình sống của code.</p>
      <div class="thesis-quote">
        "Việc tìm kiếm một phần mềm không có Lỗi là bất khả thi toán học. Mục tiêu của Test CI không phải là xóa bỏ rủi ro, mà là đan một Tấm lưới An Toàn cực mịn nhằm phát kiến hư hỏng trong phạm vi đơn vị Mi-li-giây."<br>— <em>Mike Cohn (Tác giả khái niệm Test Pyramid)</em>
      </div>
      <h3>Mô hình Tách Lớp Kiểm Tra (Defense-in-Depth)</h3>
      <ul>
        <li><strong>Unit Analysis Mesh (Lưới Đơn vị):</strong> Hàm kiểm tra hàng loạt cô lập không cần giao tiếp cơ sở dữ liệu. Nó bao bọc trực tiếp từng logic tinh giản nhất ở tốc độ ánh sáng.</li>
        <li><strong>Static & Dynamic Cyber Gates (Cổng Mạng SAST/DAST):</strong> Khóa luồng DevSecOps. Bot trí tuệ nhân tạo duyệt hình thái AST (Abstract Syntax Tree) để săn lỗi bảo mật nhúng tiêm (SQLi/XSS).</li>
        <li><strong>Nguyên tắc Fail-Fast:</strong> Đảo chiều tập test lớn. Khối nào hay lỗi nhất ép chạy đầu tiên. Giúp trả kết quả huỷ mã về dev trong 1 phút thay vì 3 tiếng.</li>
      </ul>
      <div class="thesis-example">
        Thay vì kịch bản duyệt bằng cú nhấp tay, một Cổng Pipeline hiện tại sinh ra 5.000 bài kiểm tra chạy <strong>Đa luồng song song (Parallel Matrix)</strong> trải rộng trên đủ 10 hệ điều hành, 5 trình duyệt khác phân mảnh. Hệ thống tự tổng hợp Chỉ số Phạm vi Sóng (Code Coverage Metric), từ chối tức khắc những dự án có vùng phủ an toàn nhỏ hơn 95%.
      </div>
    </div>
  `,
  release: `
    <div class="reveal-content">
      <h2><span style="color: rgb(168, 101, 0)">■</span> Giai Đoạn 5: Release (Chiến Khởi Giải Phóng)</h2>
      <p>Định luật phân cực lớn nhất của hệ thống: Đừng mang Deployment (Triển khai công nghệ) đi ghép đôi với Release (Phát hành nghiệp vụ). Hai định luật vật lý này đã được <strong>Cách ly Hoàn toàn (Decoupling)</strong>.</p>
      <div class="thesis-quote">
        "Code rủi ro cao vẫn được cắm rễ vào Production mỗi giây bằng băng chuyền, nhưng chúng vô hình đối với nhân loại... Chỉ đến khi C-Level cần tiền, Cổng Giải Phóng mới được điểm hoả."<br>— <em>Nguyên lý Feature Flags (Cờ tính năng)</em>
      </div>
      <h3>Cơ Chế Phân Phối Chiến Lược Động</h3>
      <ul>
        <li><strong>Canary Release (Chim Yến Dò Mìn):</strong> Trích nguyên lý khai mỏ. Chỉ cấp mã nguồn mới cho riêng 2% thiết bị di động truy cập. Bật Máy cảm biến quan sát 12 tiếng. Nếu Lỗi tăng 0.1%, AI tự đóng van xả.</li>
        <li><strong>Blue-Green Switching:</strong> Tạo ra hệ sinh thái Không gian nhân bản (Clone). Router điều hướng mạch băng thông từ cụm máy Blue (Cũ) sang cụm Green (Mới). Nếu hỏng hóc, lùi mạch về Blue chỉ mất 1 Ping Mạng (ms).</li>
      </ul>
      <div class="thesis-example">
        Sử dụng <strong>Dark Launching (Khai hỏa Ngầm)</strong>. Netflix cài sẵn một phần mềm xem phim định dạng Hologram ở chế độ bóng tối vào Tivi của hàng triệu người. Bề mặt giao diện bằng 0, nhưng luồng tải lén vẫn tạo API gửi lệnh rỗng nhằm khảo thí giới hạn chống chịu cực đại của Cloud Platform.
      </div>
    </div>
  `,
  deploy: `
    <div class="reveal-content">
      <h2><span style="color: rgb(137, 43, 25)">■</span> Giai Đoạn 6: Deploy (Bố Trí Tọa Độ Đám Mây)</h2>
      <p>Giai đoạn định tinh <strong>Kiến trúc Bản địa Mây (Cloud-Native Ecosystem)</strong> và nhường lại ngôi vị thống trị của máy móc cho Toán học Điều phối Container (Kubernetes).</p>
      <div class="thesis-quote">
        "Hạ tầng Tương lai không mua bằng Sắt Thép và Dây Cáp, Nó được in ra bằng Văn Bản (Text)."<br>— <em>Triết lý Infrastructure as Code (IaC)</em>
      </div>
      <h3>Quy trình Hình tượng Hóa Phần cứng</h3>
      <ul>
        <li><strong>Ngữ nghĩa Khai báo (Declarative Truth):</strong> Khác với Mệnh lệnh (Cài cho tôi gói X), Kỹ sư Khai báo một Bản Hiến Pháp mạng: "Tôi cần 1 trạng thái cân bằng tuyệt đối gồm 5 Server chứa lõi AI". Chuỗi điều khiển liên lặp (Reconciliation Loop) của Kubernetes tự động dò hỏi nếu 1 Server cháy, nó triệu hồi tức thì 1 Server mới lên trám chỗ trống.</li>
        <li><strong>Continuous Deployment Thượng Thừa:</strong> Chuyển giao cực hạn khi không có con người duyệt tay ở cửa ải Production. Nếu Lưới An Toàn Test đủ dày, mã được phép nối cổng thẳng hàng tới User.</li>
      </ul>
      <div class="thesis-example">
        Thiết lập mô hình rào cản <strong>GitOps đỉnh cao</strong>. Quyền (SSH) vào máy chủ Production được tước bỏ và mã hóa khỏi Kỹ sư vận hành. Lõi phần cứng tự sở hữu một Agent ngầm. Agent này kiểm tra Git lưu trữ, nếu Kỹ sư ấn "Merge", Agent tự kéo tín hiệu đó về và mổ xẻ nội tạng chính nó (Self-Provisioning), hủy diệt vĩnh viễn sự rò rỉ mã độc do tác nhân ngoài giới vào Server.
      </div>
    </div>
  `,
  operate: `
    <div class="reveal-content">
      <h2><span style="color: rgb(140, 36, 84)">■</span> Giai Đoạn 7: Operate (Trấn Trữ & Điều Tiết)</h2>
      <p>Sự thoái trào của khái niệm "Lính canh quản trị mạng" bằng tay, trao trọn quyền uy cho kỷ nguyên công nghệ <strong>Kinh Tế Lỗi Hệ Thống SRE (Site Reliability Engineering)</strong> khởi xướng từ Google Labs.</p>
      <div class="thesis-quote">
        "SRE là siêu hình ảnh xảy ra khi bạn quăng một bản hợp đồng bảo trì dữ liệu cho một kiến trúc sư phần mềm... Kẻ thù số 1 của doanh thu không phải là chậm tính năng, mà là sụp đổ máy chủ."<br>— <em>Sách Site Reliability Engineering, Google, 2016</em>
      </div>
      <h3>Dược Liệu Học Ổn Định Sự Sống (Reliability Logistics)</h3>
      <ul>
        <li><strong>Định lý Ngân sách Lỗi (Error Budgets):</strong> Thỏa thuận Độ tin cậy (SLA) đặt ở ngưỡng 99.9%. Tương đương lượng ngân sách máu: Được tử trận Tối đa 43 Phút / Tháng. Nếu Nhóm Dev viết mã ẩu khiến cúp điện hết 43 phút này, Luồng điều phối Lập tức niêm phong toàn bộ năng lực xuất bản mã mới cho tới khi quỹ khôi phục xong.</li>
        <li><strong>Cơ Phục Sinh Điện Sinh Học (Self-Healing):</strong> Khi một cổng thông tin đột tử (OOM Killed). Vòng lặp báo động gửi tín hiệu chết, Trí tuệ khôi phục Lập tức Bóp chết (Evict) luồng đó để tránh tràn vi-rút tải, thay bằng luồng nhị phân khoẻ mạnh 100% trong 2 giây.</li>
      </ul>
      <div class="thesis-example">
        Ứng dụng lý thuyết <strong>Chaos Engineering (Hỗn Mang Học)</strong>. Cài ẩn Virus ChaosMonkey của Netflix vào Production thật. Nó đi phá hoại nguồn, chặt đứt Router, đánh sập Server CSDL trong lúc hàng tỷ người đang trực tuyến cao điểm! Cú Sốc này buộc đội SRE xây dựng mã đàn hồi (Resilience) tới mức Cắt điện vẫn không rơi một Frame hình phim ảnh nào.
      </div>
    </div>
  `,
  monitor: `
    <div class="reveal-content">
      <h2><span style="color: rgb(140, 41, 50)">■</span> Giai Đoạn 8: Monitor (Viễn Vọng Đài Hệ Số)</h2>
      <p>Monitor mang trong mình sứ mệnh chuyển hóa Tà khí hệ thống thành Tri thức Điều khiển học. Triết lý Monitoring đã nâng cấp thành cấu trúc vô lượng <strong>Tính Quan Sát Toàn Phần (Observability)</strong>.</p>
      <div class="thesis-quote">
        "Giám sát (Monitoring) trả lời câu hỏi: Khi Nào nó HỎNG. Quan Sát (Observability) chứng minh Toán học TẠI SAO nó lại bộc phát điều hỏng hóc phi logic ấy."<br>— <em>Học Thuyết Dòng Chảy Vi Dịch Vụ Microservices</em>
      </div>
      <h3>Giao Thức Lượng Tử Dữ Liệu</h3>
      <ul>
        <li><strong>Metrics (Ma trận Biến số thời gian):</strong> Prometheus hút hàm tỷ lệ trễ HTTP, bộ nhớ đệm CPU bằng các Véc-tơ đa chiều.</li>
        <li><strong>Distributed Tracing (Vết Tán Phân Thể):</strong> Một User chạm nút Mua hàng, dòng mã quét qua 60 máy chủ Vi Dịch. Để phân xử rệp (Bug) chết ở máy chủ thứ 1 hay thứ 59, Tracing tạo Mã đồng hành siêu không gian (Correlation ID) găm ánh sáng phát quang soi xuyên toàn bộ.</li>
      </ul>
      <div class="thesis-example">
        Tương lai <strong>AIOps (Trí tuệ Nhân tạo Vận Hành)</strong> nhúng nơ-ron sinh học vào Biểu đồ tĩnh. Khi "Ngày Lễ Siêu Sale" bùng nổ traffic x100, báo động cứng bị tê liệt do sai bản chất thiết lập giới hạn tĩnh. AIOps dùng học thuật hồi quy máy (Regression Machine Learning) để tự dời đường Cơ sở (Dynamic Baselining). Nó hiểu được Tải Cao đang là "Ngày Vui" hay "DDoS Rác", chỉ kéo người SRE ra khỏi giường ngủ khi đó đích thị là Biến dị Tổn hại Tế bào chưa từng có trong lịch sử nhân loại (Unknown-Unknowns).
      </div>
    </div>
  `
};

const F_SIZE = 600;
const RADIUS = 230;
const CENTER = F_SIZE / 2;
const w = 175, h = 70;

function getPerimeterPoint(tx, ty, tw, th, dx, dy) {
  let t_x = Infinity, t_y = Infinity;
  if (dx !== 0) t_x = Math.abs((tw / 2) / dx);
  if (dy !== 0) t_y = Math.abs((th / 2) / dy);
  let t = Math.min(t_x, t_y);
  return { x: tx + t * dx, y: ty + t * dy };
}

export default function Flowchart() {
  const [activeId, setActiveId] = useState(null);

  // Pre-calculate positions
  const renderedNodes = nodeData.map((data, index) => {
    const angle = (-90 + index * 45) * (Math.PI / 180);
    const x = CENTER + RADIUS * Math.cos(angle) - w / 2;
    const y = CENTER + RADIUS * Math.sin(angle) - h / 2;
    return {
      ...data,
      x,
      y,
      cx: x + w / 2,
      cy: y + h / 2,
      index
    };
  });

  const getHighlightStyle = (node) => {
    if (!activeId) return { opacity: '1', filter: 'none', transform: 'none' };

    const ids = nodeData.map(n => n.id);
    const idx = ids.indexOf(activeId);
    const prevIdx = (idx - 1 + ids.length) % ids.length;
    const nextIdx = (idx + 1) % ids.length;
    const prevId = ids[prevIdx];
    const nextId = ids[nextIdx];

    if (node.id === activeId) {
      return { opacity: '1', filter: 'none', transform: 'none', boxShadow: `0 0 35px rgba(${node.color}, 0.9)` };
    } else if (node.id === prevId || node.id === nextId) {
      return { opacity: '0.9', filter: 'none', transform: 'scale(0.98)' };
    } else {
      return { opacity: '0.3', filter: 'grayscale(100%)', transform: 'scale(0.95)' };
    }
  };

  const getLineProperties = (source, target, sourceIdx, targetIdx) => {
    if (!activeId) {
      return { stroke: 'rgba(255,255,255,0.15)', strokeWidth: '2', className: '' };
    }

    const ids = nodeData.map(n => n.id);
    const activeIdx = ids.indexOf(activeId);
    const prevIdx = (activeIdx - 1 + ids.length) % ids.length;
    const nextIdx = (activeIdx + 1) % ids.length;

    const isPrevToActive = (sourceIdx === prevIdx && targetIdx === activeIdx);
    const isActiveToNext = (sourceIdx === activeIdx && targetIdx === nextIdx);

    if (isPrevToActive) {
      return { stroke: `rgba(${nodeData[activeIdx].color}, 1)`, strokeWidth: '3', className: 'flow-anim' };
    } else if (isActiveToNext) {
      return { stroke: `rgba(${nodeData[nextIdx].color}, 1)`, strokeWidth: '3', className: 'flow-anim' };
    } else {
      return { stroke: 'rgba(255,255,255,0.04)', strokeWidth: '2', className: '' };
    }
  };

  return (
    <div className="tab-content active" id="content-flowchart">
      <div className="main-content">
        <div className="diagram-section">
          <div className="flowchart-container" id="flowchart">
            <svg className="arrows" id="svg-layer">
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="rgba(255,255,255,0.5)" />
                </marker>
              </defs>
              {renderedNodes.map((source, index) => {
                const target = renderedNodes[(index + 1) % renderedNodes.length];
                const dx = source.cx - target.cx;
                const dy = source.cy - target.cy;
                const pt = getPerimeterPoint(target.cx, target.cy, 185, 80, dx, dy);
                const lineProps = getLineProperties(source, target, index, (index + 1) % renderedNodes.length);

                return (
                  <line
                    key={`${source.id}-${target.id}`}
                    className={`svg-line ${lineProps.className}`}
                    x1={source.cx}
                    y1={source.cy}
                    x2={pt.x}
                    y2={pt.y}
                    stroke={lineProps.stroke}
                    strokeWidth={lineProps.strokeWidth}
                    markerEnd="url(#arrowhead)"
                  />
                );
              })}
            </svg>

            {/* Center Node */}
            <div
              className="node center-node"
              style={{ left: (CENTER - 75) + 'px', top: (CENTER - 45) + 'px' }}
              onClick={() => setActiveId(null)}
            >
              <div className="node-title">DevOps</div>
              <div className="node-subtitle">VÒNG LẶP TIẾN HÓA CỐT LÕI</div>
            </div>

            {/* Outer Nodes */}
            {renderedNodes.map((node) => {
              const highlightStyle = getHighlightStyle(node);
              return (
                <div
                  key={node.id}
                  id={`node-${node.id}`}
                  className={`node ${activeId === node.id ? 'active' : ''}`}
                  style={{
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    background: `rgba(${node.color}, 0.25)`,
                    border: `1.5px solid rgba(${node.color}, 0.8)`,
                    boxShadow: `0 4px 15px rgba(${node.color}, 0.1)`,
                    ...highlightStyle
                  }}
                  onClick={() => setActiveId(node.id)}
                >
                  <div className="node-title" style={{ color: `rgb(${node.color})` }}>{node.title}</div>
                  <div className="node-subtitle">{node.subtitle}</div>
                </div>
              );
            })}
          </div>
          <div className="instruction">
            <span>♦</span> Nhấn vào từng chức năng trên sơ đồ để khám phá lý thuyết
          </div>
        </div>

        <div className="info-panel-container">
          <div className="info-panel glass" id="infoPanel">
            {activeId ? (
              <div>
                <button className="back-btn" onClick={() => setActiveId(null)}>← Trở về Tổng quan</button>
                <div dangerouslySetInnerHTML={{ __html: textContent[activeId] }} />
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: textContent.overview }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
