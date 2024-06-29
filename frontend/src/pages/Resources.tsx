import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";
import { ResourceList } from "../components/resources/resource-list";

function Resources() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ResourceList></ResourceList>
      <FooterSimple></FooterSimple>
    </>
  );
}

export { Resources };
