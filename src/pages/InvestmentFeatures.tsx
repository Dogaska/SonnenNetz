import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { HeaderInvestmentFeatures } from "@/components/ui/header";
import { InvestmentOfferDetails } from "../components/ui/offer-features";

function InvestmentFeatures() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeaderInvestmentFeatures></HeaderInvestmentFeatures>
      <InvestmentOfferDetails></InvestmentOfferDetails>
      <FooterSimple></FooterSimple>
    </>
  );
}

export { InvestmentFeatures };
