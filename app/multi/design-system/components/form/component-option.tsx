'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TypographyH3, TypographyH4 } from '@/widget/typography'
import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'
import CodeDisplay from '@/components/code-highlight'


const ComponentOption = () => {
  const [rounded, setRounded] = useState('rounded-md')
  const [paddingLeft, setPaddingLeft] = useState(16)
  const [paddingRight, setPaddingRight] = useState(16)
  const [paddingTop, setPaddingTop] = useState(8)
  const [paddingBottom, setPaddingBottom] = useState(8)
  return (
    <div className='mt-24'>
      <TypographyH3>Custom</TypographyH3>
      <div className='flex justify-between'>
        <div>
          <TypographyH4>default</TypographyH4>
          <Button variant={'default'}
            className={rounded}
            style={{
              paddingLeft,
              paddingRight,
              paddingTop,
              paddingBottom,
            }}
          >default</Button>
        </div>
        <div>
          <TypographyH4>ghost</TypographyH4>
          <Button variant={'ghost'}
            className={rounded}
            style={{
              paddingLeft,
              paddingRight,
              paddingTop,
              paddingBottom,
            }}
          >ghost</Button>
        </div>
        <div>
          <TypographyH4>link</TypographyH4>
          <Button variant={'link'}
            className={rounded}
            style={{
              paddingLeft,
              paddingRight,
              paddingTop,
              paddingBottom,
            }}
          >link</Button>
        </div>
        <div>
          <TypographyH4>outline</TypographyH4>
          <Button variant={'outline'}
            className={rounded}
            style={{
              paddingLeft,
              paddingRight,
              paddingTop,
              paddingBottom,
            }}
          >outline</Button>
        </div>
        <div>
          <TypographyH4>disabled</TypographyH4>
          <Button variant={'disabled'}
            className={rounded}
            style={{
              paddingLeft,
              paddingRight,
              paddingTop,
              paddingBottom,
            }}
          >disabled</Button>
        </div>
      </div>
      <div className='grid grid-cols-2 justify-between items-center gap-4 my-8'>
        <div>Padding Left</div>
        <Input value={paddingLeft} type='number' onChange={e => setPaddingLeft(Number(e.target.value))} />
        <div>Padding Right</div>
        <Input value={paddingRight} type='number' onChange={e => setPaddingRight(Number(e.target.value))} />
        <div>Padding Top</div>
        <Input value={paddingTop} type='number' onChange={e => setPaddingTop(Number(e.target.value))} />
        <div>Padding Bottom</div>
        <Input value={paddingBottom} type='number' onChange={e => setPaddingBottom(Number(e.target.value))} />
        <div>rounded</div>
        <RadioGroup defaultValue={rounded} onValueChange={value => setRounded(value)} className='w-full flex justify-between'>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rounded-sm" id="r1" />
            <Label htmlFor="r1">rounded sm</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rounded-md" id="r2" />
            <Label htmlFor="r2">rounded md</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rounded-lg" id="r3" />
            <Label htmlFor="r3">rounded lg</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rounded-full" id="r4" />
            <Label htmlFor="r4">rounded full</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <CodeDisplay
          language='html'
          code={`
pl-[${paddingLeft}px] pr-[${paddingRight}px] pt-[${paddingTop}px] pb-[${paddingBottom}px] ${rounded}

<Button className='pl-[${paddingLeft}px] pr-[${paddingRight}px] pt-[${paddingTop}px] pb-[${paddingBottom}px] ${rounded}'>example</Button>
          `} />
      </div>

    </div>
  )
}

export default ComponentOption