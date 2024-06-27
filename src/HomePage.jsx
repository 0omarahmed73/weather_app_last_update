import React, { useContext, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { AnimatePresence, motion } from "framer-motion";
import { WeatherContext } from "./contexts/WeatherContext";
import Loading from "./components/Loading/Loading";
import { useLocalStorage } from "@uidotdev/usehooks";
import { createPortal } from "react-dom";
import { Button, Container, Form, Modal } from "react-bootstrap";
import LoadingModal from "./components/LoadingModal";
import "./HomePage.css";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import SettingsButton from "./components/SettingsButton/SettingsButton";
import CustomModal from "./components/Modal/CustomModal";
import { Toaster } from "sonner";
function HomePage() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { languages } = useContext(WeatherContext);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const { loading, isSearching, handleClose, show } =
    useContext(WeatherContext);
  return loading ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        bounce: 1,
        delay: 0.2,
        velocity: 0.5,
        stiffness: 260,
        damping: 30,
      }}
      className="parent d-block"
    >
      <NavBar />
      <Container className="my-3">
        <Section1 />
        <Section2 />
      </Container>
      <SettingsButton />
      <AnimatePresence>{show && <CustomModal />}</AnimatePresence>
      <AnimatePresence>
        <Toaster position="bottom-center" richColors duration={2000} />
      </AnimatePresence>
      <footer>
        <p className="text-center mb-2">
          {languages["Made with ❤️ by Omar Ahmed & Yousef Hassan "]}
        </p>
      </footer>
    </motion.div>
  );
}

export default HomePage;
