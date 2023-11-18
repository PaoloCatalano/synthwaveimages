import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import SearchPage from "./SearchPage";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main style={{ paddingBottom: 40 }}>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
      <SearchPage />
    </main>
  );
};
export default App;
