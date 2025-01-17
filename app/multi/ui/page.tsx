import UiSidebar from "@/page/ui-sidebar";
import dynamic from "next/dynamic";
const fs = require('fs');
const path = require('path');

const getFile = async () => {

  const componentsDir = path.join(process.cwd(), '/page/example/components');
  const components = fs.readdirSync(componentsDir);
  const pageDir = path.join(process.cwd(), '/page/example/pages');
  const pages = fs.readdirSync(pageDir);

  return {
    components,
    pages
  };
};


const Ui = async () => {
  const { components, pages } = await getFile()
  const UiComponent = dynamic(() => import("@/page/ui-component"))
  return (
    <section className="flex flex-col">
      <UiSidebar pages={pages} components={components} />
      <UiComponent />
    </section>
  )
}

export default Ui