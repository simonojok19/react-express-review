import React from "react";
import { connect } from "react-redux";

export const TaskList = ({ tasks, name }) => (
  <div>
    <h3>{name}</h3>
    <div>
      {tasks && tasks.map((task) => <div key={task.name}>{task.name}</div>)}
    </div>
  </div>
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
