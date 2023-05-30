import React from "react";
import "../views/MapaGoogle.css";

const MapaGoogle = () => {
  return (
    <div className="mapResponsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.090808846107!2d-65.20613982394785!3d-26.83706387669247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0f45aca965%3A0xab51c1683fb82043!2sGral.%20Paz%20320%2C%20T4000BLH%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1685486006546!5m2!1ses!2sar"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
      ></iframe>
    </div>
  );
};

export default MapaGoogle;

