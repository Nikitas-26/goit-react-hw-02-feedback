import "./App.css";
import Feedback from "./Components/Feedback/Feedback.jsx";
import { Component } from "react";
import Statistics from "./Components/statistics/Statistics";
import Section from "./Components/Section/Section";
class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  countFeedback = (e) => {
    const target = e.target.id;
    this.setState((prevState) => ({ [target]: prevState[target] + 1 }));
  };
  countTotalFeedback = () => Object.values(this.state).reduce((acc, el) => acc + Number(el), 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return total ? Number(good * 100) / Number(this.countTotalFeedback()) : 0;
  };

  render() {
    const { countTotalFeedback, countPositiveFeedbackPercentage, countFeedback } = this;
    const totalFeedback = countTotalFeedback();
    return (
      <Section title="please leave your feedback">
        <Feedback countFeedback={countFeedback} options={Object.keys(this.state)} />
        {totalFeedback ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Section title={"There is no feedback"} />
        )}
      </Section>
    );
  }
}

export default App;
