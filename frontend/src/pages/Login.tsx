import { NavigationBar } from "../components/common/navigartion-bar";
import { FooterSimple } from "../components/common/footer-simple";
import { LoginForm } from "../components/authentication/login";

export function Login() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <LoginForm></LoginForm>
      <FooterSimple></FooterSimple>
    </>
  );
}
