import React, { useState } from 'react'

export default function ConfigGenerator() {
  const [activeGenTab, setActiveGenTab] = useState('docker')

  // Docker Inputs
  const [dockerLang, setDockerLang] = useState('node')
  const [dockerPort, setDockerPort] = useState('3000')
  const [dockerMultistage, setDockerMultistage] = useState(true)
  const [dockerDb, setDockerDb] = useState(false)

  // GitHub Actions Inputs
  const [ghBranch, setGhBranch] = useState('main')
  const [ghImage, setGhImage] = useState('username/my-app')
  const [ghDeployPath, setGhDeployPath] = useState('/home/ubuntu/my-app')

  // aaPanel Inputs
  const [aaDomain, setAaDomain] = useState('app.domain.com')
  const [aaPort, setAaPort] = useState('3000')

  // Kubernetes Inputs
  const [k8sName, setK8sName] = useState('my-app')
  const [k8sImage, setK8sImage] = useState('username/my-app:latest')
  const [k8sReplicas, setK8sReplicas] = useState('3')
  const [k8sPort, setK8sPort] = useState('3000')

  // Copy Code Helper
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Đã sao chép cấu hình thành công!')
    }).catch(err => {
      console.error('Không thể copy code: ', err)
    })
  }

  // Generation Logic
  const getConfigs = () => {
    let file1Name = ''
    let file1Content = ''
    let file2Name = ''
    let file2Content = ''

    if (activeGenTab === 'docker') {
      file1Name = 'Dockerfile'
      file2Name = 'docker-compose.yml'

      if (dockerLang === 'node') {
        if (dockerMultistage) {
          file1Content = `# Multi-stage Build cho Node.js\nFROM node:22-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:22-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY --from=builder /app/dist ./dist\nUSER node\nEXPOSE ${dockerPort}\nCMD ["node", "dist/main.js"]`
        } else {
          file1Content = `# Dockerfile cơ bản cho Node.js\nFROM node:22-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE ${dockerPort}\nCMD ["npm", "start"]`
        }
        file2Content = `version: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - "${dockerPort}:${dockerPort}"\n    restart: always`
      } else if (dockerLang === 'python') {
        if (dockerMultistage) {
          file1Content = `# Multi-stage Build cho Python FastAPI\nFROM python:3.12-slim AS builder\nWORKDIR /app\nRUN pip install --no-cache-dir poetry\nCOPY pyproject.toml poetry.lock ./\nRUN poetry export -f requirements.txt --output requirements.txt --without-hashes\n\nFROM python:3.12-slim AS runner\nWORKDIR /app\nCOPY --from=builder /app/requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nUSER 1000\nEXPOSE ${dockerPort}\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "${dockerPort}"]`
        } else {
          file1Content = `# Dockerfile cơ bản cho Python\nFROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt ./\nRUN pip install -r requirements.txt\nCOPY . .\nEXPOSE ${dockerPort}\nCMD ["python", "main.py"]`
        }
        file2Content = `version: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - "${dockerPort}:${dockerPort}"\n    restart: always`
      } else if (dockerLang === 'go') {
        file1Content = `# Multi-stage Build cho Go (Golang)\nFROM golang:1.22-alpine AS builder\nWORKDIR /app\nCOPY go.mod go.sum ./\nRUN go mod download\nCOPY . .\nRUN CGO_ENABLED=0 GOOS=linux go build -o main .\n\nFROM alpine:latest\nWORKDIR /app\nCOPY --from=builder /app/main .\nEXPOSE ${dockerPort}\nCMD ["./main"]`
        file2Content = `version: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - "${dockerPort}:${dockerPort}"\n    restart: always`
      } else if (dockerLang === 'php') {
        file1Content = `# Dockerfile cho PHP Laravel\nFROM php:8.3-fpm-alpine\nWORKDIR /var/web\nRUN docker-php-ext-install pdo pdo_mysql\nCOPY . .\nEXPOSE 9000\nCMD ["php-fpm"]`
        file2Content = `version: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    volumes:\n      - .:/var/web\n    restart: always`
      }

      if (dockerDb) {
        file2Content += `\n\n  database:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: app_db\n      POSTGRES_USER: app_user\n      POSTGRES_PASSWORD: secure_password\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    ports:\n      - "5432:5432"\n    restart: always\n\n  cache:\n    image: redis:7-alpine\n    ports:\n      - "6379:6379"\n    restart: always\n\nvolumes:\n  pgdata:`
      }
    } else if (activeGenTab === 'github') {
      file1Name = '.github/workflows/deploy.yml'
      file1Content = `name: Deploy Pipeline\n\non:\n  push:\n    branches: [ ${ghBranch || 'main'} ]\n\njobs:\n  build-and-push:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Code\n        uses: actions/checkout@v4\n\n      - name: Login to Docker Hub\n        uses: docker/login-action@v3\n        with:\n          username: \${{ secrets.DOCKERHUB_USERNAME }}\n          password: \${{ secrets.DOCKERHUB_TOKEN }}\n\n      - name: Build and Push\n        uses: docker/build-push-action@v5\n        with:\n          context: .\n          push: true\n          tags: ${ghImage || 'username/my-app'}:latest\n\n  deploy:\n    needs: build-and-push\n    runs-on: ubuntu-latest\n    steps:\n      - name: SSH to VPS & Run Container\n        uses: appleboy/ssh-action@v1.0.3\n        with:\n          host: \${{ secrets.VPS_HOST }}\n          username: \${{ secrets.VPS_USER }}\n          key: \${{ secrets.VPS_SSH_KEY }}\n          script: |\n            cd ${ghDeployPath || '/home/ubuntu/my-app'}\n            docker compose pull\n            docker compose up -d --remove-orphans\n            docker image prune -f`
    } else if (activeGenTab === 'aapanel') {
      file1Name = 'nginx-reverse-proxy.conf'
      file1Content = `# Cấu hình Reverse Proxy Nginx cho aaPanel\nserver {\n    listen 80;\n    server_name ${aaDomain || 'app.domain.com'};\n\n    # Chuyển tiếp HTTP sang HTTPS (Khuyến nghị)\n    return 301 https://$host$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name ${aaDomain || 'app.domain.com'};\n\n    # Đường dẫn SSL của aaPanel (Sẽ tự động điền khi cài Let's Encrypt)\n    ssl_certificate /www/server/panel/vhost/cert/${aaDomain || 'app.domain.com'}/fullchain.pem;\n    ssl_certificate_key /www/server/panel/vhost/cert/${aaDomain || 'app.domain.com'}/privkey.pem;\n    ssl_protocols TLSv1.2 TLSv1.3;\n\n    location / {\n        proxy_pass http://127.0.0.1:${aaPort || '3000'};\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        \n        # Hỗ trợ WebSockets\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n    }\n}`
    } else if (activeGenTab === 'k8s') {
      file1Name = 'k8s-manifest.yaml'
      file1Content = `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ${k8sName || 'my-app'}-deployment\n  labels:\n    app: ${k8sName || 'my-app'}\nspec:\n  replicas: ${k8sReplicas || '3'}\n  selector:\n    matchLabels:\n      app: ${k8sName || 'my-app'}\n  template:\n    metadata:\n      labels:\n        app: ${k8sName || 'my-app'}\n    spec:\n      containers:\n      - name: ${k8sName || 'my-app'}-container\n        image: ${k8sImage || 'username/my-app:latest'}\n        ports:\n        - containerPort: ${k8sPort || '3000'}\n        resources:\n          limits:\n            cpu: "500m"\n            memory: "512Mi"\n          requests:\n            cpu: "250m"\n            memory: "256Mi"\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: ${k8sName || 'my-app'}-service\nspec:\n  selector:\n    app: ${k8sName || 'my-app'}\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: ${k8sPort || '3000'}\n  type: ClusterIP`
    }

    return { file1Name, file1Content, file2Name, file2Content }
  }

  const { file1Name, file1Content, file2Name, file2Content } = getConfigs()

  return (
    <div className="tab-content active" id="content-generators">
      <div className="generators-container">
        {/* Sidebar */}
        <div className="playbook-sidebar glass">
          <h3>Chọn Công Cụ</h3>
          {[
            { id: 'docker', label: '🐳 Docker & Compose' },
            { id: 'github', label: '⚙️ GitHub Actions' },
            { id: 'aapanel', label: '🖥️ aaPanel Nginx Proxy' },
            { id: 'k8s', label: '☸️ Kubernetes Manifest' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`filter-btn ${activeGenTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveGenTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Panel */}
        <div className="generators-main glass">
          {/* Form inputs */}
          <div className="gen-form-panel">
            {activeGenTab === 'docker' && (
              <>
                <h2>Tạo Dockerfile & Compose</h2>
                <div className="form-group">
                  <label>Ngôn ngữ / Framework:</label>
                  <select value={dockerLang} onChange={(e) => setDockerLang(e.target.value)}>
                    <option value="node">Node.js (Express/NestJS)</option>
                    <option value="python">Python (FastAPI/Flask)</option>
                    <option value="go">Go (Golang)</option>
                    <option value="php">PHP (Laravel)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Cổng chạy ứng dụng (Port):</label>
                  <input 
                    type="number" 
                    value={dockerPort} 
                    onChange={(e) => setDockerPort(e.target.value)}
                  />
                </div>
                <div className="form-group check-group">
                  <input 
                    type="checkbox" 
                    id="docker-multistage-chk" 
                    checked={dockerMultistage} 
                    onChange={(e) => setDockerMultistage(e.target.checked)}
                  />
                  <label htmlFor="docker-multistage-chk">Sử dụng Multi-stage build (Tối ưu kích thước)</label>
                </div>
                <div className="form-group check-group">
                  <input 
                    type="checkbox" 
                    id="docker-db-chk" 
                    checked={dockerDb} 
                    onChange={(e) => setDockerDb(e.target.checked)}
                  />
                  <label htmlFor="docker-db-chk">Kèm PostgreSQL Database & Redis in Compose</label>
                </div>
              </>
            )}

            {activeGenTab === 'github' && (
              <>
                <h2>Tạo GitHub Actions Workflow</h2>
                <div className="form-group">
                  <label>Nhánh kích hoạt (Branch):</label>
                  <input 
                    type="text" 
                    value={ghBranch} 
                    onChange={(e) => setGhBranch(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Tên Docker Image (Docker Hub):</label>
                  <input 
                    type="text" 
                    value={ghImage} 
                    onChange={(e) => setGhImage(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Thư mục deploy trên VPS:</label>
                  <input 
                    type="text" 
                    value={ghDeployPath} 
                    onChange={(e) => setGhDeployPath(e.target.value)}
                  />
                </div>
              </>
            )}

            {activeGenTab === 'aapanel' && (
              <>
                <h2>aaPanel Reverse Proxy</h2>
                <div className="form-group">
                  <label>Domain / Subdomain:</label>
                  <input 
                    type="text" 
                    value={aaDomain} 
                    onChange={(e) => setAaDomain(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Cổng Docker Container nội bộ:</label>
                  <input 
                    type="number" 
                    value={aaPort} 
                    onChange={(e) => setAaPort(e.target.value)}
                  />
                </div>
              </>
            )}

            {activeGenTab === 'k8s' && (
              <>
                <h2>Kubernetes Manifest YAML</h2>
                <div className="form-group">
                  <label>Tên ứng dụng (App Name):</label>
                  <input 
                    type="text" 
                    value={k8sName} 
                    onChange={(e) => setK8sName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Docker Image URL:</label>
                  <input 
                    type="text" 
                    value={k8sImage} 
                    onChange={(e) => setK8sImage(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Số lượng bản sao (Replicas):</label>
                  <input 
                    type="number" 
                    value={k8sReplicas} 
                    onChange={(e) => setK8sReplicas(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Cổng Container (Container Port):</label>
                  <input 
                    type="number" 
                    value={k8sPort} 
                    onChange={(e) => setK8sPort(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>

          {/* Code output blocks */}
          <div className="gen-code-output">
            <div className="code-header">
              <span>{file1Name}</span>
              <button className="copy-code-btn" onClick={() => copyToClipboard(file1Content)}>
                📋 Copy Code
              </button>
            </div>
            <pre><code>{file1Content}</code></pre>

            {file2Content && (
              <div className="code-header-2-wrapper">
                <div className="code-header" style={{ marginTop: '1.5rem' }}>
                  <span>{file2Name}</span>
                  <button className="copy-code-btn" onClick={() => copyToClipboard(file2Content)}>
                    📋 Copy Code
                  </button>
                </div>
                <pre><code>{file2Content}</code></pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
