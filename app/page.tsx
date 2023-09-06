"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import InfoCard from "@/components/InfoCard";
import DiscordCard from "@/components/DiscordCard";
import ThemeToggleCard from "@/components/ThemeToggleCard";
import SpotifyCard from "@/components/SpotifyCard";
import TimeCard from "@/components/TimeCard";
import GalleryCard from "@/components/PictureGallery";
import MailCard from "@/components/EmailCard";
import OnlineCard from "@/components/OnlineCard";
import TwitterCard from "@/components/TwitterCard";

function Home() {
  const [section, setSection] = useState("all");
  return (
    <div className="flex flex-col m-5 font-nunito">
      <NavBar setSection={setSection} />
      <div
        className="grid grid-cols-3 gap-2 md:grid-cols-4 
			md:gap-4 mt-5 mb-5 container mx-auto xl:px-20"
      >
        <InfoCard section={section} />
        <ThemeToggleCard section={section} />
        <TwitterCard section={section} />
        <DiscordCard section={section} />
        <GalleryCard section={section} />
        <SpotifyCard section={section} />
        <TimeCard section={section} />
        <MailCard section={section} />
        <OnlineCard section={section} />
      </div>
    </div>
  );
}

export default Home;
