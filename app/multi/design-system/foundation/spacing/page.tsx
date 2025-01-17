import {
  TypographyH2,

} from '@/widget/typography'
import config from "tailwindcss/defaultConfig";
import { Config } from "tailwindcss";

export default async function Page() {
  if (!config.theme) return <></>
  const spacing = Object.entries(config.theme.spacing as Config)
  return (
    <>
      <div className="mt-2 mb-20">
        Typography is our system of fonts and text styles. It enhances communication, reinforces brand, and guides users&apos; emotions.
      </div>
      <div className="flex flex-col gap-16">
        <div>
          <TypographyH2>GRID</TypographyH2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <div>max width / 1200</div>
              <div>pading x / 4rem</div>
              <div>gap / 2rem</div>
            </div>
            <div className="grid grid-cols-12 gap-8">
              {Array.from({ length: 12 }).map((_, i) =>
                <div key={`grid1-${i}`} className="bg-[#FFDDDD] h-36 w-full" />)}
            </div>
            <div className="grid grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) =>
                <div key={`grid2-${i}`} className="bg-[#FFDDDD] h-36 w-full" />)}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {Array.from({ length: 2 }).map((_, i) =>
                <div key={`grid3-${i}`} className="bg-[#FFDDDD] h-36 w-full" />)}
            </div>
          </div>
        </div>
        <div>
          <TypographyH2>SPACING</TypographyH2>
          <div className="flex flex-col gap-8">
            {spacing.map(([key, value]) =>
              <div key={`spacing-${key}`} className="flex justify-between items-center">
                {key} <div className="bg-[#D7E5FF] w-36" style={{ height: value }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
