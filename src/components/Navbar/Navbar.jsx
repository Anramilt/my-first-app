import React, {useState} from 'react';

import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

import { FaUser, FaDumbbell, FaShoppingCart, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
            <button className={classes.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
            <nav className={classes.nav}>
                <NavLink to="/" className={classes.navItem}>
                    <FaUser className={classes.icon} />
                    <span className={`${classes.text} ${isOpen ? classes.show : classes.hide}`}>Профиль</span>
                </NavLink>
                <NavLink to="/lessons" className={classes.navItem}>
                    <FaDumbbell className={classes.icon} />
                    <span className={`${classes.text} ${isOpen ? classes.show : classes.hide}`}>Упражнения</span>
                </NavLink>
                <NavLink to="/price" className={classes.navItem}>
                    <FaShoppingCart className={classes.icon} />
                    <span className={`${classes.text} ${isOpen ? classes.show : classes.hide}`}>Цены</span>
                </NavLink>
            </nav>
        </div>




        
    );
}
export default Navbar;

/*<div className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
            <button className={classes.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
            <nav className={classes.nav}>
                <NavLink to="/" className={classes.navItem} title="Профиль">
                    <FaUser className={classes.icon} /> {isOpen && "Профиль"}
                </NavLink>
                <NavLink to="/lessons" className={classes.navItem} title="Упражнения">
                    <FaDumbbell className={classes.icon} /> {isOpen && "Упражнения"}
                </NavLink>
                <NavLink to="/price" className={classes.navItem} title="Цены">
                    <FaShoppingCart className={classes.icon} /> {isOpen && "Цены"}
                </NavLink>
            </nav>
        </div>*/ 

/*
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={classes.nav}>
            <div className={classes.arrow} onClick={toggleNavbar}>
                &gt; 
                </div>
                {isOpen && (
                    <div className={classes.menu}>
                        <div className={classes.item}>
                            <NavLink to="/" className={navData => navData.isActive ? classes.activeLink : classes.item}>Профиль</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to="/lessons" className={navData => navData.isActive ? classes.activeLink : classes.item}>Упражнения</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to="/price" className={navData => navData.isActive ? classes.activeLink : classes.item}>Покупателям</NavLink>
                        </div>
                    </div>
                )
                }
            </nav>
        );
    }*/