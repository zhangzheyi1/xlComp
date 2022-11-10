import { ButtonProps } from 'antd/lib/button'

// 设置权限列表
export declare function setPermissionList(list: Array<string>): void

export interface XlButtonProps extends ButtonProps {
  /** true 会有确认，false: 无确认 */
  confirm?: boolean
  /** 确认事件 */
  onConfirm?(): void
  /** 是否只在表格扩展显示 */
  tableFooterExtraOnly?: boolean
  /** 自定义确认消息 */
  confirmMsg?: React.ReactNode
  /** 权限 */
  permission?: string
  /** 悬浮提示 */
  tooltip?: React.ReactNode
  /** 是否用次级字体  */
  sub?: boolean
  __simple?: boolean
  [key: string]: any
}
