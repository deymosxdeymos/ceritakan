import defaultLogo from "../../../assets/logo.png";

interface HeroProps {
  imageUrl: string;
  className?: string;
}

export const Hero = ({
  imageUrl = defaultLogo,
  className = "",
  ...props
}: HeroProps) => {
  const baseStyles =
    "flex flex-col md:flex-row justify-between items-center px-4 md:px-12 pt-8 pb-12 md:pb-24 rounded-3xl bg-gradient-to-b from-tertiary to-secondary max-w-8xl mx-4 md:mx-8";

  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      <div className="flex flex-col max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold text-primary mb-6 md:tracking-widest md:leading-relaxed text-center md:text-left">
          Selamat Datang <br /> di CERITAKAN
        </h1>
        <p className="text-lg md:text-xl font-bold mb-8 text-center md:text-left">
          Berbicara Bukan Hanya Sekedar Kata, Tapi Juga Jalan Menuju Pemulihan.
        </p>
        <button className="bg-[#B8E1DD66] text-primary px-8 py-2 rounded-2xl text-lg font-bold w-fit outline outline-2 outline-primary mx-auto md:mx-0">
          Get Started
        </button>
      </div>
      <div className="hidden md:flex items-center mt-8 md:mt-0">
        <img src={imageUrl} alt="Logo" className="w-[200px] md:w-[400px]" />
      </div>
    </div>
  );
};
