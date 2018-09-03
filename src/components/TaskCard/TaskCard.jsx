import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faShareSquare, faCalendarCheck, faDotCircle } from '@fortawesome/fontawesome-free-regular';
import './TaskCard.scss';

class TaskCard extends Component {
  state = {
    isExpanded: false,
  };

  renderCard = () => (
    <div className="task-card">
      <div className="task-card-thumbnail">
        <img className="left" alt="" src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"/>
      </div>
      <div className="task-card-right">
        <h1>Buy Groceries</h1>
        <div className="task-card-separator" />
        <p>
          Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...
        </p>
      </div>
      <h5>12</h5>
      <h6>JANUARY</h6>
      <ul>
        <li><FontAwesomeIcon icon={faEye} size="2x" /></li>
        <li><FontAwesomeIcon icon={faClock} size="2x" /></li>
        <li><FontAwesomeIcon icon={faShareSquare} size="2x" /></li>
        <li><FontAwesomeIcon icon={faCalendarCheck} size="2x" /></li>
      </ul>
    </div>
  )

  render = () => (
    <div
      className="collapsed-task-card"
      style={{ backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) -30%, rgba(0, 0, 0, 1)), url(${this.props.image})` }}
    >
      <div className="collapsed-task-card-header">
        <div className="collapsed-task-card-time">
          <div className="collapsed-task-card-time-icon">
            <FontAwesomeIcon icon={faClock} size="lg" />
          </div>
          <div className="collapsed-task-card-time-value">
            <div className="collapsed-task-card-time-value-time">
              5:00PM
            </div>
            <div className="collapsed-task-card-time-value-day">
              Thursday
            </div>
          </div>
        </div>
        <div className="collapsed-task-card-title">{this.props.title}</div>
      </div>

      <div className="collapsed-task-card-footer">
        <div className="collapsed-task-card-footer-difficulty pulsate">
          <FontAwesomeIcon icon={faDotCircle} size="lg" pulse color={this.props.difficulty} />
        </div>
      </div>
    </div>
  )
}

TaskCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  difficulty: PropTypes.string,
};

TaskCard.defaultProps = {
  title: '',
  image: '',
  difficulty: '',
};

export default TaskCard;
