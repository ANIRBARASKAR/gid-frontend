import Blogs from "./Blogs";
// import Brands from "./Brands";
import Brand from "./Brand";
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
            <Brand />
            {/* <Brands /> */}
            <Featured />
            <Blogs />
        </div>
    );
};

export default Home;