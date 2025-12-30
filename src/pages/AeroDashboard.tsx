import React from 'react'
import { 
  UserOutlined, 
  DesktopOutlined, 
  ShareAltOutlined,
  IdcardOutlined,
  CalendarOutlined,
  CarOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  CheckSquareOutlined,
  CheckOutlined
} from '@ant-design/icons'
import './AeroDashboard.css'

const AeroDashboard: React.FC = () => {
  return (
    <div className="aero-container">
      {/* Decorative Background Elements */}
      <div className="aero-decoration-ring one"></div>
      <div className="aero-decoration-ring two"></div>

      <div className="aero-header">
        <div className="aero-title">承飞航空小程序年度数据总结</div>
      </div>

      {/* Top Stats Row */}
      <div className="aero-top-stats">
        <div className="aero-stat-card">
          <UserOutlined className="aero-stat-icon" />
          <div className="aero-stat-label">总用户数</div>
          <div className="aero-stat-value">130</div>
        </div>
        <div className="aero-stat-card">
          <DesktopOutlined className="aero-stat-icon" />
          <div className="aero-stat-label">总访问次数</div>
          <div className="aero-stat-value">853</div>
        </div>
        <div className="aero-stat-card">
          <ShareAltOutlined className="aero-stat-icon" />
          <div className="aero-stat-label">总分享次数</div>
          <div className="aero-stat-value">184</div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="aero-middle-section">
        {/* User Behavior Panel */}
        <div className="aero-panel">
          <div className="aero-panel-title">
            <IdcardOutlined /> 用户行为数据
          </div>
          
          <div className="aero-progress-item">
            <div className="aero-progress-label">
              <span>名片夹点击次数</span>
              <span className="aero-progress-value">530</span>
            </div>
            <div className="aero-progress-track">
              <div className="aero-progress-bar" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="aero-progress-item">
            <div className="aero-progress-label">
              <span>我的名片点击次数</span>
              <span className="aero-progress-value">214</span>
            </div>
            <div className="aero-progress-track">
              <div className="aero-progress-bar" style={{ width: '35%' }}></div>
            </div>
          </div>
        </div>

        {/* Meeting Room Panel */}
        <div className="aero-panel">
          <div className="aero-panel-title">
            <CalendarOutlined /> 会议室预约
          </div>
          <div className="aero-list-item">
            <CheckSquareOutlined className="aero-list-icon" />
            预约次数 <span className="aero-highlight">4</span>
          </div>
          <div className="aero-list-item">
            <CheckSquareOutlined className="aero-list-icon" />
            审核次数 <span className="aero-highlight">4</span>
          </div>
          <div className="aero-list-item">
            <ClockCircleOutlined className="aero-list-icon" />
            平均审核用时 <span className="aero-highlight">0.1天</span>
          </div>
        </div>

        {/* Vehicle Panel */}
        <div className="aero-panel">
          <div className="aero-panel-title">
            <CarOutlined /> 车辆预约
          </div>
          <div className="aero-list-item">
            <CarOutlined className="aero-list-icon" />
            预约次数 <span className="aero-highlight">44</span>
          </div>
          <div className="aero-list-item">
            <CheckSquareOutlined className="aero-list-icon" />
            审核次数 <span className="aero-highlight">128</span>
          </div>
          <div className="aero-list-item">
            <ClockCircleOutlined className="aero-list-icon" />
            平均审核用时 <span className="aero-highlight">5.14天</span>
          </div>
        </div>
      </div>

      {/* Bottom Section - Article Processing */}
      <div className="aero-bottom-section">
        <div className="aero-wide-panel">
          <div className="aero-panel-title" style={{ width: '100%', justifyContent: 'center', borderBottom: 'none' }}>
            <FileTextOutlined /> 稿件处理情况
          </div>
          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, #00aaff, transparent)', marginBottom: '20px' }}></div>
          
          <div className="aero-stats-row">
            <div className="aero-stat-inline">
              <FileTextOutlined /> 稿件新增 <span className="aero-highlight">51</span>
            </div>
            <div className="aero-stat-inline">
              <CheckSquareOutlined /> 稿件审核 <span className="aero-highlight">215</span>
            </div>
            <div className="aero-stat-inline">
              <ClockCircleOutlined /> 平均审核用时 <span className="aero-highlight">2.8天</span>
            </div>
          </div>

          <div className="aero-analysis">
            <div className="aero-panel-title" style={{ justifyContent: 'center', borderBottom: 'none', fontSize: '14px' }}>
              数据总结与分析
            </div>
            <ul className="aero-analysis-list">
              <li><CheckOutlined className="check-icon" /> 名片功能使用活跃</li>
              <li><CheckOutlined className="check-icon" /> 车辆审批流程较多</li>
              <li><CheckOutlined className="check-icon" /> 会议室使用率较低</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AeroDashboard
