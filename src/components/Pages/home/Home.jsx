import Blogs from "./Blogs";
import Brands from "./Brands";
import Featured from "./Featured";
import Hero from "./Hero";
import OurSolution from "./OurSolution";
import Slide from "./Slide";


const Home = () => {
    return (
        <div>
            <Hero />
            <Slide />
            <OurSolution />
            <Brands />
            <Featured />
            <Blogs />
        </div>
    );
};

export default Home;