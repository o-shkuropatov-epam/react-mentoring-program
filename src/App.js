import "typeface-montserrat";
import './App.scss';

import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreSelect from "./components/GenreSelect/GenreSelect";

function App() {
    const onSearchCallback = (search) => {
        console.log('Perform search query');
        console.log(search);
    }

    const onSelectGenreCallback = (genre) => {
      console.log('Genre selected');
      console.log(genre);
    };

    return (
        <div className="App">
            <Counter defaultValue={2}></Counter>
            <SearchForm
                initialQuery="Init search value"
                onSearch={onSearchCallback}
            ></SearchForm>
            <GenreSelect
                genreArr={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
                initialSelectedGenre="All"
                onSelectCallback={onSelectGenreCallback}
            ></GenreSelect>
        </div>
    );
}

export default App;
