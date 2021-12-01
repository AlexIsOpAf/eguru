import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "common/components/Grid/GridItem.js";
import GridContainer from "common/components/Grid/GridContainer.js";
import CustomInput from "common/components/CustomInput/CustomInput.js";
import Button from "common/components/CustomButtons/Button.js";
import Card from "common/components/Card/Card.js";
import CardHeader from "common/components/Card/CardHeader.js";
import CardAvatar from "common/components/Card/CardAvatar.js";
import CardBody from "common/components/Card/CardBody.js";
import CardFooter from "common/components/Card/CardFooter.js";
import VerticalLinearStepper from 'common/components/StepperVert/VertStepper'
import YoutubeEmbed from 'common/components/YoutubePlayer/YoutubePlayer'
import CheckboxListSecondary from 'common/components/List/List'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";



import axios from "IAxios";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Questions() {
  const classes = useStyles();

  const [array, setContent] = useState([]);
  const [linkedList, setContent2] = useState([]);
  const [recursion, setContent3] = useState([]);

  useEffect(() => {
    axios.Information.getAllQuestions(0).then((res) => {
      setContent(res.data)
    })
    axios.Information.getAllQuestions(1).then((res) => {
      setContent2(res.data)
    })
    axios.Information.getAllQuestions(2).then((res) => {
      setContent3(res.data)
    })
  }, []);


  const onChange = (newValue) => {
    console.log("change", newValue);
  }

  const QuestionCategory = (limit) => {
    let value = "";
    let container = [];
    switch (limit.limit) {
      case 0:
        value = "Arrays";
        container = array;
        break;
      case 1:
        value = "Linked List"
        container = linkedList;
        break;
      case 2:
        value = "Recursion"
        container = recursion;
        break;
      default:
        break;
    }

    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>{value}</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CheckboxListSecondary data={container} />
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    )

  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={4} sm={4} md={4}>
          <QuestionCategory limit={0} />
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
          <QuestionCategory limit={1} />
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
          <QuestionCategory limit={2} />
        </GridItem>

        <GridItem xs={6} sm={6} md={6}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <AceEditor
                    placeholder="Placeholder Text"
                    mode="javascript"
                    theme="monokai"
                    name="blah2"
                    onChange={onChange}
                    fontSize={16}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={`function twoNumberSum(array, targetSum) {
// Write your code here.
}`}
                    setOptions={{
                      enableBasicAutocompletion: false,
                      enableLiveAutocompletion: false,
                      enableSnippets: false,
                      showLineNumbers: true,
                      tabSize: 2,
                    }} />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}
