import Header from "../../layout/Header";

import aboutUsImage from "../../assets/pngFolder/aboutUsPicture.png";

import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <div className={styles.article}>
        <div className={styles.grideBox}>
          <div className={styles.backGround}></div>
          <p className={styles.pageTypic}>درباره ما</p>
          <img src={aboutUsImage} alt="" className={styles.image} />

          <p className={styles.topText}>
            شرکت ساپرامین در سال ۱۳۹۸ با هدف ارائه خدمات تخصصی در زمینه تلفن
            همراه و گجت های هوشمند به صورت واردات قانونی و عرضه تمامی محصولات
            بروز در برندهای اپل، سامسونگ، شیائومی و دیگر برندهای مطرح بین‌المللی
            که نقش بسیار مهمی در رشد بازار گوشی‌های تلفن همراه در ایران
            داشته‌اند، با نام تجاری سیف سرویس فعالیت خود را آغاز کرد.
          </p>

          <p className={styles.downText}>
            با توجه به اخذ، پیاده‌سازی و اجرای استانداردهای سیستم مدیریت کیفیت،
            در تلاشیم سه قابلیت اصلی پیشرو بودن در زمینه فروش و خدمات پس از
            فروش، به کارگیری نیروهای متخصص و حضور هر چه گسترده تر در بازار کشور
            و پاسخگویی سریع و دقیق کارشناسان و متخصصان که باعث افزایش رضایتمندی
            مشتریان درسراسر کشور است را همیشه در راستای خدمت به شما عزیزان
            سرلوحه کار خود قرار دهیم. شرکت ساپرامین با نام تجاری سیف سرویس با
            نشان دادن تصویری واضح از عملکرد شرکت، تلاش خود را در جهت بالا بردن
            سطح رضایت مشتریان مطابق با اصول مشتری مداری و پیاده سازی فرآیندهای
            مربوط به آن انجام می دهد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
