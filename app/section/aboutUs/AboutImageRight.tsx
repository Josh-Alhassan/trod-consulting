import Image from "next/image";
import cybersecurity from "@/public/images/frame6.svg"

export default function AboutImageRight() {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] rounded-lg overflow-hidden">
      <Image
        src={cybersecurity}
        alt="Cybersecurity abstract"
        className="w-full h-full object-cover"
      />

      {/* Text bottom-left */}
      <div className="absolute bottom-0 left-0 p-4">
        <p className="text-white text-xs md:text-sm font-medium max-w-[120px] leading-tight">
          We’re obsessed with <br /> cybersecurity
        </p>
      </div>
    </div>
  );
}
