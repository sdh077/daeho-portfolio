import { Button } from '@/components/ui/button'
import React from 'react'
const ButtonExample = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4 w-full'>
        <Button variant={'default'} >default</Button>
        <Button variant={'ghost'} >ghost</Button>
        <Button variant={'outline'} >outline</Button>
      </div>
    </div>
  )
}

export default ButtonExample