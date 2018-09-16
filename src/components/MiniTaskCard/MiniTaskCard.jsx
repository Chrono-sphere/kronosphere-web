import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDotCircle } from '@fortawesome/fontawesome-free-regular';
import Utils from 'utils/Utils';
import './MiniTaskCard.scss';

class MiniTaskCard extends Component {
  state = {
    isExpanded: false,
  };

  render = () => (
    <div
      className="collapsed-task-card"
      role="button"
      onKeyDown={this.props.onClick}
      onClick={this.props.onClick.bind(this, this.props.id)}
      style={{ backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) -30%, rgba(0, 0, 0, 1)), url(${this.props.image})` }}
    >
      <div className="collapsed-task-card-header">
        <div className="collapsed-task-card-time">
          <div className="collapsed-task-card-time-icon">
            <FontAwesomeIcon icon={faClock} size="lg" />
          </div>
          <div className="collapsed-task-card-time-value">
            <div className="collapsed-task-card-time-value-time">
              {this.props.time}
            </div>
            <div className="collapsed-task-card-time-value-day">
              {this.props.day}
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

MiniTaskCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  difficulty: PropTypes.string,
  time: PropTypes.string,
  day: PropTypes.string,
  onClick: PropTypes.func,
};

MiniTaskCard.defaultProps = {
  id: Utils.emptyId,
  title: '',
  image: '',
  difficulty: '',
  time: '',
  day: '',
  onClick: () => {},
};

export const getRandomImage = () => 'http://wolfcreekcompany.com/wp-content/uploads/2016/11/office-work.jpg';

export default MiniTaskCard;
