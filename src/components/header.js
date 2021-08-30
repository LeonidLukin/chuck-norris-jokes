import React, {useState, useEffect} from "react"
// import ".App.css"
// const getResourse = async (url) => {
//     const response = await fetch(url);
//     if(!response.ok) {
//         throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
//     }
//     return await response.json()
    
// };
// getResourse('https://api.chucknorris.io/jokes/random').then(data => console.log(data))

const getResourse = async (url) => {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }
    return await response.json()
};

function Header () {
    const [avatar, setAvatar] = useState({icon_url: 'https://via.placeholder.com/60x60'});
    // const [categories, setCategories] = useState([]);

    // 0. create new state with hook quote, setQuote
    // 1. Event listener
    // 2. OnClick handler
    // 3. Inside onclick gtResource
    // 4. render quote with text
    useEffect(() => {
        getResourse('https://api.chucknorris.io/jokes/random').then(data => {
            setAvatar(data);
        });
        // getResourse('https://api.chucknorris.io/jokes/categories').then(data => {
            // setCategories(data);
        // });
    }, [])

    return(
        <div className="d-flex">
            <img src={avatar.icon_url} alt="logo"/>
            <p>Chuck Norris</p>
            {/* {categories.map((cat, idx) => <button type="button" key={idx}>{cat}</button>)} */}
        </div>
        )
}

export default Header