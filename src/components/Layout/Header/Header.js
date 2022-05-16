import classes from "./Header.module.css";
import Logo from "./LOGO.png";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
// import Nav from "./Nav";
import React from "react";
function Header(props) {
  return (
    <header className={classes.header}>
      <div class={classes.navLocation}>
        <img
          src={Logo}
          alt="Grocer Garden"
          className="mainLogo"
          height="66rem"
          width="66rem"
        />
        <ion-icon name="location" class={classes.navIcons}></ion-icon>
        <p class={classes.location}>Patna,Bihar</p>
        <ion-icon
          name="chevron-down-outline"
          class={classes.navIcons}
        ></ion-icon>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.MainNavList}>
          <li>
            <i class={classes["fa fa-search"]}></i>
            <input
              type="text"
              placeholder="What are you looking for?"
              name="search"
            />
          </li>
          <li>
            <button className={classes.button}>
              <ion-icon name="scan" class={classes.navIcons}></ion-icon>
              <p>Scan Products</p>
            </button>
          </li>

          <li>
            <button className={classes.button}>
              {" "}
              <ion-icon name="person" class={classes.navIcons}></ion-icon>
              <p>Your Account</p>
            </button>
          </li>
          <li>
            <Link to="/cart"><CartButton onClick={props.onShowCart} /></Link>
          </li>
        </ul>
      </nav>
      {/* <Nav onClick={props.onShowCart} /> */}
    </header>
  );
}
export default Header;
