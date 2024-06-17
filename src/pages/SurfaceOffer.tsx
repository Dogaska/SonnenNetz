import { SurfaceForm } from "../components/ui/surface-form";
import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { HeaderSurfaceOffer } from "@/components/ui/header";

export function SurfaceOffer() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeaderSurfaceOffer></HeaderSurfaceOffer>
      <SurfaceForm></SurfaceForm>
      <FooterSimple></FooterSimple>
    </>
  );
}
