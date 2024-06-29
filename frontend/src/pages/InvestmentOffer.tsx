import { InvestmentForm } from "../components/offers/offer/investment-form";
import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";

export default function InvestmentOffer() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <InvestmentForm></InvestmentForm>
      <FooterSimple></FooterSimple>
    </>
  );
}

export { InvestmentOffer };
