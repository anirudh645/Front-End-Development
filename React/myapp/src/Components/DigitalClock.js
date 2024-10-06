import React,{Component} from "react";
class DigitalClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { time: new Date().toLocaleTimeString() };
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({ time: new Date().toLocaleTimeString() });
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.time}</h1>
        </div>
      );
    }
  }
  export default DigitalClock;