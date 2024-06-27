import { useContext, useState } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import styles from "./CustomModal.module.css";
import { motion } from "framer-motion";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import useLocalStorage from "use-local-storage";
import { toast } from "sonner";

function CustomModal() {
  const { handleClose, languages } = useContext(WeatherContext);
  const [defaultCity, setDefaultCity] = useLocalStorage("defaultCity", "Cairo");
  const [chooseLang, setChooseLang] = useLocalStorage("lang", "en");
  const [value, setValue] = useState(defaultCity);
  const handleParentClick = (e) => {
    e.stopPropagation();
    handleClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        bounce: 1,
        velocity: 0.5,
        stiffness: 260,
        damping: 30,
      }}
      onClick={handleParentClick}
      className={styles.customModel}
    >
      <Container
        className={`${styles.model_body} d-flex flex-column`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex flex-column justify-content-center align-items-center all-items">
          <Col>
            <h3 className={`${styles.input} p-0 m-0 mb-2`}>
              {languages.default}
            </h3>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder={languages.city}
            />
          </Col>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className={`${styles.input} p-0 m-0 mt-3 mb-2 ms-2`}>
              {languages.chooseLang}
            </h3>
            <div
              className={`${styles.langs} d-flex flex-row gap-2 w-100 justify-content-center align-items-center`}
            >
              <p
                onClick={() => setChooseLang("ar")}
                className={chooseLang == "ar" ? styles.active : ""}
              >
                AR
              </p>
              <p
                onClick={() => setChooseLang("en")}
                className={chooseLang == "en" ? styles.active : ""}
              >
                EN
              </p>
            </div>
          </div>
          <Button
            onClick={() => {
              setDefaultCity(value);
              handleClose();
              toast.success(languages.savedSuccessfully);
            }}
            className="mt-3 main-btn"
          >
            {languages.saveChanges}
          </Button>
        </div>
      </Container>
    </motion.div>
  );
}

export default CustomModal;
