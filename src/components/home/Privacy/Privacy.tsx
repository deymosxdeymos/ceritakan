import defaultLogo from "../../../assets/logo.png";
import privacy from "../../../assets/privacy.png";

interface PrivacyProps {
  imageUrl?: string;
  className?: string;
}

export const Privacy = ({
  imageUrl = defaultLogo,
  className = "",
}: PrivacyProps) => {
  const baseStyles =
    "flex flex-col items-center px-4 md:px-30 pt-8 md:pt-16 pb-14 md:pb-28 rounded-[40px] md:rounded-[80px] bg-white/20 backdrop-blur-md shadow-xl w-[90%] md:w-4/5 lg:w-3/5 mx-auto";

  return (
    <div
      className="flex items-center justify-center w-screen h-screen relative bg-cover bg-center mb-12 md:mb-36"
      style={{
        backgroundImage: `url(${privacy})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${baseStyles} ${className}`}>
        <div className="flex items-center mb-4 md:mb-8">
          <img
            src={imageUrl}
            alt="Logo"
            className="w-[120px] md:w-[200px]"
            onError={(e) => (e.currentTarget.src = defaultLogo)}
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl md:text-3xl font-bold text-black mb-6 md:mb-12 px-4">
            <span className="text-primary">Di CERITAKAN </span>, Privasi dan
            Keamanan Anda adalah yang terpenting
          </h2>
          <p className="text-base md:text-2xl text-[#333333] font-semibold mb-4 md:mb-8 px-4 md:px-12 lg:px-72 tracking-wider leading-relaxed">
            Percakapan Anda dengan chatbot kami dipantau secara ketat melalui
            lapisan aturan yang ketat, memastikan lingkungan yang aman dan
            nyaman. Kami tidak membagikan informasi Anda kepada pihak ketiga,
            dan setiap percakapan Anda tetap rahasia.
          </p>
        </div>
      </div>
    </div>
  );
};
