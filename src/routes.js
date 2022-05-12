import {
    Routes,
    Route
} from "react-router-dom";
import AboutUs from "./containers/AboutUs";
import Drivers from "./containers/Drivers";
import Business from "./containers/Business";
import Technologies from "./containers/Technologies";
import Services from "./containers/Services";
import Contacts from "./containers/Contacts";

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AboutUs />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/business" element={<Business />} />
                <Route path="/business" element={<Business />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contacts" element={<Contacts />} />
                {/* <Redirect to={APP_ROUTE.RESTAURANT_REGISTRATION} /> */}
            </Routes>
        </div>
    )
}
export default MainRoutes