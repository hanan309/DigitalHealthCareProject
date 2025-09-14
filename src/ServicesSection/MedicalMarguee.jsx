const MedicalMarquee = () => {
  return (
    <div className="overflow-hidden bg-blue-600 text-white py-3">
      <div className="whitespace-nowrap animate-marquee text-sm md:text-base font-medium">
         + DERMATOLOGY + ORTHOPEDICS + NEUROLOGY + ORTHOPEDICS + DERMATOLOGY + DERMATOLOGY + ORTHOPEDICS + NEUROLOGY + ORTHOPEDICS + DERMATOLOGY + CARDIOLOGIST
      </div>
    </div>
  );
};

export default MedicalMarquee;
