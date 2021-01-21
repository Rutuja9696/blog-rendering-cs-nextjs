import getBlogById from "../../contentstack/queries/getBlogById";
import getAllBlogs from "../../contentstack/queries/getAllBlogs";
import Link from "next/link";

function Blog(props) {
  return (
    <div>
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
  );
}
export const getStaticProps = async (context) => {
  console.log(context.params.id);
  let data = await getBlogById(`${context.params.id}`);
  return {
    props: {
      banner: { ...data },
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
