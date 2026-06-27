import React, { useState } from 'react'

const guidesList = [
  {
    id: 'docker-concepts',
    category: 'docker',
    tags: ['🐳 Docker', '📦 Image', '🚀 Container'],
    title: 'Docker Căn Bản: Phân biệt Image & Container',
    desc: 'Tìm hiểu khái niệm nền tảng của Docker. So sánh trực quan Image và Container, cơ chế Layered File System và các câu lệnh quản trị cơ bản.',
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(105,240,174,1)" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M9 2v20M15 2v20M2 9h20M2 15h20" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(82,203,255,1)" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(187,134,252,1)" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(130,177,255,1)" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,138,128,1)" strokeWidth="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,183,77,1)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(100,181,246,1)" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(77,208,225,1)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(149,117,205,1)" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(129,199,132,1)" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(224,224,224,1)" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" /></svg>,
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
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(240,98,146,1)" strokeWidth="1.5"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" /></svg>,
    iconColor: '#f06292',
    iconBg: 'linear-gradient(135deg, rgba(173,20,87,0.3), rgba(240,98,146,0.2))',
    iconBorder: 'rgba(173,20,87,0.5)'
  }
];

const guideContent = {
  'docker-concepts': `
    <div class="guide-card-tag" style="color:#69f0ae;border-color:rgba(105,240,174,0.3);margin-bottom:0.8rem">DOCKER HANDBOOK</div>
    <h2>Cẩm Nang Master Docker Căn Bản: Từ Zero Đến Hero</h2>
    <p class="guide-subtitle">Khám phá chi tiết từ kiến trúc cơ bản, vòng đời container, Dockerfile directives đến cơ chế mạng và lưu trữ dữ liệu.</p>
    
    <div class="thesis-quote">
      <strong>Vấn đề kinh điển của DevOps:</strong> "Code chạy ngon ở máy tôi nhưng sập trên server!"<br>
      Docker giải quyết triệt để sự bất đồng bộ môi trường bằng cách đóng gói ứng dụng cùng toàn bộ môi trường chạy (runtime, thư viện, biến môi trường, tệp cấu hình) thành một khối bất biến duy nhất gọi là **Container**. Dù deploy lên VPS Ubuntu, CentOS hay Cloud AWS, ứng dụng luôn hoạt động giống hệt nhau.
    </div>

    <div class="guide-section-title">📊 1. Kiến Trúc Tổng Quan và So Sánh: Máy Ảo (VM) vs Docker Container</div>
    <p>Để hiểu rõ tại sao Docker lại trở thành tiêu chuẩn vàng của ngành phần mềm, hãy xem xét bảng so sánh chi tiết dưới đây:</p>
    
    <table style="width:100%; border-collapse:collapse; margin-bottom:1.8rem; text-align:left; color:#cbd5e1; font-size:0.95rem;">
      <thead>
        <tr style="border-bottom:2px solid rgba(255,255,255,0.1); padding-bottom:10px;">
          <th style="padding:10px; color:#69f0ae;">Đặc tính</th>
          <th style="padding:10px; color:#ffd54f;">Virtual Machines (VM)</th>
          <th style="padding:10px; color:#52cbff;">Docker Containers</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Cơ chế hoạt động</td>
          <td style="padding:10px;">Ảo hóa phần cứng qua Hypervisor (Type 1 hoặc 2)</td>
          <td style="padding:10px;">Ảo hóa cấp hệ điều hành (Shared Host Kernel)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Hệ điều hành khách</td>
          <td style="padding:10px;">Mỗi VM chạy một Guest OS riêng (nặng nề)</td>
          <td style="padding:10px;">Không có Guest OS (Chỉ chứa thư viện tối thiểu + Code)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Dung lượng lưu trữ</td>
          <td style="padding:10px;">Hàng chục Gigabytes (GBs) cho mỗi máy ảo</td>
          <td style="padding:10px;">Vài chục đến vài trăm Megabytes (MBs)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Thời gian khởi động</td>
          <td style="padding:10px;">Vài phút (Cần boot toàn bộ OS)</td>
          <td style="padding:10px;">Vài phần trăm giây đến vài giây (Chỉ start process)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Hiệu năng</td>
          <td style="padding:10px;">Bị suy giảm do lớp ảo hóa Hypervisor</td>
          <td style="padding:10px;">Gần như tương đương Native Process chạy trên Host</td>
        </tr>
      </tbody>
    </table>

    <p>Kiến trúc Docker hoạt động theo mô hình **Client-Server**:</p>
    <ul>
      <li><strong>Docker Client:</strong> Nơi lập trình viên gõ các lệnh như \`docker build\`, \`docker run\`.</li>
      <li><strong>Docker Daemon (dockerd):</strong> Chạy ngầm trên máy chủ, lắng nghe API requests và quản lý các đối tượng như Images, Containers, Networks, Volumes.</li>
      <li><strong>Docker Registry:</strong> Nơi lưu trữ và chia sẻ các Docker Images (ví dụ: Docker Hub, Github Container Registry - GHCR, hoặc Private Registry).</li>
    </ul>

    <div class="guide-section-title">⏳ 2. Vòng Đời Của Container (Container Lifecycle)</div>
    <p>Một container không chỉ đơn thuần là chạy hay dừng, nó có một vòng đời rõ ràng với các trạng thái:</p>
    <ul>
      <li><strong>Created (Khởi tạo):</strong> Trạng thái sau khi chạy \`docker create\`. Docker đã thiết lập các lớp File System và cấu hình nhưng chưa chạy tiến trình chính bên trong.</li>
      <li><strong>Running (Đang chạy):</strong> Container đang hoạt động và tiến trình chính (PID 1) đang thực thi. Trạng thái sau lệnh \`docker run\` hoặc \`docker start\`.</li>
      <li><strong>Paused (Tạm dừng):</strong> Tất cả tiến trình bị đông cứng tạm thời bằng cơ chế \`cgroups freezer\`. Các tiến trình không tiêu thụ CPU nữa. Trạng thái sau khi dùng \`docker pause\`.</li>
      <li><strong>Stopped (Dừng):</strong> Tiến trình chính nhận tín hiệu dừng \`SIGTERM\` (sau đó là \`SIGKILL\` nếu không dừng kịp trong 10 giây). Tài nguyên CPU và RAM được giải phóng hoàn toàn nhưng dữ liệu trên writable layer và các cấu hình mạng vẫn được lưu giữ. Trạng thái sau lệnh \`docker stop\`.</li>
      <li><strong>Exited / Dead (Đã thoát / Đã chết):</strong> Container đã kết thúc tiến trình chính (thường trả về exit code 0 nếu thành công, hoặc >0 nếu có lỗi).</li>
    </ul>

    <div class="guide-section-title">🧱 3. Bản Chất Lớp File System: UnionFS & Copy-on-Write (CoW)</div>
    <p>Docker Image được xây dựng từ các lớp chỉ đọc chồng lên nhau. Đây là điểm mấu chốt giúp tiết kiệm dung lượng đĩa cứng khổng lồ thông qua **UnionFS**:</p>
    <ul>
      <li><strong>Image Layers (Read-Only):</strong> Mỗi chỉ thị trong Dockerfile như \`RUN\`, \`COPY\`, \`ADD\` tạo ra một layer mới. Các layer này là bất biến (immutable). Khi 2 image dùng chung một base image (ví dụ: \`node:22-alpine\`), các layer base này chỉ được lưu duy nhất một lần trên ổ đĩa.</li>
      <li><strong>Container Layer (Writable):</strong> Khi bạn chạy container, Docker thêm một lớp mỏng có thể ghi được ở trên cùng. Tất cả thao tác tạo mới, sửa đổi hay xóa file của container đang chạy đều diễn ra trên lớp này.</li>
      <li><strong>Cơ chế Copy-on-Write (CoW):</strong> Nếu container cần sửa đổi một file đã có trong lớp Image, Docker sẽ nhân bản file đó từ lớp chỉ đọc lên lớp ghi được (Container Layer) rồi mới tiến hành sửa đổi. File gốc ở lớp dưới hoàn toàn nguyên vẹn. Khi container bị xóa, toàn bộ lớp Writable Layer này sẽ biến mất theo.</li>
    </ul>

    <div class="guide-section-title">📝 4. Hướng Dẫn Chi Tiết Các Chỉ Chỉ Trong Dockerfile</div>
    <p>Viết Dockerfile giống như việc lập trình môi trường. Dưới đây là giải nghĩa cặn kẽ các chỉ thị quan trọng nhất:</p>
    <ul>
      <li><strong>FROM:</strong> Định nghĩa Image nền tảng. Khuyên dùng các tag có phiên bản cụ thể kèm hậu tố \`alpine\` (ví dụ: \`node:22-alpine\`) để giảm thiểu size và hạn chế các lỗ hổng bảo mật không cần thiết.</li>
      <li><strong>WORKDIR:</strong> Thiết lập thư mục làm việc cho bất kỳ lệnh \`RUN\`, \`CMD\`, \`ENTRYPOINT\`, \`COPY\`, \`ADD\` tiếp theo. Nếu thư mục chưa tồn tại, Docker sẽ tự động tạo nó.</li>
      <li><strong>COPY vs ADD:</strong> Cả hai đều copy file từ máy host vào container. Tuy nhiên, hãy ưu tiên dùng **\`COPY\`** vì tính minh bạch và an toàn. Chỉ dùng **\`ADD\`** khi bạn thực sự cần tự động giải nén file tar cục bộ (ví dụ: \`ADD archive.tar.gz /app/\`) hoặc tải tệp qua URL.</li>
      <li><strong>RUN:</strong> Thực thi các lệnh trong quá trình build để cài đặt dependencies, cấu hình hệ thống (Ví dụ: \`RUN npm install\`). Lệnh này tạo ra một layer mới.</li>
      <li><strong>CMD vs ENTRYPOINT:</strong>
        <br>• \`ENTRYPOINT\`: Định nghĩa lệnh cố định luôn luôn chạy khi container khởi động (ví dụ: \`ENTRYPOINT ["npm"]\`).
        <br>• \`CMD\`: Định nghĩa các tham số mặc định truyền vào cho \`ENTRYPOINT\` (ví dụ: \`CMD ["start"]\`). Người dùng có thể dễ dàng ghi đè tham số của \`CMD\` khi gõ lệnh run: \`docker run my-image run-dev\`.
      </li>
      <li><strong>ENV vs ARG:</strong>
        <br>• \`ARG\`: Biến chỉ có tác dụng trong quá trình build image (build-time variable). Không tồn tại trong container khi chạy.
        <br>• \`ENV\`: Biến môi trường tồn tại cả trong quá trình build lẫn khi container đang chạy (run-time variable).
      </li>
      <li><strong>EXPOSE:</strong> Khai báo cổng mạng container sẽ lắng nghe khi chạy. Mang tính chất tài liệu hóa (Documentation), không tự động mapping port ra máy host trừ khi người dùng dùng cờ \`-P\`.</li>
      <li><strong>VOLUME:</strong> Tạo một điểm gắn (mount point) với thư mục ngoài máy host để lưu trữ dữ liệu persistent.</li>
      <li><strong>USER:</strong> Đổi user thực thi từ root mặc định sang user thường để tăng tính bảo mật (Ví dụ: \`USER node\`).</li>
    </ul>

    <div class="guide-section-title">📂 Ví Dụ Dockerfile Tối Ưu Hóa Node.js Cho Production</div>
    <p>Dưới đây là một ví dụ Dockerfile Node.js áp dụng kỹ thuật **Multi-stage build** để tối giản kích thước Image và tăng tốc độ deploy:</p>
    
    <div class="cmd-block"># Stage 1: Build & Biên dịch ứng dụng (Nặng nề)
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runtime siêu nhẹ chỉ chứa file production
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
# Chỉ cài các dependencies cần cho chạy production
RUN npm ci --only=production
# Copy code đã build từ Stage 1
COPY --from=builder /app/dist ./dist
# Chạy ứng dụng dưới quyền user node (hạn chế privilege)
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]</div>

    <div class="guide-section-title">🔌 5. Chế Độ Mạng (Network Drivers) & Lưu Trữ (Storage Mechanisms)</div>
    <p>Docker cung cấp các driver mạng để linh hoạt kết nối và lưu trữ dữ liệu:</p>
    <ul>
      <li><strong>Bridge Network (Mặc định):</strong> Tạo một switch mạng ảo trong máy host. Các container kết nối vào chung switch này và giao tiếp với nhau qua IP hoặc qua DNS nội bộ của Docker (Dùng tên Service). Thích hợp nhất cho ứng dụng chạy độc lập trên 1 máy VPS.</li>
      <li><strong>Host Network:</strong> Loại bỏ hoàn toàn sự cách ly mạng. Container dùng chung card mạng và IP của máy host. Rất nhanh, giảm thiểu overhead nhưng dễ gây xung đột port.</li>
      <li><strong>None Network:</strong> Vô hiệu hóa hoàn toàn mạng của container. Thích hợp cho các tiến trình tính toán offline bảo mật cao.</li>
      <li><strong>Named Volumes:</strong> Thư mục lưu dữ liệu do Docker quản lý trong phân vùng riêng trên host (thường là \`/var/lib/docker/volumes/\`). Đây là cách an toàn nhất để lưu trữ dữ liệu của Database vì Docker quản lý vòng đời độc lập với container.</li>
      <li><strong>Bind Mounts:</strong> Gắn trực tiếp một thư mục cụ thể từ ổ đĩa máy host vào container. Rất thích hợp cho môi trường phát triển (Development) để lập trình viên chỉnh sửa file code cục bộ và container lập tức hot-reload thay đổi.</li>
    </ul>

    <div class="guide-section-title">⚡ 6. Cheatsheet Lệnh CLI Docker Hữu Ích Cho Công Việc Hàng Ngày</div>
    <p>Dưới đây là bảng tổng hợp đầy đủ các nhóm câu lệnh CLI cốt lõi mà mọi kỹ sư DevOps cần nằm lòng:</p>

    <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; text-align:left; color:#cbd5e1; font-size:0.92rem;">
      <thead>
        <tr style="border-bottom:2px solid rgba(255,255,255,0.1); padding-bottom:10px;">
          <th style="padding:10px; color:#69f0ae; width:20%;">Nhóm Lệnh</th>
          <th style="padding:10px; color:#52cbff; width:45%;">Lệnh CLI Chi Tiết</th>
          <th style="padding:10px;">Công Dụng Thực Tế</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Quản lý Images</td>
          <td style="padding:10px; font-family:monospace; color:#ffd54f;">docker build -t app:v1.0 .<br>docker images<br>docker rmi app:v1.0</td>
          <td style="padding:10px;">Build image từ Dockerfile.<br>Liệt kê các image trên máy.<br>Xóa một image cụ thể.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Khởi Chạy</td>
          <td style="padding:10px; font-family:monospace; color:#ffd54f;">docker run -d -p 8080:80 --name web app:v1.0<br>docker ps -a<br>docker rm -f web</td>
          <td style="padding:10px;">Khởi chạy container chạy ngầm, map port 8080 host sang 80 container.<br>Liệt kê tất cả các container.<br>Xóa bỏ container ngay lập tức.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Giám Sát & Debug</td>
          <td style="padding:10px; font-family:monospace; color:#ffd54f;">docker logs -f --tail 100 web<br>docker exec -it web sh<br>docker stats web</td>
          <td style="padding:10px;">Xem logs real-time với 100 dòng cuối cùng.<br>Mở shell chui vào bên trong container.<br>Xem dung lượng CPU, RAM thực tế container đang chiếm dụng.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Mạng & Ổ Đĩa</td>
          <td style="padding:10px; font-family:monospace; color:#ffd54f;">docker network ls<br>docker volume ls<br>docker inspect web</td>
          <td style="padding:10px;">Liệt kê danh sách mạng.<br>Liệt kê các volume.<br>Xem toàn bộ thông tin chi tiết cấu hình JSON của container.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px; font-weight:600;">Dọn Dẹp Đĩa</td>
          <td style="padding:10px; font-family:monospace; color:#ffd54f;">docker system prune -a --volumes</td>
          <td style="padding:10px;">Quét sạch toàn bộ container đã dừng, image không dùng và volume mồ côi để giải phóng ổ cứng máy host.</td>
        </tr>
      </tbody>
    </table>
  `,

  'docker-watchtower': `
    <div class="guide-card-tag" style="color:#52cbff;border-color:rgba(82,203,255,0.3);margin-bottom:0.8rem">CD PIPELINE</div>
    <h2>CD Tự Động Với Watchtower: Cấu Hình Nâng Cao</h2>
    <p class="guide-subtitle">Triển khai hệ thống Continuous Deployment tự động cập nhật container cho Private Registry và tích hợp Webhook.</p>
    
    <div class="thesis-quote">
      <strong>Động lực học Watchtower:</strong><br>
      Trong mô hình vận hành VPS độc lập, việc tích hợp các hệ thống CI/CD cồng kềnh như Jenkins hay Kubernetes là quá tải. Watchtower giải quyết bài toán này bằng cách tự động hóa hoàn toàn pha Pull Image & Restart Container. Nó hoạt động như một tiến trình nền giám sát Docker Socket.
    </div>

    <div class="guide-section-title">🔒 Đăng nhập Private Registry (Docker Hub & GHCR)</div>
    <p>Khi bạn deploy các image private từ Docker Hub hoặc GitHub Container Registry (\`ghcr.io\`), Watchtower cần được cấp quyền đọc. Hãy làm theo hướng dẫn sau:</p>
    
    <div class="cmd-block"># Tạo file cấu hình auth tại máy host (ví dụ chạy lệnh docker login trước)
docker login ghcr.io

# File cấu hình credentials sẽ nằm tại: ~/.docker/config.json
# Mount file này vào container Watchtower ở chế độ chỉ đọc (:ro)
docker run -d \\
  --name watchtower \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v ~/.docker/config.json:/config.json:ro \\
  containrrr/watchtower --cleanup --interval 300</div>

    <div class="guide-section-title">🔔 Tích hợp Thông Báo Webhook (Discord / Telegram)</div>
    <p>Để nhận báo cáo trạng thái nâng cấp container (Thành công/Thất bại, Tên Image, Phiên bản) trực tiếp về kênh chat của nhóm, hãy sử dụng thư viện thông báo **Shoutrrr** tích hợp sẵn trong Watchtower:</p>
    
    <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; text-align:left; color:#cbd5e1;">
      <thead>
        <tr style="border-bottom:2px solid rgba(255,255,255,0.1); padding-bottom:10px;">
          <th style="padding:10px 0; color:#52cbff;">Nền tảng</th>
          <th style="padding:10px 0;">Cấu hình URL Biến môi trường</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Discord</td>
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">discord://token_id@token_token</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Telegram</td>
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">telegram://bot_token@telegram_chat_id</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Slack</td>
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">slack://token-a/token-b/token-c</td>
        </tr>
      </tbody>
    </table>

    <div class="guide-section-title">🐋 Cấu hình Docker Compose chuẩn Production (Tránh Update Database)</div>
    <p>Một điểm cực kỳ quan trọng: **Không bao giờ cho phép Watchtower tự động cập nhật các container Cơ sở dữ liệu (Postgres, MySQL)** vì có thể gây lỗi hỏng cấu trúc dữ liệu (Data corruption). Chúng ta sẽ dán nhãn loại trừ:</p>
    
    <div class="cmd-block">version: '3.8'

services:
  web-app:
    image: ghcr.io/my-username/my-app:latest
    ports:
      - "3000:3000"
    labels:
      # Bật cập nhật cho web app
      - "com.centurylinklabs.watchtower.enable=true"
    restart: always

  database:
    image: postgres:16-alpine
    labels:
      # KHÔNG cho phép Watchtower động chạm vào database
      - "com.centurylinklabs.watchtower.enable=false"
    volumes:
      - pg-data:/var/lib/postgresql/data
    restart: always

  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ~/.docker/config.json:/config.json:ro
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_LABEL_ENABLE=true # Chỉ quét container có label enable=true
      - WATCHTOWER_NOTIFICATIONS=shoutrrr
      - WATCHTOWER_NOTIFICATION_URL=discord://123456@abcdef
    command: --interval 3600
    restart: always

volumes:
  pg-data:</div>
  `,

  'docker-opt': `
    <div class="guide-card-tag" style="color:#bb86fc;border-color:rgba(187,134,252,0.3);margin-bottom:0.8rem">DOCKER SECURITY</div>
    <h2>Tối Ưu Hóa & Bảo Mật Docker Môi Trường Production</h2>
    <p class="guide-subtitle">Hướng dẫn chi tiết về Multi-stage build, tối ưu hóa layer caching, .dockerignore và bảo mật Non-root.</p>
    
    <div class="guide-section-title">🐳 1. Tận dụng Cơ chế Caching Layers</div>
    <p>Docker build image tuần tự theo các layer tương ứng với từng dòng lệnh trong Dockerfile. Nếu một layer thay đổi, toàn bộ các layer phía sau nó bắt buộc phải rebuild từ đầu. Do đó ta cần cấu hình copy dependency trước khi copy source code:</p>
    
    <div class="cmd-block"># SAI LẦM KHIÊN LỚP NPM INSTALL PHẢI CHẠY LẠI MỖI KHI ĐỔI CODE
COPY . .
RUN npm install

# CẤU HÌNH CHUẨN: Chỉ chạy lại npm install khi file package.json thay đổi
COPY package*.json ./
RUN npm ci
COPY . .</div>

    <div class="guide-section-title">📂 2. Tầm quan trọng của .dockerignore</div>
    <p>Khi chạy lệnh build, Docker sẽ đóng gói toàn bộ thư mục hiện tại gửi lên Docker Daemon (Build Context). Nếu thư mục chứa các file rác như \`node_modules\`, \`.git\`, hoặc các file logs lớn, dung lượng context sẽ phình to dẫn đến build cực chậm. Hãy tạo file \`.dockerignore\` ở thư mục gốc:</p>
    
    <div class="cmd-block"># .dockerignore
node_modules
npm-debug.log
dist
build
.git
.github
Dockerfile
docker-compose.yml</div>

    <div class="guide-section-title">🔒 3. Bảo mật Non-Root User & Giới hạn tài nguyên</div>
    <p>Tiến trình chạy trong container theo mặc định được gán quyền root máy chủ. Để giảm thiểu rủi ro bị tấn công leo thang đặc quyền (Container Escape), ta thiết lập user hạn chế quyền:</p>
    
    <div class="cmd-block"># Tạo user không có đặc quyền root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --chown=appuser:appgroup package*.json ./
RUN npm ci
COPY --chown=appuser:appgroup . .
# Chuyển quyền thực thi sang user vừa tạo
USER appuser
EXPOSE 3000
CMD ["npm", "start"]</div>

    <p>Đồng thời khi chạy container, luôn giới hạn lượng RAM và CPU tối đa để tránh lỗi rò rỉ bộ nhớ (Memory leak) làm treo cả máy chủ:</p>
    <div class="cmd-block">docker run -d \\
  --name app-secured \\
  --memory="512m" \\
  --cpus="0.5" \\
  --restart-on-failure \\
  app-image:latest</div>
  `,

  'cicd-github': `
    <div class="guide-card-tag" style="color:#82b1ff;border-color:rgba(130,177,255,0.3);margin-bottom:0.8rem">CI/CD Pipeline</div>
    <h2>CI/CD Pipeline Hoàn Chỉnh Với GitHub Actions</h2>
    <p class="guide-subtitle">Thiết lập luồng CI tự động build & push Docker image lên Docker Hub, kết hợp CD tự động deploy lên VPS thông qua SSH.</p>

    <div class="thesis-quote">
      <strong>Cơ cấu hoạt động của Pipeline:</strong><br>
      • <strong>CI (Continuous Integration):</strong> Lập trình viên push code lên nhánh \`main\` -> GitHub trigger runner ảo -> Check-out code -> Đăng nhập Docker Registry -> Build & Test app -> Đẩy Docker image lên Docker Hub với tag version.
      <br>• <strong>CD (Continuous Deployment):</strong> Runner kết nối SSH bảo mật vào VPS -> Di chuyển đến thư mục project -> Chạy lệnh pull image mới -> Chạy Docker Compose up để nâng cấp app không downtime.
    </div>

    <div class="guide-section-title">🔐 Cấu hình GitHub Secrets (Bắt buộc)</div>
    <p>Để bảo mật hạ tầng, bạn cần khai báo các biến bảo mật trong mục **Repository Settings -> Secrets and Variables -> Actions**:</p>
    <ul>
      <li>\`DOCKERHUB_USERNAME\`: Tài khoản đăng nhập Docker Hub.</li>
      <li>\`DOCKERHUB_TOKEN\`: Access Token (PAT) được sinh từ Docker Hub Security.</li>
      <li>\`VPS_HOST\`: Địa chỉ IP Public của máy chủ VPS của bạn.</li>
      <li>\`VPS_USER\`: User đăng nhập SSH (thường là \`root\` hoặc \`ubuntu\`).</li>
      <li>\`VPS_SSH_KEY\`: Khóa SSH Private Key tương ứng của user trên VPS (cặp khóa dùng để kết nối không cần mật khẩu).</li>
    </ul>

    <div class="guide-section-title">📝 File cấu hình Pipeline (.github/workflows/deploy.yml)</div>
    <div class="cmd-block">name: Production Deployment Pipeline

on:
  push:
    branches:
      - main

jobs:
  build-and-push:
    name: Build Docker Image & Push to Hub
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and Push Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            \${{ secrets.DOCKERHUB_USERNAME }}/my-web-app:latest
            \${{ secrets.DOCKERHUB_USERNAME }}/my-web-app:\${{ github.sha }}

  deploy:
    name: Deploy to Production VPS
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
      - name: SSH to VPS and Upgrade Container
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: \${{ secrets.VPS_HOST }}
          username: \${{ secrets.VPS_USER }}
          key: \${{ secrets.VPS_SSH_KEY }}
          port: 22
          script: |
            cd /var/www/my-app
            # Đăng nhập registry private nếu cần
            docker login -u \${{ secrets.DOCKERHUB_USERNAME }} -p \${{ secrets.DOCKERHUB_TOKEN }}
            # Pull image mới nhất về
            docker compose pull
            # Khởi chạy đè container mới, xóa container mồ côi
            docker compose up -d --remove-orphans
            # Dọn dẹp các layers image thừa để tránh đầy ổ cứng
            docker image prune -f</div>
  `,

  'cicd-gitlab': `
    <div class="guide-card-tag" style="color:#ff8a80;border-color:rgba(255,138,128,0.3);margin-bottom:0.8rem">CI/CD Pipeline</div>
    <h2>GitLab CI/CD: Đăng Ký Runner & Cấu Hình Pipeline</h2>
    <p class="guide-subtitle">Hướng dẫn đăng ký GitLab Runner tự lưu trữ (Self-hosted) và xây dựng luồng pipeline tối ưu hóa bộ nhớ Cache.</p>
    
    <div class="guide-section-title">⚙️ 1. Hướng dẫn Đăng Ký GitLab Runner trên VPS</div>
    <p>Để chạy các job trong GitLab CI, bạn cần cài đặt agent Runner trên VPS của mình:</p>
    <div class="cmd-block"># Tải về GitLab Runner Binary
sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64
sudo chmod +x /usr/local/bin/gitlab-runner

# Cài đặt dịch vụ chạy nền
sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
sudo gitlab-runner start

# Thực hiện đăng ký (Register) Runner với GitLab Project
sudo gitlab-runner register \\
  --url https://gitlab.com/ \\
  --registration-token PROJECT_REGISTRATION_TOKEN \\
  --executor docker \\
  --docker-image "docker:24.0.5" \\
  --docker-volumes "/var/run/docker.sock:/var/run/docker.sock"</div>

    <div class="guide-section-title">📊 2. So sánh Cache vs Artifacts trong GitLab</div>
    <ul>
      <li><strong>Cache:</strong> Lưu trữ các tệp phụ thuộc giữa các lần chạy job (Ví dụ: thư mục \`node_modules/\`, \`.npm/\`). Nếu dependencies không đổi, job tiếp theo sẽ tải cache về giúp giảm 70% thời gian chạy. Cache có thể bị xóa hoặc ghi đè tùy chọn.</li>
      <li><strong>Artifacts:</strong> Lưu trữ sản phẩm đầu ra đã được biên dịch xong (Ví dụ: thư mục \`dist/\`, file nhị phân compiled). Artifacts được truyền tiếp sang các stage sau của cùng một pipeline và được GitLab lưu trên server để tải về từ giao diện Web.</li>
    </ul>

    <div class="guide-section-title">📝 Cấu hình tối ưu Pipeline (.gitlab-ci.yml)</div>
    <p>Dưới đây là file cấu hình chuẩn DevOps Senior, sử dụng dịch vụ Docker-in-Docker (\`dind\`) để build image:</p>
    
    <div class="cmd-block">stages:
  - build
  - deploy

variables:
  DOCKER_DRIVER: overlay2
  DOCKER_TLS_CERTDIR: ""
  IMAGE_TAG: \$CI_REGISTRY_IMAGE:\$CI_COMMIT_REF_SLUG

# Định nghĩa Cache toàn cục cho NPM dependencies
cache:
  key: \$CI_COMMIT_REF_SLUG
  paths:
    - .npm/
    - node_modules/

build-job:
  stage: build
  image: docker:24.0.5
  services:
    - docker:24.0.5-dind
  before_script:
    - docker login -u \$CI_REGISTRY_USER} -p \$CI_REGISTRY_PASSWORD \$CI_REGISTRY
  script:
    # Tận dụng cache từ registry để build nhanh hơn
    - docker pull \$IMAGE_TAG || true
    - docker build --cache-from \$IMAGE_TAG -t \$IMAGE_TAG .
    - docker push \$IMAGE_TAG

deploy-job:
  stage: deploy
  image: alpine:latest
  before_script:
    - apk add --no-cache openssh-client
    - eval \$(ssh-agent -s)
    - echo "\$SSH_PRIVATE_KEY" | tr -d '\\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan \$VPS_HOST >> ~/.ssh/known_hosts
  script:
    - ssh \$VPS_USER@\$VPS_HOST "cd /app && docker compose pull && docker compose up -d"</div>
  `,

  'git-ssh': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">GIT</div>
    <h2>Quản Lý Nhiều SSH Keys Cho GitHub & GitLab</h2>
    <p class="guide-subtitle">Hướng dẫn giải quyết tận gốc vấn đề xung đột tài khoản Git cá nhân và công ty trên cùng một máy local.</p>

    <div class="guide-section-title">🔑 1. Tạo các cặp khóa bảo mật ED25519</div>
    <p>ED25519 là thuật toán mã hóa hiện đại, an toàn và nhanh hơn rất nhiều so với thuật toán RSA cũ. Hãy chạy các lệnh sau trong terminal của bạn:</p>
    <div class="cmd-block"># Tạo SSH Key cho tài khoản công ty (Work)
ssh-keygen -t ed25519 -C "huy.luu@company.com" -f ~/.ssh/id_ed25519_work

# Tạo SSH Key cho tài khoản cá nhân (Personal)
ssh-keygen -t ed25519 -C "luuhuy.personal@gmail.com" -f ~/.ssh/id_ed25519_personal</div>

    <div class="guide-section-title">🚀 2. Viết file cấu hình SSH Client (~/.ssh/config)</div>
    <p>Tạo hoặc mở file \`~/.ssh/config\` và thiết lập các alias chuyển mạch tài khoản tự động:</p>
    <div class="cmd-block"># Cấu hình cho tài khoản Công việc (Work)
Host github.com-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work
  IdentitiesOnly yes

# Cấu hình cho tài khoản Cá nhân (Personal)
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
  IdentitiesOnly yes</div>

    <div class="guide-section-title">⚙️ 3. Cách sử dụng khi Clone và làm việc thực tế</div>
    <p>Khi sao chép link clone SSH từ GitHub, hãy thay thế cụm từ mặc định \`github.com\` bằng alias bạn đã cấu hình:</p>
    <div class="cmd-block"># Link gốc: git@github.com:my-company/admin-dashboard.git
# Lệnh clone thực tế:
git clone git@github.com-work:my-company/admin-dashboard.git

# Link gốc: git@github.com:huy293/devops-flowchart.git
# Lệnh clone thực tế:
git clone git@github.com-personal:huy293/devops-flowchart.git</div>
    
    <p>Để đảm bảo thông tin Commit Author (Name/Email) chính xác cho từng dự án, hãy truy cập vào thư mục repo dự án đó và chạy lệnh cấu hình local:</p>
    <div class="cmd-block"># Trong thư mục dự án công việc:
git config user.name "Huy Luu (Work)"
git config user.email "huy.luu@company.com"

# Trong thư mục dự án cá nhân:
git config user.name "huy293"
git config user.email "luuhuy.personal@gmail.com"</div>
  `,

  'k8s-core': `
    <div class="guide-card-tag" style="color:#64b5f6;border-color:rgba(100,181,246,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Kiến Trúc Kubernetes & Khởi Tạo Manifest Chuẩn Doanh Nghiệp</h2>
    <p class="guide-subtitle">Đi sâu vào hoạt động nội tại của K8s cluster và cơ chế cấu hình mô tả khai báo (Declarative).</p>

    <div class="guide-section-title">☸️ 1. Phân Tích Luồng Hoạt Động Của Control Plane</div>
    <p>Khi bạn chạy lệnh \`kubectl apply -f manifest.yaml\`, quy trình điều phối diễn ra như sau:</p>
    <ol>
      <li>Lệnh gửi đến **kube-apiserver** để xác thực quyền truy cập và kiểm tra cú pháp YAML.</li>
      <li>**kube-apiserver** ghi nhận cấu hình mong muốn vào cơ sở dữ liệu **etcd**.</li>
      <li>**kube-controller-manager** phát hiện ra cấu hình mong muốn có 3 pods nhưng hệ thống hiện tại chưa có pod nào. Nó gửi lệnh tạo pods.</li>
      <li>**kube-scheduler** quét tài nguyên của các máy vật lý (Worker Nodes), lựa chọn node tối ưu nhất và gán Pod vào node đó.</li>
      <li>**kubelet** chạy trên Worker Node đích nhận thông báo, ra lệnh cho Container Runtime (containerd) pull image và chạy container.</li>
    </ol>

    <div class="guide-section-title">📝 2. Giải nghĩa chi tiết file Manifest Deployment + Service</div>
    <p>Dưới đây là file YAML chuẩn hóa sản xuất của một web service sử dụng cơ chế High Availability:</p>
    <div class="cmd-block">apiVersion: apps/v1
kind: Deployment
metadata:
  name: microservice-web
  namespace: production
  labels:
    app: node-app
    tier: frontend
spec:
  replicas: 3 # Chạy 3 Pods phân tán trên các node để tránh sập app
  strategy:
    type: RollingUpdate # Cập nhật ứng dụng tuần tự không downtime
    rollingUpdate:
      maxSurge: 1       # Cho phép spawn tối đa 1 pod mới trong khi cập nhật
      maxUnavailable: 0 # Đảm bảo không có pod nào bị ngắt kết nối trong lúc update
  selector:
    matchLabels:
      app: node-app # Phải khớp hoàn toàn với label của Pod ở dưới
  template:
    metadata:
      labels:
        app: node-app
    spec:
      containers:
      - name: app-container
        image: ghcr.io/username/node-app:v1.2.0
        ports:
        - containerPort: 3000
        # Thiết lập ngưỡng tài nguyên tránh lỗi sập cả Node vật lý
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
  name: web-service-entrypoint
  namespace: production
spec:
  selector:
    app: node-app # Định tuyến traffic vào các Pod có label app=node-app
  ports:
  - protocol: TCP
    port: 80        # Port của Service lộ ra cho mạng nội bộ cluster
    targetPort: 3000 # Port thực tế ứng dụng chạy bên trong Container
  type: ClusterIP   # Chỉ expose trong mạng nội bộ Cluster</div>
  `,

  'k8s-config': `
    <div class="guide-card-tag" style="color:#4dd0e1;border-color:rgba(77,208,225,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Quản Lý ConfigMap, Secrets & Expose Domain Với Nginx Ingress</h2>
    <p class="guide-subtitle">Hướng dẫn đưa cấu hình động, thông tin mật vào pod và cài đặt định tuyến HTTP/HTTPS ngoài Cluster.</p>

    <div class="guide-section-title">📂 1. Phân biệt Cách Truyền Config: Environment vs Volume Mount</div>
    <ul>
      <li><strong>Dạng Biến môi trường (Environment Variables):</strong> Đơn giản, dễ đọc trực tiếp trong code. Tuy nhiên, nếu bạn cập nhật giá trị trong ConfigMap/Secret trên K8s, giá trị biến môi trường trong Container **SẼ KHÔNG TỰ CẬP NHẬT** trừ khi bạn restart pod.</li>
      <li><strong>Dạng File (Volume Mount):</strong> K8s sẽ mount ConfigMap/Secret thành các file trong một thư mục chỉ định. Cách này có ưu điểm vượt trội: Khi bạn sửa ConfigMap trên Cluster, K8s sẽ tự động đồng bộ giá trị mới vào file trong container (sau khoảng 10-60 giây) mà **không cần restart pod**.</li>
    </ul>

    <div class="guide-section-title">🛡️ 2. Cách Tạo & Mã hóa/Giải mã K8s Secrets</div>
    <p>Kubernetes Secret lưu trữ thông tin dưới dạng **Base64**. Hãy cẩn thận: Base64 chỉ là cơ chế biến đổi văn bản để tránh lộ mật khẩu vô tình, nó **không phải** là mã hóa. Để mã hóa thực sự cần bật KMS provider trong etcd hoặc dùng HashiCorp Vault.</p>
    <div class="cmd-block"># Mã hóa một chuỗi mật khẩu sang Base64 bằng Terminal
echo -n "mypassword123" | base64
# Kết quả trả về: bXlwYXNzd29yZDEyMw==

# Giải mã Base64 ngược lại
echo -n "bXlwYXNzd29yZDEyMw==" | base64 --decode
# Kết quả trả về: mypassword123</div>

    <div class="guide-section-title">📝 File Manifest YAML Tổng Hợp</div>
    <div class="cmd-block">apiVersion: v1
kind: ConfigMap
metadata:
  name: backend-configs
  namespace: production
data:
  API_URL: "https://api.mycompany.com"
  CACHE_TTL: "3600"
---
apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
  namespace: production
type: Opaque
data:
  # Mật khẩu đã encode Base64
  DB_PASSWORD: bXlwYXNzd29yZDEyMw==
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: company-ingress-routing
  namespace: production
  annotations:
    kubernetes.io/ingress.class: "nginx"
    # Tự động xin chứng chỉ SSL từ Let's Encrypt qua cert-manager
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/proxy-body-size: "20m"
spec:
  tls:
  - hosts:
    - app.mycompany.com
    secretName: app-tls-certificates # Tên secret lưu chứng chỉ SSL sau khi xin thành công
  rules:
  - host: app.mycompany.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service-entrypoint
            port:
              number: 80</div>
  `,

  'k8s-helm': `
    <div class="guide-card-tag" style="color:#9575cd;border-color:rgba(149,117,205,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Helm Chart: Đóng Gói Ứng Dụng Chuyên Nghiệp</h2>
    <p class="guide-subtitle">Tối ưu hóa quản trị tài nguyên Kubernetes bằng cách biến các file manifest tĩnh thành các gói dynamic package có thể tái sử dụng.</p>

    <div class="guide-section-title">📂 1. Cấu Trúc File & Thư Mục Helm Chart Chuẩn</div>
    <p>Khi bạn chạy lệnh \`helm create my-chart\`, Helm sẽ tạo ra một bộ khung cấu trúc thư mục sau:</p>
    <ul>
      <li>\`Chart.yaml\`: File mô tả siêu dữ liệu (Tên chart, Phiên bản API, Phiên bản ứng dụng).</li>
      <li>\`values.yaml\`: File quan trọng nhất, lưu trữ tất cả các giá trị cấu hình mặc định (Image, Replicas, Port, Ingress...). Người dùng sẽ ghi đè cấu hình tại đây.</li>
      <li>\`templates/\`: Chứa các file manifest YAML của Kubernetes được chèn mã Go-template.</li>
      <li>\`templates/notes.txt\`: Đoạn văn bản hướng dẫn hiển thị lên màn hình console sau khi cài đặt thành công.</li>
    </ul>

    <div class="guide-section-title">⚙️ 2. Ví dụ Template Hóa file deployment.yaml</div>
    <p>Thay vì ghi cứng các thông số, ta dùng biểu thức \`{{ .Values.ten_bien }}\` để lấy cấu hình động từ file \`values.yaml\`:</p>
    <div class="cmd-block"># templates/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ .Release.Name }}-app
  labels:
    app: {{ .Chart.Name }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app: {{ .Chart.Name }}
  template:
    metadata:
      labels:
        app: {{ .Chart.Name }}
    spec:
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          ports:
            - containerPort: {{ .Values.service.port }}</div>

    <div class="guide-section-title">🛠️ 3. Bảng Tra Cứu Lệnh Helm CLI Nhanh</div>
    <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; text-align:left; color:#cbd5e1;">
      <thead>
        <tr style="border-bottom:2px solid rgba(255,255,255,0.1); padding-bottom:10px;">
          <th style="padding:10px 0; color:#9575cd;">Lệnh Helm</th>
          <th style="padding:10px 0;">Giải thích Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">helm lint ./my-chart</td>
          <td style="padding:10px 0;">Kiểm tra lỗi cú pháp YAML và logic cấu hình của Chart.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">helm install my-app ./my-chart</td>
          <td style="padding:10px 0;">Deploy ứng dụng lên Kubernetes cluster dưới tên bản phát hành (release) 'my-app'.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">helm upgrade my-app ./my-chart -f values-prod.yaml</td>
          <td style="padding:10px 0;">Cập nhật phiên bản mới hoặc ghi đè file values cấu hình sản xuất.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">helm rollback my-app 2</td>
          <td style="padding:10px 0;">Khôi phục ứng dụng ngay lập tức về revision thứ 2 nếu bản cập nhật mới bị lỗi.</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">helm uninstall my-app</td>
          <td style="padding:10px 0;">Gỡ bỏ sạch toàn bộ tài nguyên đã tạo liên quan đến bản phát hành đó.</td>
        </tr>
      </tbody>
    </table>
  `,

  'aapanel-proxy': `
    <div class="guide-card-tag" style="color:#81c784;border-color:rgba(129,199,132,0.3);margin-bottom:0.8rem">VPS & AAPANEL</div>
    <h2>aaPanel: Nginx Reverse Proxy Docker & Let\'s Encrypt</h2>
    <p class="guide-subtitle">Hướng dẫn trỏ tên miền công cộng về container Docker chạy trên VPS sử dụng giao diện quản trị aaPanel.</p>

    <div class="guide-section-title">🌐 Quy trình thiết lập Reverse Proxy từng bước</div>
    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(129,199,132,0.15);color:#81c784">1</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Khởi chạy container app của bạn trên một port cụ thể:</strong></p>
          <div class="cmd-block">docker run -d --name node-app -p 8080:3000 my-image:latest</div>
          <p>Ở đây ta đã map port vật lý 8080 của VPS vào port 3000 của container.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(129,199,132,0.15);color:#81c784">2</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Tạo Website trên aaPanel:</strong></p>
          <p>Truy cập aaPanel -> Chọn mục <strong>Website</strong> -> Click <strong>Add site</strong>. Nhập domain mong muốn (ví dụ: \`app.domain.com\`). Ở phần Database chọn None và PHP version chọn Static.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(129,199,132,0.15);color:#81c784">3</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Cấu hình SSL Let's Encrypt:</strong></p>
          <p>Tại danh sách website, click vào tên site vừa tạo -> Chọn mục <strong>SSL</strong> -> Chọn tab <strong>Let's Encrypt</strong>. Tích chọn tên miền của bạn và click <strong>Apply</strong>. aaPanel sẽ tự động đăng ký và sinh SSL cron job tự động gia hạn định kỳ.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(129,199,132,0.15);color:#81c784">4</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Thiết lập Reverse Proxy:</strong></p>
          <p>Vẫn trong bảng cấu hình site -> Chọn mục <strong>Reverse Proxy</strong> -> Click <strong>Add reverse proxy</strong>.
          <br>• Proxy Name: Nhập tùy ý (ví dụ: \`docker-app\`)
          <br>• Target URL: Nhập \`http://127.0.0.1:8080\`
          <br>Click <strong>Save</strong> để hoàn tất.</p>
        </div>
      </div>
    </div>

    <div class="guide-section-title">⚙️ Cấu hình Nginx nâng cao cho WebSockets</div>
    <p>Nếu ứng dụng của bạn sử dụng Socket.io hoặc WebSocket (như các app React, Chat app), cấu hình proxy mặc định sẽ bị lỗi. Click nút <strong>Conf</strong> tại dòng proxy vừa tạo và chèn đoạn code sau:</p>
    <div class="cmd-block">location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
    
    # Kích hoạt WebSocket support
    proxy_http_version 1.1;
    proxy_set_header Upgrade \$http_upgrade;
    proxy_set_header Connection "upgrade";
    
    # Cấu hình timeouts và kích thước file upload
    proxy_read_timeout 86400;
    client_max_body_size 50m;
}</div>
  `,

  'aws-vpc': `
    <div class="guide-card-tag" style="color:#e0e0e0;border-color:rgba(224,224,224,0.3);margin-bottom:0.8rem">AWS CLOUD</div>
    <h2>Kiến trúc mạng AWS VPC 3-Tier chuẩn Production</h2>
    <p class="guide-subtitle">Thiết kế hạ tầng mạng đám mây cô lập, độ khả dụng cao (Multi-AZ) và bảo mật tối đa.</p>

    <div class="guide-section-title">☁️ Phân tích kiến trúc 3 Tầng Subnet</div>
    <ul>
      <li><strong>Tầng 1: Public Subnets (Dành cho Inbound/Outbound Public Traffic):</strong>
        <ul>
          <li>Chứa Application Load Balancer (ALB), NAT Gateway, Bastion Host.</li>
          <li>Bảng định tuyến (Route Table) trỏ dòng traffic \`0.0.0.0/0\` trực tiếp qua Internet Gateway (IGW).</li>
        </ul>
      </li>
      <li><strong>Tầng 2: Private Subnets (Dành cho Business Logic App):</strong>
        <ul>
          <li>Chứa EC2 App Servers, ECS cluster, EKS Worker Nodes.</li>
          <li>Không thể truy cập trực tiếp từ Internet. Muốn giao tiếp ra ngoài (ví dụ tải thư viện) phải đi qua NAT Gateway nằm bên Public Subnet.</li>
        </ul>
      </li>
      <li><strong>Tầng 3: Isolated Subnets (Dành cho Database & Caching):</strong>
        <ul>
          <li>Chứa Database (RDS PostgreSQL/MySQL), ElastiCache Redis.</li>
          <li>Hoàn toàn cô lập: Không có route nào trỏ tới internet hay NAT Gateway. Chỉ nhận kết nối nội bộ từ các Security Group của Tầng 2.</li>
        </ul>
      </li>
    </ul>

    <div class="guide-section-title">🔒 Cấu hình Security Group chuẩn</div>
    <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; text-align:left; color:#cbd5e1;">
      <thead>
        <tr style="border-bottom:2px solid rgba(255,255,255,0.1); padding-bottom:10px;">
          <th style="padding:10px 0;">Security Group</th>
          <th style="padding:10px 0;">Inbound Rules</th>
          <th style="padding:10px 0;">Outbound Rules</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">SG-ALB</td>
          <td style="padding:10px 0;">Cho phép HTTP (80) & HTTPS (443) từ \`0.0.0.0/0\`</td>
          <td style="padding:10px 0;">Cho phép chuyển tiếp tới SG-APP</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">SG-APP</td>
          <td style="padding:10px 0;">Chỉ cho phép port ứng dụng (VD: 3000) từ nguồn SG-ALB</td>
          <td style="padding:10px 0;">Cho phép truy cập Database (SG-DB) và NAT Gateway</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">SG-DB</td>
          <td style="padding:10px 0;">Chỉ cho phép port DB (VD: 5432) từ nguồn duy nhất là SG-APP</td>
          <td style="padding:10px 0;">Block toàn bộ Outbound</td>
        </tr>
      </tbody>
    </table>
  `,

  'aws-compute': `
    <div class="guide-card-tag" style="color:#f06292;border-color:rgba(240,98,146,0.3);margin-bottom:0.8rem">AWS CLOUD</div>
    <h2>Deploy Ứng dụng với AWS EC2, S3 & CloudFront CDN</h2>
    <p class="guide-subtitle">Xây dựng giải pháp lưu trữ tĩnh an toàn và phân phối nội dung tốc độ cao trên toàn cầu.</p>

    <div class="guide-section-title">⚡ Hướng dẫn deploy ứng dụng Auto-Scaling</div>
    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(240,98,146,0.15);color:#f06292">1</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Thiết lập EC2 Target Group:</strong></p>
          <p>Tạo Target Group chứa các EC2 instance. Cấu hình Health Check để định kỳ gửi HTTP request kiểm tra tính sẵn sàng của ứng dụng.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(240,98,146,0.15);color:#f06292">2</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Khởi tạo Application Load Balancer (ALB):</strong></p>
          <p>Đặt ALB ở Public Subnet để nhận request từ người dùng, gắn chứng chỉ SSL từ ACM (AWS Certificate Manager), giải mã SSL và định tuyến traffic HTTP đã giải mã vào Target Group.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(240,98,146,0.15);color:#f06292">3</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Cấu hình Auto Scaling Group (ASG):</strong></p>
          <p>Liên kết ASG với Target Group. Thiết lập chính sách Scaling Policy: Khi CPU trung bình của cụm EC2 > 70%, ASG sẽ tự động spawn thêm EC2 instance mới dựa trên Launch Template có sẵn để chịu tải.</p>
        </div>
      </div>
    </div>

    <div class="guide-section-title">📦 Lưu trữ Tĩnh với S3 & Phân phối qua CloudFront CDN</div>
    <p>Đối với các tệp tĩnh như hình ảnh, CSS, JavaScript, Media, ta không nên lưu trực tiếp trên EC2 vì sẽ tốn ổ cứng và tốn băng thông xử lý. Giải pháp tối ưu là đưa lên S3 và phân phối bằng CloudFront CDN:</p>
    
    <div class="step-list">
      <div class="step-item">
        <div class="step-num" style="background:rgba(240,98,146,0.15);color:#f06292">A</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Tạo S3 Bucket:</strong></p>
          <p>Tạo bucket lưu trữ và bật tính năng Block all public access để bảo mật tuyệt đối các file lưu trữ bên trong.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(240,98,146,0.15);color:#f06292">B</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Cấu hình CloudFront Distribution:</strong></p>
          <p>Tạo CloudFront Distribution với Origin trỏ về S3 Bucket vừa tạo. Kích hoạt tính năng **Origin Access Control (OAC)** để CloudFront có thể đọc được file trong S3 private bucket.</p>
        </div>
      </div>
      <div class="step-item">
        <div class="step-num" style="background:rgba(240,98,146,0.15);color:#f06292">C</div>
        <div class="step-body">
          <p><strong style="color:#e2e8f0">Cập nhật S3 Bucket Policy:</strong></p>
          <p>Sử dụng Bucket Policy được sinh ra từ CloudFront để cho phép chỉ định riêng CloudFront Service Principal được quyền **s3:GetObject** đối với bucket này:</p>
          <div class="cmd-block">{
  "Version": "2012-10-17",
  "Statement": {
    "Sid": "AllowCloudFrontServicePrincipalReadOnly",
    "Effect": "Allow",
    "Principal": {
      "Service": "cloudfront.amazonaws.com"
    },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-bucket-name/*",
    "Condition": {
      "StringEquals": {
        "AWS:SourceArn": "arn:aws:cloudfront::123456789012:distribution/EDFDVBD632S1"
      }
    }
  }
}</div>
        </div>
      </div>
    </div>
  `
};

const guideContentDeep = {
  'docker-concepts': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>Kiến Trúc Nhân Docker & Cơ Chế Cách Ly Hệ Điều Hành Ở Cấp Độ Kernel</h2>
    <p class="guide-subtitle">Đọc hiểu sâu về Container Runtimes (runc, containerd), Linux Namespaces, cgroups v2, OverlayFS internals và cấu hình bảo mật nâng cao.</p>

    <div class="guide-section-title">⚙️ 1. Đi Sâu Vào Container Runtime Engine: OCI Specification, runc & containerd</div>
    <p>Khi bạn thực thi lệnh \`docker run\`, Docker không tự khởi chạy container mà ủy quyền qua một chuỗi các runtime phân lớp theo chuẩn **OCI (Open Container Initiative)**:</p>
    
    <div class="thesis-quote">
      <strong>Kiến trúc phân lớp:</strong> Docker Client ➔ dockerd ➔ containerd ➔ containerd-shim ➔ runc ➔ Container Process (PID 1)
    </div>
    
    <ul>
      <li><strong>dockerd (Docker Daemon):</strong> Đóng vai trò là REST API server cấp cao. Nó nhận lệnh từ client, quản lý xác thực, sinh UUID cho container, chuẩn bị các thông số mạng (networks), ổ đĩa (volumes) và chuyển tiếp yêu cầu sang **containerd** qua gRPC.</li>
      <li><strong>containerd (High-Level Runtime):</strong> Dự án thuộc CNCF quản lý vòng đời container ở mức trừu tượng: pull/push images, giám sát trạng thái của các shim, phân phối tài nguyên lưu trữ. containerd gọi **runc** để thực thi việc tạo container.</li>
      <li><strong>runc (Low-Level Runtime):</strong> Công cụ CLI gọn nhẹ tuân thủ OCI. Nó trực tiếp tương tác với Linux Kernel bằng các system calls để thiết lập Namespaces, cgroups cho container, chạy tiến trình chính của ứng dụng và tự hủy/biến mất sau khi tiến trình chạy ổn định.</li>
      <li><strong>containerd-shim:</strong> Tiến trình đệm cực kỳ quan trọng. Nó đứng giữa containerd và runc. Shim hoạt động như một tiến trình cha (Parent Process) giữ cho các File Descriptors (stdin, stdout, stderr) mở ngay cả khi **dockerd** hoặc **containerd** bị khởi động lại hoặc nâng cấp. Điều này giúp hệ thống cập nhật Docker engine mà các container đang chạy **không bị downtime** (Live Restore).</li>
    </ul>

    <div class="guide-section-title">🔒 2. Cơ Chế Cô Lập: Linux Kernel Namespaces Internals</div>
    <p>Docker container bản chất không phải máy ảo, nó chỉ là một tiến trình thường chạy trên Host OS nhưng bị giới hạn góc nhìn thông qua 7 Linux Kernel Namespaces được tạo ra bởi lệnh gọi hệ thống \`clone()\` hoặc \`unshare()\`:</p>
    <ul>
      <li><strong>PID Namespace (Process ID):</strong> Cách ly tiến trình. Tiến trình chính của container nhìn thấy mình là **PID 1** (giống như tiến trình init hệ thống), nhưng ngoài máy host, nó thực chất chỉ là một tiến trình thường có PID ngẫu nhiên (ví dụ: PID 28439). Điều này ngăn container can thiệp vào các tiến trình khác trên VPS host.</li>
      <li><strong>NET Namespace (Network):</strong> Tạo card mạng ảo riêng biệt (\`veth-pair\`), bảng định tuyến (routing tables) và cấu hình tường lửa (iptables) riêng.</li>
      <li><strong>MNT Namespace (Mount):</strong> Cung cấp một view mount point hệ thống tệp tin cô lập. Tiến trình bên trong container chỉ nhìn thấy root filesystem ảo của nó (\`/\`) mà không thể truy cập các thư mục khác ngoài máy host trừ khi được mount cụ thể.</li>
      <li><strong>IPC Namespace (Inter-Process Communication):</strong> Ngăn các tiến trình trong container giao tiếp trực tiếp với các tiến trình bên ngoài qua bộ nhớ chia sẻ (Shared Memory, POSIX message queues).</li>
      <li><strong>UTS Namespace (UNIX Timesharing System):</strong> Cho phép container có hostname và domain name riêng biệt.</li>
      <li><strong>USER Namespace:</strong> Ánh xạ User ID và Group ID (UID/GID) bên trong container ra máy host. Ví dụ: User root (UID 0) bên trong container được ánh xạ ra User thường (UID 10001) ngoài host. Ngăn chặn nguy cơ chiếm quyền điều khiển host OS khi container bị hack.</li>
      <li><strong>CGROUP Namespace:</strong> Cô lập góc nhìn về các Control Groups ảo, giúp tiến trình không thể đọc thông tin cgroup của các tiến trình ngoài.</li>
    </ul>

    <div class="guide-section-title">📊 3. Giới Hạn Tài Nguyên Hệ Thống: cgroups v1 vs cgroups v2</div>
    <p>**cgroups (Control Groups)** là cơ chế giới hạn, kiểm soát lượng tài nguyên phần cứng (CPU, Memory, Disk I/O, PIDs) mà một container được phép sử dụng:</p>
    <ul>
      <li><strong>cgroups v1:</strong> Cấu trúc đa phân cấp (multiple hierarchies). Mỗi controller (như memory, cpu) được quản lý độc lập. Gây ra hiện tượng tranh chấp tài nguyên và đồng bộ hóa rất khó khăn giữa các nhóm tài nguyên khác nhau.</li>
      <li><strong>cgroups v2 (Linux Kernel 4.5+):</strong> Gom tất cả các controllers vào một cây phân cấp duy nhất (Unified Hierarchy). Giúp kiểm soát tài nguyên cực kỳ chính xác. Ví dụ, khi bộ nhớ cạn kiệt, cgroups v2 kích hoạt OOM (Out of Memory) Killer chính xác lên container vi phạm mà không gây ảnh hưởng đến host OS hoặc container lân cận.</li>
    </ul>
    <p>Ví dụ thiết lập giới hạn CPU và Memory cho container bằng CLI:</p>
    <div class="cmd-block"># Giới hạn container dùng tối đa 1.5 CPU cores và 512MB RAM, tắt swap memory
docker run -d \\
  --name production-api \\
  --cpus="1.5" \\
  --memory="512m" \\
  --memory-swap="512m" \\
  -p 8080:8080 \\
  my-api:v1.0</div>

    <div class="guide-section-title">📂 4. Phân Tích Sâu Storage Driver: Cơ Chế Hoạt Động Của Overlay2</div>
    <p>**Overlay2** là driver lưu trữ tiêu chuẩn hiện nay trên Linux. Nó kết hợp hai thư mục trên host để tạo ra một view duy nhất (Union Mount):</p>
    <ul>
      <li><strong>lowerdir:</strong> Các thư mục chỉ đọc (Read-only layers) đại diện cho các layer của Docker Image gốc.</li>
      <li><strong>upperdir:</strong> Thư mục có quyền ghi (Read-write layer) đại diện cho Container Layer. Tất cả dữ liệu mới ghi vào container sẽ nằm ở đây.</li>
      <li><strong>merged:</strong> Thư mục hợp nhất (Union Mount point). Đây chính là cái mà container thực sự nhìn thấy khi chạy.</li>
      <li><strong>workdir:</strong> Thư mục làm việc nội bộ của OverlayFS dùng để chuẩn bị các thay đổi (chẳng hạn như Copy-on-Write) trước khi ghi đè vào upperdir.</li>
    </ul>
    
    <div class="thesis-quote">
      <strong>OOM & CoW Performance Penalty:</strong> Nếu ứng dụng của bạn liên tục ghi đè các file lớn có sẵn trong \`lowerdir\` (ví dụ: file DB sqlite 2GB), Docker phải copy toàn bộ file 2GB đó lên \`upperdir\` trước khi sửa đổi. Điều này gây thắt nút cổ chai I/O. **Giải pháp:** Luôn sử dụng Docker Volumes cho dữ liệu động!
    </div>

    <div class="guide-section-title">🛡️ 5. Bảo Mật Container Nâng Cao (Hardening Production Containers)</div>
    <p>Để bảo vệ hệ thống VPS khỏi các cuộc tấn công container breakout, ta áp dụng 3 kỹ thuật bảo mật cốt lõi:</p>
    <ul>
      <li><strong>1. Capability Dropping:</strong> Mặc định root user trong container có khoảng 14 capabilities (quyền quản trị nhân). Ta nên loại bỏ tất cả và chỉ giữ lại quyền tối thiểu cần thiết:
        <div class="cmd-block"># Bỏ tất cả quyền quản trị nhân, chỉ cho phép bind port dưới 1024
docker run -d \\
  --cap-drop=ALL \\
  --cap-add=NET_BIND_SERVICE \\
  nginx:alpine</div>
      </li>
      <li><strong>2. Read-Only Root Filesystem:</strong> Chặn việc ghi file độc hại vào container bằng cách khóa cứng root filesystem, và chỉ mở ghi ở các thư mục tạm:
        <div class="cmd-block">docker run -d \\
  --read-only \\
  --tmpfs /tmp \\
  --tmpfs /var/cache/nginx \\
  -p 80:80 \\
  nginx:alpine</div>
      </li>
      <li><strong>3. Syscall Filtering (Seccomp Profiles):</strong> Seccomp chặn các cuộc gọi hệ thống nguy hiểm trực tiếp lên Linux kernel. Docker có một profile mặc định chặn khoảng 44 syscalls nguy hiểm (như \`reboot\`, \`keyctl\`).</li>
    </ul>

    <div class="guide-section-title">🛠️ 6. Scripting Nâng Cao & Go-Template Filtering</div>
    <p>Trong tự động hóa DevOps, việc parse JSON từ \`docker inspect\` bằng \`jq\` rất phổ biến, nhưng Docker CLI có hỗ trợ sẵn **Go-Template** trực tiếp cực kỳ mạnh mẽ:</p>
    <div class="cmd-block"># 1. Trích xuất địa chỉ IP chính xác của container 'web-app'
docker inspect --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' web-app

# 2. Liệt kê các port đã binding ra ngoài máy host của container
docker inspect --format '{{range $p, $conf := .NetworkSettings.Ports}}{{range $conf}}{{.HostPort}}{{end}}{{end}}' web-app

# 3. Liệt kê dung lượng đĩa thực tế của từng container đang chạy
docker system df -v</div>

    <div class="guide-section-title" style="color: #ff7043; border-bottom: 2px solid rgba(255,112,67,0.3)">🔥 7. Production Gotchas & Senior Experience: Những Cạm Bẫy Thực Chiến</div>
    <p>Đây là những bài học "đau thương" trên môi trường sản xuất thực tế mà tài liệu Get Started của Docker không bao giờ nói cho bạn biết:</p>
    
    <ul>
      <li style="margin-bottom: 1.5rem;">
        <strong style="color: #ffb74d;">Gotcha #1: Thảm họa Zombie Process khi chạy trực tiếp làm PID 1</strong>
        <br>Khi bạn viết Dockerfile kiểu: \`CMD ["node", "app.js"]\` hoặc \`CMD ["python", "app.py"]\`. Ứng dụng của bạn sẽ chạy với quyền **PID 1**.
        <br>• *Cạm bẫy:* Trong Linux, PID 1 (init process) có nhiệm vụ cực kỳ quan trọng là dọn dẹp các tiến trình con mồ côi (Zombie processes) sau khi chúng kết thúc. Node.js hay Python không được thiết kế để làm nhiệm vụ của một init system. Hậu quả là sau một thời gian chạy, hệ thống của bạn sẽ tràn ngập Zombie processes, làm cạn kiệt Process Table khiến máy VPS không thể khởi tạo thêm tiến trình mới và crash hoàn toàn.
        <br>• *Giải pháp:* Luôn dùng cờ \`--init\` khi chạy container (\`docker run --init ...\`) hoặc tích hợp công cụ init siêu nhẹ như **Tini** trực tiếp trong Dockerfile:
        <div class="cmd-block"># Thêm tini vào Alpine Image
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "app.js"]</div>
      </li>

      <li style="margin-bottom: 1.5rem;">
        <strong style="color: #ffb74d;">Gotcha #2: Ác mộng Latency do CPU Throttling (CFS Bandwidth Limit)</strong>
        <br>Trong Kubernetes hoặc Docker Compose, ta thường đặt giới hạn CPU để tránh một container ngốn sạch tài nguyên của máy host (Ví dụ: \`resources.limits.cpu: "1.0"\`).
        <br>• *Cạm bẫy:* Linux Kernel giới hạn CPU bằng cách chia thời gian thành các chu kỳ (CFS Period - thường là 100ms). Với giới hạn 1 CPU, container của bạn chỉ được chạy tối đa 100ms trong mỗi chu kỳ. Nếu ứng dụng của bạn là đa luồng (multi-threaded) và tiêu thụ hết 100ms này ngay trong 20ms đầu tiên của chu kỳ, nhân Linux sẽ **đông cứng (throttle)** hoàn toàn container trong 80ms còn lại! Điều này tạo ra các độ trễ cực lớn (Latency spikes) cho các API Request, mặc dù theo dõi tổng quan CPU máy host vẫn đang rảnh rỗi dưới 20%.
        <br>• *Giải pháp:* Đối với các ứng dụng nhạy cảm về độ trễ, **không nên đặt giới hạn cứng CPU (Limits)**, thay vào đó chỉ nên cấu hình CPU Requests (hoặc dùng \`--cpu-shares\` trong Docker) để hệ thống tự phân phối động khi có tranh chấp, hoặc điều chỉnh số lượng threads của runtime khớp với CPU được cấp phát.
      </li>

      <li style="margin-bottom: 1.5rem;">
        <strong style="color: #ffb74d;">Gotcha #3: VPS báo còn dư 100GB đĩa nhưng vẫn bị lỗi "No space left on device" (Cạn kiệt Inodes)</strong>
        <br>Một buổi sáng, database của bạn sập, Docker báo lỗi ghi file do hết dung lượng, nhưng khi bạn chạy \`df -h\`, VPS vẫn báo còn trống hàng chục GB dung lượng lưu trữ.
        <br>• *Cạm bẫy:* Trên hệ điều hành Linux, mỗi file hoặc thư mục được quản lý bởi một cấu trúc dữ liệu gọi là **Inode**. Khi bạn cài đặt các package nặng như \`node_modules\` chứa hàng triệu file nhỏ, hoặc Docker sinh quá nhiều cache layers trung gian không được dọn dẹp, bạn sẽ tiêu thụ hết sạch số lượng Inodes được cấp phát cho ổ đĩa trước khi tiêu thụ hết dung lượng GB.
        <br>• *Giải pháp:* Chạy lệnh \`df -i\` để kiểm tra tỷ lệ sử dụng Inode. Nếu bị cạn kiệt, hãy chạy dọn dẹp hệ thống ngay lập tức:
        <div class="cmd-block"># Dọn dẹp triệt để cache builds, images rác và containers đã dừng
docker system prune -a --volumes -f</div>
      </li>

      <li style="margin-bottom: 1.5rem;">
        <strong style="color: #ffb74d;">Gotcha #4: Nguy cơ Container Breakout chiếm quyền điều khiển VPS qua đặc quyền Privileged</strong>
        <br>Đôi khi để tiện cấu hình mạng hoặc mount ổ đĩa, dev thường chạy container với cờ \`--privileged\`.
        <br>• *Cạm bẫy:* Cờ này gỡ bỏ hoàn toàn mọi rào cản bảo mật của container, cho phép tiến trình bên trong container truy cập trực tiếp vào phần cứng máy host. Nếu hacker chiếm quyền kiểm soát container này qua một lỗ hổng ứng dụng, chúng chỉ cần thực hiện 3 dòng lệnh đơn giản để mount ổ đĩa thật của VPS host và ghi mã độc trực tiếp vào file crontab của VPS, từ đó chiếm hoàn toàn quyền kiểm soát VPS host chỉ trong vài giây.
        <br>• *Giải pháp:* Tuyệt đối không dùng \`--privileged\` trên production. Thay vào đó, hãy chỉ cấp phát chính xác những quyền (capabilities) cụ thể cần dùng qua cờ \`--cap-add\`.
      </li>

      <li style="margin-bottom: 1.5rem;">
        <strong style="color: #ffb74d;">Gotcha #5: Tối ưu Cache khi build Docker trên các CI/CD Remote Runner</strong>
        <br>Khi build Docker cục bộ, Docker tận dụng cache cực tốt nên build rất nhanh. Nhưng trên GitHub Actions hoặc GitLab CI, mỗi job build chạy trên một máy ảo rỗng hoàn toàn, khiến Docker luôn phải tải lại base images và cài đặt dependencies từ đầu (Build mất 10-15 phút).
        <br>• *Cạm bẫy:* Việc chạy \`docker build\` thông thường trên CI sẽ bỏ phí hoàn toàn tính năng caching của Docker.
        <br>• *Giải pháp:* Sử dụng Docker Buildx kết hợp với **registry cache** (lưu cache trực tiếp lên Docker Registry) hoặc **GitHub Actions cache backend**:
        <div class="cmd-block"># Buildx CLI cấu hình đẩy cache lên registry để lần sau kéo về dùng lại
docker buildx build \\
  --cache-from=type=registry,ref=myregistry.com/app:cache \\
  --cache-to=type=registry,ref=myregistry.com/app:cache,mode=max \\
  -t myregistry.com/app:latest --push .</div>
        <br>Hoặc tối ưu hóa dependencies cài đặt trong Dockerfile bằng cách dùng **Cache Mounts** để giữ lại thư mục cache của package manager qua các lần build:
        <div class="cmd-block"># Cache thư mục .npm để lần sau không tải lại
RUN --mount=type=cache,target=/root/.npm npm ci</div>
      </li>
    </ul>
  `,

  'docker-watchtower': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>Compose DRY, Profiles & Thiết Lập Private Registry</h2>
    <p class="guide-subtitle">Nâng cao hiệu quả quản trị multi-container với Compose Anchors, Extends, Profiles và dựng Docker Registry nội bộ.</p>

    <div class="guide-section-title">⚡ 1. Kỹ thuật YAML Anchors (&) & Aliases (*) trong Docker Compose</div>
    <p>Khi file compose của bạn phình to với 10+ microservices, việc lặp lại cấu hình logs, env, network sẽ dẫn đến lỗi bảo trì. Hãy dùng Anchors để định nghĩa một lần và Alias để tái sử dụng:</p>
    
    <div class="cmd-block">version: '3.8'

# 1. Định nghĩa template chung dùng làm anchor
x-logging-template: &default-logging
  logging:
    driver: "json-file"
    options:
      max-size: "50m"
      max-file: "3"

x-env-template: &default-env
  environment:
    NODE_ENV: production
    DB_PORT: 5432

services:
  api-service:
    image: company/api:latest
    <<: *default-logging   # Kế thừa cấu hình logging
    <<: *default-env       # Kế thừa biến môi trường
    ports:
      - "3000:3000"

  worker-service:
    image: company/worker:latest
    <<: *default-logging
    <<: *default-env
    environment:
      # Override hoặc bổ sung biến riêng biệt
      - WORKER_THREADS=4</div>

    <div class="guide-section-title">⚙️ 2. Chia môi trường bằng Docker Compose Profiles</div>
    <p>Profiles giúp bạn chạy các container tùy chỉnh trong cùng một file mà không cần tách nhiều file. Ví dụ chạy stack Dev/Prod hoặc thêm container Monitor chỉ khi cần thiết:</p>
    <div class="cmd-block">services:
  app:
    image: my-app
    ports:
      - "80:80"

  db-adminer:
    image: adminer
    profiles:
      - debug # Chỉ khởi chạy khi gọi profile debug
    ports:
      - "8080:8080"</div>
    <p>Chạy bình thường: \`docker compose up -d\`. Chạy cả debug tool: \`docker compose --profile debug up -d\`.</p>

    <div class="guide-section-title">🐳 3. Triển khai Local Private Registry riêng biệt</div>
    <p>Để lưu trữ image bảo mật trong mạng nội bộ công ty mà không cần đẩy lên Docker Hub public, ta tự dựng một Registry:</p>
    <div class="cmd-block"># Chạy registry container bảo mật qua SSL
docker run -d \\
  -p 5000:5000 \\
  --restart=always \\
  --name local-registry \\
  -v /opt/registry/certs:/certs \\
  -v /opt/registry/data:/var/lib/registry \\
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \\
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \\
  registry:2</div>
  `,

  'docker-opt': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>Hardening Bảo Mật Container & Build Multi-Arch với Buildx</h2>
    <p class="guide-subtitle">Đưa container về trạng thái Read-Only rootfs, chặn Syscalls bằng Seccomp và build image cho ARM64/AMD64.</p>

    <div class="guide-section-title">🔒 1. Chế độ Read-Only Root Filesystem & Drop Capabilities</div>
    <p>Nếu hacker khai thác lỗi RCE (Remote Code Execution) của app, chúng sẽ cố cài thêm mã độc hoặc modify mã nguồn. Ta có thể khóa hoàn toàn đĩa của container bằng cờ \`--read-only\` và chỉ mở các thư mục ghi log/cache dạng bộ nhớ ảo \`tmpfs\`:</p>
    
    <div class="cmd-block"># Chạy container an toàn tuyệt đối
docker run -d \\
  --name secure-app \\
  --read-only \\
  --tmpfs /tmp \\
  --tmpfs /run \\
  --tmpfs /var/cache/nginx \\
  -p 80:80 \\
  nginx:alpine</div>

    <p>Hạ nhân Linux cấp quyền (Capabilities) tối thiểu cho tiến trình trong container. Mặc định Docker bật nhiều quyền, ta nên drop sạch và chỉ thêm lại những quyền thực sự cần thiết:</p>
    <div class="cmd-block"># Drop toàn bộ quyền của root, chỉ cho phép bind port dưới 1024
docker run -d \\
  --cap-drop=ALL \\
  --cap-add=NET_BIND_SERVICE \\
  -p 80:80 \\
  nginx:alpine</div>

    <div class="guide-section-title">🛡️ 2. Hạn chế syscalls nhân Linux với Seccomp (Secure Computing Mode)</div>
    <p>Seccomp lọc các lệnh gọi hệ thống (syscalls) từ container gửi tới nhân. Bạn có thể định nghĩa profile seccomp dạng JSON để cấm container gọi các lệnh nguy hiểm như \`reboot\`, \`mount\`, \`ptrace\`:</p>
    <div class="cmd-block"># Chạy container với custom seccomp profile
docker run --security-opt seccomp=/path/to/seccomp-profile.json my-app</div>

    <div class="guide-section-title">⚡ 3. Biên dịch Multi-Architecture Image với Docker Buildx</div>
    <p>Khi dev chạy chip Apple M1/M2/M3 (ARM64) nhưng server chạy chip Intel/AMD (AMD64), build image thông thường sẽ gây lỗi \`exec format error\`. Buildx giải quyết việc này bằng giả lập QEMU:</p>
    <div class="cmd-block"># Khởi tạo buildx driver
docker buildx create --name multi-builder --use
docker buildx inspect --bootstrap

# Tiến hành build và push đồng thời cả 2 bản build AMD64 và ARM64 lên hub
docker buildx build \\
  --platform linux/amd64,linux/arm64 \\
  -t username/my-app:v1.0.0 \\
  --push .</div>
  `,

  'cicd-github': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>GitHub Actions Nâng Cao: Reusable Workflows & Composite Actions</h2>
    <p class="guide-subtitle">Tối ưu hóa cấu trúc CI/CD quy mô lớn, tái sử dụng workflow và viết kịch bản cài đặt tự động self-hosted runner.</p>

    <div class="guide-section-title">⚙️ 1. Reusable Workflows vs Composite Actions</div>
    <ul>
      <li><strong>Composite Actions:</strong> Gom nhiều bước chạy (\`steps\`) nhỏ liên tiếp vào một file riêng để tái sử dụng. Thích hợp để chuẩn hóa một quy trình cài đặt môi trường (VD: Setup Node + cài pnpm + login registry).</li>
      <li><strong>Reusable Workflows:</strong> Tái sử dụng cả một file workflow hoàn chỉnh (\`job\` cấu hình hoàn thiện). Thích hợp để chuẩn hóa luồng Build/Deploy chung cho hàng trăm repositories khác nhau trong tổ chức.</li>
    </ul>

    <div class="guide-section-title">📝 Ví dụ Reusable Deploy Workflow (.github/workflows/reusable-deploy.yml)</div>
    <div class="cmd-block">name: Reusable Deploy

on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
      image-tag:
        required: true
        type: string
    secrets:
      SSH_KEY:
        required: true
      HOST:
        required: true
      USER:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: \${{ secrets.HOST }}
          username: \${{ secrets.USER }}
          key: \${{ secrets.SSH_KEY }}
          script: |
            export DEPLOY_ENV="\${{ inputs.environment }}"
            cd /www/my-app
            docker compose pull
            docker compose up -d</div>

    <p>Khi đó trong repo dự án cụ thể, ta chỉ cần gọi đơn giản:</p>
    <div class="cmd-block">jobs:
  call-deploy:
    uses: my-org/shared-workflows/.github/workflows/reusable-deploy.yml@main
    with:
      environment: production
      image-tag: \${{ github.sha }}
    secrets: inherit # Tự động truyền toàn bộ secrets sang workflow con</div>

    <div class="guide-section-title">🚀 2. Tự động hóa cài đặt Self-hosted Runner trên VPS</div>
    <p>Nếu bạn muốn chạy CI/CD trên máy chủ VPS riêng thay vì dùng máy của GitHub (để build nhanh hơn và truy cập mạng nội bộ), hãy chạy shell script sau để tự động hóa đăng ký runner:</p>
    <div class="cmd-block"># Tạo thư mục và tải runner agent
mkdir actions-runner && cd actions-runner
curl -o actions-runner-linux-x64-3.216.0.tar.gz -L https://github.com/actions/runner/releases/download/v3.216.0/actions-runner-linux-x64-3.216.0.tar.gz
tar xzf ./actions-runner-linux-x64-3.216.0.tar.gz

# Cấu hình runner bằng token động từ GitHub API (Thay thế token thực của dự án)
./config.sh --url https://github.com/huy293/devops-flowchart --token RUNNER_REGISTRATION_TOKEN --unattended

# Cài đặt làm service chạy ngầm
sudo ./svc.sh install
sudo ./svc.sh start</div>
  `,

  'cicd-gitlab': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>GitLab Pipelines Quy Mô Lớn & Hardening Runner</h2>
    <p class="guide-subtitle">Thiết lập Dynamic Parent-Child pipelines và cấu hình bảo mật tệp cấu hình Runner config.toml.</p>

    <div class="guide-section-title">⚙️ 1. Dynamic Parent-Child Pipelines</div>
    <p>Với cấu trúc dự án Monorepo (chứa nhiều dự án nhỏ Web, API, Worker trong cùng 1 Git), việc chạy một file cấu hình GitLab CI dài vài nghìn dòng là một ác mộng. GitLab hỗ trợ Dynamic Trigger: Tự động chạy một script tạo ra file YAML tùy chỉnh và trigger file đó chạy:</p>
    
    <div class="cmd-block"># .gitlab-ci.yml chính
stages:
  - generate
  - trigger

generate-pipeline:
  stage: generate
  image: python:3.11-slim
  script:
    - python generate-ci-yaml.py # Script tự tạo file child-pipeline.yml dựa trên code thay đổi
  artifacts:
    paths:
      - child-pipeline.yml

trigger-pipeline:
  stage: trigger
  needs: generate-pipeline
  trigger:
    include:
      - artifact: child-pipeline.yml
        job: generate-pipeline
    strategy: depend</div>

    <div class="guide-section-title">🔒 2. Cấu hình bảo mật hệ thống Runner (/etc/gitlab-runner/config.toml)</div>
    <p>Nếu không cấu hình chặt chẽ, các nhà phát triển dự án có thể ghi đè lệnh vào Docker socket và phá hoại máy chủ vật lý. Hãy chỉnh sửa file cấu hình Runner:</p>
    <div class="cmd-block">[[runners]]
  name = "secure-vps-runner"
  url = "https://gitlab.com/"
  id = 1
  token = "RUNNER_SECURE_TOKEN"
  executor = "docker"
  [runners.custom_build_dir]
  [runners.cache]
    MaxUploadedArchiveSize = 104857600 # Giới hạn cache tối đa 100MB
  [runners.docker]
    tls_verify = false
    image = "docker:24.0.5"
    privileged = false # Tắt chế độ privileged bảo mật tuyệt đối
    # Chỉ mount socket ở chế độ chỉ đọc hoặc hạn chế
    volumes = ["/cache"]
    shm_size = 2147483648 # Gán dung lượng RAM tối đa cho build cgroup (/dev/shm)
    allowed_images = ["node:*", "python:*", "golang:*", "docker:*"] # Chỉ cho phép dùng các base image này</div>
  `,

  'git-ssh': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>SSH Multiplexing, Agent Forwarding & Ký Commit Với SSH</h2>
    <p class="guide-subtitle">Định cấu hình SSH Multiplexing tăng tốc độ git 5 lần, forwarding key an toàn và ký số định danh lập trình viên.</p>

    <div class="guide-section-title">⚡ 1. Tăng tốc Git với SSH Multiplexing</div>
    <p>Mỗi khi git pull/push, SSH client phải khởi tạo kết nối TCP mới, bắt tay bảo mật (SSH Handshake) mất từ 1-3 giây. Cấu hình Multiplexing giúp duy trì một phiên kết nối SSH duy nhất chạy ngầm và định tuyến toàn bộ traffic Git tiếp theo qua đó:</p>
    
    <div class="cmd-block"># Mở file ~/.ssh/config và thêm vào đầu file:
Host *
  ControlMaster auto
  ControlPath ~/.ssh/sockets/%r@%h:%p
  ControlPersist 10m # Duy trì kết nối ngầm trong 10 phút sau khi idle</div>
    <p>Tạo thư mục sockets để lưu phiên kết nối: \`mkdir -p ~/.ssh/sockets\`. Bây giờ tốc độ git command tiếp theo sẽ diễn ra gần như tức thì.</p>

    <div class="guide-section-title">🔒 2. SSH Agent Forwarding an toàn</div>
    <p>Khi bạn cần SSH từ máy local vào VPS-A, rồi từ VPS-A cần clone code riêng từ GitHub. Thay vì copy SSH key của máy local và lưu trực tiếp trên VPS-A (Cực kỳ không an toàn), ta bật Forwarding để VPS-A "mượn tạm" key local để kết nối sang GitHub:</p>
    <div class="cmd-block"># Trong máy local: Thêm key vào ssh-agent
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_ed25519_personal

# Trong file config ~/.ssh/config local:
Host vps-host-alias
  HostName 123.45.67.89
  User ubuntu
  ForwardAgent yes # Bật tính năng chuyển tiếp key</div>

    <div class="guide-section-title">✍️ 3. Ký số Commit bằng SSH Key thay thế GPG Key</div>
    <p>Giờ đây bạn không cần cài đặt GPG phức tạp để được tích xanh Verified trên GitHub/GitLab. Bạn có thể dùng chính SSH key hiện tại:</p>
    <div class="cmd-block"># Cấu hình git dùng SSH để ký commit
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519_personal.pub

# Bật tự động ký commit cho mọi repos
git config --global commit.gpgsign true</div>
  `,

  'k8s-core': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2> Admission Controllers & Cơ Chế Định Tuyến Pod Chuyên Sâu</h2>
    <p class="guide-subtitle">Hiểu sâu cơ chế kiểm soát của API Server, Raft consensus và kiểm soát phân phối Pod qua Affinity.</p>

    <div class="guide-section-title">☸️ 1. Pipeline của kube-apiserver: Admission Controllers</div>
    <p>Khi một request tạo Pod gửi tới API Server, nó phải đi qua 3 giai đoạn của bộ kiểm soát Admission Control:</p>
    <ol>
      <li><strong>Authentication & Authorization:</strong> Xác thực thông tin qua TLS/Token và phân quyền qua RBAC.</li>
      <li><strong>Mutating Admission Webhooks:</strong> Cho phép can thiệp và tự động sửa đổi nội dung YAML. Ví dụ: Istio Sidecar injector tự động chèn thêm container \`istio-proxy\` vào Pod của bạn.</li>
      <li><strong>Object Schema Validation:</strong> Xác thực định dạng cấu hình chuẩn quy định của Kubernetes.</li>
      <li><strong>Validating Admission Webhooks:</strong> Cho phép kiểm duyệt nghiêm ngặt. Ví dụ: Kiểm tra nếu Pod chạy bằng user root thì từ chối không cho deploy lên cluster.</li>
    </ol>

    <div class="guide-section-title">⚙️ 2. Cơ chế đồng thuận Raft trong etcd</div>
    <p>etcd lưu trữ toàn bộ trạng thái của K8s. Nó sử dụng thuật toán đồng thuận Raft. Cụm etcd tối ưu nhất phải có số node lẻ (3, 5, 7) để đạt được sự đồng thuận đa số. Nếu cụm 3 node bị sập mất 1 node (còn 2), nó vẫn hoạt động; nhưng nếu sập 2 node, cụm etcd sẽ mất tính năng write để bảo vệ tính nhất quán dữ liệu (Split-brain prevention).</p>

    <div class="guide-section-title">🚀 3. Kỹ thuật phân tán Pod Nâng cao: Node & Pod Affinity</div>
    <p>Để đảm bảo độ tin cậy, ta cấm chạy 2 Pod của cùng một microservice trên cùng 1 worker node vật lý (để đề phòng node sập thì không chết sạch service). Hãy dùng **PodAntiAffinity**:</p>
    
    <div class="cmd-block">spec:
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchExpressions:
          - key: app
            operator: In
            values:
            - microservice-web
        topologyKey: "kubernetes.io/hostname"</div>

    <p>Để chỉ định Pod chạy trên các server đặc chủng (Ví dụ server có ổ SSD tốc độ cao hoặc GPU):</p>
    <div class="cmd-block">spec:
  tolerations:
  - key: "hardware-type"
    operator: "Equal"
    value: "gpu"
    effect: "NoSchedule"
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: gpu-installed
            operator: In
            values:
            - "true"</div>
  `,

  'k8s-config': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>eBPF Network, RBAC & Hạn Chế Phân Quyền Pod Security</h2>
    <p class="guide-subtitle">Đưa mạng K8s từ iptables sang eBPF Cilium, phân quyền phân cấp RBAC và thực thi Pod Security Standards.</p>

    <div class="guide-section-title">⚡ 1. eBPF Network (Cilium/Calico) vs iptables truyền thống</div>
    <p>Mặc định, K8s điều phối định tuyến qua kube-proxy sử dụng **iptables**. Iptables hoạt động bằng cách quét tuyến tính tuần tự qua danh sách các rule mạng từ trên xuống dưới. Khi số lượng pod lên tới hàng nghìn, việc quét này ngốn cực nhiều CPU của server.
    <br>**Cilium (eBPF)** giải quyết triệt để lỗi này bằng cách nhúng mã trực tiếp vào kernel space. Traffic đi thẳng từ veth này sang veth kia mà không cần thông qua iptables rules, tăng tốc độ xử lý mạng và giảm 90% hao phí CPU.</p>

    <div class="guide-section-title">🔑 2. Cấu hình phân cấp RBAC chặt chẽ (Role-Based Access Control)</div>
    <p>Nguyên tắc tối thiểu đặc quyền: Tuyệt đối không cho phép các ứng dụng dùng ServiceAccount mặc định có quyền admin cluster. Ta tạo Role chỉ có quyền đọc logs và binding riêng biệt:</p>
    <div class="cmd-block">apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: production
  name: pod-log-reader
rules:
- apiGroups: [""]
  resources: ["pods", "pods/log"]
  verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-logs-binding
  namespace: production
subjects:
- kind: ServiceAccount
  name: my-app-serviceaccount # Tài khoản gán cho Pod ứng dụng
  namespace: production
roleRef:
  kind: Role
  name: pod-log-reader
  apiGroup: rbac.authorization.k8s.io</div>

    <div class="guide-section-title">🛡️ 3. Thực thi Pod Security Standards (PSS) cấp Restricted</div>
    <p>Để đảm bảo không có pod nào có thể phá hoại node vật lý, ta gán nhãn bắt buộc Namespace chạy chế độ Restricted của Kubernetes:</p>
    <div class="cmd-block">kubectl label --overwrite ns production pod-security.kubernetes.io/enforce=restricted</div>
    <p>Chế độ Restricted sẽ tự động từ chối chạy bất kỳ Pod nào có cấu hình bảo mật lỏng lẻo, ví dụ chạy bằng root, mount hostpath, hoặc gán đặc quyền.</p>
  `,

  'k8s-helm': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>Go-Template Functions, Sub-charts & Unit Testing Helm</h2>
    <p class="guide-subtitle">Lập trình các hàm logic nâng cao trong Helm, quản lý cấu trúc sub-charts và chạy kiểm thử tự động Helm Chart.</p>

    <div class="guide-section-title">⚙️ 1. Sử dụng Named Templates và Helper Functions</div>
    <p>Để tránh lặp lại code trong templates, Helm cung cấp file \`templates/_helpers.tpl\` để khai báo các khối macro Go-template. Ta sử dụng cú pháp \`define\` và gọi lại bằng \`include\`:</p>
    
    <div class="cmd-block"># templates/_helpers.tpl
{{- define "mychart.labels" -}}
generator: helm
deployed-by: devops-team
app-version: {{ .Chart.AppVersion | quote }}
{{- end -}}

# templates/deployment.yaml
metadata:
  labels:
    {{- include "mychart.labels" . | nindent 4 }}</div>

    <div class="guide-section-title">🔄 2. Làm việc với Vòng Lặp (range) và Pipeline (|)</div>
    <p>Ta có thể duyệt qua một list hoặc map khai báo trong file \`values.yaml\` để tự động sinh cấu hình. Ví dụ tạo các biến môi trường tự động:</p>
    <div class="cmd-block"># values.yaml
envVars:
  DB_NAME: "production_db"
  REDIS_PORT: "6379"
  DEBUG: "false"

# templates/deployment.yaml
env:
  {{- range $key, $val := .Values.envVars }}
  - name: {{ $key }}
    value: {{ $val | quote }}
  {{- end }}</div>

    <div class="guide-section-title">🧪 3. Unit Test Helm Chart với helm-unittest</div>
    <p>Để đảm bảo file values cấu hình thay đổi không làm hỏng manifest sinh ra, ta viết test suite chạy kiểm thử tự động:</p>
    <div class="cmd-block"># tests/deployment_test.yaml
suite: test deployment manifest
templates:
  - deployment.yaml
tests:
  - it: should match replica count configured
    set:
      replicaCount: 5
    asserts:
      - equal:
          path: spec.replicas
          value: 5</div>
    <p>Chạy lệnh test: \`helm unittest .\`.</p>
  `,

  'aapanel-proxy': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>Tối Ưu Hóa Nginx Buffers & Triển Khai HTTP/3 QUIC trên aaPanel</h2>
    <p class="guide-subtitle">Định cấu hình máy chủ Nginx đạt mức tải hàng nghìn CCU, cấu hình proxy buffer tránh ghi đĩa và kích hoạt giao thức HTTP/3.</p>

    <div class="guide-section-title">⚡ 1. Tối ưu hóa Nginx Core & Processors</div>
    <p>aaPanel cấu hình mặc định Nginx cho các site tĩnh nhẹ. Khi kết nối ứng dụng API lớn, ta cần tinh chỉnh tệp cấu hình chính của Nginx (\`/www/server/nginx/conf/nginx.conf\`):</p>
    
    <div class="cmd-block">events {
    worker_connections 20480; # Tăng số kết nối đồng thời trên mỗi worker
    use epoll; # Sử dụng cơ chế epoll tối ưu trên Linux nhân
    multi_accept on;
}

http {
    # Tắt việc gửi token version của Nginx để bảo mật tránh scan OS vulnerability
    server_tokens off;
    
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    
    # Cấu hình nén gzip nâng cao giảm 60% băng thông
    gzip on;
    gzip_comp_level 5;
    gzip_types text/plain text/css application/json application/javascript text/xml;
}</div>

    <div class="guide-section-title">⚙️ 2. Tinh chỉnh Proxy Buffers (Tránh ghi đĩa cứng)</div>
    <p>Mặc định, nếu Response trả về từ Docker Container quá lớn so với memory buffer của Nginx, Nginx sẽ tự tạo file tạm và ghi vào đĩa cứng (Disk I/O), làm tốc độ xử lý sụt giảm nghiêm trọng. Hãy tăng buffer để lưu toàn bộ trên RAM:</p>
    <div class="cmd-block">proxy_buffering on;
proxy_buffer_size 128k;
proxy_buffers 4 256k;
proxy_busy_buffers_size 256k;
proxy_max_temp_file_size 0; # Cấm ghi file tạm xuống ổ đĩa cứng</div>

    <div class="guide-section-title">🌐 3. Cấu hình HTTP/3 QUIC trên aaPanel</div>
    <p>Giao thức HTTP/3 sử dụng UDP thay cho TCP giúp giảm tối đa độ trễ bắt tay mạng (Zero-RTT handshake). Hãy thêm cấu hình sau vào cấu hình site:</p>
    <div class="cmd-block">server {
    listen 443 quic reuseport; # Listen HTTP/3 UDP
    listen 443 ssl http2;      # Listen HTTP/2 TCP
    
    # Quảng bá giao thức HTTP/3 ra trình duyệt
    add_header Alt-Svc 'h3=":443"; ma=86400';
    
    ssl_protocols TLSv1.3; # HTTP/3 bắt buộc phải chạy TLS v1.3
}</div>
  `,

  'aws-vpc': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>VPC Gateway Endpoints, Transit Gateway & Route 53 Routing Policies</h2>
    <p class="guide-subtitle">Tối ưu hóa chi phí đường truyền AWS bằng VPC Endpoints và thiết lập định tuyến toàn cầu với Route 53.</p>

    <div class="guide-section-title">💰 1. Cắt giảm 90% chi phí NAT Gateway bằng VPC Endpoints</div>
    <p>Khi các EC2, ECS app nằm ở Private Subnet giao tiếp với Amazon S3 hoặc DynamoDB, mặc định dữ liệu sẽ chạy qua NAT Gateway ra Internet rồi mới tới S3, làm phát sinh chi phí truyền tải khổng lồ (NAT Gateway data processing fee ~ $0.045/GB).
    <br>**VPC Gateway Endpoint** cho phép tạo một cổng định tuyến trực tiếp từ bên trong mạng nội bộ VPC tới S3/DynamoDB mà không đi qua NAT Gateway. Hoàn toàn bảo mật và **không mất phí**.</p>
    
    <div class="cmd-block"># Bảng Route Table của Private Subnet sau khi tích hợp S3 Gateway Endpoint:
Destination      Target
10.0.0.0/16      local       # Định tuyến nội bộ VPC
pl-63a5400a      vpce-12345  # Toàn bộ traffic tới S3 đi qua Endpoint Gateway
0.0.0.0/0        nat-98765   # Các traffic internet khác đi qua NAT Gateway</div>

    <div class="guide-section-title">🌐 2. Quản lý mạng đa VPC với AWS Transit Gateway (TGW)</div>
    <p>Khi tổ chức có nhiều VPC (VPC Dev, VPC Prod, VPC Test, Shared Services VPC). Thiết lập VPC Peering giữa các cặp mạng sẽ tạo ra cấu trúc mesh cực kỳ phức tạp khó quản trị.
    <br>**Transit Gateway** đóng vai trò như một Cloud Router trung tâm, kết nối tất cả các VPC, VPN và hạ tầng On-premise vào một mối duy nhất, quản lý phân quyền routing thông qua Route Tables của Transit Gateway.</p>

    <div class="guide-section-title">🗺️ 3. Các kịch bản Định tuyến của Route 53</div>
    <ul>
      <li><strong>Latency-based Routing:</strong> Tự động điều hướng người dùng tới Vùng (Region) AWS có độ trễ mạng thấp nhất đối với họ. Ví dụ người dùng VN sẽ đi về Singapore (ap-southeast-1), người dùng Mỹ về Northern Virginia (us-east-1).</li>
      <li><strong>Geolocation Routing:</strong> Định tuyến dựa trên quốc gia của người dùng. Dùng để phân phối nội dung đa ngôn ngữ hoặc tuân thủ pháp luật sở tại (VD: GDPR châu Âu).</li>
      <li><strong>Active-Passive Failover:</strong> Thiết lập hệ thống dự phòng thảm họa. Route 53 gửi health check liên tục tới Primary Server. Nếu sập, nó tự động đổi bản ghi DNS sang Backup Server (Passive) nằm ở region khác.</li>
    </ul>
  `,

  'aws-compute': `
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">SENIOR DEEP-DIVE</div>
    <h2>Autoscaling Karpenter, EKS IRSA & CloudFront Signed URLs</h2>
    <p class="guide-subtitle">Đưa hạ tầng co giãn lên thế hệ mới với Karpenter, cấp quyền pod qua IRSA và bảo mật asset qua CloudFront Signed Cookies.</p>

    <div class="guide-section-title">☸️ 1. Karpenter vs Cluster Autoscaler trong EKS</div>
    <ul>
      <li><strong>Cluster Autoscaler (Thế hệ cũ):</strong> Hoạt động phụ thuộc vào AWS Auto Scaling Groups (ASG). Khi Pod pending do thiếu tài nguyên, Autoscaler yêu cầu ASG nâng số EC2. Quy trình này chậm (mất 2-5 phút) và thiếu linh hoạt trong việc lựa chọn loại EC2 tối ưu.</li>
      <li><strong>Karpenter (Thế hệ mới):</strong> Tương tác trực tiếp với AWS EC2 Fleet API bỏ qua ASG. Karpenter phân tích trực tiếp tài nguyên Pod yêu cầu (CPU, RAM, GPU) và tự động spawn đúng cấu hình EC2 phù hợp nhất chỉ trong **vài chục giây**, giúp giảm thiểu tối đa chi phí chạy máy chủ dư thừa.</li>
    </ul>

    <div class="guide-section-title">🔑 2. Cấp quyền ứng dụng bảo mật qua IRSA (IAM Roles for Service Accounts)</div>
    <p>Không bao giờ được gán quyền trực tiếp cho EC2 node (NodeInstanceRole) vì tất cả các Pod chạy chung Node sẽ có chung quyền đó (vi phạm bảo mật). IRSA sử dụng OpenID Connect (OIDC) để map riêng biệt một IAM Role vào một ServiceAccount duy nhất của Kubernetes:</p>
    
    <div class="cmd-block">apiVersion: v1
kind: ServiceAccount
metadata:
  name: s3-uploader-sa
  namespace: production
  annotations:
    # Liên kết trực tiếp với IAM Role có quyền đọc/ghi S3 bucket tương ứng
    eks.amazonaws.com/role-arn: arn:aws:iam::123456789012:role/ProductionS3UploaderRole</div>

    <div class="guide-section-title">📦 3. Bảo vệ Static Assets bằng CloudFront Signed URLs / Cookies</div>
    <p>Khi bạn phân phối video khóa học trả phí hoặc tài liệu nội bộ qua CloudFront CDN. Bạn không thể mở public link S3. Ta cấu hình CloudFront kiểm tra chữ ký điện tử gửi kèm theo yêu cầu:</p>
    <ol>
      <li>Người dùng đăng nhập app thành công và yêu cầu xem tài liệu.</li>
      <li>Backend xác thực thông tin, dùng khóa private key sinh ra một mã token chứa thời gian hết hạn (VD: link chỉ sống trong 1 giờ) và gán thành **Signed URL** hoặc lưu vào **Signed Cookies** ở trình duyệt.</li>
      <li>Khi client gửi request lên CloudFront, CloudFront kiểm tra token. Nếu hợp lệ, nó sẽ trả về nội dung tĩnh từ bộ nhớ cache CDN; nếu không có token hoặc token hết hạn, trả về 403 Forbidden.</li>
    </ol>
  `
};

export default function Playbook() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGuideId, setActiveGuideId] = useState(null);
  const [detailTab, setDetailTab] = useState('basic'); // 'basic' | 'deep'

  const filteredGuides = guidesList.filter(g => {
    const matchesCategory = selectedCategory === 'all' || g.category === selectedCategory;
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="tab-content active" id="content-guides">
      <div className="guides-container">
        <div className="playbook-layout">
          {/* Sidebar Filter & Search */}
          <div className="playbook-sidebar glass">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Tìm kiếm tài liệu..." 
                value={searchQuery}
                onChange={(e) => {
                  setActiveGuideId(null);
                  setSearchQuery(e.target.value);
                }}
              />
              <span className="search-icon">🔍</span>
            </div>
            <div className="filter-categories">
              <h3>Danh Mục</h3>
              {[
                { id: 'all', label: '📚 Tất Cả' },
                { id: 'cicd', label: '⚙️ CI/CD Pipelines' },
                { id: 'git', label: '🦊 GitHub & GitLab' },
                { id: 'docker', label: '🐳 Docker & Registry' },
                { id: 'k8s', label: '☸️ Kubernetes (K8s)' },
                { id: 'vps', label: '🖥️ aaPanel & VPS' },
                { id: 'aws', label: '☁️ Cloud & AWS' }
              ].map(cat => (
                <button 
                  key={cat.id}
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveGuideId(null);
                    setSelectedCategory(cat.id);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="playbook-main">
            {activeGuideId ? (
              <div className="guide-detail glass">
                <div className="guide-detail-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1.2rem' }}>
                  <button className="guide-detail-back" style={{ marginBottom: 0 }} onClick={() => {
                    setActiveGuideId(null);
                    setDetailTab('basic');
                  }}>
                    ← Quay lại danh sách
                  </button>
                  
                  <div className="guide-tabs-container">
                    <button 
                      className={`guide-tab-btn ${detailTab === 'basic' ? 'active' : ''}`}
                      onClick={() => setDetailTab('basic')}
                    >
                      🟢 Cơ bản (Junior/Mid)
                    </button>
                    <button 
                      className={`guide-tab-btn ${detailTab === 'deep' ? 'active' : ''}`}
                      onClick={() => setDetailTab('deep')}
                    >
                      🔥 Chuyên sâu (Senior Deep-Dive)
                    </button>
                  </div>
                </div>

                <div 
                  className="guide-html-content"
                  dangerouslySetInnerHTML={{ 
                    __html: detailTab === 'basic' ? guideContent[activeGuideId] : (guideContentDeep[activeGuideId] || '<p style="color: #a0aec0; padding: 2rem; text-align: center;">Nội dung chuyên sâu đang được cập nhật...</p>') 
                  }} 
                />
              </div>
            ) : (
              <div className="guides-grid">
                {filteredGuides.length === 0 ? (
                  <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#a0aec0', padding: '3rem' }}>
                    Không tìm thấy tài liệu nào khớp với từ khóa tìm kiếm.
                  </div>
                ) : (
                  filteredGuides.map(g => (
                    <div key={g.id} className="guide-card glass" onClick={() => {
                      setActiveGuideId(g.id);
                      setDetailTab('basic');
                    }}>
                      <div className="guide-card-icon" style={{ background: g.iconBg, borderColor: g.iconBorder }}>
                        {g.icon}
                      </div>
                      <div className="guide-card-tag" style={{ color: g.iconColor, borderColor: g.iconBorder }}>
                        {g.category.toUpperCase()}
                      </div>
                      <h3>{g.title}</h3>
                      <p>{g.desc}</p>
                      <div className="guide-card-meta">
                        {g.tags.map(t => <span key={t}>{t}</span>)}
                      </div>
                      <div className="guide-card-arrow">Xem chi tiết →</div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
