import Footer from "../../Shared/Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Brand from "../Brand/Brand";
import Choose from "../Choose/Choose";
import Experenc from "../Experenc/Experenc";
import ItSubjects from "../ItSubjects/ItSubjects";
import Number from "../Number/Number";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Sucesses from "../Sucesses/Sucesses";
import Team from "../Team/Team";
import Testinomal from "../Testinomal/Testinomal";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Experenc></Experenc>
            <ItSubjects></ItSubjects>
            <Sucesses></Sucesses>
            <Projects></Projects>
            <Choose></Choose>
            <Testinomal></Testinomal>
            <Brand></Brand>
            <Team></Team>
            <Blogs></Blogs>
            <Number></Number>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;