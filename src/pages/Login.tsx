import { Header } from "@/components/ui/header";
import { NavigationBar } from "../components/ui/navigartion-bar";
import { FooterSimple } from "../components/ui/footer-simple";
import { SignIn } from "../components/ui/sign-in";

export function Login() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <SignIn></SignIn>
      <FooterSimple></FooterSimple>
    </>
  );
}
