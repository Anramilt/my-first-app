import React, { useState } from 'react';
import classes from './LessonPage.module.css'
import SearchBar from './SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const LessonPage = () => {

  const [activeContent, setActiveContent] = useState(false);
  let text = 'Интерактивные игры'
  return (
    <div>
      <div className={classes.lessonsblock}>
        {/* <SearchBar /> */}

        <div className={classes.headerNavbar}>
          <button className={classes.bar} onClick={() => setActiveContent("search")}> {/*Скрывается при повторном клике*/}
            Поиск
            {/* <NavLink to="#" className={navData => navData.isActive ? classes.activeLink : classes.item}> Поиск</NavLink> */}

          </button>
          <button className={classes.bar} onClick={() => setActiveContent("Интерактивные игры")}>
            Интерактивные игры
            {/* <NavLink to="/#" className={navData => navData.isActive ? classes.activeLink : classes.item}> Интерактивные игры</NavLink> */}
          </button>
          <button className={classes.bar} onClick={() => setActiveContent("Игры на безопасность")}>
            Игры на безопасность
            {/* <NavLink to="/#" className={navData => navData.isActive ? classes.activeLink : classes.item}> Игры на безопасность</NavLink> */}
          </button>
          <button className={classes.bar} onClick={() => setActiveContent("Логопедические игры")}>
            Логопедические игры
            {/* <NavLink to="/#" className={navData => navData.isActive ? classes.activeLink : classes.item}> Логопедические игры</NavLink> */}
          </button>
        </div>
        <div className={classes.createLine}></div>

        <div className={classes.contentArea}>
          {activeContent === "search" && <SearchBar />}
          {activeContent && activeContent !== "search" && <h2>{activeContent}</h2>}
        </div>

        {/* HELP */}
      </div>
    </div>

  );
}

export default LessonPage;





/*return (
    <div>
      <div className={classes.lessonsblock}>
        <div className={classes.headerNavbar}>
          <button
            className={`${classes.bar} ${activeContent === "search" ? classes.activeLink : ""}`}
            onClick={() => setActiveContent("search")}>
            Поиск
          </button>
          <button
            className={`${classes.bar} ${activeContent === "Интерактивные игры" ? classes.activeLink : ""}`}
            onClick={() => setActiveContent("Интерактивные игры")}>
            Интерактивные игры
          </button>
          <button
            className={`${classes.bar} ${activeContent === "Игры на безопасность" ? classes.activeLink : ""}`}
            onClick={() => setActiveContent("Игры на безопасность")}>
            Игры на безопасность
          </button>
          <button
            className={`${classes.bar} ${activeContent === "Логопедические игры" ? classes.activeLink : ""}`}
            onClick={() => setActiveContent("Логопедические игры")}>
            Логопедические игры
          </button>
        </div>

        <div className={classes.createLine}></div>

        <div className={classes.contentArea}>
          {activeContent === "search" && <SearchBar />}
          {activeContent && activeContent !== "search" && <h2>{activeContent}</h2>}
        </div>
      </div>
    </div>
  );*/