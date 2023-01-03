import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

const NavBar = () => {
  const navBarObject = [
    {
      name: "about-us",
      text: "درباره ما",
      link: "/about-us",
    },
    {
      name: "products",
      text: "محصولات",
      link: "/products",
    },
    {
      name: "contact-us",
      text: "تماس با ما",
      link: "/contact-us",
    },
    {
      name: "repair",
      text: "درخواست تعمیر",
      link: "/repair",
    },
    {
      name: "trainings",
      text: "آموزش‌ها",
      link: "/trainings",
    },
    {
      name: "news",
      text: "اخبار",
      link: "/news",
    },
  ];

  return (
    <ul className={styles.navbarList}>
      {navBarObject.map((element) => (
        <Link className={styles.link} to={element.link} key={element.name}>
          {element.text}
        </Link>
      ))}
    </ul>
  );
};

export default NavBar;
