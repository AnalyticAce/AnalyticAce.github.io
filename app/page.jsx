import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi';
import Link from "next/link";
// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-3"> {/*Adjusted pt-8 to pt-1 and pb-24 to pb-3*/}
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Problem Solver 🚀</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Shalom DOSSEH</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I am passionate with solving complex problems and creating innovative, 
            data-driven solutions. With a strong foundation in various technologies, 
            I excel at engineering decision-making systems to accelarete efficiency and growth. 
            </p>
            {/* download resume button & Social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <Link href="https://docs.google.com/document/d/1txq9Mz-ivQ7zd0UaZDrj0Fp176F7I5MAv11UUpveFj8/edit?usp=sharing">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home