import Link from "next/link";
import styles from "../styles/Home.module.css";

//query
import getAllBlogs from "../contentstack/queries/getAllBlogs";

//function to display home page
export default function Home(props) {
  let blogs = props.banner;
  return (
    <>
      <div className={styles.container}>
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
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const banner = await getAllBlogs("blogrenderingnext_rutuja");
  return {
    props: { banner: [...banner[0]] },
  };
};
