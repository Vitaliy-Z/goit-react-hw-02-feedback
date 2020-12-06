import React from "react";
import PropTypes from "prop-types";
import "./feedbackOptions.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonsName = Object.keys(options);

  return (
    <div>
      <ul className="buttons">
        {buttonsName.map((button) => (
          <li className="item" key={button}>
            <button
              className="btn"
              type="button"
              name={button}
              onClick={onLeaveFeedback}
            >
              {button}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
