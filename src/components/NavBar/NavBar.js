import React from "react";
import './NavBar.module.scss';
function Navbar(props) {
  return (
    <nav>
        <a>
            <button className="primary">
                صفحه اصلی
            </button>
        </a>
        <a>
            <button className="flat light">
                خدمات
            </button>
        </a>
        <a>
            <button className="flat light">
                پروژه ها
            </button>
        </a>
        <a>
            <button className="flat light">
                اعضای تیم
            </button>
        </a>
        <a>
            <button className="flat light">
                تماس با ما
            </button>
        </a>
        <a>
            <button className="flat light">
                مشاوره و سفارش پروژه <i className="custom plus"/>
            </button>
        </a>
        <a>
            <button className="flat  light">
                <i className="custom search"/>
            </button>
        </a>
    </nav>
  );
}

export default Navbar;
