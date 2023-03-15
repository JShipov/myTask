import {GetStartedButton} from "./Components/GetStartedButton";
import {Carousel} from "./Components/Carousel";
import {AboutUs} from "./Components/AboutUs";
import {FAQ} from "./Components/FAQ";
import {BrowseCategory} from "./Components/BrowseCategory";

export const Home = () => {
    return (
        <>
            <GetStartedButton/>
            <Carousel/>
            <AboutUs/>
            <BrowseCategory/>
            <FAQ/>
        </>
    );
}