"use client";

// import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="خانه حواله"
            paragraph="همکار هرنوع حواله های شما در افغانیستان و ایران"
            center
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md px-4">
                <div className="relative aspect-video w-full cursor-pointer">
                  {!isOpen ? (
                    <div
                      className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-md"
                      onClick={() => setOpen(true)}
                    >
                      <Image
                        src="/money_thamnail.png"
                        alt="Video Thumbnail"
                        fill
                        className="object-cover"
                        style={{ objectFit: "cover" }}
                        priority
                      />
                      <div className="bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={64}
                          height={64}
                          fill="white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <video
                      src="/money.mp4"
                      controls
                      className="absolute top-0 left-0 h-full w-full rounded-md object-cover"
                      playsInline
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
