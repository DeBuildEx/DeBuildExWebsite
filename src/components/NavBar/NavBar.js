import React from "react";
import styles from "./NavBar.module.scss";
import MaterialIcon from "material-icons-react";
import {Link} from "react-router-dom"
function Navbar({isHome}) {
  let x = process.env.PUBLIC_URL || '/';
  if(isHome)
  x='';
  return (
    <nav>
      <a href={x+"#main"}>
        <button className="primary light">صفحه اصلی</button>
      </a>
      <a href={x+"#services"}>
        <button className="flat light">خدمات</button>
      </a>
      <a href={x+"#projects"}>
        <button className="flat light">پروژه ها</button>
      </a>
      <a href={x+"#team"}>
        <button className="flat light">اعضای تیم</button>
      </a>
      <a href={x+"#contact"}>
        <button className="flat light">تماس با ما</button>
      </a>
      <a href={x+"#contact"}>
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
