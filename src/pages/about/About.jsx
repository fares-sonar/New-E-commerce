import Cards from "./Cards";
import Info from "./info";

const About = () => {
  return (
    <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mt-16">
        <Info />
        <Cards />
      </div>
    </div>
  );
};

export default About;
