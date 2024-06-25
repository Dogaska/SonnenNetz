import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { LoginForm } from "../components/ui/login";

export function Login() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <LoginForm></LoginForm>
      <FooterSimple></FooterSimple>
    </>
  );
}
