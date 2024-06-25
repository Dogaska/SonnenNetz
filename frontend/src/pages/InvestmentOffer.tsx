import { InvestmentForm } from "../components/ui/investment-form";
import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { HeaderInvestmentOffer } from "@/components/ui/header";

export default function InvestmentOffer() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeaderInvestmentOffer></HeaderInvestmentOffer>
      <InvestmentForm></InvestmentForm>
      <FooterSimple></FooterSimple>
    </>
  );
}

export { InvestmentOffer };
