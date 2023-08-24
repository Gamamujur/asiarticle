import Hero from "./Hero";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WrappedCountryDetail from "./CountryDetail";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonRoute = async (id) => {
    navigate(`/countrydetail/${id}`);
  };
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={<Hero handleButtonRoute={handleButtonRoute} />}
          />
          <Route path="/countrydetail/:id" element={<WrappedCountryDetail />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Main;
