import Stack from "../stack";

export default function getAllBlogs(contentType) {
  const Query = Stack.ContentType(contentType).Query();
  return Query.toJSON()
    .find()
    .then(
      function success(result) {
        return result[0];
      },
      function error(err) {
        // err object
        console.log(err);
        return err;
      }
    );
}
