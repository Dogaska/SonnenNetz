import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";
import { ProjectTable } from "@/components/offers/project-table";

function Projects() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ProjectTable></ProjectTable>
      <FooterSimple></FooterSimple>
    </>
  );
}

export { Projects };
