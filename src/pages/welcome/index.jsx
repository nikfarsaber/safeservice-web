import NavBar from "../../component/NavBar";
import SocialMediaRef from "../../component/SocialMediaRef";
const Welcome = () => {
  return (
    <>
      <img className="backgroundImg" alt="" />
      <div className="shadowOnBackground"></div>
      <header>
        <NavBar />
        <button>دریافت اپلیکیشن</button>
      </header>
      <div className="social-media-box">
        <SocialMediaRef />
      </div>
      <div className="link-to">
        <a href="#">۰۱/ ریچستر موبایل</a>
        <a href="#">۰۲/ ثبت گارانتی</a>
      </div>
      <div className="go-to-home-page"></div>
      <div className="text-area">
        <p>خرید آسان و بی‌دغدغه تلفن‌های همراه</p>
        <p>از برندهای روز دنیا با بهترین قیمت و بدون واسطه با</p>
        <p>
          <strong>سیف سرویس</strong>
        </p>
      </div>
    </>
  );
};

export default Welcome;
