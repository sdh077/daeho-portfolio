import { Button } from '@/components/ui/button'
import React from 'react'
const ButtonExample = () => {
  const attributes = [
    { key: 'padding x', value: '1rem' },
    { key: 'padding y', value: '0.75rem' },
    { key: 'padding h', value: '2.5rem' },
    // {
    //   default: "h-10 px-4 py-2",
    //   sm: "h-9 rounded-md px-3",
    //   lg: "h-11 rounded-md px-8",
    //   icon: "h-10 w-10",
    // }
  ]
  return (
    <div>
      <SizeTable attributes={attributes} />
      <div className='flex flex-col sm:flex-row gap-4 w-full '>
        <Button variant={'default'} >default</Button>
        <Button variant={'ghost'} >ghost</Button>
        <Button variant={'outline'} >outline</Button>
      </div>
    </div>
  )
}
const SizeTable = ({ attributes }: { attributes: { key: string, value: string }[] }) => {
  return (
    <div className='grid grid-cols-4'>
      {attributes.map((attribute) =>
        <div key={attribute.key}>{attribute.key} / {attribute.value}</div>
      )}
    </div>
  )
}

export default ButtonExample