import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { HeaderSurfaceFeatures } from "@/components/ui/header";
import { SurfaceOfferDetails } from "../components/ui/offer-features";

function SurfaceFeatures() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeaderSurfaceFeatures></HeaderSurfaceFeatures>
      <SurfaceOfferDetails></SurfaceOfferDetails>
      <FooterSimple></FooterSimple>
    </>
  );
}

export { SurfaceFeatures };
