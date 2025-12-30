import { Card, Row, Col, Typography, Button, Space } from 'antd'
import { BarChartOutlined, LineChartOutlined, PieChartOutlined, AreaChartOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const { Title, Paragraph } = Typography

const Home = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <LineChartOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: '折线图分析',
      description: '实时数据趋势分析，支持多维度对比'
    },
    {
      icon: <BarChartOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: '柱状图统计',
      description: '清晰展示数据分布，便于数据对比'
    },
    {
      icon: <PieChartOutlined style={{ fontSize: '48px', color: '#faad14' }} />,
      title: '饼图占比',
      description: '直观展示数据占比关系'
    },
    {
      icon: <AreaChartOutlined style={{ fontSize: '48px', color: '#f5222d' }} />,
      title: '面积图展示',
      description: '美观的数据可视化效果'
    }
  ]

  return (
    <div className="home-container">
      <div className="home-header">
        <Title level={1} style={{ color: '#fff', marginBottom: '16px' }}>
          📊 H5 报表统计系统
        </Title>
        <Paragraph style={{ color: '#fff', fontSize: '18px', marginBottom: '32px' }}>
          基于 React 18 + TypeScript + Vite 构建的现代化数据可视化平台
        </Paragraph>
        <Space size="large">
          <Button 
            type="primary" 
            size="large" 
            onClick={() => navigate('/report')}
            icon={<BarChartOutlined />}
          >
            查看报表示例
          </Button>
          <Button 
            size="large" 
            style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff', border: 'none' }}
          >
            了解更多
          </Button>
        </Space>
      </div>

      <div className="home-content">
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: '#fff' }}>
          核心功能
        </Title>
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card 
                className="feature-card"
                hoverable
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
                  <Title level={4}>{feature.title}</Title>
                  <Paragraph type="secondary">{feature.description}</Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="tech-stack">
          <Title level={3} style={{ textAlign: 'center', color: '#fff', marginBottom: '32px' }}>
            技术栈
          </Title>
          <Row gutter={[16, 16]} justify="center">
            {[
              { name: 'React 18', color: '#61dafb' },
              { name: 'TypeScript', color: '#3178c6' },
              { name: 'Vite', color: '#646cff' },
              { name: 'Ant Design', color: '#1890ff' },
              { name: 'ECharts', color: '#5470c6' }
            ].map((tech, index) => (
              <Col key={index}>
                <div 
                  className="tech-tag"
                  style={{ background: tech.color }}
                >
                  {tech.name}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Home
