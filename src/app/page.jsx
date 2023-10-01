import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";
import Contacts from "@/components/Contacts";
import Brands from "@/components/Brands";
import Subscribe from "@/components/Subscribe";

const page = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <HowWorks />
      <Stats />
      <FeaturedProject />
      <Contacts />
       <Subscribe/>

    </div>
  );
};

export default page;