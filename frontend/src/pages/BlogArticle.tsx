import { NavigationBar } from "../components/common/navigartion-bar";
import { BlogTemplate } from "../components/blog/blog";
import { FooterSimple } from "../components/common/footer-simple";

export function BlogArticle() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <BlogTemplate></BlogTemplate>
      <FooterSimple></FooterSimple>
    </>
  );
}
