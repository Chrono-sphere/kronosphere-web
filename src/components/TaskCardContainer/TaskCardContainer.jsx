import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import allTasksQuery from 'queries/GetTasks';
import Utils from 'utils/Utils';
import $ from 'jquery';
import MiniTaskCard, { getRandomImage } from 'components/MiniTaskCard/MiniTaskCard';
import TaskCard from 'components/TaskCard/TaskCard';

import './TaskCardContainer.scss';

class TaskCardContainer extends Component {
  state = {
    isTaskSelected: false,
  };
  taskIdToTask = {};

  // Medium: #FFDC00
  // Hard: #FF4136
  getTasks = () => {
    const { loading, tasks } = this.props.data;

    if (loading) {
      return (<div>Loading...</div>);
    } else if (!loading && tasks) {
      return tasks.map((task) => {
        const date = new Date(task.deadline);

        // Create a map for task data based on id
        this.taskIdToTask[task.id] = task;

        return (<MiniTaskCard
          key={task.id}
          id={task.id}
          time={date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          day={Utils.days[date.getDay()]}
          title={task.title}
          image={task.image ? task.image : getRandomImage()}
          difficulty="#2ECC40"
          onClick={this.miniTaskCardClicked}
        />);
      });
    }

    return [];
  }

  /**
   * 1) Translate the container to the left
   * 2) Open the TaskCard
   */
  miniTaskCardClicked = (taskId) => {
    this.setState({ isTaskSelected: true });

    // Translate the container to the left
    $('.task-card-container').addClass('task-card-container-translate');

    this.props.taskHandler(this.taskIdToTask[taskId]);
  }

  render = () => (
    <div className="task-card-container">
      {this.getTasks()}
    </div>
  )
}

TaskCardContainer.propTypes = {
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  taskHandler: PropTypes.func,
};

TaskCardContainer.defaultProps = {
  data: {},
  taskHandler: () => {},
};

export default graphql(allTasksQuery)(TaskCardContainer);
