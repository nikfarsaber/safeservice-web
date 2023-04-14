import styles from "./sortBox.module.css";

const SortBox = () => {
  const sortList = [
    { name: "mostRelevant", text: "مرتبط ترین" },
    { name: "cheapest", text: "ارزان‌ترین" },
    { name: "mostExpensive", text: "گران‌ترین" },
    { name: "mostSell", text: "پرفروش‌ترین" },
  ];

  return (
    <div className={styles.sortBox}>
      <p>ترتیب:</p>
      {sortList.map((element) => (
        <p className={styles.sortChoice} key={element.name}>
          {element.text}
        </p>
      ))}
    </div>
  );
};

export default SortBox;
