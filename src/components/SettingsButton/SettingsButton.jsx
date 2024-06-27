import React, { useContext, useState } from "react";
import styles from "./SettingsButton.module.css";
import { FaGear } from "react-icons/fa6";
import { Button, Modal } from "react-bootstrap";
import { WeatherContext } from "../../contexts/WeatherContext";
function SettingsButton() {
  const { show, handleShow, handleClose } = useContext(WeatherContext);
  return (
    <div onClick={handleShow} className={styles.buttonsetting}>
      <FaGear fill="var(--bgColor)" size={24} />
    </div>
  );
}

export default SettingsButton;
