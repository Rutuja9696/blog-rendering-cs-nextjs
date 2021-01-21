import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

//query
import getAllBlogs from "../contentstack/queries/getAllBlogs";

//function to display home page
export default function Home(props) {
  let blogs = props.banner;
  // console.log(blogs);
  return (
    <>
      {blogs.map((banner, i) => {
        return (
          <>
            <Link href={"/blog/" + banner.uid}>
              <a>
                <div key={i}>
                  <img src={banner.blogimage.url} alt="" />
                </div>
              </a>
            </Link>
          </>
        );
      })}
    </>
  );
}
export const getStaticProps = async () => {
  const banner = await getAllBlogs("blogrenderingnext_rutuja");
  return {
    props: { banner: [...banner[0]] },
  };
};
