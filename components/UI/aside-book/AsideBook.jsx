import { COMPLETED, READING } from "../../layout/Constants";
import {
  AsideCard,
  Image,
  MiddlePortion,
  SpanElement,
  RightElement,
} from "./Aside-Book.styled";

const AsideBook = (props) => {
  const book = props.book;
  return (
    <AsideCard onClick={props.cardClicked.bind(null, book)}>
      <Image
        src={book.volumeInfo?.imageLinks?.thumbnail || "404.png"}
        alt="Image"
      />
      <MiddlePortion>
        <SpanElement>{book?.volumeInfo?.title}</SpanElement>
        <SpanElement>{book?.volumeInfo?.authors?.join(", ")}</SpanElement>
      </MiddlePortion>
      {book.type === READING && <RightElement>50%</RightElement>}
      {book.type === COMPLETED && <RightElement>2017-10-20</RightElement>}
    </AsideCard>
  );
};

export default AsideBook;
