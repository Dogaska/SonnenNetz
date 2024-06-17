import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { HeaderProjectFeatures } from "@/components/ui/header";
import { ProjectOfferDetails } from "../components/ui/offer-features";

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
