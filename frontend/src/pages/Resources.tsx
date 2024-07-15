import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";
import { BlogsTable } from "../components/resources/blogs-table";

function Resources() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <BlogsTable></BlogsTable>
      <FooterSimple></FooterSimple>
    </>
  );
}

export { Resources };
