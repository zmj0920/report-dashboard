import { Card, Row, Col, Typography, Button, Space } from 'antd'
import { HomeOutlined, ReloadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import ReactECharts from 'echarts-for-react'
import './Report.css'

const { Title } = Typography

const Report = () => {
  const navigate = useNavigate()

  // 折线图配置
  const lineChartOption = {
    title: {
      text: '月度销售趋势',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['产品A', '产品B', '产品C'],
      top: 30
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      name: '销售额（万元）'
    },
    series: [
      {
        name: '产品A',
        type: 'line',
        smooth: true,
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
        itemStyle: {
          color: '#5470c6'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(84, 112, 198, 0.5)' },
              { offset: 1, color: 'rgba(84, 112, 198, 0.1)' }
            ]
          }
        }
      },
      {
        name: '产品B',
        type: 'line',
        smooth: true,
        data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
        itemStyle: {
          color: '#91cc75'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(145, 204, 117, 0.5)' },
              { offset: 1, color: 'rgba(145, 204, 117, 0.1)' }
            ]
          }
        }
      },
      {
        name: '产品C',
        type: 'line',
        smooth: true,
        data: [150, 232, 201, 154, 190, 330, 410, 321, 280, 234, 267, 389],
        itemStyle: {
          color: '#fac858'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(250, 200, 88, 0.5)' },
              { offset: 1, color: 'rgba(250, 200, 88, 0.1)' }
            ]
          }
        }
      }
    ]
  }

  // 柱状图配置
  const barChartOption = {
    title: {
      text: '季度销售对比',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['第一季度', '第二季度', '第三季度', '第四季度'],
      top: 30
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['华北', '华东', '华南', '华中', '西南', '西北', '东北']
    },
    yAxis: {
      type: 'value',
      name: '销售额（万元）'
    },
    series: [
      {
        name: '第一季度',
        type: 'bar',
        data: [320, 302, 301, 334, 390, 330, 320],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#5470c6' },
              { offset: 1, color: '#91cc75' }
            ]
          }
        }
      },
      {
        name: '第二季度',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#91cc75' },
              { offset: 1, color: '#fac858' }
            ]
          }
        }
      },
      {
        name: '第三季度',
        type: 'bar',
        data: [150, 232, 201, 154, 190, 330, 410],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#fac858' },
              { offset: 1, color: '#ee6666' }
            ]
          }
        }
      },
      {
        name: '第四季度',
        type: 'bar',
        data: [98, 77, 101, 99, 140, 221, 250],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#ee6666' },
              { offset: 1, color: '#73c0de' }
            ]
          }
        }
      }
    ]
  }

  return (
    <div className="report-container">
      <div className="report-header">
        <Title level={2} style={{ color: '#fff', margin: 0 }}>
          📈 数据报表展示
        </Title>
        <Space>
          <Button 
            icon={<HomeOutlined />} 
            onClick={() => navigate('/')}
          >
            返回首页
          </Button>
          <Button 
            type="primary" 
            icon={<ReloadOutlined />}
            onClick={() => window.location.reload()}
          >
            刷新数据
          </Button>
        </Space>
      </div>

      <div className="report-content">
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={24}>
            <Card 
              className="chart-card"
              bordered={false}
            >
              <ReactECharts 
                option={lineChartOption} 
                style={{ height: '400px' }}
                opts={{ renderer: 'svg' }}
              />
            </Card>
          </Col>
          <Col xs={24} lg={24}>
            <Card 
              className="chart-card"
              bordered={false}
            >
              <ReactECharts 
                option={barChartOption} 
                style={{ height: '400px' }}
                opts={{ renderer: 'svg' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Report
