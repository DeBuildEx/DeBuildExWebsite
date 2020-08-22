import React from "react";
import styles from "./NavBar.module.scss";
import MaterialIcon from "material-icons-react";
function Navbar(props) {
  return (
    <nav>
      <a>
        <button className="primary light">صفحه اصلی</button>
      </a>
      <a>
        <button className="flat light">خدمات</button>
      </a>
      <a>
        <button className="flat light">پروژه ها</button>
      </a>
      <a>
        <button className="flat light">اعضای تیم</button>
      </a>
      <a>
        <button className="flat light">تماس با ما</button>
      </a>
      <a>
        <button className={"flat light "+styles.help}>
        <MaterialIcon
            icon="add_circle"
          />
          مشاوره و سفارش پروژه
        </button>
      </a>
      <a>
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
