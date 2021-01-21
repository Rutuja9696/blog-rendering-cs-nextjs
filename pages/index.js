import Head from "next/head";
import styles from "../styles/Home.module.css";

//query
import getAllBlogs from "../contentstack/queries/getAllBlogs";

//function to get all blogs
export default function Home(props) {
  let banner = props.banner;
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
