import Link from "next/link";
import styles from "../../styles/details.module.css";
//queries
import getBlogById from "../../contentstack/queries/getBlogById";
import getAllBlogs from "../../contentstack/queries/getAllBlogs";
//components
import Header from "../../components/header";
import Footer from "../../components/footer";

function Blog(props) {
  return (
    <div className={styles.container}>
      <Header header={props.header} />
      <div className={styles.detailsContainer}>
        <img src={props.banner.blogimage.url} alt={props.banner.blogtitle} />
        <h3>{props.banner.blogtitle}</h3>
        <p>{props.banner.blogcontent}</p>
        <div>
          <h4>Related Links</h4>
          {props.banner.relatedlinks.map((link) => {
            return (
              <>
                <Link href={link.relatedlinks[0].uid}>
                  <p>{link.blogtitle}</p>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <Footer footer={props.footer} />
    </div>
  );
}
export const getStaticProps = async (context) => {
  let data = await getBlogById(`${context.params.id}`);
  const header = await getAllBlogs("01_blognavigation_rutuja");
  const footer = await getAllBlogs("01_blogfooter_rutuja");
  return {
    props: {
      header: [...header],
      banner: { ...data },
      footer: [...footer],
    },
  };
};
export const getStaticPaths = async () => {
  let data = await getAllBlogs("blogrenderingnext_rutuja");
  let paths = data[0].map((blog) => {
    return {
      params: {
        id: `${blog.uid}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default Blog;
