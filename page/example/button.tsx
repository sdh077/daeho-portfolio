import { Button } from '@/components/ui/button'
import React from 'react'
const ButtonExample = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 w-full'>

      <Button variant={'default'} >default</Button>
      <Button variant={'primary'} >primary</Button>
      <Button variant={'outline'} >outline</Button>
    </div>
  )
}

export default ButtonExample