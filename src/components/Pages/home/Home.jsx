import Brand from "./Brand";
import Featured from "./Featured";
import Hero from "./Hero";
import HomeBlog from "./HomeBlog";
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
            <Featured />
            <Testimonial />
            <HomeBlog />
        </div>
    );
};

export default Home;