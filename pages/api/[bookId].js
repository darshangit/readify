import gql from "graphql-tag";
import client from "../../apollo-client";

async function handler(req, res) {
  const bookId = req.query.bookId;

  console.log("req.query.bookId", req.query.bookId);
  const { data } = await client.query({
    query: gql`
      query searchBook{
          book @rest(type: "Book", path:"/${bookId}"){
            id
            volumeInfo @type(name: "VolumeInfo") {
                title
                description
                authors
                publisher
                publishedDate
                pageCount
                averageRating
                language
                industryIdentifiers
                categories
                imageLinks @type(name: "ImageLinks"){
                  thumbnail
                  medium
                }
              }
          }
      }
      `,
  });
  console.log("data", data);
  res.status(200).json(data.book);
}

export default handler;
