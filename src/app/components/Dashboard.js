import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

export const Dashboard = ({ groups }) => (
  <div>
    <h1>Dashboard</h1>
    {groups &&
      groups.map((group) => (
        <ConnectedTaskList key={group.name} id={group.id} name={group.name} />
      ))}
  </div>
);

const mapStateToProps = (state) => {
  return { groups: state.groups };
};

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
