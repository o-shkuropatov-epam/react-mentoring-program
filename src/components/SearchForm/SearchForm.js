import logo from 'assets/images/logo.svg'
import './SearchForm.scss'
import { useState } from "react";

export default function SearchForm({ initialQuery, onSearch }) {
    const [ queryStr, setQueryStr ] = useState(initialQuery);

    const handleBtnClick = (e) => {
        e.preventDefault();
        onSearch(queryStr);
    }

    return (
        <div className="search-section">
            <div className="d-flex justify-space-between">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <button className="add-movie-btn">+ add movie</button>
            </div>
            <form className="search-form">
                <h1 className="search-title">Find your movie</h1>
                <div className="search-inputs">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="What do you want to watch?"
                        value={queryStr}
                        onChange={e => setQueryStr(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="search-btn"
                        onClick={handleBtnClick}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}