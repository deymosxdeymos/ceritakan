import defaultLogo from "../../../assets/logo.png";

interface LogoProps {
  imageUrl: string;
  className?: string;
  text?: string;
}

export const Logo = ({
  imageUrl = defaultLogo,
  className = "",
  text = "CERITAKAN",
  ...props
}: LogoProps) => {
  const baseStyles = "flex items-center rounded-3xl bg-tertiary shadow-xl";

  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      <img
        src={imageUrl}
        alt="Logo"
        className="w-[40px] sm:w-[50px] md:w-[68px] mr-1 sm:mr-2"
      />
      {text && (
        <span className="text-lg sm:text-2xl md:text-[29px] font-extrabold text-primary tracking-wider">
          {text}
        </span>
      )}
    </div>
  );
};
