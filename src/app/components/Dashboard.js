import React from "react";
import { connect } from "react-redux";

export const Dashboard = ({ groups }) => (
  <div>
    <h1>Dashboard</h1>
    {groups && groups.map((group) => <div key={group.name}>{group.name}</div>)}
  </div>
);

const mapStateToProps = (state) => {
  return { groups: state.groups };
};

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
