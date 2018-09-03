import React from 'react';
import Moment from 'components/Moment/Moment';
import TaskCard from 'components/TaskCard/TaskCard';
import TaskCardContainer from 'components/TaskCardContainer/TaskCardContainer';

const Dashboard = () => (
  <div>
    <Moment />
    <TaskCardContainer>
      <TaskCard
        title="Buy groceries"
        image="http://wolfcreekcompany.com/wp-content/uploads/2016/11/office-work.jpg"
        difficulty="#2ECC40"
      />
      <TaskCard
        title="Go on a hike"
        image="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=landscape-nature-sky-236047.jpg&fm=jpg"
        difficulty="#FF4136"
      />
      <TaskCard
        title="Meet friends for drinks at Buffalo Wild Wings"
        image="https://i.ytimg.com/vi/XRtkIcUX97w/maxresdefault.jpg"
        difficulty="#FFDC00"
      />
      {/*
      <TaskCard
        title="Meet friends for drinks at Buffalo Wild Wings"
        image="https://i.ytimg.com/vi/XRtkIcUX97w/maxresdefault.jpg"
      />
      <TaskCard
        title="Buy groceries"
        image="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"
      />
      <TaskCard
        title="Buy groceries"
        image="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"
      />
      <TaskCard
        title="Buy groceries"
        image="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"
      />
      <TaskCard
        title="Buy groceries"
        image="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg"
      /> */}
    </TaskCardContainer>
  </div>
);

export default Dashboard;
