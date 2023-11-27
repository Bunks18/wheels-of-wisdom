// import logo from "./logo.svg";
import "./App.css";
import Hero from "./Hero";
import { IoIosPeople } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { PiPersonSimpleBike } from "react-icons/pi";
import Logo from "./Logo";
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        {/* <div className="font-bold text-gray-800 mb-2 md:mb-0"> */}
        {/* <Logo className="h-1" /> */}
        {/* </div> */}
        {/* <Logo /> */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 md:mt-0 hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="container mx-auto py-16 text-left  md:flex md:justify-between md:items-center">
      <div className="mb-8 md:w-1/2 md:pr-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Cycling Wisdom, Building Connections
        </h1>
        <p className="text-gray-600">
          Join Wheels of Wisdom, where younger generations pedal the path of
          companionship for older members in the serene embrace of nature.
          Experience the joy of shared journeys, building connections that
          transcend generations.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 transition duration-300">
          Get Involved
        </button>
      </div>
      <div className="md:w-1/2">
        <Hero />{" "}
      </div>
    </section>
  );
};
const FeatureSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          How it Works
        </h2>
        <p className="text-gray-600">
          Explore the features that outline how Wheels of Wisdom brings
          generations together in the great outdoors.
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="w-full md:w-1/3 text-left bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8">
          <div className="mb-4">
            <div className="h-10">
              <IoIosPeople className="text-5xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Assisted Living Partnerships
          </h3>
          <p className="text-gray-600">
            We collaborate with local assisted living homes, fostering a sense
            of community and well-being for their residents.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-left bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0 md:mx-4">
          <div className="mb-4">
            <FaHandsHelping className="text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Volunteer Engagement</h3>
          <p className="text-gray-600">
            We engage local volunteers with a passion for cycling and a
            commitment to building connections with older community members.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-left bg-white p-8 rounded-lg shadow-lg md:ml-8">
          <div className="mb-4">
            <PiPersonSimpleBike class="text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Outdoor Biking</h3>
          <p className="text-gray-600">
            We match volunteers and assisted living residents, creating
            opportunities for shared biking experiences in the outdoors.
          </p>
        </div>
      </div>
    </section>
  );
};

const InfoSection = ({ title, text, imagePath, reverse }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center">
        <div className={`md:w-1/2 ${reverse ? "md:order-2" : ""}`}>
          <Hero />
        </div>
        <div className={`md:w-1/2 md:pl-8 ${reverse ? "md:pr-8" : ""}`}>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 mb-8">{text}</p>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-200 mb-8">
          Join us today and experience the clean revolution.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 hover:text-blue-500 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Clean Logo</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Features
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      {/* <InfoSection
        title="Welcome to the Clean World"
        text="Discover the simplicity and elegance of our products and services. Join us in creating a clean and beautiful future."
      /> */}
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
