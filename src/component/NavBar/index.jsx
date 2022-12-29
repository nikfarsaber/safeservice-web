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
    <ul>
      {navBarObject.map((element) => (
        <li key={element.name}>{element.text}</li>
      ))}
    </ul>
  );
};

export default NavBar;
