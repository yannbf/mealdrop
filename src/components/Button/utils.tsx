/* eslint-disable @typescript-eslint/naming-convention */
import { Story } from '@storybook/blocks'
export const Grid = ({ of: components }: any) => {
  const { __namedExportsOrder, default: Default, ...stories } = components
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '4px',
      }}
    >
      {Object.values(stories).map((component: any, index: any) => (
        <div className="grid-item" key={index}>
          <Story of={component} />
        </div>
      ))}
    </div>
  )
}
