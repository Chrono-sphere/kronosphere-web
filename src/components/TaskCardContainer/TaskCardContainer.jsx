import React, { Component } from 'react';

import './TaskCardContainer.scss';

class TaskCardContainer extends Component {

  render = () => (
    <div className="task-card-container">
      {this.props.children}
    </div>
  )
}

export default TaskCardContainer;
