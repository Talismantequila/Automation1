export function FloatingOrbs() {
  return (
    <>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#FFEB3B]/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
    </>
  );
}
