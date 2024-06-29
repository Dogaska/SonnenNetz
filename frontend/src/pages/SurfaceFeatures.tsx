import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";
import { HeaderSurfaceFeatures } from "@/components/common/header";
import { SurfaceOfferDetails } from "../components/offers/detail/surface-details";

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
