import React, { Component } from 'react';
import Moment from 'components/Moment/Moment';
import TaskCardContainer from 'components/TaskCardContainer/TaskCardContainer';

import './Dashboard.scss';
import ExpandedTaskCardContainer from '../ExpandedTaskCardContainer/ExpandedTaskCardContainer';

class Dashboard extends Component {
  state = {
    showExpandedTaskContainer: false,
  };

  prepareTaskCardDetails = (taskDetails) => {
    this.setState({ showExpandedTaskContainer: true });
  }

  renderExpandedTaskCardContainer = () => {
    if (this.state.showExpandedTaskContainer) {
      return (
        <ExpandedTaskCardContainer />
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
};

export default Dashboard;
