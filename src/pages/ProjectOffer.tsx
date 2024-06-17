import { ProjectForm } from "../components/ui/project-form";
import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { HeaderProjectOffer } from "../components/ui/header";

export function ProjectOffer() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeaderProjectOffer></HeaderProjectOffer>
      <ProjectForm></ProjectForm>
      <FooterSimple></FooterSimple>
    </>
  );
}
