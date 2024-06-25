import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { ProjectTable } from "@/components/ui/project-table";

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
