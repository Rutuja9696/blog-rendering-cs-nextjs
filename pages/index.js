import Head from "next/head";
import styles from "../styles/Home.module.css";

import getAllBlogs from "../contentstack/queries/getAllBlogs";
export default function Home(props) {
  let banner = props.banner;
  console.log(banner);
  return (
    <>
      {props.banner.map((banner) => {
        return (
          <div>
            <img src={banner.blogimage.url} />
          </div>
        );
      })}
    </>
  );
}
export const getStaticProps = async () => {
  const banner = await getAllBlogs("blogrenderingnext_rutuja");
  return {
    props: { banner: [...banner] },
  };
};
