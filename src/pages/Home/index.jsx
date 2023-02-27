import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import SlideShow from "../../component/SlideShow";
import Worthiness from "./helper/Worthiness";
import IntroductionMobileApp from "./helper/IntroductionMobileApp";
import ScrollCircle from "../../component/ScrollCircle";

import styles from "./home.module.css";

const Home = () => {
  const UrlReference = [
    {
      url: "https://media.idownloadblog.com/wp-content/uploads/2022/10/iOS-16-Depth-Effect-wallpaper-idownloadblog-mockup.jpg",
      alt: "iphone 14 pro max",
    },
    {
      url: "https://img.tamindir.com/resize/1200x675/2022/09/476726/ekim-apple-etkinliginde-tanitilacaklar.jpg",
      alt: "ipade",
    },
    {
      url: "https://www.apple.com/v/apple-watch-ultra/d/images/overview/hero/hero_watch_ultra__cbu8ymf4a8xe_large.jpg",
      alt: "",
    },
    {
      url: "https://fn-production-backend-bucket.s3.eu-west-2.amazonaws.com/646od7rc6f6btx4hpzllox2uyvyr?response-content-disposition=inline%3B%20filename%3D%22poster5-1.png%22%3B%20filename%2A%3DUTF-8%27%27poster5-1.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2JP3QLRB64V4E2JC%2F20230225%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230225T074311Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=282a618b0ca0ba2dc3aa9be72a1159de1cf3d9ca35112095e3d53808de587ff2",
      alt: "iMac 2021",
    },
    {
      url: "https://www.apple.com/newsroom/images/product/imac/standard/apple_new-imac-spring21_hero_04202021.jpg.landing-big_2x.jpg",
      alt: "",
    },
  ];

  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <SlideShow pictureRef={UrlReference} className={styles.slideShow} />
      <Worthiness className={styles.worthiness} />
      <p className={styles.text}>
        خرید آسان و بی‌دغدغه تلفن‌های همراه از برندهای روز دنیا با بهترین قیمت و
        بدون واسطه با
      </p>
      <p className={styles.safeserviceText}>سیف سرویس</p>
      <IntroductionMobileApp />
      <Footer />
      <ScrollCircle />
    </div>
  );
};

export default Home;
