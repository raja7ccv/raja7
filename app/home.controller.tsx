import { AppInfo } from "./view/appInfo";
import { DownloadCTA } from "./view/downloadCTA";
import { FAQ } from "./view/faq";
import { GamesSection } from "./view/gamesSection";
import { HeroSection } from "./view/heroSection";
import { Screenshots } from "./view/screenshots";

const HomeController = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <AppInfo />
      <Screenshots />
      <GamesSection />
      <DownloadCTA />
      <FAQ />
    </main>
  );
};

export default HomeController;
