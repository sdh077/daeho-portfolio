import { FontTable } from "@/components/font-table"
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,

} from '@/widget/typography'
export default async function Page() {
  return (
    <>
      <div className="mt-2 mb-20">
        Typography is our system of fonts and text styles. It enhances communication, reinforces brand, and guides users&apos; emotions.
      </div>
      <div className="flex flex-col gap-16">
        <TypographyH2>타이포 그래픽</TypographyH2>
        <div className="flex flex-col gap-8 border-2">
          <TypographyH1>Typography H1</TypographyH1>
          <TypographyH2>Typography H2</TypographyH2>
          <TypographyH3>Typography H3</TypographyH3>
          <TypographyH4>Typography H4</TypographyH4>
          <TypographyInlineCode>Typography InlineCode</TypographyInlineCode>
          <TypographyLarge>Typography Large</TypographyLarge>
          <TypographyLead>Typography Lead</TypographyLead>
          <TypographyMuted>Typography Muted</TypographyMuted>
          <TypographyP>Typography P</TypographyP>
          <TypographySmall>Typography Small</TypographySmall>
        </div>
        <div>
          <TypographyH2>폰트 사이즈</TypographyH2>
          <FontTable />
        </div>
      </div>
    </>
  )
}
