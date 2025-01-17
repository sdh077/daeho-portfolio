import Profile from "@/page/Profile"
import Project from "@/page/Project";
import Stats from "@/page/Stats"
import { getStore, setStore } from "@/stores/store";

const Page = () => {
  return (
    <section style={{
      backgroundSize: '10px 10px',
      backgroundImage: 'linear-gradient(90deg,#e8e8e8 1px,transparent 0),linear-gradient(180deg,#e8e8e8 1px,transparent 0)'
    }}>
      <div className="h-[80vh] flex flex-col">
        <Profile />
        <Stats />
      </div>
      <Project />
    </section>
  )
}

export default Page