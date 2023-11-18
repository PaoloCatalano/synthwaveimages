import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { page, setPage } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.page.value;
    if (!searchValue) return;
    setPage(searchValue);
  };
  return (
    <section>
      <form
        style={{ width: "15rem" }}
        className="search-form"
        onSubmit={handleSubmit}
      >
        <button type="submit" className="btn">
          Go to page
        </button>
        <input
          type="number"
          min={1}
          max={9}
          className="form-input search-input"
          name="page"
          placeholder={page}
        />
      </form>
    </section>
  );
};
export default SearchForm;
