import "./Search.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getCompanies, getStarred } from "../api/fetch";

const Search = () => {
    const [value, setValue] = useState("");
    const [searching, setSearching] = useState(false);
    const [count, setCount] = useState(0);
    const [results, setResults] = useState([]);

    useEffect(()=> {//when results change, search starred
        setSearching(false);
        getStarred((response) => setCount(response.length));
    }, [results])

    const updateStarred = (index, starred) => {//toggle starred company
        let list = results.slice(0);//create a copy
        list[index]["starred"] = starred;
        setResults(list);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
        value ? search(value) : clear();
    }

    const search = (value) => {//get list of companies
        setSearching(true);
        getCompanies(value, ()=>setSearching(false))
        .then(response => setResults(response))
    }

    const clear = () => {
        setValue("");
        setResults([]);
    };

    const clickCount = () => {//show starred companies
        clear();
        getStarred(setResults);
    }

    return (
        <section>
            <div className="counter" onClick={clickCount}>Total Starred: {count}</div>
            <input type="text" placeholder="Search.." value={value} onChange={handleChange} />
            {value && <div className="clear" onClick={clear}>+</div>}
            <div>{searching ? "Searching..." : value && results.length === 0 && "No results..."}</div>
            {results.map((row, index) => <Card key={`card-${row.id}`} {...row} index={index} updateStarred={updateStarred} />)}
        </section>
    )
}

export default Search