import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "common/components/Grid/GridItem.js";
import GridContainer from "common/components/Grid/GridContainer.js";
import Table from "common/components/Table/Table.js";
import Tasks from "common/components/Tasks/Tasks.js";
import CustomTabs from "common/components/CustomTabs/CustomTabs.js";
import Danger from "common/components/Typography/Danger.js";
import Card from "common/components/Card/Card.js";
import CardHeader from "common/components/Card/CardHeader.js";
import CardIcon from "common/components/Card/CardIcon.js";
import CardBody from "common/components/Card/CardBody.js";
import CardFooter from "common/components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import axios from "IAxios";

const useStyles = makeStyles(styles);

const base = {
  "id": 0,
  "problem_breakdown": {
      "solved": 0,
      "easy": 0,
      "medium": 0,
      "hard": 0
  },

  "recent_submission": {
      "problem_name": "",
      "language": "",
      "status": 0
  },

  "acceptance_rate": 0.0
}

const test = {}

export default function Dashboard() {

  const [data, setInfo] = useState(base);

  useEffect(() => {
    axios.Information.getInfo().then((res) => {
      setInfo(res.data[0]);
    })
  }, []);


  
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Problems Solved</p>
              <h3 className={classes.cardTitle}>{data.problem_breakdown.solved}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Acceptance Rate</p>
              <h3 className={classes.cardTitle}>{data.acceptance_rate}%</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Monthly Score</p>
              <h3 className={classes.cardTitle}>{data.score}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Recent Submissions</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Name of Problem", "Recent Attempt", "Language Selected", "Submission Status"]}
                tableData={[
                  ["Dakota Rice", "xxx Days", "C++", "Accepted"],
                  ["Minerva Hooper", "xxx Days", "Go", "Runtime Error"],
                  ["Sage Rodriguez", "xxx Days", "Python", "Wrong Answer"],
                  ["Philip Chaney", "xxx Days", "C++", "Time Limit Exceeded"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
