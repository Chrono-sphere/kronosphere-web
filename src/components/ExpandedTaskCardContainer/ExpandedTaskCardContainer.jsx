import React, { Component } from 'react';
import TaskCard from 'components/TaskCard/TaskCard';

import './ExpandedTaskCardContainer.scss';


class ExpandedTaskCardContainer extends Component {
    render = () => (
        <div className="expanded-task-card-container">
          <TaskCard />
        </div>
    )
}

export default ExpandedTaskCardContainer;
