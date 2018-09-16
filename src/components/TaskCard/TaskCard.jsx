import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faShareSquare, faCalendarCheck } from '@fortawesome/fontawesome-free-regular';
import PropTypes from 'prop-types';

import './TaskCard.scss';

class TaskCard extends Component {
  state = {
    isEditMode: false,
  };

  render = () => (
    <div className="task-card">
      <div className="task-card-thumbnail">
        <img className="left" alt="" src={this.props.image} />
      </div>
      <div className="task-card-right">
        <h1>{this.props.title}</h1>
        <div className="task-card-separator" />
        <p>
          Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...
        </p>
      </div>
      <h5>{this.props.day}</h5>
      <h6>{this.props.month}</h6>
      <ul>
        <li><FontAwesomeIcon icon={faEye} size="2x" /></li>
        <li><FontAwesomeIcon icon={faClock} size="2x" /></li>
        <li><FontAwesomeIcon icon={faShareSquare} size="2x" /></li>
        <li><FontAwesomeIcon icon={faCalendarCheck} size="2x" /></li>
      </ul>
    </div>
  )
}

TaskCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  day: PropTypes.number,
  month: PropTypes.string,
};

TaskCard.defaultProps = {
  title: '',
  image: '',
  day: null,
  month: '',
};

export default TaskCard;
