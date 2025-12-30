// 图表数据类型定义

export interface ChartData {
  name: string
  value: number
}

export interface LineChartData {
  month: string
  values: {
    productA: number
    productB: number
    productC: number
  }
}

export interface BarChartData {
  region: string
  values: {
    q1: number
    q2: number
    q3: number
    q4: number
  }
}
