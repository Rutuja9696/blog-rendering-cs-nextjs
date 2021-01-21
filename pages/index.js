import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
//query
import getAllBlogs from "../contentstack/queries/getAllBlogs";

//function to display home page
export default function Home(props) {
  let blogs = props.banner;
  return (
    <>
      <div className={styles.container}>
        <Header header={props.header} />
        <h1>"Take a good book to bed with you — books do not snore.” </h1>
        <div className={styles.cardContainer}>
          {blogs.map((banner, i) => {
            return (
              <div>
                <div key={i}>
                  <Link href={"/blog/" + banner.uid}>
                    <a>
                      <div className={styles.card}>
                        <img
                          src={banner.blogimage.url}
                          alt={props.banner.blogtitle}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Footer footer={props.footer} />
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const header = await getAllBlogs("01_blognavigation_rutuja");
  const banner = await getAllBlogs("blogrenderingnext_rutuja");
  const footer = await getAllBlogs("01_blogfooter_rutuja");

  return {
    props: { header: [...header], banner: [...banner[0]], footer: [...footer] },
  };
};
