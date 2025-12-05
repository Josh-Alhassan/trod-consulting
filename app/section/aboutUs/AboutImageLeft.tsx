import Image from 'next/image';

import aboutUsImg from '@/public/images/pictureFrame.svg'

export default function AboutImageLeft() {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] rounded-lg overflow-hidden">
      <Image
        src={aboutUsImg}
        alt="Team collaboration"
        className="w-full h-full object-cover"
      />

      {/* Bottom dark gradient overlay */}
      <div className="
        absolute bottom-0 left-0 right-0 
        bg-gradient-to-t from-black/70 via-black/30 to-transparent
        p-4
      ">
        {/* <p className="text-white text-xs md:text-sm max-w-xs">
          We partner with forward-thinking businesses to turn complexity into
          clarity — crafting strategies that deliver measurable,
          lasting impact.
        </p> */}
      </div>
    </div>
  );
}
