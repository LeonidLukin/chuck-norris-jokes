import React, { useState } from "react"

const getResourse = async (url) => {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }
    return await response.json()
};

    // 0. create new state with hook quote, setQuote
    // 1. Event listener
    // 2. OnClick handler
    // 3. Inside onclick gtResource
    // 4. render quote with text

function Categories () {
    const [categories, setCategories] = useState([]);
    getResourse('https://api.chucknorris.io/jokes/categories').then(data => {
        setCategories(data);
    });

    return(
    <div >
        {categories.map((cat, idx) => <button type="button" key={idx}>{cat}</button>)}
    </div>
    )
}

export default Categories