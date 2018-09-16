import React, { Component } from 'react';
import Moment from 'components/Moment/Moment';
import TaskCardContainer from 'components/TaskCardContainer/TaskCardContainer';

import './Dashboard.scss';
import ExpandedTaskCardContainer from '../ExpandedTaskCardContainer/ExpandedTaskCardContainer';

class Dashboard extends Component {
  state = {
    showExpandedTaskContainer: false,
  };
  taskDetails = {};

  prepareTaskCardDetails = (taskDetails) => {
    this.setState({ showExpandedTaskContainer: true });
    this.taskDetails = taskDetails;
  }

  renderExpandedTaskCardContainer = () => {
    if (this.state.showExpandedTaskContainer) {
      return (
        <ExpandedTaskCardContainer
          id={this.taskDetails.id}
          title={this.taskDetails.title}
          image={this.taskDetails.image}
          createTime={new Date(this.taskDetails.createTime)}
          deadline={new Date(this.taskDetails.deadline)}
          description={this.taskDetails.description}
        />
      );
    }

    return null;
  }

  render = () => (
    <div className="dashboard">
      {/* <Moment /> */}
      <TaskCardContainer taskHandler={this.prepareTaskCardDetails} />
      {this.renderExpandedTaskCardContainer()}
    </div>
  )
}

export default Dashboard;
