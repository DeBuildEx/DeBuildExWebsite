import React from "react";
import styles from "./NavBar.module.scss";
import MaterialIcon from "material-icons-react";
import {Link} from "react-router-dom"
function Navbar(props) {
  function scrollToItem (id) { 
    console.log(document.getElementById(id).offsetTop)
    window.scrollTo(0, document.getElementById(id).offsetTop)
  //  document.getElementById(id).scrollIntoView(); 
   }
  return (
    <nav>
      <a href={'/'+process.env.PUBLIC_URL+"#main"}>
        <button className="primary light">صفحه اصلی</button>
      </a>
      <a href={'/'+process.env.PUBLIC_URL+"#services"}>
        <button className="flat light">خدمات</button>
      </a>
      <a href={'/'+process.env.PUBLIC_URL+"#projects"}>
        <button className="flat light">پروژه ها</button>
      </a>
      <a href={'/'+process.env.PUBLIC_URL+"#team"}>
        <button className="flat light">اعضای تیم</button>
      </a>
      <a href={'/'+process.env.PUBLIC_URL+"#contact"}>
        <button className="flat light">تماس با ما</button>
      </a>
      <a href={'/'+process.env.PUBLIC_URL+"#contact"}>
        <button className={"flat light "+styles.help}>
        <MaterialIcon
            icon="add_circle"
          />
          مشاوره و سفارش پروژه
        </button>
      </a>
      <a href="#">
        <button className="flat  light">
        <MaterialIcon
            icon="search"
          />
        </button>
      </a>
    </nav>
  );
}

export default Navbar;
