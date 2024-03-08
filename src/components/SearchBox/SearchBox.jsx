import { Field, Form, Formik } from "formik";
import style from "./SearchBox.module.css";

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const formattedSearch = values.search.trim().toLowerCase();
    onSubmit(formattedSearch);
    actions.resetForm();
  };
  return (
    <div className={style.searchThumb}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={style.inputSearch}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <button className={style.btnSearch} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
