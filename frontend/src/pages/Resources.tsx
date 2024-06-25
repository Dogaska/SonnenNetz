import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { ResourceList } from "../components/ui/resource-list";

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
