import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";
import { HeaderProjectFeatures } from "@/components/common/header";
import { ProjectOfferDetails } from "../components/offers/detail/project-details";

function ProjectFeatures() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeaderProjectFeatures></HeaderProjectFeatures>
      <ProjectOfferDetails></ProjectOfferDetails>
      <FooterSimple></FooterSimple>
    </>
  );
}

export { ProjectFeatures };
