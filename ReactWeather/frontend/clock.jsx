import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date() };
    this.tick = this.tick.bind(this);
  }


  render() {
    return (
      <h1 className="orange">My Clock
        <section className="timeThingy">
          <p>Date:</p>
          <p>{this.state.time.toDateString()}</p>
        </section>
        <section className="timeThingy">
          <p>Time:</p>
          <p>{this.state.time.toLocaleTimeString()}</p>
        </section>
      </h1>
      );
  }

  componentDidMount(){
    this.interval = setInterval(this.tick, 1000);
  }


  tick() {
    this.setState({time: new Date()});
  }
}

export default Clock;
