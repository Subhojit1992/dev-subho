import Social from "@components/Social";
import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, social } = frontmatter;

  return (
    <section className="section">
      <div className="container text-center">

        <div className="flex gap-4">
          <div className="flex-1 text-left">
            {markdownify(title, "h1", "h2")}
            <Social source={social} className="social-icons-simple my-3" />

            <div className="content">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
