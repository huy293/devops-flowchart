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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
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
      <button class="back-btn" onclick="showOverview()">← Trở về Tổng quan</button>
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
  const w = 175, h = 70;
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
  renderedNodes.push({ el: node, id: data.id, cx: x + w / 2, cy: y + h / 2, index });
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
  const dx = source.cx - target.cx;
  const dy = source.cy - target.cy;
  const pt = getPerimeterPoint(target.cx, target.cy, 185, 80, dx, dy);
  svgHtml += `<line class="svg-line" data-source="${source.id}" data-target="${target.id}" 
    x1="${source.cx}" y1="${source.cy}" x2="${pt.x}" y2="${pt.y}" 
    stroke="rgba(255,255,255,0.15)" stroke-width="2" marker-end="url(#arrowhead)"/>`;
}
svgLayer.innerHTML = svgHtml;

const infoPanel = document.getElementById('infoPanel');

function updateFlowHighlight(activeId) {
  if (!activeId) {
    document.quer/* ══════════════════════════════════════
   TAB SWITCHING
   ══════════════════════════════════════ */
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
  const targetTab = document.getElementById('tab-' + tabId);
  const targetContent = document.getElementById('content-' + tabId);
  
  if (targetTab) targetTab.classList.add('active');
  if (targetContent) targetContent.classList.add('active');
  
  if (tabId === 'guides') {
    closeGuide();
    filterGuides();
  } else if (tabId === 'generators') {
    generateConfigs();
  } else if (tabId === 'quiz') {
    restartQuiz();
  }
}

/* ══════════════════════════════════════
   PLAYBOOK DATA & SEARCH
   ══════════════════════════════════════ */
const guidesList = [
  {
    id: 'docker-concepts',
    category: 'docker',
    tags: ['🐳 Docker', '📦 Image', '🚀 Container'],
    title: 'Docker Căn Bản: Phân biệt Image & Container',
    desc: 'Tìm hiểu khái niệm nền tảng của Docker. So sánh trực quan Image và Container, cơ chế Layered File System và các câu lệnh quản trị cơ bản.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(105,240,174,1)" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M9 2v20M15 2v20M2 9h20M2 15h20" /></svg>`,
    iconColor: '#69f0ae',
    iconBg: 'linear-gradient(135deg, rgba(11,107,88,0.3), rgba(105,240,174,0.2))',
    iconBorder: 'rgba(11,107,88,0.5)'
  },
  {
    id: 'docker-watchtower',
    category: 'docker',
    tags: ['🐳 Watchtower', '🔄 Auto Update', '🐋 Compose'],
    title: 'Tự động cập nhật Container với Watchtower',
    desc: 'Hướng dẫn cụ thể cách setup Watchtower để tự động quét registry, tải image mới và restart container. Giải phóng 90% công sức deploy thủ công.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(82,203,255,1)" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>`,
    iconColor: '#52cbff',
    iconBg: 'linear-gradient(135deg, rgba(2,136,209,0.3), rgba(82,203,255,0.2))',
    iconBorder: 'rgba(2,136,209,0.5)'
  },
  {
    id: 'docker-opt',
    category: 'docker',
    tags: ['🐳 Dockerfile', '⚡ Multi-stage', '🛡️ Security'],
    title: 'Tối ưu hóa Dockerfile cho môi trường Production',
    desc: 'Cách viết Dockerfile chuẩn chuyên nghiệp: Giảm kích thước image (Multi-stage build), tối ưu cache layer và loại bỏ đặc quyền root để bảo mật.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(187,134,252,1)" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>`,
    iconColor: '#bb86fc',
    iconBg: 'linear-gradient(135deg, rgba(94,67,206,0.3), rgba(187,134,252,0.2))',
    iconBorder: 'rgba(94,67,206,0.5)'
  },
  {
    id: 'cicd-github',
    category: 'cicd',
    tags: ['⚙️ GitHub Actions', '🐳 Docker Hub', '🖥️ VPS'],
    title: 'CI/CD Pipeline với GitHub Actions + Docker + VPS',
    desc: 'Kiến trúc tự động hóa: GitHub Actions build Docker image → Push Docker Hub (Private) → Kết nối SSH VPS tự động pull & restart container.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(130,177,255,1)" stroke-width="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>`,
    iconColor: '#82b1ff',
    iconBg: 'linear-gradient(135deg, rgba(26,91,176,0.3), rgba(130,177,255,0.2))',
    iconBorder: 'rgba(26,91,176,0.5)'
  },
  {
    id: 'cicd-gitlab',
    category: 'cicd',
    tags: ['🦊 GitLab CI', '⚙️ Runner', '🛡️ Docker Executor'],
    title: 'CI/CD với GitLab CI/CD & Self-Hosted Runner',
    desc: 'Cài đặt và cấu hình GitLab Runner trên máy chủ riêng, cấu hình Docker executor, cơ chế quản lý cache dependencies để tối ưu tốc độ build.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,138,128,1)" stroke-width="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,
    iconColor: '#ff8a80',
    iconBg: 'linear-gradient(135deg, rgba(140,41,50,0.3), rgba(255,82,82,0.2))',
    iconBorder: 'rgba(140,41,50,0.5)'
  },
  {
    id: 'git-ssh',
    category: 'git',
    tags: ['🦊 GitLab', '🐙 GitHub', '🔑 SSH Key'],
    title: 'Cấu hình SSH Keys cho Nhiều Tài khoản GitHub & GitLab',
    desc: 'Làm việc chuyên nghiệp: Setup SSH config trên máy local để quản lý đồng thời nhiều tài khoản Git mà không bao giờ bị hỏi mật khẩu.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,183,77,1)" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>`,
    iconColor: '#ffb74d',
    iconBg: 'linear-gradient(135deg, rgba(168,101,0,0.3), rgba(255,183,77,0.2))',
    iconBorder: 'rgba(168,101,0,0.5)'
  },
  {
    id: 'k8s-core',
    category: 'k8s',
    tags: ['☸️ K8s', '📦 Pod', '⚙️ Deployment', '🔌 Service'],
    title: 'Kubernetes (K8s) Cơ Bản: Pods, Deployments & Services',
    desc: 'Cẩm nang nhập môn Kubernetes chuẩn doanh nghiệp: Hiểu rõ cơ chế điều phối container, cấu trúc YAML Deployment và cách expose dịch vụ.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(100,181,246,1)" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>`,
    iconColor: '#64b5f6',
    iconBg: 'linear-gradient(135deg, rgba(30,136,229,0.3), rgba(100,181,246,0.2))',
    iconBorder: 'rgba(30,136,229,0.5)'
  },
  {
    id: 'k8s-config',
    category: 'k8s',
    tags: ['☸️ Ingress', '🔑 Secret', '📝 ConfigMap'],
    title: 'Quản lý Cấu hình K8s: ConfigMap, Secret & Ingress',
    desc: 'Đưa ứng dụng lên K8s an toàn: Cách cấu hình biến môi trường qua ConfigMap, mã hóa Secret và định tuyến traffic bằng Nginx Ingress Controller.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(77,208,225,1)" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>`,
    iconColor: '#4dd0e1',
    iconBg: 'linear-gradient(135deg, rgba(0,151,167,0.3), rgba(77,208,225,0.2))',
    iconBorder: 'rgba(0,151,167,0.5)'
  },
  {
    id: 'k8s-helm',
    category: 'k8s',
    tags: ['☸️ Helm Chart', '📦 Package Manager', '🛠️ Template'],
    title: 'Đóng gói Ứng dụng Kubernetes với Helm Chart',
    desc: 'Sử dụng Helm để quản lý ứng dụng K8s dưới dạng package. Tạo template cho cấu hình manifest, quản lý biến qua values.yaml và thực hiện nâng cấp/rollback.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(149,117,205,1)" stroke-width="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg>`,
    iconColor: '#9575cd',
    iconBg: 'linear-gradient(135deg, rgba(94,53,177,0.3), rgba(149,117,205,0.2))',
    iconBorder: 'rgba(94,53,177,0.5)'
  },
  {
    id: 'aapanel-proxy',
    category: 'vps',
    tags: ['🖥️ aaPanel', '🌐 Reverse Proxy', '🛡️ Let\'s Encrypt'],
    title: 'aaPanel: Nginx Reverse Proxy Docker & Let\'s Encrypt',
    desc: 'Quy trình trỏ tên miền về container Docker chạy trên VPS. Setup Reverse Proxy bảo mật và tự động gia hạn SSL Let\'s Encrypt.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(129,199,132,1)" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>`,
    iconColor: '#81c784',
    iconBg: 'linear-gradient(135deg, rgba(46,125,50,0.3), rgba(129,199,132,0.2))',
    iconBorder: 'rgba(46,125,50,0.5)'
  },
  {
    id: 'aws-vpc',
    category: 'aws',
    tags: ['☁️ AWS', '🌐 VPC', '🛡️ Production Layout'],
    title: 'Kiến trúc mạng AWS VPC 3-Tier chuẩn Production',
    desc: 'Thiết kế mạng AWS an toàn tuyệt đối: Chia hệ thống thành 3 tầng Public Subnet (ALB), Private Subnet (App), và Isolated Subnet (Database) qua NAT Gateway.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(224,224,224,1)" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" /></svg>`,
    iconColor: '#e0e0e0',
    iconBg: 'linear-gradient(135deg, rgba(66,66,66,0.3), rgba(224,224,224,0.2))',
    iconBorder: 'rgba(66,66,66,0.5)'
  },
  {
    id: 'aws-compute',
    category: 'aws',
    tags: ['☁️ AWS EC2', '📦 S3 Storage', '⚡ CloudFront CDN'],
    title: 'Deploy Ứng dụng với AWS EC2, S3 & CloudFront CDN',
    desc: 'Hướng dẫn deploy app lên EC2, lưu trữ static assets (image, video) trên S3 và phân phối băng thông rộng qua mạng lưới CloudFront CDN.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(240,98,146,1)" stroke-width="1.5"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" /></svg>`,
    iconColor: '#f06292',
    iconBg: 'linear-gradient(135deg, rgba(173,20,87,0.3), rgba(240,98,146,0.2))',
    iconBorder: 'rgba(173,20,87,0.5)'
  }
];

let currentCategory = 'all';
let searchQuery = '';

function renderGuides(list) {
  const grid = document.getElementById('guidesGrid');
  grid.innerHTML = '';
  
  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #a0aec0; padding: 3rem;">Không tìm thấy tài liệu nào khớp với từ khóa tìm kiếm.</div>`;
    return;
  }
  
  list.forEach(g => {
    const card = document.createElement('div');
    card.className = 'guide-card glass';
    card.onclick = () => openGuide(g.id);
    
    let tagsHtml = '';
    g.tags.forEach(t => { tagsHtml += `<span>${t}</span>`; });
    
    card.innerHTML = `
      <div class="guide-card-icon" style="background: ${g.iconBg}; border-color: ${g.iconBorder};">
        ${g.icon}
      </div>
      <div class="guide-card-tag" style="color: ${g.iconColor}; border-color: ${g.iconBorder};">${g.category.toUpperCase()}</div>
      <h3>${g.title}</h3>
      <p>${g.desc}</p>
      <div class="guide-card-meta">${tagsHtml}</div>
      <div class="guide-card-arrow">Xem chi tiết →</div>
    `;
    grid.appendChild(card);
  });
}

function filterGuides() {
  const filtered = guidesList.filter(g => {
    const matchesCategory = (currentCategory === 'all' || g.category === currentCategory);
    const matchesSearch = (
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return matchesCategory && matchesSearch;
  });
  renderGuides(filtered);
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.playbook-sidebar .filter-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('btn-cat-' + cat);
  if (activeBtn) activeBtn.classList.add('active');
  
  document.getElementById('guideDetail').style.display = 'none';
  document.getElementById('guidesGrid').style.display = 'grid';
  filterGuides();
}

function filterGuidesBySearch() {
  const input = document.getElementById('guideSearchInput');
  searchQuery = input.value;
  document.getElementById('guideDetail').style.display = 'none';
  document.getElementById('guidesGrid').style.display = 'grid';
  filterGuides();
}
window.filterGuides = filterGuidesBySearch;

/* ══════════════════════════════════════
   GUIDE DETAIL CONTENT
   ══════════════════════════════════════ */
const guideContent = {
  'docker-concepts': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#69f0ae;border-color:rgba(105,240,174,0.3);margin-bottom:0.8rem">DOCKER</div>
    <h2>Docker Căn Bản: Phân biệt Image & Container</h2>
    <p class="guide-subtitle">Nền tảng của ảo hóa container — Giúp lập trình viên thấu hiểu cơ cấu của Docker.</p>
    
    <div class="thesis-quote">
      <strong>Định lý Docker:</strong><br>
      • <strong>Image (Khuôn mẫu):</strong> Là tệp tĩnh (Read-Only), chứa mã nguồn, thư viện, biến môi trường và runtime. Nó được tạo ra từ Dockerfile.<br>
      • <strong>Container (Thực thể):</strong> Là một tiến trình (process) chạy cô lập trên máy chủ, được sinh ra từ Image. Khi chạy, container tạo thêm một lớp ghi được (Writable Layer) ở trên cùng.
    </div>

    <div class="guide-section-title">📊 So sánh Trực quan</div>
    <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; text-align:left; color:#cbd5e1;">
      <thead>
        <tr style="border-bottom:2px solid rgba(255,255,255,0.1); padding-bottom:10px;">
          <th style="padding:10px 0;">Đặc tính</th>
          <th style="padding:10px 0; color:#69f0ae;">Docker Image</th>
          <th style="padding:10px 0; color:#52cbff;">Docker Container</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Trạng thái</td>
          <td style="padding:10px 0;">Tĩnh (Tệp lưu trữ trên đĩa)</td>
          <td style="padding:10px 0;">Động (Tiến trình đang chạy trong RAM)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Ghi dữ liệu</td>
          <td style="padding:10px 0;">Chỉ đọc (Read-only)</td>
          <td style="padding:10px 0;">Ghi/Đọc (Writable layer trên cùng)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Ví dụ lập trình</td>
          <td style="padding:10px 0;">Class (Lớp)</td>
          <td style="padding:10px 0;">Object (Thực thể của lớp)</td>
        </tr>
      </tbody>
    </table>

    <div class="guide-section-title">🛠️ Các câu lệnh Docker cốt lõi cần nhớ</div>
    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">1</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Build image từ Dockerfile:</strong></p>
          <div class="cmd-block">docker build -t my-app:v1.0 .</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">2</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Chạy container từ image:</strong></p>
          <div class="cmd-block">docker run -d -p 3000:3000 --name running-app my-app:v1.0
# -d: Chạy ngầm (detached mode)
# -p 3000:3000: Map cổng 3000 của host vào cổng 3000 của container</div>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(105,240,174,0.15);color:#69f0ae">3</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Xem các container đang chạy và quản trị:</strong></p>
          <div class="cmd-block">docker ps # Liệt kê container đang chạy
docker logs -f running-app # Xem logs thời gian thực
docker stop running-app # Dừng container
docker rm running-app # Xóa container</div>
        </div>
      </div>
    </div>
  `,

  'docker-watchtower': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#52cbff;border-color:rgba(82,203,255,0.3);margin-bottom:0.8rem">DOCKER</div>
    <h2>Tự động cập nhật Container với Watchtower</h2>
    <p class="guide-subtitle">Giải pháp CD tinh gọn cho môi trường VPS độc lập — Tự động cập nhật container khi có image mới.</p>
    
    <div class="thesis-quote">
      <strong>Watchtower là gì?</strong><br>
      Là một dịch vụ đóng gói trong Docker, có nhiệm vụ giám sát các container đang chạy trên host. Khi phát hiện một image mới đã được đẩy lên Docker Hub hoặc Registry cá nhân, Watchtower sẽ tự động dừng container cũ, pull image mới về và khởi chạy container mới với chính xác các tham số ban đầu.
    </div>

    <div class="guide-section-title">⚙️ Cách hoạt động & Sử dụng</div>
    <p>Cách đơn giản nhất là chạy Watchtower dưới dạng một Docker Container. Dưới đây là cấu hình chuẩn bằng <strong>docker-compose.yml</strong> để chạy Watchtower giám sát và tự động dọn dẹp các image cũ:</p>
    
    <div class="cmd-block">version: '3.8'

services:
  web-app:
    image: daihoangnguyen17101994/homenest-backend:latest
    ports:
      - "5000:5000"
    restart: always

  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --cleanup --interval 300
    restart: always
    # --cleanup: Xóa image cũ (dangling image) để tránh đầy đĩa cứng VPS
    # --interval 300: Quét registry sau mỗi 300 giây (5 phút)</div>

    <div class="guide-section-title">🔥 Các tham số cấu hình nâng cao của Watchtower</div>
    <ul>
      <li><strong>--cleanup (-c):</strong> Sau khi container khởi động lại với image mới, xóa sạch image cũ. Đây là cờ <strong>BẮT BUỘC</strong> phải bật để tránh làm đầy ổ cứng VPS.</li>
      <li><strong>--interval (-i) [seconds]:</strong> Tần suất kiểm tra cập nhật. Ví dụ: `--interval 86400` để quét mỗi ngày một lần.</li>
      <li><strong>--label-enable:</strong> Chỉ cập nhật các container có chứa nhãn `com.centurylinklabs.watchtower.enable=true`. Giúp bạn chủ động chọn container nào được cập nhật tự động.</li>
      <li><strong>--run-once:</strong> Chỉ quét registry đúng 1 lần rồi tắt. Rất phù hợp để chạy thông qua cronjob hoặc trigger ngoài.</li>
    </ul>

    <div class="warning-block">
      <strong>⚠️ Lưu ý bảo mật:</strong> Watchtower cần truy cập socket `/var/run/docker.sock`. Hãy đảm bảo không expose cổng này ra ngoài internet để tránh bị tấn công đặc quyền root (container escape).
    </div>
  `,

  'docker-opt': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#bb86fc;border-color:rgba(187,134,252,0.3);margin-bottom:0.8rem">DOCKER</div>
    <h2>Tối ưu hóa Dockerfile cho môi trường Production</h2>
    <p class="guide-subtitle">Hướng dẫn viết Dockerfile chuẩn Senior: Nhẹ nhất, nhanh nhất và an toàn nhất.</p>

    <div class="guide-section-title">🐳 Nguyên tắc 1: Multi-stage Builds</div>
    <p>Multi-stage giúp tách biệt môi trường build (chứa compiler, SDK nặng) khỏi môi trường chạy thực tế (chỉ chứa file nhị phân đã build và thư viện tối thiểu).</p>
    
    <div class="cmd-block"># --- Stage 1: Build ---
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci  # Cài đặt dependency sạch
COPY . .
RUN npm run build

# --- Stage 2: Runtime ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production # Chỉ cài library production
COPY --from=builder /app/dist ./dist

# Sử dụng user không có đặc quyền root để bảo mật
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]</div>

    <div class="guide-section-title">⚡ Các mẹo tối ưu hóa bổ sung</div>
    <ul>
      <li><strong>Sử dụng base image tối giản:</strong> Ưu tiên `alpine` hoặc `distroless` (được duy trì bởi Google) để giảm Attack Surface (tiết diện tấn công) và giảm dung lượng image từ 1GB xuống dưới 100MB.</li>
      <li><strong>Tận dụng Cache Layer:</strong> Docker sẽ cache các dòng lệnh. Luôn sao chép `package.json` hoặc file dependency trước, chạy cài đặt (`npm install` / `pip install`) rồi mới copy toàn bộ source code (`COPY . .`). Khi code thay đổi, Docker sẽ không phải chạy lại lệnh cài đặt thư viện.</li>
      <li><strong>Sử dụng .dockerignore:</strong> Tạo file `.dockerignore` để loại bỏ `node_modules`, `.git`, `dist`, `.env` khỏi ngữ cảnh build nhằm tăng tốc độ đóng gói.</li>
    </ul>
  `,

  'cicd-github': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#82b1ff;border-color:rgba(130,177,255,0.3);margin-bottom:0.8rem">CI/CD Pipeline</div>
    <h2>CI/CD Pipeline với GitHub Actions + Docker + VPS</h2>
    <p class="guide-subtitle">Kiến trúc chuẩn: Build độc lập trên runner của GitHub Actions, deploy lên VPS qua SSH SSH key bảo mật.</p>
    
    <div class="thesis-quote">
      <strong>Quy trình hoạt động:</strong><br>
      Code push lên GitHub → GitHub Actions trigger → Build Docker image → Push lên Docker Hub (Private) → Kết nối SSH vào VPS → Ra lệnh cho Docker Compose kéo image mới và up đè.
    </div>

    <div class="guide-section-title">📝 Cấu hình Workflow (.github/workflows/deploy.yml)</div>
    <div class="cmd-block">name: Production Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and Push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: \${{ secrets.DOCKERHUB_USERNAME }}/my-app:latest

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
      - name: Execute remote SSH commands
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: \${{ secrets.VPS_HOST }}
          username: \${{ secrets.VPS_USER }}
          key: \${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /opt/my-app
            docker compose pull
            docker compose up -d --remove-orphans
            docker image prune -f</div>
  `,

  'cicd-gitlab': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#ff8a80;border-color:rgba(255,138,128,0.3);margin-bottom:0.8rem">CI/CD Pipeline</div>
    <h2>CI/CD với GitLab CI/CD & Self-Hosted Runner</h2>
    <p class="guide-subtitle">Cấu hình GitLab pipeline tối ưu chạy trên VPS riêng bằng Docker Executor.</p>
    
    <div class="guide-section-title">⚙️ Cấu hình .gitlab-ci.yml</div>
    <div class="cmd-block">stages:
  - build
  - deploy

variables:
  DOCKER_IMAGE: registry.gitlab.com/my-group/my-project:latest

# Bật Cache dependencies để tăng tốc độ build
cache:
  key: \${CI_COMMIT_REF_SLUG}
  paths:
    - .npm/

build_job:
  stage: build
  image: docker:24.0.5
  services:
    - docker:24.0.5-dind
  before_script:
    - docker login -u \${CI_REGISTRY_USER} -p \${CI_REGISTRY_PASSWORD} \${CI_REGISTRY}
  script:
    - docker build --cache-from \${DOCKER_IMAGE} -t \${DOCKER_IMAGE} .
    - docker push \${DOCKER_IMAGE}

deploy_job:
  stage: deploy
  image: alpine:latest
  before_script:
    - apk add --no-cache openssh-client
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan $VPS_HOST >> ~/.ssh/known_hosts
  script:
    - ssh $VPS_USER@$VPS_HOST "cd /app && docker compose pull && docker compose up -d"</div>
  `,

  'git-ssh': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">GIT</div>
    <h2>Cấu hình SSH Keys cho Nhiều Tài khoản GitHub & GitLab</h2>
    <p class="guide-subtitle">Giải quyết triệt để lỗi xung đột phân quyền SSH khi dùng nhiều tài khoản GitHub/GitLab trên cùng một máy.</p>

    <div class="guide-section-title">🔑 Bước 1: Tạo các SSH Key riêng biệt</div>
    <div class="cmd-block"># Tạo key cho tài khoản công việc (Work)
ssh-keygen -t ed25519 -C "work@company.com" -f ~/.ssh/id_ed25519_work

# Tạo key cho tài khoản cá nhân (Personal)
ssh-keygen -t ed25519 -C "personal@email.com" -f ~/.ssh/id_ed25519_personal</div>

    <div class="guide-section-title">📝 Bước 2: Cấu hình file SSH Config</div>
    <p>Mở hoặc tạo mới file cấu hình SSH tại đường dẫn `+ "`~/.ssh/config`" +` và định nghĩa định danh riêng biệt:</p>
    <div class="cmd-block"># Tài khoản Công việc (GitLab/GitHub)
Host github.com-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work

# Tài khoản Cá nhân
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal</div>

    <div class="guide-section-title">🚀 Bước 3: Sử dụng khi clone dự án</div>
    <p>Khi clone, bạn thay đổi phần domain tương ứng với Host cấu hình phía trên:</p>
    <div class="cmd-block"># Thay vì clone: git clone git@github.com:work-org/project.git
# Hãy clone bằng:
git clone git@github.com-work:work-org/project.git</div>
  `,

  'k8s-core': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#64b5f6;border-color:rgba(100,181,246,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Kubernetes (K8s) Cơ Bản: Pods, Deployments & Services</h2>
    <p class="guide-subtitle">Kiến trúc lõi điều phối container tự động cho hệ thống lớn.</p>

    <div class="guide-section-title">☸️ Phân tích các khái niệm chính</div>
    <ul>
      <li><strong>Pod:</strong> Đơn vị nhỏ nhất có thể deploy được trong K8s. Một Pod chứa một hoặc nhiều container chia sẻ chung Network Namespace và Storage Volume.</li>
      <li><strong>Deployment:</strong> Trình quản lý khai báo (Declarative Controller). Giúp duy trì số lượng bản sao Pod mong muốn, hỗ trợ cơ chế tự phục hồi (Self-Healing) và cập nhật ứng dụng không thời gian chết (Rolling Update).</li>
      <li><strong>Service:</strong> Cung cấp một IP nội bộ hoặc IP Public ổn định để định tuyến traffic đến các Pod có nhãn (Labels) tương ứng, hoạt động như một Load Balancer nội bộ.</li>
    </ul>

    <div class="guide-section-title">📄 Ví dụ file cấu hình Manifest YAML</div>
    <div class="cmd-block">apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app-deployment
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app-container
        image: username/my-app:v1.0
        ports:
        - containerPort: 3000
        resources:
          limits:
            cpu: "500m"
            memory: "512Mi"
          requests:
            cpu: "250m"
            memory: "256Mi"
---
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: ClusterIP</div>
  `,

  'k8s-config': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#4dd0e1;border-color:rgba(77,208,225,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Quản lý Cấu hình K8s: ConfigMap, Secret & Ingress</h2>
    <p class="guide-subtitle">Làm việc với dữ liệu cấu hình nhạy cảm và mở ứng dụng ra thế giới bên ngoài.</p>

    <div class="guide-section-title">🔑 Tạo Kubernetes Secret an toàn</div>
    <div class="cmd-block"># Tạo secret trực tiếp bằng dòng lệnh
kubectl create secret generic app-db-secret \\
  --from-literal=DB_PASSWORD='my-secure-password'</div>

    <div class="guide-section-title">📄 Nhúng Secret và ConfigMap vào Deployment</div>
    <div class="cmd-block">spec:
  containers:
  - name: app
    image: my-app:latest
    env:
      - name: DB_HOST
        valueFrom:
          configMapKeyRef:
            name: app-configmap
            key: DB_HOST
      - name: DB_PASSWORD
        valueFrom:
          secretKeyRef:
            name: app-db-secret
            key: DB_PASSWORD</div>

    <div class="guide-section-title">🌐 Định tuyến Ingress (Nginx Ingress Controller)</div>
    <div class="cmd-block">apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  ingressClassName: nginx
  rules:
  - host: app.company.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-app-service
            port:
              number: 80
  tls:
  - hosts:
    - app.company.com
    secretName: app-tls-cert</div>
  `,

  'k8s-helm': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#9575cd;border-color:rgba(149,117,205,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Đóng gói Ứng dụng Kubernetes với Helm Chart</h2>
    <p class="guide-subtitle">Quản lý manifest K8s như một chuyên gia. Viết template và triển khai ứng dụng bằng Helm.</p>

    <div class="guide-section-title">📦 Khởi tạo Helm Chart mới</div>
    <div class="cmd-block"># Tạo cấu trúc thư mục Helm Chart
helm create my-webapp</div>
    
    <p>Thư mục tạo ra bao gồm:</p>
    <ul>
      <li><strong>Chart.yaml:</strong> Chứa thông tin mô tả metadata và phiên bản của Chart.</li>
      <li><strong>values.yaml:</strong> Nơi lưu trữ tất cả các biến số cấu hình (replicaCount, image, port).</li>
      <li><strong>templates/:</strong> Chứa các file YAML manifest (deployment, service, ingress) được viết dưới dạng template Golang.</li>
    </ul>

    <div class="guide-section-title">🚀 Deploy & Quản lý Chart</div>
    <div class="cmd-block"># Cài đặt Chart lên K8s Cluster
helm install my-release ./my-webapp

# Nâng cấp phiên bản khi thay đổi values
helm upgrade my-release ./my-webapp --set image.tag="v2.0"

# Rollback về phiên bản cũ ngay lập tức nếu lỗi xảy ra
helm rollback my-release 1</div>
  `,

  'aapanel-proxy': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#81c784;border-color:rgba(129,199,132,0.3);margin-bottom:0.8rem">VPS & AAPANEL</div>
    <h2>aaPanel: Nginx Reverse Proxy Docker & Let\'s Encrypt</h2>
    <p class="guide-subtitle">Hướng dẫn từng bước cấu hình Nginx làm proxy ngược để expose ứng dụng Docker an toàn.</p>

    <div class="guide-section-title">🌐 Bước 1: Khởi chạy container Docker của bạn</div>
    <p>Đảm bảo container của bạn đang chạy ở một cổng nội bộ trên VPS (Ví dụ cổng 8080):</p>
    <div class="cmd-block">docker run -d -p 127.0.0.1:8080:3000 --name web-service my-app:latest
# 127.0.0.1 đảm bảo cổng 8080 không bị expose ra Internet thông qua Firewall VPS.</div>

    <div class="guide-section-title">🖥️ Bước 2: Tạo Website trên aaPanel</div>
    <ul>
      <li>Vào mục **Website** → Click **Add Site**.</li>
      <li>Nhập domain của bạn (ví dụ: `+ "`app.company.com`" +`).</li>
      <li>Phần **PHP Version** chọn **Pure Static** (vì chúng ta chỉ dùng Nginx để chuyển tiếp traffic).</li>
      <li>Nhấn **Submit** để khởi tạo.</li>
    </ul>

    <div class="guide-section-title">🛡️ Bước 3: Cài đặt Let's Encrypt SSL</div>
    <ul>
      <li>Tại website vừa tạo, nhấn vào mục **SSL** → Chọn tab **Let's Encrypt**.</li>
      <li>Tích chọn domain của bạn và nhấn **Apply** để nhận chứng chỉ SSL miễn phí.</li>
      <li>Bật tùy chọn **Force HTTPS** ở góc trên để mã hóa toàn bộ dữ liệu.</li>
    </ul>

    <div class="guide-section-title">⚙️ Bước 4: Thiết lập Reverse Proxy</div>
    <ul>
      <li>Vào tab **Reverse Proxy** → Nhấn **Add Reverse Proxy**.</li>
      <li>Đặt tên Proxy (Ví dụ: `+ "`docker-app`" +`).</li>
      <li>**Target URL:** Nhập địa chỉ chạy container Docker: `+ "`http://127.0.0.1:8080`" +`.</li>
      <li>Nhấn **Submit**. aaPanel Nginx sẽ tự viết luật định tuyến chuyển traffic HTTPS ngoài internet vào container Docker của bạn một cách an toàn nhất!</li>
    </ul>
  `,

  'aws-vpc': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#e0e0e0;border-color:rgba(224,224,224,0.3);margin-bottom:0.8rem">AWS CLOUD</div>
    <h2>Kiến trúc mạng AWS VPC 3-Tier chuẩn Production</h2>
    <p class="guide-subtitle">Thiết kế hạ tầng mạng đám mây cô lập, bảo mật và chịu lỗi cao trên AWS.</p>

    <div class="guide-section-title">☁️ Cấu trúc phân lớp (3-Tier Layout)</div>
    <p>Để đảm bảo bảo mật và chống tấn công, mạng AWS VPC được chia nhỏ thành 3 lớp riêng biệt trên tối thiểu 2 Availability Zones (AZs) để đảm bảo High Availability:</p>
    <ul>
      <li><strong>Tầng 1: Web / Public Subnets:</strong> 
        <ul>
          <li>Chỉ chứa các tài nguyên giao tiếp trực tiếp với internet như **Application Load Balancer (ALB)** và Bastion Host.</li>
          <li>Định tuyến traffic trực tiếp thông qua **Internet Gateway (IGW)**.</li>
        </ul>
      </li>
      <li><strong>Tầng 2: App / Private Subnets:</strong>
        <ul>
          <li>Chứa máy chủ ứng dụng (EC2, ECS, EKS). Không có IP Public và không thể truy cập trực tiếp từ Internet.</li>
          <li>Định tuyến kết nối chiều đi (outbound) ra internet để tải bản vá phần mềm thông qua **NAT Gateway** đặt ở Public Subnet.</li>
        </ul>
      </li>
      <li><strong>Tầng 3: Data / Isolated Private Subnets:</strong>
        <ul>
          <li>Chứa Database (RDS, DynamoDB) và Cache cluster (Redis).</li>
          <li>Hoàn toàn cô lập, không có định tuyến ra internet kể cả chiều đi, chỉ cho phép kết nối từ lớp App thông qua Security Group.</li>
        </ul>
      </li>
    </ul>

    <div class="warning-block">
      <strong>⚠️ Mẹo tiết kiệm chi phí:</strong> NAT Gateway trên AWS tính tiền theo giờ và dung lượng dữ liệu đi qua. Đối với môi trường Dev/Staging, bạn có thể cân nhắc sử dụng 1 NAT Gateway cho cả 3 AZ để giảm chi phí, thay vì dùng 3 NAT Gateway như trên môi trường Production thực tế.
    </div>
  `,

  'aws-compute': `
    <button class="guide-detail-back" onclick="closeGuide()">← Quay lại danh sách</button>
    <div class="guide-card-tag" style="color:#f06292;border-color:rgba(240,98,146,0.3);margin-bottom:0.8rem">AWS CLOUD</div>
    <h2>Deploy Ứng dụng với AWS EC2, S3 & CloudFront CDN</h2>
    <p class="guide-subtitle">Kết hợp máy chủ ảo EC2 với kho lưu trữ tĩnh S3 và mạng lưới phân phối CDN CloudFront.</p>

    <div class="guide-section-title">🖥️ 1. Máy chủ EC2 và Deploy App</div>
    <p>Sử dụng EC2 để chạy mã nguồn backend. Khuyến nghị cấu hình Auto Scaling Group cùng với Application Load Balancer để tự động mở rộng tài nguyên khi chịu tải cao.</p>

    <div class="guide-section-title">📦 2. Kho lưu trữ tĩnh AWS S3</div>
    <p>Tuyệt đối không lưu trữ ảnh, video hoặc file tải về của người dùng trực tiếp trên ổ đĩa EC2 (vì EC2 là tài nguyên tạm thời - ephemeral, có thể bị xóa/thay thế khi scale). Hãy sử dụng **AWS S3** để lưu trữ lâu dài với độ bền dữ liệu đạt 99.999999999% (11 số 9).</p>

    <div class="guide-section-title">⚡ 3. Phân phối CDN qua AWS CloudFront</div>
    <p>Để tối ưu tốc độ tải ảnh/video cho người dùng cuối và giảm tải cho S3, ta đặt một mạng lưới CDN **CloudFront** phía trước S3:</p>
    <ul>
      <li>Người dùng gửi request lấy ảnh → CloudFront kiểm tra cache ở các Edge Location gần người dùng nhất để trả về ngay lập tức.</li>
      <li>Chỉ khi cache hết hạn, CloudFront mới kéo dữ liệu từ S3 (Origin) và lưu lại cache.</li>
      <li>Cấu hình **Origin Access Control (OAC)** để đảm bảo người dùng không thể truy cập trực tiếp URL của S3, buộc phải đi qua CloudFront CDN nhằm bảo mật dữ liệu.</li>
    </ul>
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

/* ══════════════════════════════════════
   TAB 3: CONFIG GENERATORS LOGIC
   ══════════════════════════════════════ */
let activeGenTab = 'docker';

function switchGenTab(tabId) {
  activeGenTab = tabId;
  document.querySelectorAll('#content-generators .filter-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('btn-gen-' + tabId).classList.add('active');
  
  document.getElementById('gen-form-docker').style.display = 'none';
  document.getElementById('gen-form-github').style.display = 'none';
  document.getElementById('gen-form-aapanel').style.display = 'none';
  document.getElementById('gen-form-k8s').style.display = 'none';
  
  document.getElementById('gen-form-' + tabId).style.display = 'block';
  generateConfigs();
}

function generateConfigs() {
  const codeBlock1 = document.getElementById('output-code-block');
  const codeBlock2 = document.getElementById('output-code-block-2');
  const filename1 = document.getElementById('output-filename');
  const filename2 = document.getElementById('output-filename-2');
  const wrapper2 = document.getElementById('output-filename-2-wrapper');
  
  wrapper2.style.display = 'none';
  
  if (activeGenTab === 'docker') {
    filename1.innerText = 'Dockerfile';
    const lang = document.getElementById('docker-lang').value;
    const port = document.getElementById('docker-port').value || '3000';
    const useMultistage = document.getElementById('docker-multistage').checked;
    const useDb = document.getElementById('docker-db').checked;
    
    let dockerfile = '';
    let compose = '';
    
    if (lang === 'node') {
      if (useMultistage) {
        dockerfile = `# Multi-stage Build cho Node.js\nFROM node:22-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:22-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY --from=builder /app/dist ./dist\nUSER node\nEXPOSE ${port}\nCMD ["node", "dist/main.js"]`;
      } else {
        dockerfile = `# Dockerfile cơ bản cho Node.js\nFROM node:22-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE ${port}\nCMD ["npm", "start"]`;
      }
      
      compose = `version: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - "${port}:${port}"\n    restart: always`;
    } else if (lang === 'python') {
      if (useMultistage) {
        dockerfile = `# Multi-stage Build cho Python FastAPI\nFROM python:3.12-slim AS builder\nWORKDIR /app\nRUN pip install --no-cache-dir poetry\nCOPY pyproject.toml poetry.lock ./\nRUN poetry export -f requirements.txt --output requirements.txt --without-hashes\n\nFROM python:3.12-slim AS runner\nWORKDIR /app\nCOPY --from=builder /app/requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nUSER 1000\nEXPOSE ${port}\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "${port}"]`;
      } else {
        dockerfile = `# Dockerfile cơ bản cho Python\nFROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt ./\nRUN pip install -r requirements.txt\nCOPY . .\nEXPOSE ${port}\nCMD ["python", "main.py"]`;
      }
      
      compose = `version: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - "${port}:${port}"\n    restart: always`;
    } else if (lang === 'go') {
      dockerfile = `# Multi-stage Build cho Go (Golang)\nFROM golang:1.22-alpine AS builder\nWORKDIR /app\nCOPY go.mod go.sum ./\nRUN go mod download\nCOPY . .\nRUN CGO_ENABLED=0 GOOS=linux go build -o main .\n\nFROM alpine:latest\nWORKDIR /app\nCOPY --from=builder /app/main .\nEXPOSE ${port}\nCMD ["./main"]`;
      compose = `version: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - "${port}:${port}"\n    restart: always`;
    } else if (lang === 'php') {
      dockerfile = `# Dockerfile cho PHP Laravel\nFROM php:8.3-fpm-alpine\nWORKDIR /var/web\nRUN docker-php-ext-install pdo pdo_mysql\nCOPY . .\nEXPOSE 9000\nCMD ["php-fpm"]`;
      compose = `version: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    volumes:\n      - .:/var/web\n    restart: always`;
    }
    
    if (useDb) {
      compose += `\n\n  database:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: app_db\n      POSTGRES_USER: app_user\n      POSTGRES_PASSWORD: secure_password\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    ports:\n      - "5432:5432"\n    restart: always\n\n  cache:\n    image: redis:7-alpine\n    ports:\n      - "6379:6379"\n    restart: always\n\nvolumes:\n  pgdata:`;
    }
    
    codeBlock1.innerText = dockerfile;
    codeBlock2.innerText = compose;
    
    filename2.innerText = 'docker-compose.yml';
    wrapper2.style.display = 'block';
    
  } else if (activeGenTab === 'github') {
    filename1.innerText = '.github/workflows/deploy.yml';
    const branch = document.getElementById('gh-branch').value || 'main';
    const image = document.getElementById('gh-image').value || 'username/my-app';
    const path = document.getElementById('gh-deploy-path').value || '/home/ubuntu/my-app';
    
    codeBlock1.innerText = `name: Deploy Pipeline\n\non:\n  push:\n    branches: [ ${branch} ]\n\njobs:\n  build-and-push:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Code\n        uses: actions/checkout@v4\n\n      - name: Login to Docker Hub\n        uses: docker/login-action@v3\n        with:\n          username: \${{ secrets.DOCKERHUB_USERNAME }}\n          password: \${{ secrets.DOCKERHUB_TOKEN }}\n\n      - name: Build and Push\n        uses: docker/build-push-action@v5\n        with:\n          context: .\n          push: true\n          tags: ${image}:latest\n\n  deploy:\n    needs: build-and-push\n    runs-on: ubuntu-latest\n    steps:\n      - name: SSH to VPS & Run Container\n        uses: appleboy/ssh-action@v1.0.3\n        with:\n          host: \${{ secrets.VPS_HOST }}\n          username: \${{ secrets.VPS_USER }}\n          key: \${{ secrets.VPS_SSH_KEY }}\n          script: |\n            cd ${path}\n            docker compose pull\n            docker compose up -d --remove-orphans\n            docker image prune -f`;
    
  } else if (activeGenTab === 'aapanel') {
    filename1.innerText = 'nginx-reverse-proxy.conf';
    const domain = document.getElementById('aa-domain').value || 'app.domain.com';
    const port = document.getElementById('aa-port').value || '3000';
    
    codeBlock1.innerText = `# Cấu hình Reverse Proxy Nginx cho aaPanel\nserver {\n    listen 80;\n    server_name ${domain};\n\n    # Chuyển tiếp HTTP sang HTTPS (Khuyến nghị)\n    return 301 https://$host$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name ${domain};\n\n    # Đường dẫn SSL của aaPanel (Sẽ tự động điền khi cài Let's Encrypt)\n    ssl_certificate /www/server/panel/vhost/cert/${domain}/fullchain.pem;\n    ssl_certificate_key /www/server/panel/vhost/cert/${domain}/privkey.pem;\n    ssl_protocols TLSv1.2 TLSv1.3;\n\n    location / {\n        proxy_pass http://127.0.0.1:${port};\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        \n        # Hỗ trợ WebSockets (Nếu app cần)\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n    }\n}`;
    
  } else if (activeGenTab === 'k8s') {
    filename1.innerText = 'k8s-manifest.yaml';
    const name = document.getElementById('k8s-name').value || 'my-app';
    const image = document.getElementById('k8s-image').value || 'username/my-app:latest';
    const replicas = document.getElementById('k8s-replicas').value || '3';
    const port = document.getElementById('k8s-port').value || '3000';
    
    codeBlock1.innerText = `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ${name}-deployment\n  labels:\n    app: ${name}\nspec:\n  replicas: ${replicas}\n  selector:\n    matchLabels:\n      app: ${name}\n  template:\n    metadata:\n      labels:\n        app: ${name}\n    spec:\n      containers:\n      - name: ${name}-container\n        image: ${image}\n        ports:\n        - containerPort: ${port}\n        resources:\n          limits:\n            cpu: "500m"\n            memory: "512Mi"\n          requests:\n            cpu: "250m"\n            memory: "256Mi"\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: ${name}-service\nspec:\n  selector:\n    app: ${name}\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: ${port}\n  type: ClusterIP`;
  }
}

function copyGenCode(elementId) {
  const code = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert('Đã sao chép đoạn mã cấu hình thành công!');
  }).catch(err => {
    console.error('Không thể copy code: ', err);
  });
}

/* ══════════════════════════════════════
   TAB 4: DEVOPS QUIZ SYSTEM LOGIC
   ══════════════════════════════════════ */
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

let quizState = {
  currentIdx: 0,
  score: 0,
  answered: false
};

function startQuiz() {
  document.getElementById('quizStartPanel').style.display = 'none';
  document.getElementById('quizResultPanel').style.display = 'none';
  document.getElementById('quizPlayPanel').style.display = 'block';
  
  quizState.currentIdx = 0;
  quizState.score = 0;
  
  renderQuestion();
}

function renderQuestion() {
  quizState.answered = false;
  document.getElementById('quizExplanationBox').style.display = 'none';
  
  const q = quizQuestions[quizState.currentIdx];
  document.getElementById('currentQuestionNum').innerText = quizState.currentIdx + 1;
  document.getElementById('quizProgressFill').style.width = ((quizState.currentIdx + 1) / quizQuestions.length * 100) + '%';
  document.getElementById('quizQuestionText').innerText = q.question;
  
  const optionsList = document.getElementById('quizOptionsList');
  optionsList.innerHTML = '';
  
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.innerText = opt;
    btn.onclick = () => selectOption(idx);
    optionsList.appendChild(btn);
  });
}

function selectOption(selectedIdx) {
  if (quizState.answered) return;
  quizState.answered = true;
  
  const q = quizQuestions[quizState.currentIdx];
  const optionButtons = document.querySelectorAll('.quiz-option-btn');
  
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true; // Khóa các nút lại
    if (idx === q.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('incorrect');
    }
  });
  
  if (selectedIdx === q.correct) {
    quizState.score++;
  }
  
  // Hiển thị giải thích
  document.getElementById('quizExplanationText').innerText = q.explanation;
  document.getElementById('quizExplanationBox').style.display = 'block';
  
  // Cuộn xuống xem giải thích
  setTimeout(() => {
    document.getElementById('quizExplanationBox').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function nextQuestion() {
  quizState.currentIdx++;
  if (quizState.currentIdx < quizQuestions.length) {
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  document.getElementById('quizPlayPanel').style.display = 'none';
  document.getElementById('quizResultPanel').style.display = 'block';
  
  const scoreBadge = document.getElementById('quizScoreText');
  const gradeText = document.getElementById('quizGradeText');
  const feedbackText = document.getElementById('quizFeedbackText');
  
  scoreBadge.innerText = `${quizState.score} / ${quizQuestions.length}`;
  
  const percent = (quizState.score / quizQuestions.length) * 100;
  if (percent === 100) {
    gradeText.innerText = '🛡️ DevOps Architect Master';
    feedbackText.innerText = 'Tuyệt vời! Bạn có kiến thức cực kỳ vững chắc về DevOps ở cấp độ chuyên gia cao cấp.';
  } else if (percent >= 75) {
    gradeText.innerText = '🚀 DevOps Senior';
    feedbackText.innerText = 'Rất ấn tượng! Bạn nắm vững hầu hết các thực tiễn vận hành và kiến trúc hạ tầng.';
  } else if (percent >= 50) {
    gradeText.innerText = '⚙️ DevOps Junior/Mid';
    feedbackText.innerText = 'Khá tốt! Hãy đọc thêm các tài liệu trong cẩm nang để hiểu sâu hơn các kiến thức thực chiến.';
  } else {
    gradeText.innerText = '📚 DevOps Intern/Beginner';
    feedbackText.innerText = 'Đừng nản chí! Đọc kỹ các bài viết thực hành trong cẩm nang sẽ giúp bạn tiến bộ nhanh chóng.';
  }
}

function restartQuiz() {
  document.getElementById('quizPlayPanel').style.display = 'none';
  document.getElementById('quizResultPanel').style.display = 'none';
  document.getElementById('quizStartPanel').style.display = 'block';
}

// Gọi kết xuất ban đầu khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
  renderGuides(guidesList);
});
