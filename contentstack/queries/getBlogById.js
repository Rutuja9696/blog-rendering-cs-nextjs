import Stack from "../stack";

export default function getBlogById(entry_id) {
  const Query = Stack.ContentType("blogrenderingnext_rutuja").Entry(entry_id);
  let entry = Query.fetch()
    .then(
      function success(entry) {
        // console.log(entry.toJSON()); // Convert the entry result object to JSON
        return entry.toJSON();
      },
      function error(err) {
        // err object
        console.log(err);
        return err;
      }
    )
    .then(function success(result) {
      return result;
    });
  return entry;
}
