"use client";

import { Marquee } from "./ui/marquee";


const companies = [
    "EGIS.png", "Vinci.png", "SOLIDEO.png", "ADP.png", "Disney.png",
    "SNCF.png", "Cazal.jpg", "CESI.png", "GTM.jpg", "cabinet-merlin.png",
    "SGP.png", "ASF.png", "Cognac-TP.png", "VOP-Paris-2024.png",
];

export default function PartnerCarousel() {
    return (
        <section id="companies">
            <div className="py-14">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="relative">
                        <Marquee className="max-w-full [--duration:40s] [--delay:20s] [--gap:2rem]">
                            {companies.map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={`/logos/${logo}`}
                                    className="size-1/3 px-6 dark:brightness-0 dark:invert"
                                    alt={logo}
                                />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}