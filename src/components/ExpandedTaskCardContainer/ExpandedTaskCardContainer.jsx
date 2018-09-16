import React, { Component } from 'react';
import TaskCard from 'components/TaskCard/TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/fontawesome-free-regular';
import PropTypes from 'prop-types';
import Utils from 'utils/Utils';

import './ExpandedTaskCardContainer.scss';


class ExpandedTaskCardContainer extends Component {
  render = () => (
    <div className="expanded-task-card-container">
      <div className="expanded-task-card-container-close">
        <FontAwesomeIcon icon={faWindowClose} size="lg" />
      </div>
      <TaskCard
        title={this.props.title}
        image={this.props.image}
        description={this.props.description}
        day={this.props.deadline.getDate()}
        month={Utils.months[this.props.deadline.getMonth()]}
      />
    </div>
  )
}

ExpandedTaskCardContainer.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  createTime: PropTypes.instanceOf(Date),
  deadline: PropTypes.instanceOf(Date),
};

ExpandedTaskCardContainer.defaultProps = {
  title: '',
  image: '',
  description: '',
  createTime: null,
  deadline: null,
};

export default ExpandedTaskCardContainer;
