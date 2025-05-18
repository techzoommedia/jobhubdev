import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-10 flex items-center justify-between">
      <img src={assets.logo} alt="" />
      <p>Copyright @2025</p>
    </div>
  );
};

export default Footer;
