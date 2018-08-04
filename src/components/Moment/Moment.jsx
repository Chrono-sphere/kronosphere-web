import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Resources from './Moment.resource';
import './Moment.scss';

class Moment extends Component {
  state = {
    time: this.props.time,
    dayNumber: this.props.time.getDate(),
    monthNumber: this.props.time.getMonth() + 1,
    yearNumber: this.props.time.getFullYear(),
  }

  componentWillMount = () => setInterval(this.setCurrentTime, 60000);

  getMonth= () => {
    const months = [
      Resources.Month.january,
      Resources.Month.febuary,
      Resources.Month.march,
      Resources.Month.april,
      Resources.Month.may,
      Resources.Month.june,
      Resources.Month.july,
      Resources.Month.august,
      Resources.Month.september,
      Resources.Month.october,
      Resources.Month.november,
      Resources.Month.december,
    ];

    return months[this.state.monthNumber - 1];
  }

  getSubscript = () => {
    switch (this.state.dayNumber) {
      case 1:
      case 21:
      case 31:
        return 'st';

      case 2:
      case 22:
        return 'nd';

      case 3:
      case 23:
        return 'rd';

      default:
        return 'th';
    }
  }

  setCurrentTime = () => {
    this.setState({ time: new Date() });
  }

  render = () => (
    <div className="moment">
      <div className="moment-day-content">
        <div className="moment-day-number">
          <div className="moment-day-number-digit">
            {this.state.dayNumber}
          </div>
          <div className="moment-day-number-subscript">
            {this.getSubscript()}
          </div>
        </div>

        <div className="moment-month">
          {`${this.getMonth()} ${this.state.yearNumber}`}
        </div>
      </div>

      <div className="moment-time-content">
        {this.state.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: this.props.clock12 })}
      </div>
    </div>
  )
}

Moment.propTypes = {
  time: PropTypes.instanceOf(Date),
  clock12: PropTypes.bool,
};

Moment.defaultProps = {
  time: new Date(),
  clock12: true,
};

export default Moment;
