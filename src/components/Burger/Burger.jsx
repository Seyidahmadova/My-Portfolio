import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import './Burger.css';
// import { Link } from 'react-router-dom';

export default function Burger() {

 const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
 const [menu_class, setMenuClass] = useState('menu hidden')
 const [isMenuClicked, setMenuClicked] = useState(false)


 const updateMenu = () => {
    if(!isMenuClicked){
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible')
    }
    else{
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }

    setMenuClicked(!isMenuClicked)

 }




  return (
    <div className='Burger'>
      <nav className='nav'>
        <div className='burger-menu' onClick={updateMenu}>
            <div className={burger_class} ></div>
            <div className={burger_class} ></div>
            <div className={burger_class} ></div>
        </div>
      </nav>

      <div className={menu_class}>   
         <div className='menu-container'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/skills'>Skills</Nav.Link>
          <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
         </div>
      </div>

    </div>
  )
}



