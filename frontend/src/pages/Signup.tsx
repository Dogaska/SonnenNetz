import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";
import { SignupForm } from "../components/authentication/signup";

export function Signup() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <SignupForm></SignupForm>
      <FooterSimple></FooterSimple>
    </>
  );
}
