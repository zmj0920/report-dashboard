import { Card, Row, Col, Typography, Button, Space, Statistic } from 'antd'
import { HomeOutlined, ReloadOutlined, UserOutlined, EyeOutlined, ShareAltOutlined, IdcardOutlined, CalendarOutlined, CarOutlined, FileTextOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import ReactECharts from 'echarts-for-react'
import './Report.css'

const { Title } = Typography

const Report = () => {
  const navigate = useNavigate()

  // 业务数据
  const reportData = {
    totalUsers: 130,
    totalVisits: 853,
    totalShares: 184,
    cardClicks: 530,
    meetingRoomBookings: 4,
    vehicleBookings: 44,
    articlesAdded: 51,
    myCardClicks: 214,
    vehicleApprovals: 128,
    vehicleApprovalAvgTime: 5.14,
    meetingRoomApprovals: 4,
    meetingRoomApprovalAvgTime: 0.1,
    articleApprovals: 215,
    articleApprovalAvgTime: 2.8
  }

  // 功能使用次数柱状图配置
  const usageChartOption = {
    title: {
      text: '功能使用次数统计',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(255,255,255,0.98)',
      borderColor: '#ececec',
      borderWidth: 1,
      textStyle: { color: '#333' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '6%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['名片夹点击', '我的名片点击', '稿件新增', '车辆预约', '会议室预约'],
      axisLabel: {
        interval: 0,
        rotate: 15,
        color: '#6b6f76'
      },
      axisLine: { lineStyle: { color: '#e9e9e9' } },
      splitLine: { show: false }
    },
    yAxis: {
      type: 'value',
      name: '次数',
      axisLabel: { color: '#6b6f76' },
      axisLine: { lineStyle: { color: '#e9e9e9' } },
      splitLine: { lineStyle: { color: '#f0f0f0' } }
    },
    series: [
      {
        name: '使用次数',
        type: 'bar',
        data: [
          reportData.cardClicks,
          reportData.myCardClicks,
          reportData.articlesAdded,
          reportData.vehicleBookings,
          reportData.meetingRoomBookings
        ],
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
        },
        barBorderRadius: [8, 8, 0, 0],
        label: {
          show: true,
          position: 'top',
          color: '#333'
        }
      }
    ]
  }

  // 审核统计柱状图配置
  const approvalChartOption = {
    title: {
      text: '审核统计对比',
      left: 'center',
      top: 8,
      textStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(255,255,255,0.98)',
      borderColor: '#ececec',
      borderWidth: 1,
      textStyle: { color: '#333' }
    },
    legend: {
      data: ['审核次数', '审核平均用时（天）'],
      bottom: 12,
      left: 'center',
      itemGap: 18,
      icon: 'roundRect',
      itemWidth: 14,
      itemHeight: 8,
      textStyle: { color: '#6b6f76', padding: [2, 6] }
    },
    grid: {
      left: '3%',
      right: '6%',
      bottom: '18%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['车辆预约审核', '会议室预约审核', '稿件审核'],
      axisLabel: { color: '#6b6f76' },
      axisLine: { lineStyle: { color: '#e9e9e9' } },
      splitLine: { show: false }
    },
    yAxis: [
      {
        type: 'value',
        name: '审核次数',
        position: 'left',
        axisLabel: { color: '#6b6f76' },
        splitLine: { lineStyle: { color: '#f0f0f0' } }
      },
      {
        type: 'value',
        name: '平均用时（天）',
        position: 'right',
        axisLabel: { color: '#6b6f76' },
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '审核次数',
        type: 'bar',
        data: [
          reportData.vehicleApprovals,
          reportData.meetingRoomApprovals,
          reportData.articleApprovals
        ],
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
        },
        barBorderRadius: [8, 8, 0, 0],
        label: {
          show: true,
          position: 'top',
          color: '#333'
        }
      },
      {
        name: '审核平均用时（天）',
        type: 'bar',
        yAxisIndex: 1,
        data: [
          reportData.vehicleApprovalAvgTime,
          reportData.meetingRoomApprovalAvgTime,
          reportData.articleApprovalAvgTime
        ],
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
        },
        barBorderRadius: [8, 8, 0, 0],
        label: {
          show: true,
          position: 'top',
          formatter: '{c} 天',
          color: '#333'
        }
      }
    ]
  }

  return (
    <div className="report-container">
      <div className="report-header">
        <Title level={2} style={{ color: '#fff', margin: 0 }}>
          📊 业务数据报表
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
        {/* 核心指标统计卡片 */}
        <Row gutter={[12, 12]} style={{ marginBottom: '12px' }}>
          <Col xs={12} sm={12} md={6}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title="总用户"
                value={reportData.totalUsers}
                prefix={<UserOutlined />}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title="总访问次数"
                value={reportData.totalVisits}
                prefix={<EyeOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title="总分享次数"
                value={reportData.totalShares}
                prefix={<ShareAltOutlined />}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title="名片夹点击次数"
                value={reportData.cardClicks}
                prefix={<IdcardOutlined />}
                valueStyle={{ color: '#722ed1' }}
              />
            </Card>
          </Col>
        </Row>

        {/* 业务功能统计 */}
        <Row gutter={[12, 12]} style={{ marginBottom: '12px' }}>
          <Col xs={12} sm={8} md={6}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title="会议室预约"
                value={reportData.meetingRoomBookings}
                prefix={<CalendarOutlined />}
                suffix="次"
              />
            </Card>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title="车辆预约"
                value={reportData.vehicleBookings}
                prefix={<CarOutlined />}
                suffix="次"
              />
            </Card>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title="稿件新增"
                value={reportData.articlesAdded}
                prefix={<FileTextOutlined />}
                suffix="次"
              />
            </Card>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <Card className="stat-card" bordered={false}>
              <Statistic
                title="我的名片点击"
                value={reportData.myCardClicks}
                prefix={<IdcardOutlined />}
                suffix="次"
              />
            </Card>
          </Col>
        </Row>

        {/* 审核统计 */}
        <Row gutter={[12, 12]} style={{ marginBottom: '12px' }}>
          <Col xs={24} sm={12} md={8}>
            <Card className="stat-card" bordered={false}>
              <div className="stat-group">
                <Statistic
                  title="车辆预约审核"
                  value={reportData.vehicleApprovals}
                  prefix={<CheckCircleOutlined />}
                  suffix="次"
                />
                <div className="stat-divider" />
                <Statistic
                  title="平均用时"
                  value={reportData.vehicleApprovalAvgTime}
                  prefix={<ClockCircleOutlined />}
                  suffix="天"
                  precision={2}
                />
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="stat-card" bordered={false}>
              <div className="stat-group">
                <Statistic
                  title="会议室审核"
                  value={reportData.meetingRoomApprovals}
                  prefix={<CheckCircleOutlined />}
                  suffix="次"
                />
                <div className="stat-divider" />
                <Statistic
                  title="平均用时"
                  value={reportData.meetingRoomApprovalAvgTime}
                  prefix={<ClockCircleOutlined />}
                  suffix="天"
                  precision={1}
                />
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="stat-card" bordered={false}>
              <div className="stat-group">
                <Statistic
                  title="稿件审核"
                  value={reportData.articleApprovals}
                  prefix={<CheckCircleOutlined />}
                  suffix="次"
                />
                <div className="stat-divider" />
                <Statistic
                  title="平均用时"
                  value={reportData.articleApprovalAvgTime}
                  prefix={<ClockCircleOutlined />}
                  suffix="天"
                  precision={1}
                />
              </div>
            </Card>
          </Col>
        </Row>

        {/* 图表展示 */}
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card 
              className="chart-card"
              bordered={false}
            >
              <ReactECharts 
                option={usageChartOption} 
                style={{ height: '320px' }}
                opts={{ renderer: 'svg' }}
              />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card 
              className="chart-card"
              bordered={false}
            >
              <ReactECharts 
                option={approvalChartOption} 
                style={{ height: '320px' }}
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
