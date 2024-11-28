interface Strategi {
  imageUrl: string;
  className?: string;
}

export const Strategi = () => {
  return (
    <div className="w-full max-w-[760px] px-4 flex flex-col mx-auto items-center">
      <h2 className="p-4 md:p-8 text-primary text-3xl md:text-5xl font-bold text-shadow-xl text-center">
        Strategi Ketentraman{" "}
      </h2>
      <p className="mb-32 md:mb-64 text-lg md:text-xl text-black font-semibold text-center text-shadow-xl tracking-wider leading-7 md:leading-8 px-4">
        Solusi Terbaik dari CERITAKAN! didukung oleh teknologi bahasa terkini
        untuk memberikan dukungan yang penuh empati, berbasis ilmu, dan sesuai
        dengan kebutuhan pribadi Anda.
      </p>
    </div>
  );
};
