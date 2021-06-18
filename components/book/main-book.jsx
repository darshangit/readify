import {
  Card,
  CardTop,
  CardInner,
  CardImage,
  CardTitle,
  CardBody,
  PageCount,
  AuthorNames,
  MainAuthor,
  Button,
} from "./main-book.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const MainBook = (props) => {
  let book = props.book;
  return (
    <>
      <Card>
        <CardInner>
          <CardTop>
            <CardImage
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt="Image"
            />
          </CardTop>
          <CardBody>
            {book.volumeInfo.pageCount && (
              <PageCount>{book.volumeInfo.pageCount} Pages</PageCount>
            )}
            {!book.volumeInfo.pageCount && (
              <PageCount> Page Count Unavailable</PageCount>
            )}
            {book.volumeInfo.authors && (
              <AuthorNames>
                {book.volumeInfo.authors.map((author, index) => {
                  return <MainAuthor key={index}>{author}</MainAuthor>;
                })}
              </AuthorNames>
            )}
            {!book.volumeInfo.authors && (
              <AuthorNames>Authors Unavailable</AuthorNames>
            )}
            <FontAwesomeIcon title={"Add to Read"} icon={faPlus} />
            <FontAwesomeIcon title={"Add to Reading"} icon={faBookOpen} />
            <FontAwesomeIcon title={"Add to Completed"} icon={faCheck} />
          </CardBody>
        </CardInner>
        <CardTitle>{book.volumeInfo.title} </CardTitle>
      </Card>
    </>
  );
};

export default MainBook;
