import * as React from 'react'
import { useTabs } from './Tabs'

export interface IPanelProps {
  /**
   * Unique identifier for this tab.
   */
  label: string
}

/**
 * Individual panel component.
 */
export const Panel: React.FC<IPanelProps & React.PropsWithChildren> = (
  props
) => {
  const { activeTab } = useTabs()
  return activeTab === props.label ? <div>{props.children}</div> : null
}
