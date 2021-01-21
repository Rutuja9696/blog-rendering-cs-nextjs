import Head from "next/head";
import styles from "../styles/Home.module.css";

//query
import getAllBlogs from "../contentstack/queries/getAllBlogs";

//function to display home page
export default function Home(props) {
  let banner = props.banner;
  return (
    <>
      {banner.map((banner, i) => {
        return (
          <div key={i}>
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
