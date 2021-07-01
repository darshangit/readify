import gql from "graphql-tag";
import client from "../../apollo-client";

async function handler(req, res) {
  let bookId = JSON.stringify(req.query.bookId);

  let { data } = await client.query({
    query: gql`
      query searchBook{
        book(bookId: ${bookId} ) @rest(type: "Book", path:"/{args.bookId}"){
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
  res.status(200).json(data.book);
}

export default handler;
