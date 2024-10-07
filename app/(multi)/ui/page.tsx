import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
const fs = require('fs');
const path = require('path');

export const getServer = async () => {

  const componentsDir = path.join(process.cwd(), '/page/example');
  const files = fs.readdirSync(componentsDir);

  return {
    files
  };
};


const Ui = async () => {
  const { files } = await getServer()
  const UiPage = dynamic(() => import("@/page/Ui"))
  return (
    <section className="container">
      <UiPage links={files} />
    </section>
  )
}

export default Ui