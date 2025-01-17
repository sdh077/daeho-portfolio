'use client'
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import PageTransition from "@/components/page-transition";
import Photo from "@/widget/Photo";
import About from "@/page/About";
import Contact from "../contact/page";
import ScrollArrow from "@/components/scroll-arrow";
import { handleScroll } from "@/lib/utils";
import Services from "./about/page";
import Project from "@/page/Project";
const links = [
  {
    title: "About ME",
    href: "about",
  },
  {
    title: "Experience",
    href: "experience",
  },
  {
    title: "Contact",
    href: "contact",
  },
  {
    title: "Portfolio",
    href: "portfolio",
  },
];
const Section1 = () => {

  return (
    <section className="min-h-screen min-w-screen flex flex-col justify-between container py-2 md:py-16">
      <div />
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col gap-8 order-2 md:order-1">
          <div className="grid grid-cols-2 md:flex text-3xl md:flex-col gap-2 md:gap-8 md:w-[50vw]">
            {links.map(link =>
              <Button
                key={link.title}
                onClick={() => handleScroll(link.href)}
                className="text-xs md:text-4xl px-4 py-2 rounded-full w-fit"
              >
                {link.title}
              </Button>
            )}
          </div>
        </div>
        <div className="order-1 md:order-2 mx-auto">
          <Photo />
        </div>
      </div>

      <div className="flex justify-between">
        <div>WELCOME</div>
        <div>sdh077@naver.com</div>
      </div>
      <ScrollArrow />
    </section>
  )
}
const Section2 = () => {
  return (
    <section className="container" id="about">
      <About />

    </section>
  )
}


const Page = () => {
  const { theme } = useTheme()
  return (
    <PageTransition >
      <div
        className="bg-background flex flex-col gap-32"
        style={{
          backgroundSize: '30px 30px',
          backgroundImage: theme === 'dark' ? '' : 'linear-gradient(90deg,var(--gray-300) 0.5px,transparent 0),linear-gradient(180deg,var(--gray-300) 0.5px,transparent 0)'
          // backgroundImage: theme === 'dark' ? '' : 'linear-gradient(90deg,var(--primary) 0.5px,transparent 0),linear-gradient(180deg,var(--primary) 0.5px,transparent 0)'
        }}>
        <Section1 />
        <Section2 />
        <Services />
        <Contact />
        <Project />
      </div >
    </PageTransition >
  )
}
export default Page