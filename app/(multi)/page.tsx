import Profile from "@/page/Profile"
import Project from "@/page/Project";
import Stats from "@/page/Stats"
import { getStore, setStore } from "@/stores/store";

const Page = () => {
  return (
    <section className="">
      <div className="h-screen flex flex-col">
        <Profile />
        <Stats />
      </div>
      <Project />
    </section>
  )
}

export default Page