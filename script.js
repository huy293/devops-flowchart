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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
      <h2><span style="color: rgb(94, 67, 206)">■</span> Giai Đoạn 1: Plan (Kế hoạch Phân tán)</h2>
      
      <p>Trong khuôn khổ học thuật DevOps, chức năng Plan đánh dấu sự đoạn tuyệt với phương thức quản trị đường thẳng (Waterfall) hoặc BDUF (Big Design Up Front). Thay vào đó, nó định tuyến bằng <strong>Quản lý Sản phẩm Linh hoạt (Agile Product Management)</strong>.</p>

      <div class="thesis-quote">
        Nền tảng của ranh giới Plan là <strong>Định luật Conway (Conway's Law)</strong>: "Bất kỳ bộ máy tổ chức nào thiết kế một hệ thống... chắc chắn sẽ tạo ra một kiến trúc mạng là bản sao mô hình giao tiếp của chính tổ chức ấy."<br>
        — <em>Melvin Conway, 1967</em>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
      <h2><span style="color: rgb(26, 91, 176)">■</span> Giai Đoạn 2: Code (Mã hóa Hệ thống)</h2>
      
      <p>Code là nơi các yêu cầu trìu tượng biến thành trạng thái Logic hình thức. Chức năng Code trong DevOps không đơn giản là lập trình, mà là bộ quy tắc <strong>Quản lý Trạng thái Cốt lõi (Version Control States)</strong>.</p>

      <div class="thesis-quote">
        "Làm việc với các nhánh cô lập dài hạn (long-lived branches) giống hệt với việc vay nợ tài chính — nợ càng găm lâu, Xung đột Tích hợp (merge conflict) càng gây lãi suất kép dẫn đến dự án sụp đổ."<br>
        — <em>Jez Humble (Continuous Delivery)</em>
      </div>

      <h3>Trí Tuệ Quản Trị Phân Nhánh</h3>
      <ul>
        <li><strong>Trunk-Based Development (TBD):</strong> Khoa học DevOps minh chứng TBD hiệu suất cao gấp nhiều lần Gitflow. Kỹ sư hòa trộn trực tiếp hàng loạt commit li ti vào nhánh Huyết mạch (Main Trunk) cực nhiều lần mỗi ngày. </li>
        <li><strong>Security Shift-Left (Khóa chặt bằng móc):</strong> Áp dụng các luồng Hook phía mạng máy khác (Local Pre-commit). Ngay khi Kỹ sư bấm lệnh lưu máy tính sẽ kích hoạt thuật toán rà quét Token lộ vi phạm, mật khẩu nhúng cứng.</li>
      </ul>

      <div class="thesis-example">
        <strong>Vận hành kiến trúc Monorepo:</strong> Google duy trì hệ thống quản trị mã một khối (Monorepo) đồ sộ có dung lượng tính bằng Terabyte cho 2 tỷ dòng lệnh. Bằng cách áp dụng quy trình kiểm định TBD tự động tuyệt đối, họ thực thi an toàn xấp xỉ <strong>40.000 commit mã lệnh/ngày</strong> mà không phá vỡ liên kết nội tại của toàn bộ sinh quyển tập đoàn.
      </div>
    </div>
  `,
  build: `
    <div class="reveal-content">
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
      <h2><span style="color: rgb(11, 107, 88)">■</span> Giai Đoạn 3: Build (Biên dịch Đa Tầng)</h2>
      
      <p>Chức năng Build là cỗ máy luyện kim giả kim thuật. Về mặt kiến trúc, Build thực hiện chuyển từ <em>Trạng thái Khai báo</em> (văn bản) về <em>Trạng thái Thực thi</em> (Nhị phân/Image).</p>

      <div class="thesis-quote">
        Sợi chỉ đỏ của hệ thống Build là tính <strong>Tất định của phương trình (Determinism)</strong>: Hàm toán học f(Mã Nguồn, Artifact) = Constant. Cùng một Input bắt buộc tạo ra bộ nhị phân sinh thái độc lập 100% giống hệt nhau ở mọi thực thể không gian máy.<br>
        — <em>Martin Fowler</em>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
      <h2><span style="color: rgb(61, 114, 26)">■</span> Giai Đoạn 4: Test (Kiểm Định Xuyên Mạch)</h2>
      
      <p>Trong thời đại Dây chuyền liên tục (Pipeline), Test không còn là bước thẩm định của loài người, mà là một Lực lượng <strong>Đồng Tuần Tra Cơ Cấu Máy (Automated Defense Mesh)</strong> can thiệp toàn lưu trình sống của code.</p>

      <div class="thesis-quote">
        "Việc tìm kiếm một phần mềm không có Lỗi là bất khả thi toán học. Mục tiêu của Test CI không phải là xóa bỏ rủi ro, mà là đan một Tấm lưới An Toàn cực mịn nhằm phát kiến hư hỏng trong phạm vi đơn vị Mi-li-giây."<br>
        — <em>Mike Cohn (Tác giả khái niệm Test Pyramid)</em>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
      <h2><span style="color: rgb(168, 101, 0)">■</span> Giai Đoạn 5: Release (Chiến Khởi Giải Phóng)</h2>
      
      <p>Định luật phân cực lớn nhất của hệ thống: Đừng mang Deployment (Triển khai công nghệ) đi ghép đôi với Release (Phát hành nghiệp vụ). Hai định luật vật lý này đã được <strong>Cách ly Hoàn toàn (Decoupling)</strong>.</p>

      <div class="thesis-quote">
        "Code rủi ro cao vẫn được cắm rễ vào Production mỗi giây bằng băng chuyền, nhưng chúng vô hình đối với nhân loại... Chỉ đến khi C-Level cần tiền, Cổng Giải Phóng mới được điểm hoả."<br>
        — <em>Nguyên lý Feature Flags (Cờ tính năng)</em>
      </div>

      <h3>Cơ Chế Phân Phối Chiến Lược Động</h3>
      <ul>
        <li><strong>Canary Release (Chim Yến Dò Mìn):</strong> Trích nguyên lý khai mỏ. Chỉ cấp mã nguồn mới cho riêng 2% thiết bị di động truy cập. Bật Máy cảm biến quan sát 12 tiếng. Nếu Lỗi tăng 0.1%, AI tự đóng van xả. Tuyệt đối bách chiến bách thắng.</li>
        <li><strong>Blue-Green Switching:</strong> Tạo ra hệ sinh thái Không gian nhân bản (Clone). Router điều hướng mạch băng thông từ cụm máy Blue (Cũ) sang cụm Green (Mới). Nếu hỏng hóc, lùi mạch về Blue chỉ mất 1 Ping Mạng (ms).</li>
      </ul>

      <div class="thesis-example">
        Sử dụng <strong>Dark Launching (Khai hỏa Ngầm)</strong>. Netflix cài sẵn một phần mềm xem phim định dạng Hologram ở chế độ bóng tối vào Tivi của hàng triệu người. Bề mặt giao diện bằng 0, nhưng luồng tải lén vẫn tạo API gửi lệnh rỗng nhằm khảo thí giới hạn chống chịu cực đại của Cloud Platform.
      </div>
    </div>
  `,
  deploy: `
    <div class="reveal-content">
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
      <h2><span style="color: rgb(137, 43, 25)">■</span> Giai Đoạn 6: Deploy (Bố Trí Tọa Độ Đám Mây)</h2>
      
      <p>Giai đoạn định tinh <strong>Kiến trúc Bản địa Mây (Cloud-Native Ecosystem)</strong> và nhường lại ngôi vị thống trị của máy móc cho Toán học Điều phối Container (Kubernetes).</p>

      <div class="thesis-quote">
        "Hạ tầng Tương lai không mua bằng Sắt Thép và Dây Cáp, Nó được in ra bằng Văn Bản (Text)."<br>
        — <em>Triết lý Infrastructure as Code (IaC)</em>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
      <h2><span style="color: rgb(140, 36, 84)">■</span> Giai Đoạn 7: Operate (Trấn Trữ & Điều Tiết)</h2>
      
      <p>Sự thoái trào của khái niệm "Lính canh quản trị mạng" bằng tay, trao trọn quyền uy cho kỷ nguyên công nghệ <strong>Kinh Tế Lỗi Hệ Thống SRE (Site Reliability Engineering)</strong> khởi xướng từ Google Labs.</p>

      <div class="thesis-quote">
        "SRE là siêu hình ảnh xảy ra khi bạn quăng một bản hợp đồng bảo trì dữ liệu cho một kiến trúc sư phần mềm... Kẻ thù số 1 của doanh thu không phải là chậm tính năng, mà là sụp đổ máy chủ."<br>
        — <em>Sách Site Reliability Engineering, Google, 2016</em>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
      <h2><span style="color: rgb(140, 41, 50)">■</span> Giai Đoạn 8: Monitor (Viễn Vọng Đài Hệ Số)</h2>
      
      <p>Monitor mang trong mình sứ mệnh chuyển hóa Tà khí hệ thống thành Tri thức Điều khiển học. Triết lý Monitoring đã nâng cấp thành cấu trúc vô lượng <strong>Tính Quan Sát Toàn Phần (Observability)</strong>.</p>

      <div class="thesis-quote">
        "Giám sát (Monitoring) trả lời câu hỏi: Khi Nào nó HỎNG. Quan Sát (Observability) chứng minh Toán học TẠI SAO nó lại bộc phát điều hỏng hóc phi logic ấy."<br>
        — <em>Học Thuyết Dòng Chảy Vi Dịch Vụ Microservices</em>
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

const container = document.getElementById('flowchart');
const svgLayer = document.getElementById('svg-layer');

const centerNode = document.createElement('div');
centerNode.className = 'node center-node';
centerNode.innerHTML = '<div class="node-title">DevOps</div><div class="node-subtitle">VÒNG LẶP TIẾN HÓA CỐT LÕI</div>';
centerNode.style.left = (CENTER - 75) + 'px'; 
centerNode.style.top = (CENTER - 45) + 'px'; 
container.appendChild(centerNode);

const renderedNodes = [];

nodeData.forEach((data, index) => {
  const angle = (-90 + index * 45) * (Math.PI / 180);
  const w = 175;
  const h = 70;
  const x = CENTER + RADIUS * Math.cos(angle) - w / 2;
  const y = CENTER + RADIUS * Math.sin(angle) - h / 2;
  
  const node = document.createElement('div');
  node.className = 'node';
  node.id = `node-${data.id}`;
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;
  
  node.style.background = `rgba(${data.color}, 0.25)`;
  node.style.border = `1.5px solid rgba(${data.color}, 0.8)`;
  node.style.boxShadow = `0 4px 15px rgba(${data.color}, 0.1)`;
  
  node.innerHTML = `
    <div class="node-title" style="color: rgb(${data.color})">${data.title}</div>
    <div class="node-subtitle">${data.subtitle}</div>
  `;
  
  node.onclick = () => showDetail(data.id);
  container.appendChild(node);
  
  renderedNodes.push({
    el: node,
    id: data.id,
    cx: x + w / 2,
    cy: y + h / 2,
    index: index
  });
});

function getPerimeterPoint(tx, ty, tw, th, dx, dy) {
  let t_x = Infinity, t_y = Infinity;
  if (dx !== 0) t_x = Math.abs((tw / 2) / dx);
  if (dy !== 0) t_y = Math.abs((th / 2) / dy);
  
  let t = Math.min(t_x, t_y);
  return { x: tx + t * dx, y: ty + t * dy };
}

let svgHtml = svgLayer.innerHTML; 

for (let i = 0; i < renderedNodes.length; i++) {
  const source = renderedNodes[i];
  const target = renderedNodes[(i + 1) % renderedNodes.length];
  
  const sx = source.cx;
  const sy = source.cy;
  const tx = target.cx;
  const ty = target.cy;
  
  const dx = sx - tx;
  const dy = sy - ty;
  const pt = getPerimeterPoint(tx, ty, 185, 80, dx, dy); 
  
  svgHtml += `<line class="svg-line" data-source="${source.id}" data-target="${target.id}" 
               x1="${sx}" y1="${sy}" x2="${pt.x}" y2="${pt.y}" 
               stroke="rgba(255,255,255,0.15)" stroke-width="2" 
               marker-end="url(#arrowhead)"/>`;
}
svgLayer.innerHTML = svgHtml;

const infoPanel = document.getElementById('infoPanel');

// Logis Highlights Diagram
function updateFlowHighlight(activeId) {
  if (!activeId) {
    document.querySelectorAll('.svg-line').forEach(line => {
      line.setAttribute('stroke', 'rgba(255,255,255,0.15)');
      line.setAttribute('stroke-width', '2');
      line.classList.remove('flow-anim');
    });
    document.querySelectorAll('.node').forEach(n => {
      n.style.opacity = '1';
      n.style.filter = 'none';
      if(!n.classList.contains('center-node') && !n.classList.contains('active')) {
          n.style.transform = '';
      }
    });
    return;
  }
  
  const ids = nodeData.map(n => n.id);
  const idx = ids.indexOf(activeId);
  const prevIdx = (idx - 1 + ids.length) % ids.length;
  const nextIdx = (idx + 1) % ids.length;
  const prevId = ids[prevIdx];
  const nextId = ids[nextIdx];
  
  document.querySelectorAll('.node').forEach(n => {
    if (n.classList.contains('center-node')) return;
    const nId = n.id.replace('node-', '');
    if (nId === activeId) {
      n.style.opacity = '1';
      n.style.filter = 'none';
    } else if (nId === prevId || nId === nextId) {
      n.style.opacity = '0.9';
      n.style.filter = 'none';
      n.style.transform = 'scale(0.98)';
    } else {
      n.style.opacity = '0.3';
      n.style.filter = 'grayscale(100%)';
      n.style.transform = 'scale(0.95)';
    }
  });

  document.querySelectorAll('.svg-line').forEach(line => {
    const sId = line.getAttribute('data-source');
    const tId = line.getAttribute('data-target');
    
    // Line pointing TO the active node (from prev)
    if (sId === prevId && tId === activeId) {
      line.setAttribute('stroke', `rgba(${nodeData[idx].color}, 1)`);
      line.setAttribute('stroke-width', '3');
      line.classList.add('flow-anim');
    }
    // Line pointing FROM the active node (to next)
    else if (sId === activeId && tId === nextId) {
      line.setAttribute('stroke', `rgba(${nodeData[nextIdx].color}, 1)`);
      line.setAttribute('stroke-width', '3');
      line.classList.add('flow-anim');
    }
    else {
      line.setAttribute('stroke', 'rgba(255,255,255,0.04)');
      line.setAttribute('stroke-width', '2');
      line.classList.remove('flow-anim');
    }
  });
}

function showOverview() {
  document.querySelectorAll('.node').forEach(n => {
    if(n.classList.contains('center-node')) return;
    n.classList.remove('active');
    const nodeName = n.id.split('-')[1];
    const dataNode = nodeData.find(d => d.id === nodeName);
    if(dataNode) n.style.boxShadow = `0 4px 15px rgba(${dataNode.color}, 0.1)`;
  });
  
  updateFlowHighlight(null);
  
  infoPanel.style.opacity = 0;
  setTimeout(() => {
    infoPanel.innerHTML = textContent.overview;
    infoPanel.style.opacity = 1;
    infoPanel.scrollTop = 0;
  }, 250);
}

function showDetail(id) {
  document.querySelectorAll('.node').forEach(n => {
    if(n.classList.contains('center-node')) return;
    n.classList.remove('active');
    const nodeName = n.id.split('-')[1];
    const dataNode = nodeData.find(d => d.id === nodeName);
    if(dataNode) n.style.boxShadow = `0 4px 15px rgba(${dataNode.color}, 0.1)`;
  });
  
  const activeNode = document.getElementById(`node-${id}`);
  activeNode.classList.add('active');
  const dNode = nodeData.find(n => n.id === id);
  activeNode.style.boxShadow = `0 0 35px rgba(${dNode.color}, 0.9)`;
  
  updateFlowHighlight(id);
  
  infoPanel.style.opacity = 0;
  setTimeout(() => {
    let info = textContent[id];
    infoPanel.innerHTML = info;
    infoPanel.style.opacity = 1;
    infoPanel.scrollTop = 0;
  }, 250);
}

// Init
showOverview();

/* ══════════════════════════════════════
   TAB SWITCHING
══════════════════════════════════════ */
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  document.getElementById('content-' + tabId).classList.add('active');
  if (tabId === 'guides') {
    document.getElementById('guideDetail').style.display = 'none';
    document.getElementById('guidesGrid').style.display = 'grid';
  }
}

/* ══════════════════════════════════════
   GUIDE DETAIL CONTENT
══════════════════════════════════════ */
const guideContent = {

  cicd: `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#bb86fc;border-color:rgba(187,134,252,0.3);margin-bottom:0.8rem">CI/CD Pipeline</div>
    <h2>CI/CD với GitHub Actions + Docker + Docker Hub + VPS</h2>
    <p class="guide-subtitle">Kiến trúc chuẩn best practice CI/CD hiện đại — Source code không build trên VPS, VPS không chứa secret.</p>

    <div class="thesis-quote" style="margin-bottom:2rem">
      <strong>Kiến trúc tổng quan:</strong><br>
      GitHub → GitHub Actions (CI) → Build Docker image → Push lên Docker Hub (PRIVATE) → VPS (CD) → docker-compose pull → docker-compose up -d
    </div>

    <div class="guide-section-title">⚙️ Ưu điểm kiến trúc</div>
    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(187,134,252,0.15);color:#bb86fc">✓</div>
        <div class="step-body"><p><strong style="color:#e2e8f0">CI là nơi duy nhất tạo artifact (Docker image)</strong> — không build trên VPS, tránh lệ thuộc môi trường, reproducible build, dễ scale, dễ rollback.</p></div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(187,134,252,0.15);color:#bb86fc">✓</div>
        <div class="step-body"><p><strong style="color:#e2e8f0">Image private trên Docker Hub</strong> — không lộ source code, VPS chỉ cần docker pull, dễ audit và version bằng tag (:sha, :v1.2.3, :latest).</p></div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(187,134,252,0.15);color:#bb86fc">✓</div>
        <div class="step-body"><p><strong style="color:#e2e8f0">VPS chỉ là runtime</strong> — không chứa source code, không chứa secret trong git. Khuyến nghị tag image = commit SHA.</p></div>
      </div>
    </div>

    <div class="guide-section-title">🖥️ Cấu hình trên máy Local (Docker Desktop)</div>
    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B1</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">LOCAL</span>
          <p>Tải và cài đặt Docker Desktop trên máy tính.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B2</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">BROWSER</span>
          <p>Vào Docker Hub tạo Repo mới tương ứng với project.</p>
        </div>
      </div>
    </div>

    <div class="guide-section-title">🔑 Cấu hình SSH Key cho GitHub Actions</div>
    <div class="warning-block"><strong>⚠️ Lưu ý quan trọng:</strong> File ~/.ssh/authorized_keys chỉ chứa <strong>public key</strong> (bắt đầu bằng ssh-ed25519 AAAA...). Tuyệt đối KHÔNG paste private key (bắt đầu -----BEGIN OPENSSH PRIVATE KEY-----) lên VPS.</div>
    <div class="step-list" style="margin-top:1.2rem">
      <div class="step-item">
        <div class="step-num" style="background:rgba(130,177,255,0.15);color:#82b1ff">B1</div>
        <div class="step-body">
          <span class="step-context" style="color:#82b1ff;border-color:rgba(130,177,255,0.3)">LOCAL</span>
          <p>Tạo SSH key pair trên máy local (Windows PowerShell / Git Bash):</p>
          <div class="cmd-block">ssh-keygen -t ed25519 -C "github-actions-deploy"
# Đặt tên file: github-actions-homenest
# Private key: github-actions-homenest  → GIỮ BÍ MẬT
# Public key:  github-actions-homenest.pub → copy lên VPS</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(130,177,255,0.15);color:#82b1ff">B2</div>
        <div class="step-body">
          <span class="step-context" style="color:#82b1ff;border-color:rgba(130,177,255,0.3)">VPS</span>
          <p>Thêm public key vào VPS:</p>
          <div class="cmd-block">nano ~/.ssh/authorized_keys
# Dán PUBLIC key (.pub) vào cuối file, lưu và thoát.

chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(130,177,255,0.15);color:#82b1ff">B3</div>
        <div class="step-body">
          <span class="step-context" style="color:#82b1ff;border-color:rgba(130,177,255,0.3)">GITHUB</span>
          <p>Thêm private key vào GitHub Secrets: <br><strong>Repo → Settings → Secrets and variables → Actions → New repository secret</strong></p>
          <div class="note-block"><strong>Name:</strong> VPS_SSH_KEY<br><strong>Value:</strong> Dán toàn bộ nội dung private key (file không có .pub)</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(130,177,255,0.15);color:#82b1ff">B4</div>
        <div class="step-body">
          <span class="step-context" style="color:#82b1ff;border-color:rgba(130,177,255,0.3)">GITHUB ACTIONS WORKFLOW</span>
          <p>Cấu hình bước deploy trong file workflow:</p>
          <div class="cmd-block">- name: Deploy to VPS
  uses: appleboy/ssh-action@v1.0.3
  with:
    host: \${{ secrets.SSH_HOST }}
    username: \${{ secrets.SSH_USER }}
    key: \${{ secrets.VPS_SSH_KEY }}
    script: |
      cd /home/ubuntu/homenest
      docker compose pull
      docker compose up -d --remove-orphans
      docker image prune -f</div>
        </div>
      </div>
    </div>

    <div class="guide-section-title">🔄 Quy trình deploy khi sửa code</div>
    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(168,101,0,0.2);color:#ffb74d">B1</div>
        <div class="step-body">
          <span class="step-context" style="color:#ffb74d;border-color:rgba(255,183,77,0.3)">LOCAL</span>
          <p>Sửa code trên máy local.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(168,101,0,0.2);color:#ffb74d">B2</div>
        <div class="step-body">
          <span class="step-context" style="color:#ffb74d;border-color:rgba(255,183,77,0.3)">LOCAL → GITHUB</span>
          <p>Commit & Push lên GitHub:</p>
          <div class="cmd-block">git add .
git commit -m "update feature"
git push origin main</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(168,101,0,0.2);color:#ffb74d">B3</div>
        <div class="step-body">
          <span class="step-context" style="color:#ffb74d;border-color:rgba(255,183,77,0.3)">TỰ ĐỘNG</span>
          <p>GitHub Actions tự động: Build Docker image → Push lên Docker Hub → SSH vào VPS → docker compose pull & up.</p>
        </div>
      </div>
    </div>
    <div class="warning-block" style="margin-top:1.5rem"><strong>🚫 Nguyên tắc bất di bất dịch:</strong> KHÔNG sửa code trực tiếp trên server. KHÔNG chỉnh thư tay trên server.</div>
  `,

  'deploy-manual': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#69f0ae;border-color:rgba(105,240,174,0.3);margin-bottom:0.8rem">Manual Deploy</div>
    <h2>Deploy khi VPS chưa nhận image Docker mới nhất</h2>
    <p class="guide-subtitle">Quy trình thủ công 10 bước — Dùng khi cần cập nhật code mà không qua CI/CD tự động.</p>

    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B1</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">LOCAL</span>
          <p>Pull code mới nhất từ GitHub về máy local.</p>
          <div class="cmd-block">git pull origin main</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B2</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">LOCAL</span>
          <p>Vào thư mục backend (hoặc frontend tương tự):</p>
          <div class="cmd-block">cd backend</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B3</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">LOCAL</span>
          <p>Bật Docker Desktop, chờ đến khi thấy "Docker Desktop is running". Kiểm tra:</p>
          <div class="cmd-block">docker version</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B4</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">LOCAL</span>
          <p>Build Docker image mới:</p>
          <div class="cmd-block">docker build -t daihoangnguyen17101994/homenest-lovers-lawn-service-backend:latest .</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B5</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">LOCAL</span>
          <p>Đăng nhập Docker Hub nếu chưa login:</p>
          <div class="cmd-block">docker login
# Hiện thông báo kết nối browser → nhấn Enter để kết nối
# Hoặc nếu hiện "Login Success" thì bỏ qua</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B6</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">LOCAL</span>
          <p>Push image lên Docker Hub:</p>
          <div class="cmd-block">docker push daihoangnguyen17101994/homenest-lovers-lawn-service-backend:latest</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B7</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">VPS</span>
          <p>SSH vào VPS, chuyển đến thư mục chứa docker-compose:</p>
          <div class="cmd-block">cd /opt/backend</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B8</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">VPS</span>
          <p>Dừng container cũ:</p>
          <div class="cmd-block">docker compose -f docker-compose.prod.yml down backend-new</div>
          <div class="note-block"><strong>Lưu ý:</strong> Nếu thấy cảnh báo "Network ... Resource is still in use" → bình thường, bỏ qua.</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B9</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">VPS</span>
          <p>Khởi động lại container với image mới nhất:</p>
          <div class="cmd-block">docker compose -f docker-compose.prod.yml up -d backend-new

# Kiểm tra container đang chạy:
docker ps | grep backend</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">B10</div>
        <div class="step-body">
          <span class="step-context" style="color:#69f0ae;border-color:rgba(105,240,174,0.3)">VPS — RẤT QUAN TRỌNG</span>
          <p>Kiểm tra logs để xác nhận app chạy bình thường:</p>
          <div class="cmd-block">docker logs -f homenest-backend-new
# Kết quả mong đợi:
# Swagger running in: production
# Server running on port 5000</div>
        </div>
      </div>
    </div>
  `,

  'gitlab-add-member': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#ff8a50;border-color:rgba(255,138,80,0.3);margin-bottom:0.8rem">GitLab Admin</div>
    <h2>Thêm member vào GitLab Enterprise Self-hosted</h2>
    <p class="guide-subtitle">4 bước đơn giản để thêm thành viên mới vào dự án trên GitLab Enterprise tự host.</p>

    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(252,96,25,0.15);color:#ff8a50">B1</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a50;border-color:rgba(255,138,80,0.3)">GITLAB UI — BẤT KỲ TÀI KHOẢN NÀO</span>
          <p>Không cần tài khoản root. Bất kỳ ai có quyền cũng có thể mời:</p>
          <div class="note-block"><strong>Manage → Members → Add member</strong><br>Thêm thành viên qua email của họ.</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(252,96,25,0.15);color:#ff8a50">B2</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a50;border-color:rgba(255,138,80,0.3)">GITLAB UI — TÀI KHOẢN ROOT</span>
          <p>Chuyển sang tài khoản root để approve member:</p>
          <div class="note-block">
            <strong>Vào nút Admin</strong> (biểu tượng cờ lê) → <strong>Admin Area</strong> → <strong>Dashboard</strong><br>
            → Trong bảng <strong>Total Users</strong>, nhấp vào tên member<br>
            → Vào trang của member → Nhấp <strong>dấu ba chấm dọc</strong> → <strong>Approve</strong>
          </div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(252,96,25,0.15);color:#ff8a50">B3</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a50;border-color:rgba(255,138,80,0.3)">EMAIL — MEMBER</span>
          <p>Member tự vào email để nhấn <strong>Accept</strong> lời mời tham gia dự án.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(252,96,25,0.15);color:#ff8a50">B4</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a50;border-color:rgba(255,138,80,0.3)">GITLAB UI — MEMBER</span>
          <p>Member đăng nhập GitLab → vào tab <strong>Members</strong> sẽ thấy dự án đã được thêm.</p>
          <div class="warning-block"><strong>Kiểm tra quyền repo:</strong> Vào GitLab → Project → Members. Member phải có quyền <strong>Developer</strong> trở lên, không được là Guest / Reporter.</div>
        </div>
      </div>
    </div>
  `,

  'gitlab-push': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#ff8a80;border-color:rgba(255,138,128,0.3);margin-bottom:0.8rem">GitLab Dev</div>
    <h2>Member push code vào GitLab Enterprise Self-hosted</h2>
    <p class="guide-subtitle">Setup SSH key ed25519 để push code không cần nhập password mỗi lần.</p>

    <div class="thesis-quote">
      Sử dụng SSH key thay vì HTTPS + password là phương pháp chuẩn bảo mật — không bao giờ hỏi password, không lưu credential plain text trên máy.
    </div>

    <div class="step-list" style="margin-top:1.5rem">
      <div class="step-item">
        <div class="step-num" style="background:rgba(255,82,82,0.15);color:#ff8a80">B1</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a80;border-color:rgba(255,138,128,0.3)">LOCAL — PowerShell / Git Bash</span>
          <p>Tạo SSH key trên máy member:</p>
          <div class="cmd-block">ssh-keygen -t ed25519 -C "email_cua_member"
# Nhấn Enter liên tục cho nhanh
# Key sẽ nằm ở: C:\Users\&lt;user&gt;\.ssh\</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(255,82,82,0.15);color:#ff8a80">B2</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a80;border-color:rgba(255,138,128,0.3)">LOCAL</span>
          <p>Copy public key:</p>
          <div class="cmd-block">cat ~/.ssh/id_ed25519.pub
# Copy toàn bộ dòng bắt đầu bằng: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5...</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(255,82,82,0.15);color:#ff8a80">B3</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a80;border-color:rgba(255,138,128,0.3)">GITLAB UI</span>
          <p>Thêm SSH key lên GitLab self-host:</p>
          <div class="note-block">
            <strong>Avatar (góc trên phải)</strong> → <strong>Preferences</strong> → <strong>SSH Keys</strong> → <strong>Add new key</strong><br>
            → Paste public key → <strong>Save</strong>
          </div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(255,82,82,0.15);color:#ff8a80">B4</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a80;border-color:rgba(255,138,128,0.3)">LOCAL</span>
          <p>Test kết nối SSH tới GitLab server (thay IP bằng địa chỉ GitLab của bạn):</p>
          <div class="cmd-block">ssh -T git@160.191.88.50
# Kết quả OK: Welcome to GitLab, @username!</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(255,82,82,0.15);color:#ff8a80">B5</div>
        <div class="step-body">
          <span class="step-context" style="color:#ff8a80;border-color:rgba(255,138,128,0.3)">LOCAL</span>
          <p>Push code lên GitLab (không còn hỏi password nữa):</p>
          <div class="cmd-block">git push -u origin &lt;tên-nhánh&gt;</div>
        </div>
      </div>
    </div>

    <div class="warning-block" style="margin-top:1.5rem">
      <strong>⚠️ Kiểm tra quyền repo (rất quan trọng):</strong> Vào GitLab → Project → Members. Member phải là <strong>Developer</strong>, không được là Guest / Reporter — nếu không sẽ bị từ chối push dù SSH key đúng.
    </div>
  `
};

function openGuide(id) {
  const detail = document.getElementById('guideDetail');
  const grid = document.getElementById('guidesGrid');
  const content = document.getElementById('guideDetailContent');

  document.querySelectorAll('.guide-card').forEach(c => c.classList.remove('selected'));
  content.innerHTML = guideContent[id] || '<p>Nội dung không tìm thấy.</p>';
  grid.style.display = 'none';
  detail.style.display = 'block';
  detail.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeGuide() {
  document.getElementById('guideDetail').style.display = 'none';
  document.getElementById('guidesGrid').style.display = 'grid';
}
