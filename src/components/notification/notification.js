import React from "react";
import PropTypes from "prop-types";
import "./notification.css";

function Notification({ message }) {
  return <h2 className="notification">{message}</h2>;
}

Notification.prototype = {
  message: PropTypes.string,
};

export default Notification;
