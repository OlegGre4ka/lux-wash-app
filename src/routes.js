import {
    Routes,
    Route
} from "react-router-dom";
import React from "react";
import Home from "./containers/Home";
import AboutUs from "./containers/AboutUs";
import Drivers from "./containers/Drivers";
import Business from "./containers/Business";
import Technologies from "./containers/Technologies";
import Services from "./containers/Services";
import Contacts from "./containers/Contacts";

const MainRoutes = () => {
    return (
        <div style={{ flexGrow: 1}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/business" element={<Business />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    )
}
export default MainRoutes