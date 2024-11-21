
import React from 'react'
import fs from 'fs';
import path from 'path';
import ComponentOption from './component-option'
import CodeDisplay from '@/components/code-highlight';
import { TypographyH4 } from '@/widget/typography';
import { Button, buttonVariants } from '@/components/ui/button';
import { BsStar } from 'react-icons/bs';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
const ButtonExample = () => {
  // const textareaFilePath = path.join(process.cwd(), 'components/ui/textarea.tsx');
  // const textareaFileContent = fs.readFileSync(textareaFilePath, 'utf-8');
  // const radioFilePath = path.join(process.cwd(), 'components/ui/radio-group.tsx');
  // const radioFileContent = fs.readFileSync(radioFilePath, 'utf-8');
  return (
    <div>
      <TextareaView code={'textareaFileContent'} />
      <RadioView code={'radioFileContent'} />
    </div>
  )
}
function TextareaView({ code }: { code: string }) {
  return (
    <div className='w-full flex flex-col gap-8'>
      <TypographyH4>Textarea</TypographyH4>
      <Textarea defaultValue={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam.'} />
      {/* <CodeDisplay code={code} expand={false} /> */}
    </div>
  )
}
function RadioView({ code }: { code: string }) {
  return (
    <div className='w-full flex flex-col gap-8'>
      <TypographyH4>Textarea</TypographyH4>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
      {/* <CodeDisplay code={code} expand={false} /> */}
    </div>
  )
}

export default ButtonExample