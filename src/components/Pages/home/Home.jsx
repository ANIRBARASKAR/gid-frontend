import Blogs from "./Blogs";
// import Brands from "./Brands";
import Brand from "./Brand";
import Featured from "./Featured";
import Hero from "./Hero";
import OurSolution from "./OurSolution";
import Slide from "./Slide";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Hero />
            <Slide />
            <OurSolution />
            <Brand />
            {/* <Brands /> */}
            <Featured />
            <Testimonial />
            <Blogs />
        </div>
    );
};

export default Home;