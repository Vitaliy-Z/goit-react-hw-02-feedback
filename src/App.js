import React, { Component } from "react";
import Section from "./components/section/section";
import Statistic from "./components/statistic/statistic";
import FeedbackOptions from "./components/buttons/feedbackOptions";
import Notification from "./components/notification/notification";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = (evt) => {
    const targetValue = evt.currentTarget.name;
    this.setState((prevS) => ({
      [targetValue]: prevS[targetValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = (totalFeed, goodFeed) => {
    const totalPositive = (goodFeed * 100) / totalFeed;
    return totalFeed === 0 ? 0 : Number.parseInt(totalPositive) + " %";
  };

  render() {
    return (
      <div className="main">
        <h1 className="name">cafe 'Expresso'</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButton}
          />
        </Section>

        <Section title="Statistic">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
