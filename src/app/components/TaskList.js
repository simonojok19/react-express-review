import React from "react";
import { connect } from "react-redux";

export const TaskList = ({ tasks }) => (
  <div>{tasks && tasks.map((task) => <div>{task.name}</div>)}</div>
);

const mapStateToProps = (state, props) => {
  let groupID = props.id;
  return {
    name: props.name,
    id: groupID,
    tasks: state.tasks.filter((task) => task.group === groupID),
  };
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);
