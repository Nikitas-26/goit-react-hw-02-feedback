import "./App.css";
import Feedback from "./Components/Feedback/Feedback.jsx";
import { Component } from "react";
import Statistics from './Components/statistics/Statistics';
import Section from './Components/Section/Section';
// import Notification  from './Components/Notification/Notification.jsx'
class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  countFeedback = (e) => {
    const target = e.target.id;
    this.setState((prevState) => ({ [target]: prevState[target] + 1 }));
  };
  countTotalFeedback = () => Object.values(this.state).reduce((acc, el) => acc + Number(el), 0);

  countPositiveFeedbackPercentage = () => {
    const total =  this.countTotalFeedback();
    console.log(total);
    const good = this.state.good
    return total ? Number(good * 100) / Number(this.countTotalFeedback()) : 0
    // return Number(good * 100) / Number(this.countTotalFeedback())
    
  }

  render() {
    // const {good,neutral,bad} = this
    const {countTotalFeedback, countPositiveFeedbackPercentage,countFeedback} = this
    const totalFeedback = countTotalFeedback()
    return (
      <Section title='please leave your feedback'>
        <Feedback countFeedback ={countFeedback}/>
        {totalFeedback?<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalFeedback} positivePercentage={countPositiveFeedbackPercentage()}/>:<Section title={"There is no feedback"}/>}
        </Section>
    );
  }
}

export default App;
