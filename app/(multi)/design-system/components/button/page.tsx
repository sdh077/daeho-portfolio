
import React from 'react'
import fs from 'fs';
import path from 'path';
import ComponentOption from './component-option'
import CodeDisplay from '@/components/code-highlight';
import { TypographyH4 } from '@/widget/typography';
import { Button, buttonVariants } from '@/components/ui/button';
import { BsStar } from 'react-icons/bs';
const ButtonExample = () => {
  const filePath = path.join(process.cwd(), 'components/ui/button.tsx');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return (
    <div>
      <ButtonView code={fileContent} />
      <ComponentOption />
    </div>
  )
}
type Size = "default" | "sm" | "lg" | "icon" | null | undefined
type Variant = "link" | "default" | "ghost" | "outline" | "disabled" | "destructive" | "secondary" | null | undefined
function ButtonView({ code }: { code: string }) {
  const sizes: Size[] = ['default',
    'sm',
    'lg',
    'icon',]
  const variants: Variant[] = ['default',
    'ghost',
    'link',
    'outline',
    'disabled',]
  return (
    <div className='w-full'>
      <div className='grid grid-cols-6 justify-between gap-8'>
        <div></div>
        <TypographyH4>default</TypographyH4>
        <TypographyH4>ghost</TypographyH4>
        <TypographyH4>link</TypographyH4>
        <TypographyH4>outline</TypographyH4>
        <TypographyH4>disabled</TypographyH4>
        {
          sizes.map(size =>
            <React.Fragment key={size}>
              <div>{size}</div>
              {variants.map(variant =>
                <div key={`${size}-${variant}`}>
                  <Button
                    size={size}
                    variant={variant}
                  >{size === 'icon' ? <BsStar /> : size}</Button>
                </div>
              )}
            </React.Fragment>

          )
        }
      </div>
      <CodeDisplay code={code} expand={false} />
    </div>

  )
}

export default ButtonExample