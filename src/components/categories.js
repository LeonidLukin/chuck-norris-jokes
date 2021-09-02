import React, { useEffect, useState } from "react"
import Quote from './Quote'

import "../components/styles/Categories.css"
import "../components/styles/QouteS.css"

const getResourse = async (url) => {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }
    return await response.json()
};

function Categories (props) {
    const [categories, setCategories] = useState([]);
    const [quote, setQuote] = useState();

    useEffect(() => {
        getResourse('https://api.chucknorris.io/jokes/categories').then(data => {
            setCategories(data);
        });
        getResourse('https://api.chucknorris.io/jokes/random').then(data => {
            setQuote(data.value);
        });
    }, []);
    
    
    const onCategoryClick = (categoryName) => {
        const url = categoryName === 'random' ? 'https://api.chucknorris.io/jokes/random' : `https://api.chucknorris.io/jokes/random?category=${categoryName}`

        getResourse(url).then(data => {
            setQuote(data.value);
        });
    }

    return(
    <div className="categories">
        <h1 className="categories__title">Categories</h1>
        <ul className="categories__box">
            {categories.map((category, index, array) => 
            <li key={index}>
                <button className="categories__box-item" type="button" onClick={ () => onCategoryClick(category) }>{category}</button>
            </li>)
            }
            <li>
                <button className="categories__box-item" type="button" onClick={ () => onCategoryClick('random') }>random</button>
            </li>
        </ul>
        <div className="quote__box">
            <Quote data={quote} />
        </div>
        
    </div>
    )
}

export default Categories