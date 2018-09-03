import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import allTasksQuery from 'queries/GetTasks';
import Utils from 'utils/Utils';
import TaskCard, { getRandomImage } from 'components/TaskCard/TaskCard';

import './TaskCardContainer.scss';

class TaskCardContainer extends Component {
  getTasks = () => {
    const { loading, tasks } = this.props.data;

    if (loading) {
      return (<div>Loading...</div>);
    } else if (!loading && tasks) {
      return tasks.map((task) => {
        const date = new Date(task.deadline);

        return (<TaskCard
          key={task.id}
          time={date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          day={Utils.days[date.getDay()]}
          title={task.title}
          image={task.image ? task.image : getRandomImage()}
          difficulty="#2ECC40"
        />);
      });
    }

    return [];
  }

  render = () => (
    <div className="task-card-container">
      {this.getTasks()}
    </div>
  )
}

TaskCardContainer.propTypes = {
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TaskCardContainer.defaultProps = {
  data: {},
};

export default graphql(allTasksQuery)(TaskCardContainer);
