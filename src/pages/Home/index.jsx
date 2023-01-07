import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <Header marginInline={"70px"} />
      <Footer />
    </div>
  );
};

export default Home;
