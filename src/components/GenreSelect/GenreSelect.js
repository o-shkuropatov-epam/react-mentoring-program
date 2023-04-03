import './GenreSelect.scss'
import {useState} from "react";
export default function GenreSelect({ genreArr, initialSelectedGenre, onSelectCallback }) {
    const [ selectedGenre, setSelectedGenre ] = useState(initialSelectedGenre);

    const handleSelect = (genre) => {
        setSelectedGenre(genre);
        onSelectCallback(genre);
    }

    const listItems = genreArr.map(genre =>
        <li
            key={genre}
            className={`genre-item ${selectedGenre === genre ? 'selected' : ''}`}
            onClick={() => handleSelect(genre)}
        >
            {genre}
        </li>
    );
    return (
        <div className="container">
            <div className="genre-select">
                <ul className="genre-list">
                    {listItems}
                </ul>
            </div>
        </div>
    );
}