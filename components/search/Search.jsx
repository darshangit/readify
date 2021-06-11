import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import styles from "./Search.module.css";

const Search = (props) => {
  return (
    <>
      <Formik
        initialValues={{
          searchText: "",
        }}
        onSubmit={props.search}
      >
        <Form>
          <div className={styles.wrapper}>
            <div className={styles.search_box}>
              <button type="submit" className={styles.search_btn}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <Field
                className={styles.input_search}
                placeholder="Search Book or Author"
                id="searchText"
                name="searchText"
                placeholder="Search Books, Authors"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Search;
