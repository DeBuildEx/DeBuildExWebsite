import React from "react";
import CurvedBox from "Components/Layout/CurvedBox/CurvedBox";
import Navbar from "Components/NavBar/NavBar";
import styles from "./Layout.module.scss";
import vars from "assets/styles/libs/_vars.scss";
import SocialBar from "Components/SocialBar/SocialBar";
import { Carousel } from "3d-react-carousal";
import MaterialIcon from "material-icons-react";
import { renderStatus } from "Utils/Functions";
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <main>
      <CurvedBox loc="a" background={vars.primaryColor}>
        <header>
          <Navbar isHome={props.isHome || false} />
          <div className={styles.logo}>
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="DeBuildEX" />
          </div>
        </header>
        <section class={styles.pageMeta} id="main">
          <h1 className="light">{props.pageTitle}</h1>
          {props.projectMeta && (
            <div className={styles.meta}>
              {renderStatus(props.projectMeta.status, (o) => (
                <button className={styles.projectInfo + " " + o.class}>
                  {o.name}
                  <MaterialIcon icon={o.icon} />
                </button>
              ))}
              <Link to={props.projectMeta.link}>
                <button className={"primary light " + styles.projectLink}>
                  مشاهده پروژه <MaterialIcon icon="arrow_back_ios" />
                </button>
              </Link>
            </div>
          )}
          {props.memberMeta && (
            <div className={styles.meta}>
              <h3 className="light">{props.memberMeta.role}</h3>
            </div>
          )}
        </section>

        {props.pageThumb && (
          <div
            className={
              styles.pageThumb +
              " " +
              (!Array.isArray(props.pageThumb) && styles.single)
            }
          >
            {Array.isArray(props.pageThumb) ? (
              <Carousel
                slides={props.pageThumb.map((i) => (
                  <img src={i} />
                ))}
                autoplay={true}
                interval={3000}
              />
            ) : (
              <img src={props.pageThumb} />
            )}
          </div>
        )}
      </CurvedBox>
      <div className={props.pageThumb ? styles.content : styles.contentNoThumb}>
        {props.children}
      </div>
      <CurvedBox
        loc="b"
        background={vars.seconderyWhite}
        className={
          props.isHome ? styles.specialSection1 : styles.specialSection
        }
      >
        <section>
          <SocialBar />
        </section>
      </CurvedBox>
    </main>
  );
}

export default Layout;
