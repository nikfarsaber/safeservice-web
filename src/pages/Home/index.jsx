import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import SlideShow from "../../component/SlideShow";
import Worthiness from "./helper/Worthiness";

import styles from "./home.module.css";

const Home = () => {
  const UrlReference = [
    {
      url: "https://www.apple.com/v/macbook-pro-14-and-16/c/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
      alt: "",
    },
    {
      url: "https://www.apple.com/v/apple-watch-ultra/d/images/overview/hero/hero_watch_ultra__cbu8ymf4a8xe_large.jpg",
      alt: "",
    },
  ];

  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <SlideShow pictureRef={UrlReference} className={styles.slideShow} />
      <Worthiness className={styles.worthiness} />
      <Footer />
    </div>
  );
};

export default Home;
