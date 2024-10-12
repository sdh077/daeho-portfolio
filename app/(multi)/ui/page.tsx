import dynamic from "next/dynamic";
const fs = require('fs');
const path = require('path');

const getFile = async () => {

  const componentsDir = path.join(process.cwd(), '/page/example');
  const files = fs.readdirSync(componentsDir);

  return {
    files
  };
};


const Ui = async () => {
  const { files } = await getFile()
  const UiPage = dynamic(() => import("@/page/Ui"))
  return (
    <section className="bg-neutral-800 ">
      <UiPage links={files} />
    </section>
  )
}

export default Ui