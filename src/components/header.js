import React, {useState, useEffect} from "react"
import "../components/styles/Header.css"

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

    useEffect(() => {
        getResourse('https://api.chucknorris.io/jokes/random').then(data => {
            setAvatar(data);
        });
    }, [])

    return(
        <div className="header">
            <div className="header__box">
                <img className="avatar" src={avatar.icon_url} alt="logo"/>
                <p className="header__tite">Chuck Norris</p>
            </div>
        </div>
        )
}

export default Header