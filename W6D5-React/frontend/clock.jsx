import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: this.parseDate() };

    this.tick = this.tick.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }
  componentDidMount(){
    setInterval( this.tick, 1000 );
  }


  render() {
    // debugger;
    return (
       <div className="clock">
         <figure>
           Super clock &nbsp; &nbsp; &nbsp; {this.state.time}
         </figure>
       </div>
     );
  }

  parseDate() {

    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }

  tick() {
    this.setState({time: this.parseDate()});
  }
}

export default Clock;
