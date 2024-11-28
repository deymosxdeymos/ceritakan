import { Logo } from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-4 md:px-24 py-6 bg-gradient-to-b from-primary to-gradient shadow-md">
      <div className="flex items-center mb-4 md:mb-0">
        <Logo className="px-4" />
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 font-medium text-xl">
        <p className="text-white">© 2024 CERITAKAN.ai</p>
        <a href="/privacy" className="text-white hover:text-gray-300">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
