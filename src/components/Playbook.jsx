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
    <h2>Cẩm Nang Master Docker: Từ Cơ Bản Đến Nâng Cao</h2>
    <p class="guide-subtitle">Hướng dẫn toàn diện về kiến trúc Docker, Dockerfile tối ưu, Docker Compose, Storage và Network Drivers.</p>
    
    <div class="thesis-quote">
      <strong>Vấn đề kinh điển:</strong> "Code chạy ngon ở máy tôi nhưng sập trên server!"<br>
      Docker giải quyết vấn đề này bằng cách đóng gói ứng dụng cùng toàn bộ môi trường chạy (runtime, thư viện, cấu hình) thành một block duy nhất gọi là Container. Giờ đây, ứng dụng của bạn sẽ chạy nhất quán ở bất kỳ máy chủ nào.
    </div>

    <div class="guide-section-title">1. Phân biệt Máy Ảo (VMs) và Docker Containers</div>
    <p>Để hiểu tại sao Docker lại trở thành tiêu chuẩn công nghiệp, hãy nhìn vào sự so sánh kiến trúc dưới đây:</p>
    <ul>
      <li><strong>Virtual Machines (Ảo hóa phần cứng):</strong> Mỗi VM cần chạy một Hệ điều hành khách (Guest OS) đầy đủ ở trên phần mềm ảo hóa Hypervisor (VMware, VirtualBox). Điều này ngốn hàng Gigabyte RAM/Disk và mất vài phút để boot.</li>
      <li><strong>Docker Containers (Ảo hóa hệ điều hành):</strong> Các container dùng chung nhân hệ điều hành máy host (Shared Host OS Kernel). Chúng được cách ly hoàn toàn qua cơ chế <strong>Namespaces</strong> và được giới hạn tài nguyên bởi <strong>Control Groups (cgroups)</strong> của Linux. Khởi động chỉ mất vài phần trăm giây và siêu nhẹ.</li>
    </ul>

    <div class="guide-section-title">2. Bản Chất Lớp File System: UnionFS & Copy-on-Write (CoW)</div>
    <p>Docker Image không phải là một file nén zip đơn thuần, nó hoạt động dựa trên <strong>UnionFS (Union File System)</strong>:</p>
    <ul>
      <li><strong>Docker Image (Read-Only layers):</strong> Khi viết Dockerfile, mỗi câu lệnh tạo file (như \`COPY\` hoặc \`RUN\`) tạo ra một Layer chỉ đọc xếp chồng lên nhau. Các layer này được chia sẻ và tái sử dụng giữa các Image khác nhau để tiết kiệm đĩa cứng.</li>
      <li><strong>Docker Container (Writable layer):</strong> Khi khởi động Container từ Image, Docker phủ thêm một lớp ghi được gọi là <strong>Writable Layer (Container Layer)</strong> ở trên cùng.</li>
      <li><strong>Cơ chế Copy-on-Write (CoW):</strong> Khi một tiến trình trong container muốn sửa đổi file \`app.config\` ở lớp Read-Only bên dưới, Docker sẽ sao chép file đó lên lớp Writable layer trên cùng và thực hiện chỉnh sửa tại đây. Lớp Image gốc bên dưới hoàn toàn không bị ảnh hưởng, đảm bảo tính bất biến (Immutability).</li>
    </ul>

    <div class="guide-section-title">3. Hướng Dẫn Chi Tiết Các Chỉ Thị Trong Dockerfile</div>
    <p>Dockerfile là kịch bản tự động hóa để build Docker Image. Dưới đây là giải nghĩa chi tiết các chỉ thị cốt lõi:</p>
    <ul>
      <li><strong>FROM:</strong> Định nghĩa Image gốc làm nền móng (Ví dụ: \`FROM node:22-alpine\`). Nên chọn các tag phiên bản cụ thể và hậu tố \`alpine\` để tối ưu dung lượng và bảo mật.</li>
      <li><strong>WORKDIR:</strong> Tạo và di chuyển vào thư mục làm việc bên trong container. Tránh dùng thư mục gốc \`/\` làm việc.</li>
      <li><strong>COPY vs ADD:</strong> Cả hai đều copy file từ máy host vào container. Tuy nhiên, \`COPY\` an toàn và rõ ràng hơn. Chỉ dùng \`ADD\` khi bạn muốn tải file từ URL hoặc tự động giải nén file nén dạng \`.tar.gz\`.</li>
      <li><strong>RUN:</strong> Chạy các lệnh shell trong quá trình **build** image để cài đặt thư viện (Ví dụ: \`RUN npm ci\` hoặc \`RUN apt-get update && apt-get install -y git\`).</li>
      <li><strong>CMD vs ENTRYPOINT:</strong>
        <br>• \`CMD\`: Định nghĩa lệnh chạy mặc định khi container khởi chạy. Lệnh này có thể bị ghi đè hoàn toàn khi dùng \`docker run my-app <lệnh_mới>\`.
        <br>• \`ENTRYPOINT\`: Định nghĩa executable chính của container. Các tham số truyền vào qua \`docker run\` sẽ được nối tiếp vào sau \`ENTRYPOINT\`.
      </li>
      <li><strong>ENV:</strong> Thiết lập các biến môi trường tĩnh (Ví dụ: \`ENV NODE_ENV=production\`).</li>
      <li><strong>EXPOSE:</strong> Khai báo cổng mạng container sẽ lắng nghe (Ví dụ: \`EXPOSE 3000\`). Đây chỉ là mô tả tài liệu, không tự động map port ra ngoài VPS.</li>
      <li><strong>USER:</strong> Định danh user thực thi tiến trình. Nên tránh chạy bằng root bằng cách đổi sang user thường (Ví dụ: \`USER node\` hoặc \`USER 1000:1000\`).</li>
    </ul>

    <div class="guide-section-title">📂 Ví dụ Dockerfile Node.js/Vite Production Tối Ưu Hóa</div>
    <div class="cmd-block"># Stage 1: Build môi trường nặng
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runtime siêu nhẹ chỉ chứa sản phẩm build
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
# Chạy với user node hạn chế quyền để bảo mật
USER node
EXPOSE 3000
CMD ["node", "dist/server.js"]</div>

    <div class="guide-section-title">4. Docker Compose: Quản Lý Đa Container Trực Quan</div>
    <p>Khi ứng dụng cần cơ sở dữ liệu và cache kết nối cùng nhau, sử dụng \`docker run\` thủ công rất phức tạp. <strong>Docker Compose</strong> giúp bạn gom tất cả vào một file định nghĩa \`docker-compose.yml\`:</p>
    
    <div class="cmd-block">version: '3.8'

services:
  web-app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=database
      - DB_PASSWORD_FILE=/run/secrets/db_password
    depends_on:
      - database
      - redis-cache
    networks:
      - backend-net
    restart: always

  database:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: app_db
      POSTGRES_USER: app_user
      POSTGRES_PASSWORD: secure_password_here
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - backend-net
    restart: always

  redis-cache:
    image: redis:7-alpine
    networks:
      - backend-net
    restart: always

networks:
  backend-net:
    driver: bridge

volumes:
  db-data:</div>

    <div class="guide-section-title">5. Các Chế Độ Mạng (Network Drivers) & Lưu Trữ (Volumes)</div>
    <ul>
      <li><strong>Mạng Bridge:</strong> Các container kết nối vào chung một dải mạng ảo (VD: 172.18.0.0/16). Các container có thể liên lạc với nhau thông qua tên dịch vụ (DNS nội bộ của Docker). Đây là chế độ mạng mặc định và khuyên dùng.</li>
      <li><strong>Mạng Host:</strong> Container dùng chung card mạng của VPS host, mang lại tốc độ mạng cực nhanh nhưng mất đi tính cô lập port.</li>
      <li><strong>Named Volumes:</strong> Thư mục lưu dữ liệu do Docker tự động quản lý trên đĩa vật lý của host. Đảm bảo dữ liệu Database vẫn an toàn khi container bị stop hoặc xóa bỏ.</li>
      <li><strong>Bind Mounts:</strong> Ánh xạ trực tiếp thư mục code local vào trong container. Rất hữu ích cho môi trường lập trình để hot-reload code ngay lập tức mà không cần rebuild image.</li>
    </ul>

    <div class="guide-section-title">🛠️ Bảng Cheatsheet Lệnh Docker CLI Cần Nhớ</div>
    <table style="width:100%; border-collapse:collapse; margin-bottom:1.5rem; text-align:left; color:#cbd5e1;">
      <thead>
        <tr style="border-bottom:2px solid rgba(255,255,255,0.1); padding-bottom:10px;">
          <th style="padding:10px 0; color:#69f0ae;">Nhóm Lệnh</th>
          <th style="padding:10px 0; color:#52cbff;">Lệnh Thực Thi CLI</th>
          <th style="padding:10px 0;">Mục Đích Sử Dụng</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Images</td>
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">docker build -t app:v1 .</td>
          <td style="padding:10px 0;">Build image từ Dockerfile trong thư mục hiện tại</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Containers</td>
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">docker run -d -p 80:80 app:v1</td>
          <td style="padding:10px 0;">Khởi chạy container chạy ngầm và map port 80</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Debugging</td>
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">docker logs -f --tail 100 app</td>
          <td style="padding:10px 0;">Xem 100 dòng logs cuối và theo dõi real-time</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Interactions</td>
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">docker exec -it app sh</td>
          <td style="padding:10px 0;">Mở terminal shell tương tác trực tiếp vào container</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Cleanup</td>
          <td style="padding:10px 0; font-family:monospace; color:#ffd54f;">docker system prune -a --volumes</td>
          <td style="padding:10px 0;">Dọn dẹp Disk: xóa container dừng, image rác và volumes thừa</td>
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

export default function Playbook() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGuideId, setActiveGuideId] = useState(null);

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
                <button className="guide-detail-back" onClick={() => setActiveGuideId(null)}>
                  ← Quay lại danh sách
                </button>
                <div dangerouslySetInnerHTML={{ __html: guideContent[activeGuideId] }} />
              </div>
            ) : (
              <div className="guides-grid">
                {filteredGuides.length === 0 ? (
                  <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#a0aec0', padding: '3rem' }}>
                    Không tìm thấy tài liệu nào khớp với từ khóa tìm kiếm.
                  </div>
                ) : (
                  filteredGuides.map(g => (
                    <div key={g.id} className="guide-card glass" onClick={() => setActiveGuideId(g.id)}>
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
