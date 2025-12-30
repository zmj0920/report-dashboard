import { Card, Typography } from 'antd'
import './StatCard.css'

const { Title, Text } = Typography

interface StatCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  suffix?: string
  trend?: 'up' | 'down'
  trendValue?: string
}

/**
 * 统计卡片组件
 * 用于展示关键指标数据
 */
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  suffix = '',
  trend,
  trendValue
}) => {
  return (
    <Card className="stat-card" hoverable>
      <div className="stat-card-content">
        {icon && <div className="stat-card-icon">{icon}</div>}
        <div className="stat-card-info">
          <Text type="secondary" className="stat-card-title">
            {title}
          </Text>
          <Title level={3} className="stat-card-value">
            {value}{suffix}
          </Title>
          {trend && trendValue && (
            <Text type={trend === 'up' ? 'success' : 'danger'}>
              {trend === 'up' ? '↑' : '↓'} {trendValue}
            </Text>
          )}
        </div>
      </div>
    </Card>
  )
}

export default StatCard
