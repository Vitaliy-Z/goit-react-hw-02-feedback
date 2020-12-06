import React from "react";
import PropTypes from "prop-types";
import "./section.css";

const Section = ({ title, children }) => (
  <section>
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
