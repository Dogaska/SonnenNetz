import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";
import { HeaderInvestmentFeatures } from "@/components/common/header";
import { InvestmentOfferDetails } from "../components/offers/detail/investment-details";

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
