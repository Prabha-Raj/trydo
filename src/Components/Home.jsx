import Navbar from "./Navbar";
import Slider from "./Slider";
import Card from "./Card";
import Services from "./Services";
import Counter from "./Counter";
import Process from "./Process"
import Teamsection from "./Teamsection";
import Aboutsection from "./Aboutsection";
import Brandsection from "./Brandsection";
import Pricingsection from "./Pricingsection";
import Contact from "./Contact";
import Footer from "./Footer";
import Latestnews from "./Latestnews";
export default function Home(){
    return (
        <div>
            <Navbar/>
            <Slider/> 
            <Card/>
            <Services/>
            <Counter/>
            <Process/>
            <Teamsection/>
            <Aboutsection/>
            <Brandsection/>
            <Pricingsection/>
            <Latestnews/>
            <Contact/>
            <Footer/>
        </div>
    )
}