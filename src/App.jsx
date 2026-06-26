import React, { useState } from 'react'
import Flowchart from './components/Flowchart'
import Playbook from './components/Playbook'
import ConfigGenerator from './components/ConfigGenerator'
import Quiz from './components/Quiz'

function App() {
  const [activeTab, setActiveTab] = useState('flowchart')

  return (
    <>
      {/* Background floating abstract Orbs */}
      <div className="bg-orbs">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      <div className="app-container">
        <header>
          <h1>DevOps và Các Chức Năng Cốt Lõi</h1>
          <p>Luận Án Học Thuật | Phân Tích Logic & Động Lực Học</p>

          {/* Tab Navigation */}
          <div className="tab-nav">
            <button 
              className={`tab-btn ${activeTab === 'flowchart' ? 'active' : ''}`} 
              onClick={() => setActiveTab('flowchart')}
            >
              <span className="tab-icon">⬡</span> Sơ Đồ DevOps
            </button>
            <button 
              className={`tab-btn ${activeTab === 'guides' ? 'active' : ''}`} 
              onClick={() => setActiveTab('guides')}
            >
              <span className="tab-icon">📋</span> Cẩm Nang Thực Hành
            </button>
            <button 
              className={`tab-btn ${activeTab === 'generators' ? 'active' : ''}`} 
              onClick={() => setActiveTab('generators')}
            >
              <span className="tab-icon">⚙️</span> Trình Tạo Config
            </button>
            <button 
              className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`} 
              onClick={() => setActiveTab('quiz')}
            >
              <span className="tab-icon">🧠</span> Thử Thách Senior
            </button>
          </div>
        </header>

        {/* Tab Contents */}
        {activeTab === 'flowchart' && <Flowchart />}
        {activeTab === 'guides' && <Playbook />}
        {activeTab === 'generators' && <ConfigGenerator />}
        {activeTab === 'quiz' && <Quiz />}
      </div>
    </>
  )
}

export default App
