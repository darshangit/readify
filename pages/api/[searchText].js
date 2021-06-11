// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import gql from "graphql-tag";
import client from "../../apollo-client";

async function handler(req, res) {
  const {searchText} =  req.query;
  const { data } = await client.query({
    query: gql`
      query search {
        books(q: ${searchText}) @rest(type: "BooksPayload", path: "?{args}") {
          totalItems
          items @type(name: "Book") {
            id
            selfLink
            volumeInfo @type(name: "VolumeInfo") {
              authors
              title
              pageCount
              imageLinks @type(name: "ImageLinks"){
                thumbnail
              }
            }
          }
        }
      }
    `,
  });
  res.status(200).json(data.books);
}

export default handler;
