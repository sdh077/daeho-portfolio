import Profile from "@/page/Profile"
import Stats from "@/page/Stats"
import dynamic from 'next/dynamic';


const Page = () => {
  return (
    <section className="">
      <Profile />
      <Stats />
    </section>
  )
}

export default Page