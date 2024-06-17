import { NavigationBar } from "../components/ui/navigartion-bar";
import { BlogTemplate } from "@/components/ui/blog";
import { FooterSimple } from "../components/ui/footer-simple";

export function BlogArticle() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <BlogTemplate></BlogTemplate>
      <FooterSimple></FooterSimple>
    </>
  );
}
