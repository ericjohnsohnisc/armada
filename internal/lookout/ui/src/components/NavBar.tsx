import React from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import { reverseMap } from "../utils";

import "./NavBar.css"

const locationValueMap = new Map<string, number>()
locationValueMap.set("/", 0)
locationValueMap.set("/jobs", 1)
const valueLocationMap = reverseMap(locationValueMap)

function NavBar(props: RouteComponentProps) {
  const currentPage = props.location.pathname;
  const currentValue = locationValueMap.has(currentPage) ? locationValueMap.get(currentPage) : 0
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <div className="title">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "./Armada-white-rectangle.png"}
            alt={""} />
          <Typography variant="h6" className="app-name">
            Lookout
          </Typography>
        </div>
        <div className="nav-items">
          <Tabs
            value={currentValue}
            onChange={(event, newValue) => {
              const newLocation = valueLocationMap.get(newValue) || "/"
              props.history.push(newLocation)
            }}>
            <Tab label="Overview" component={Link} to="/"/>
            <Tab label="Jobs" component={Link} to="/jobs"/>
          </Tabs>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(NavBar);
