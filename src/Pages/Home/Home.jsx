import Marquee from "react-fast-marquee";
import Sajek from "./HomePageCard/Sajek";
import Sreemongol from "./HomePageCard/Sreemongol";
import Sundorbon from "./HomePageCard/Sundorbon";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/TrPzdKB/Rectangle-1.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Cox's bazar</h1>
          <p className="mb-5">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <Link to=''>
            <button className="btn btn-warning hover:bg-amber-500 font-semibold">Booking <FaArrowRight className="ms-3"/></button>
          </Link>
        </div>

        <Marquee>
          <Sajek />
          <Sreemongol />
          <Sundorbon />
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
