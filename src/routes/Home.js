import React from 'react';

const Home = props => {
  return (
    <div>
      <div>
        <b>title:</b> {props.data.title}
      </div>
      <div>
        <b>description:</b> {props.data.description}
      </div>
      <div>
        <b>keywords:</b> {props.data.keywords}
      </div>
      <div>
        <b>geo.position:</b> {props.data.latitude}; {props.data.longitude}
      </div>
      <div>
        <b>placename:</b> {props.data.placename}
      </div>
      <div>
        <b>region:</b> {props.data.region}
      </div>
    </div>
  );
};

export default Home;
