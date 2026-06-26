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
          <div class="cmd-block">docker run -d -p 3000:3000 --name running-app my-app:v1.0</div>
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
    restart: always</div>

    <div class="guide-section-title">🔥 Các tham số cấu hình nâng cao của Watchtower</div>
    <ul>
      <li><strong>--cleanup (-c):</strong> Sau khi container khởi động lại với image mới, xóa sạch image cũ. Đây là cờ <strong>BẮT BUỘC</strong> phải bật để tránh làm đầy ổ cứng VPS.</li>
      <li><strong>--interval (-i) [seconds]:</strong> Tần suất kiểm tra cập nhật. Ví dụ: \`--interval 86400\` để quét mỗi ngày một lần.</li>
      <li><strong>--label-enable:</strong> Chỉ cập nhật các container có chứa nhãn \`com.centurylinklabs.watchtower.enable=true\`. Giúp bạn chủ động chọn container nào được cập nhật tự động.</li>
    </ul>
  `,

  'docker-opt': `
    <div class="guide-card-tag" style="color:#bb86fc;border-color:rgba(187,134,252,0.3);margin-bottom:0.8rem">DOCKER</div>
    <h2>Tối ưu hóa Dockerfile cho môi trường Production</h2>
    <p class="guide-subtitle">Hướng dẫn viết Dockerfile chuẩn Senior: Nhẹ nhất, nhanh nhất và an toàn nhất.</p>

    <div class="guide-section-title">🐳 Nguyên tắc 1: Multi-stage Builds</div>
    <p>Multi-stage giúp tách biệt môi trường build (chứa compiler, SDK nặng) khỏi môi trường chạy thực tế (chỉ chứa file nhị phân đã build và thư viện tối thiểu).</p>
    
    <div class="cmd-block"># --- Stage 1: Build ---
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Stage 2: Runtime ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]</div>
  `,

  'cicd-github': `
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
            docker compose up -d
            docker image prune -f</div>
  `,

  'cicd-gitlab': `
    <div class="guide-card-tag" style="color:#ff8a80;border-color:rgba(255,138,128,0.3);margin-bottom:0.8rem">CI/CD Pipeline</div>
    <h2>CI/CD với GitLab CI/CD & Self-Hosted Runner</h2>
    <p class="guide-subtitle">Cấu hình GitLab pipeline tối ưu chạy trên VPS riêng bằng Docker Executor.</p>
    
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
    <p class="guide-subtitle">Giải quyết triệt để lỗi xung đột phân quyền SSH khi dùng nhiều tài khoản GitHub/GitLab trên cùng một máy.</p>

    <div class="guide-section-title">🔑 Bước 1: Tạo các SSH Key riêng biệt</div>
    <div class="cmd-block"># Tạo key cho tài khoản công việc (Work)
ssh-keygen -t ed25519 -C "work@company.com" -f ~/.ssh/id_ed25519_work

# Tạo key cho tài khoản cá nhân (Personal)
ssh-keygen -t ed25519 -C "personal@email.com" -f ~/.ssh/id_ed25519_personal</div>

    <div class="guide-section-title">🚀 Bước 3: Cấu hình SSH config file</div>
    <div class="cmd-block">Host github.com-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work

Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal</div>
  `,

  'k8s-core': `
    <div class="guide-card-tag" style="color:#64b5f6;border-color:rgba(100,181,246,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Kubernetes (K8s) Cơ Bản: Pods, Deployments & Services</h2>
    <p class="guide-subtitle">Kiến trúc lõi điều phối container tự động cho hệ thống lớn.</p>

    <div class="guide-section-title">☸️ Phân tích các khái niệm chính</div>
    <ul>
      <li><strong>Pod:</strong> Đơn vị nhỏ nhất có thể deploy được trong K8s.</li>
      <li><strong>Deployment:</strong> Trình quản lý bản sao và tự phục hồi (Self-healing).</li>
      <li><strong>Service:</strong> Đầu mối cân bằng tải và định tuyến nội bộ ổn định.</li>
    </ul>
  `,

  'k8s-config': `
    <div class="guide-card-tag" style="color:#4dd0e1;border-color:rgba(77,208,225,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Quản lý Cấu hình K8s: ConfigMap, Secret & Ingress</h2>
    <p class="guide-subtitle">Làm việc với dữ liệu cấu hình nhạy cảm và mở ứng dụng ra thế giới bên ngoài.</p>
  `,

  'k8s-helm': `
    <div class="guide-card-tag" style="color:#9575cd;border-color:rgba(149,117,205,0.3);margin-bottom:0.8rem">KUBERNETES</div>
    <h2>Đóng gói Ứng dụng Kubernetes với Helm Chart</h2>
    <p class="guide-subtitle">Quản lý manifest K8s dưới dạng package. Viết template và triển khai ứng dụng bằng Helm.</p>
  `,

  'aapanel-proxy': `
    <div class="guide-card-tag" style="color:#81c784;border-color:rgba(129,199,132,0.3);margin-bottom:0.8rem">VPS & AAPANEL</div>
    <h2>aaPanel: Nginx Reverse Proxy Docker & Let\'s Encrypt</h2>
    <p class="guide-subtitle">Hướng dẫn từng bước cấu hình Nginx làm proxy ngược để expose ứng dụng Docker an toàn.</p>
  `,

  'aws-vpc': `
    <div class="guide-card-tag" style="color:#e0e0e0;border-color:rgba(224,224,224,0.3);margin-bottom:0.8rem">AWS CLOUD</div>
    <h2>Kiến trúc mạng AWS VPC 3-Tier chuẩn Production</h2>
    <p class="guide-subtitle">Thiết kế hạ tầng mạng đám mây cô lập, bảo mật và chịu lỗi cao trên AWS.</p>
  `,

  'aws-compute': `
    <div class="guide-card-tag" style="color:#f06292;border-color:rgba(240,98,146,0.3);margin-bottom:0.8rem">AWS CLOUD</div>
    <h2>Deploy Ứng dụng với AWS EC2, S3 & CloudFront CDN</h2>
    <p class="guide-subtitle">Kết hợp máy chủ ảo EC2 với kho lưu trữ tĩnh S3 và mạng lưới phân phối CDN CloudFront.</p>
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
