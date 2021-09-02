import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";

// Переименовать назания компонентов с большой буквы
// Добавить стили. Список категорий поместить в ul. Заюзать h1 тег для заголовка
// Вынести блок цитаты в отдельную компоненту Quote
// При загрузке страницы выводить рандомную цитату

function App(props) {
    return (
      <div>
        <Header />
        <Categories />
      </div>
      
    );
}

export default App;
