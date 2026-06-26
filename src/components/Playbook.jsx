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
    <div class="guide-card-tag" style="color:#69f0ae;border-color:rgba(105,240,174,0.3);margin-bottom:0.8rem">DOCKER</div>
    <h2>Docker Căn Bản: Phân biệt Image & Container & Network</h2>
    <p class="guide-subtitle">Nền tảng của công nghệ ảo hóa container — Phân tích chi tiết UnionFS và Network Drivers.</p>
    
    <div class="thesis-quote">
      <strong>Kiến trúc UnionFS (Union File System):</strong><br>
      Docker Image được xây dựng từ các lớp (layers) xếp chồng lên nhau. Mỗi layer đại diện cho một lệnh trong Dockerfile. Điểm mấu chốt là tất cả các layer của Image đều ở chế độ <strong>Read-Only</strong>.<br>
      Khi khởi chạy một Container, Docker sẽ phủ lên trên cùng một lớp ghi được gọi là <strong>Writable Layer (hay Container Layer)</strong>. Mọi thao tác ghi/xóa dữ liệu trong container đều thực hiện trên layer này thông qua cơ chế <strong>Copy-on-Write (CoW)</strong>, đảm bảo Image gốc hoàn toàn không bị sửa đổi.
    </div>

    <div class="guide-section-title">📊 So sánh Trực quan: Image vs Container</div>
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
          <td style="padding:10px 0;">Tĩnh (Static files trên đĩa cứng)</td>
          <td style="padding:10px 0;">Động (Tiến trình bị cô lập trong RAM)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Khả năng ghi</td>
          <td style="padding:10px 0;">Chỉ đọc (Read-Only)</td>
          <td style="padding:10px 0;">Đọc & Ghi (Writable Container Layer)</td>
        </tr>
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:10px 0; font-weight:600;">Vòng đời</td>
          <td style="padding:10px 0;">Vĩnh viễn (Cho đến khi bị xóa)</td>
          <td style="padding:10px 0;">Tạm thời (Dễ dàng tạo, hủy, start/stop)</td>
        </tr>
      </tbody>
    </table>

    <div class="guide-section-title">🌐 Tìm hiểu các Docker Network Drivers</div>
    <ul>
      <li><strong>Bridge (Mặc định):</strong> Tạo ra một mạng nội bộ ảo trên host (thường dải 172.17.0.0/16). Các container kết nối vào bridge có thể liên lạc với nhau qua địa chỉ IP nội bộ. Muốn mở ra ngoài phải dùng port mapping (\`-p\`).</li>
      <li><strong>Host:</strong> Loại bỏ sự cách ly mạng giữa container và máy host. Container trực tiếp sử dụng interface mạng của host. Ví dụ: Container chạy port 80 thì host sẽ bị chiếm dụng port 80 luôn, không cần map port. Ưu điểm: Hiệu năng mạng cực cao (Zero-overhead).</li>
      <li><strong>None:</strong> Container hoàn toàn bị ngắt kết nối mạng. Không có card mạng nào được cấu hình ngoài loopback (\`lo\`). Dùng cho các tiến trình tính toán offline cực kỳ bảo mật.</li>
      <li><strong>Overlay:</strong> Cho phép kết nối nhiều Docker daemon trên các máy chủ vật lý khác nhau lại với nhau thành một mạng overlay chung. Đây là xương sống cho Docker Swarm.</li>
    </ul>

    <div class="guide-section-title">🛠️ Các câu lệnh quản trị Mạng & Tài nguyên</div>
    <div class="cmd-block"># Quản lý Mạng Docker
docker network ls                         # Liệt kê các network hiện có
docker network create --driver bridge app-net  # Tạo mạng bridge tên 'app-net'
docker network inspect app-net            # Xem chi tiết cấu hình và container trong mạng
docker run -d --network app-net --name web nginx  # Chạy container kết nối trực tiếp vào app-net

# Quản lý Volume (Lưu trữ bền vững)
docker volume create pg-data              # Tạo một volume lưu database
docker volume ls                          # Xem danh sách volume
docker run -d -v pg-data:/var/lib/postgresql/data postgres:16 # Gắn volume vào container</div>
  `,

  'docker-watchtower': `
    <div class="guide-card-tag" style="color:#52cbff;border-color:rgba(82,203,255,0.3);margin-bottom:0.8rem">DOCKER</div>
    <h2>Tự động cập nhật Container với Watchtower</h2>
    <p class="guide-subtitle">Xây dựng quy trình Continuous Deployment (CD) tinh gọn cho máy chủ VPS đơn lẻ.</p>
    
    <div class="thesis-quote">
      <strong>Cơ chế hoạt động của Watchtower:</strong><br>
      Watchtower chạy dưới dạng một tiến trình daemon (container). Định kỳ, nó sẽ gửi API query lên Container Registry (Docker Hub, GHCR...) để kiểm tra digest (mã băm) của tag image đang chạy. Nếu phát hiện sự thay đổi, Watchtower sẽ gửi tín hiệu stop (SIGTERM), gỡ bỏ container cũ, pull image mới nhất và khởi tạo container mới bằng đúng các cấu hình env, network, mount volumes gốc.
    </div>

    <div class="guide-section-title">⚙️ Tích hợp Đăng nhập Registry Bảo mật (Auth)</div>
    <p>Nếu ứng dụng của bạn nằm trong Private Repository (Docker Hub hoặc GitHub Container Registry), Watchtower cần thông tin xác thực để pull. Bạn có thể truyền file credentials hoặc truyền qua biến môi trường:</p>
    
    <div class="cmd-block"># Cách 1: Gắn file config.json của Docker local vào Watchtower
docker run -d \\
  --name watchtower \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v ~/.docker/config.json:/config.json:ro \\
  containrrr/watchtower --cleanup --interval 300

# Cách 2: Sử dụng biến môi trường (Ví dụ trong Docker Compose)
version: '3.8'
services:
  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - REPO_USER=my_docker_username
      - REPO_PASS=dckr_pat_personal_token_here
    command: --cleanup --interval 1800 # Quét mỗi 30 phút
    restart: always</div>

    <div class="guide-section-title">🔔 Thiết lập Thông Báo Tự Động (Slack/Discord/Telegram)</div>
    <p>Watchtower hỗ trợ gửi thông báo chi tiết khi hoàn thành cập nhật container. Dưới đây là cách cấu hình gửi thông báo qua <strong>Discord Webhook</strong>:</p>
    
    <div class="cmd-block">environment:
  - WATCHTOWER_NOTIFICATIONS=shoutrrr
  - WATCHTOWER_NOTIFICATION_URL=discord://webhook_token_id@webhook_token_hash
  - WATCHTOWER_NOTIFICATIONS_LEVEL=info # Các mức: panic, fatal, error, warn, info, debug</div>
    <p>Hoặc gửi qua <strong>Telegram Bot</strong>:</p>
    <div class="cmd-block">environment:
  - WATCHTOWER_NOTIFICATIONS=shoutrrr
  - WATCHTOWER_NOTIFICATION_URL=telegram://bot_token_here@telegram_chat_id_here</div>
  `,

  'docker-opt': `
    <div class="guide-card-tag" style="color:#bb86fc;border-color:rgba(187,134,252,0.3);margin-bottom:0.8rem">DOCKER</div>
    <h2>Tối ưu hóa Dockerfile & Bảo mật Container chuẩn Production</h2>
    <p class="guide-subtitle">Các kỹ thuật nâng cao để giảm 80% kích thước image và chặn đứng các lỗ hổng bảo mật leo thang đặc quyền.</p>

    <div class="guide-section-title">🔒 Kỹ thuật bảo mật 1: Chạy dưới quyền Non-Root User</div>
    <p>Mặc định, các tiến trình trong container chạy bằng quyền root. Nếu hacker chiếm quyền kiểm soát app, chúng có thể phá hoại cả máy chủ vật lý. Hãy chuyển sang quyền user hạn chế:</p>
    
    <div class="cmd-block">FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
# Đảm bảo thư mục app thuộc sở hữu của user node (đã có sẵn trong alpine image)
COPY --chown=node:node package*.json ./
RUN npm ci --only=production
COPY --chown=node:node --from=builder /app/dist ./dist

# Thay đổi user thực thi tiến trình
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]</div>

    <div class="guide-section-title">⚡ Kỹ thuật tối ưu 2: Tận dụng cơ chế Caching Layers</div>
    <p>Mỗi câu lệnh trong Dockerfile tạo ra một layer mới. Nếu file nguồn thay đổi, tất cả các layer phía sau nó sẽ bị mất cache. Vì vậy, ta luôn copy các file dependency trước rồi cài đặt chúng trước khi copy toàn bộ mã nguồn:</p>
    
    <div class="cmd-block"># SAI LẦM: Làm mất cache package.json khi đổi bất kỳ dòng code nào
COPY . .
RUN npm install

# CHUẨN SENIOR: Tận dụng tối đa cache layer
COPY package*.json ./
RUN npm ci
COPY . .</div>

    <div class="guide-section-title">🛡️ Quét lỗ hổng Image với Trivy</div>
    <p>Trong quy trình DevSecOps, trước khi push image lên Registry, ta cần chạy scan để tìm các thư viện lỗi thời, độc hại:</p>
    <div class="cmd-block"># Cài đặt và quét image
trivy image --severity HIGH,CRITICAL node-app:latest</div>
  `,

  'cicd-github': `
    <div class="guide-card-tag" style="color:#82b1ff;border-color:rgba(130,177,255,0.3);margin-bottom:0.8rem">CI/CD Pipeline</div>
    <h2>CI/CD Pipeline với GitHub Actions + Docker + VPS</h2>
    <p class="guide-subtitle">Kiến trúc CI/CD chuẩn: Build tự động trên runner của GitHub Actions, đẩy lên Docker Hub và SSH deploy lên VPS.</p>
    
    <div class="thesis-quote">
      <strong>Nguyên lý bảo mật:</strong> Không lưu thông tin VPS trong mã nguồn công khai. Sử dụng <strong>GitHub Secrets</strong> để mã hóa các thông tin nhạy cảm: IP máy chủ, Token Docker Hub, SSH Private Key để kết nối an toàn.
    </div>

    <div class="guide-section-title">📝 Cấu hình Pipeline (.github/workflows/deploy.yml)</div>
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
            docker compose up -d
            docker image prune -f</div>
  `,

  'cicd-gitlab': `
    <div class="guide-card-tag" style="color:#ff8a80;border-color:rgba(255,138,128,0.3);margin-bottom:0.8rem">CI/CD Pipeline</div>
    <h2>CI/CD với GitLab CI/CD & Self-Hosted Runner</h2>
    <p class="guide-subtitle">Cài đặt GitLab runner trên hạ tầng cá nhân để tiết kiệm chi phí và tăng tốc build với Docker-in-Docker (dind).</p>
    
    <div class="guide-section-title">⚙️ Cấu hình .gitlab-ci.yml</div>
    <div class="cmd-block">stages:
  - build
  - deploy

variables:
  DOCKER_IMAGE: registry.gitlab.com/my-group/my-project:latest

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
    <div class="guide-card-tag" style="color:#ffb74d;border-color:rgba(255,183,77,0.3);margin-bottom:0.8rem">GIT</div>
    <h2>Cấu hình SSH Keys cho Nhiều Tài khoản GitHub & GitLab</h2>
    <p class="guide-subtitle">Cấu hình SSH client tinh tế giúp chuyển mạch tài khoản Git mượt mà.</p>

    <div class="guide-section-title">🔑 Bước 1: Tạo các cặp khóa riêng biệt</div>
    <div class="cmd-block"># Khóa cho công việc công ty
ssh-keygen -t ed25519 -C "work@company.com" -f ~/.ssh/id_ed25519_work

# Khóa cho các dự án cá nhân
ssh-keygen -t ed25519 -C "personal@email.com" -f ~/.ssh/id_ed25519_personal</div>

    <div class="guide-section-title">🚀 Bước 2: Thiết lập file ~/.ssh/config</div>
    <div class="cmd-block"># Tài khoản Công việc (Work GitHub)
Host github.com-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work

# Tài khoản Cá nhân (Personal GitHub)
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal</div>

    <div class="guide-section-title">⚙️ Bước 3: Áp dụng khi Clone hoặc cấu hình Remote URL</div>
    <p>Thay vì clone URL mặc định, hãy thay đổi host tương ứng trong config:</p>
    <div class="cmd-block"># Thay đổi từ: git@github.com:user/repo.git
# Thành:
git clone git@github.com-personal:user/repo.git</div>
  `,

  'k8s-core': `
    <div class="guide-card-tag" style="color:#64b5f6;border-color:rgba(100,181,246,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Kubernetes (K8s) Cơ Bản: Control Plane & Worker Nodes</h2>
    <p class="guide-subtitle">Hiểu rõ kiến trúc điều phối container tự động cho hệ thống phân tán (Distributed System).</p>

    <div class="guide-section-title">☸️ Phân tích Kiến trúc K8s Cluster</div>
    <ul>
      <li><strong>Control Plane (Master Node):</strong> Đầu não quản lý trạng thái mong muốn (desired state) của hệ thống.
        <ul>
          <li><strong>kube-apiserver:</strong> Điểm tiếp nhận mọi truy vấn cấu hình (REST API).</li>
          <li><strong>etcd:</strong> Cơ sở dữ liệu dạng Key-Value phân tán lưu trữ toàn bộ cấu hình cluster.</li>
          <li><strong>kube-scheduler:</strong> Phân phối pods vào các worker nodes dựa trên tài nguyên trống.</li>
          <li><strong>kube-controller-manager:</strong> Quản lý các vòng lặp kiểm soát (Replication Controller, Node Controller).</li>
        </ul>
      </li>
      <li><strong>Worker Node:</strong> Nơi trực tiếp chạy các container ứng dụng.
        <ul>
          <li><strong>kubelet:</strong> Agent giám sát trạng thái của Container và Pod trên node.</li>
          <li><strong>kube-proxy:</strong> Quản lý luật mạng để định tuyến lưu lượng (iptables/IPVS).</li>
          <li><strong>Container Runtime (CRI):</strong> Engine chạy container thực sự (containerd, CRI-O).</li>
        </ul>
      </li>
    </ul>

    <div class="guide-section-title">📝 Ví dụ YAML Deployment + Service hoàn chỉnh</div>
    <div class="cmd-block">apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-web-app
  labels:
    app: web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: nginx-server
        image: nginx:1.25-alpine
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: my-web-service
spec:
  selector:
    app: web
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: ClusterIP</div>
  `,

  'k8s-config': `
    <div class="guide-card-tag" style="color:#4dd0e1;border-color:rgba(77,208,225,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Quản lý Cấu hình K8s: ConfigMap, Secret & Ingress</h2>
    <p class="guide-subtitle">Làm chủ việc phân phối cấu hình động, thông tin mật và thiết lập định tuyến Ingress traffic.</p>

    <div class="guide-section-title">📝 Khái niệm nền tảng</div>
    <ul>
      <li><strong>ConfigMap:</strong> Dùng để lưu trữ các thông tin cấu hình không nhạy cảm dưới dạng key-value. Ứng dụng đọc qua biến môi trường hoặc volume mount.</li>
      <li><strong>Secret:</strong> Tương tự như ConfigMap nhưng dùng để lưu mật khẩu, API key, chứng chỉ SSL. Dữ liệu trong Secret mặc định được encode dạng Base64 (lưu ý: Base64 chỉ là encode, chưa phải mã hóa bảo mật).</li>
      <li><strong>Ingress:</strong> Quy định các luật định tuyến HTTP/HTTPS từ ngoài internet vào các Service bên trong Cluster. Hoạt động như một Reverse Proxy cấp Cluster.</li>
    </ul>

    <div class="guide-section-title">📂 Thực hành YAML Manifest: ConfigMap, Secret và Ingress</div>
    <div class="cmd-block">apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DB_HOST: "postgres-service"
  DB_PORT: "5432"
---
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
type: Opaque
data:
  # Giá trị 'my-super-secret-password' đã mã hóa Base64
  DB_PASSWORD: bXktc3VwZXItc2VjcmV0LXBhc3N3b3Jk
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    kubernetes.io/ingress.class: "nginx"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - app.my-domain.com
    secretName: app-tls-secret
  rules:
  - host: app.my-domain.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-web-service
            port:
              number: 80</div>
  `,

  'k8s-helm': `
    <div class="guide-card-tag" style="color:#9575cd;border-color:rgba(149,117,205,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Đóng gói Ứng dụng Kubernetes với Helm Chart</h2>
    <p class="guide-subtitle">Tiêu chuẩn hóa quy trình deploy microservices trên K8s bằng template engine.</p>

    <div class="guide-section-title">📂 Cấu trúc thư mục của một Helm Chart</div>
    <div class="cmd-block">my-chart/
  Chart.yaml          # File metadata chứa phiên bản chart và thông tin app
  values.yaml         # Chứa toàn bộ các biến cấu hình mặc định
  charts/             # Thư mục chứa các sub-charts phụ thuộc
  templates/          # Các tệp định nghĩa tài nguyên được viết bằng template Go
    deployment.yaml
    service.yaml
    ingress.yaml
    _helpers.tpl      # Khai báo các khối template tái sử dụng</div>

    <div class="guide-section-title">⚙️ Template hóa manifest (Ví dụ templates/deployment.yaml)</div>
    <div class="cmd-block">apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "my-chart.fullname" . }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app: {{ include "my-chart.name" . }}
  template:
    metadata:
      labels:
        app: {{ include "my-chart.name" . }}
    spec:
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - containerPort: {{ .Values.service.port }}</div>

    <div class="guide-section-title">🛠️ Các câu lệnh làm việc với Helm</div>
    <div class="cmd-block"># Tạo mới một Chart
helm create my-app-chart

# Kiểm tra cú pháp lỗi trong chart
helm lint ./my-app-chart

# Chạy thử nghiệm giả lập (Dry Run) để xem kết quả gen manifest
helm install my-release ./my-app-chart --dry-run --debug

# Install chart lên cluster thực tế
helm install my-app-prod ./my-app-chart -f production-values.yaml

# Rollback phiên bản nếu xảy ra lỗi
helm rollback my-app-prod 1 # Quay về revision số 1</div>
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
    
    # Cấu hình timeouts
    proxy_read_timeout 86400;
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
