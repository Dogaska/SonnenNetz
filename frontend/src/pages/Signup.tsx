import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { SignupForm } from "../components/ui/signup";

export function Signup() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <SignupForm></SignupForm>
      <FooterSimple></FooterSimple>
    </>
  );
}
