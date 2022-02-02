const Feedback = ({countFeedback}) => {
  return (
    <>
      <h1>LEAVE FEEDBACK</h1>
      <button onClick={countFeedback} type="button" id="good">
        Good
      </button>
      <button onClick={countFeedback} type="button" id="neutral">
        Neutral
      </button>
      <button onClick={countFeedback} type="button" id="bad">
        Bad
      </button>
    </>
  );
};

export default Feedback;

// import React, { Component } from "react";
// const GoodCounter = ({ good }) => <p>{good}</p>;
// const NeutralCounter = ({ neutral }) => <p>{neutral}</p>;
// const BadCounter = ({ bad }) => <p>{bad}</p>;

// class Feedback extends Component {
//   state = { good: 0, neutral: 0, bad: 0 };

//   countTotalFeedback = () => Object.values(this.state).reduce((acc, el) => acc + Number(el), 0);

//   // countPositiveFeedbackPercentage = () => {
//   //   const total =  this.countTotalFeedback();
//   //   const good = this.state.good
//   //   return total ? Number(good * 100) / Number(this.countTotalFeedback()) : 0

//   // }
//   // countFeedback = (e) => {
//   //   const target = e.target.id;
//   //   this.setState((prevState) => ({ [target]: prevState[target] + 1 }));
//   // };
//   render() {
//     const { countFeedback } = this;
//     return (
//       <>
//         <h1>PLEASE LEAVE FEEDBACK</h1>
//         <button onClick={countFeedback} type="button" id="good">
//           Good
//         </button>
//         <button onClick={countFeedback} type="button" id="neutral">
//           Neutral
//         </button>
//         <button onClick={countFeedback} type="button" id="bad">
//           Bad
//         </button>
//         <p>{this.countTotalFeedback()}</p>
//         <p>{this.countPositiveFeedbackPercentage()}</p>
//         {/* <h2>Statistics</h2>
//         <GoodCounter good={this.state.good} />
//         <NeutralCounter neutral={this.state.neutral} />
//         <BadCounter bad={this.state.bad} /> */}
//       </>
//     );
//   }
// }
// export default Feedback;
