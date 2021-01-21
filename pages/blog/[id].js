// import axios from "axios";
import getBlogById from "../../contentstack/queries/getBlogById";
import getAllBlogs from "../../contentstack/queries/getAllBlogs";

function Blog(props) {
  //   console.log("props", props);
  return (
    <div>
      <img src={props.banner.blogimage.url} alt="" />
    </div>
  );
}
export const getStaticProps = async (context) => {
  console.log(context.params.id);
  let data = await getBlogById(`${context.params.id}`);
  //   console.log(data);
  //   data = data.data;
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
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
export default Blog;
