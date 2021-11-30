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

export default function UserProfile() {
  const classes = useStyles();

  const [youtubeEmbedID, setID] = useState(null)
  const [content, setContent] = useState([])


  useEffect(() => {
    axios.Information.getAllContent().then((res) => {
      setContent(res.data);
      setID(res.data[0].embedId)
    })
  }, []);


  const handleChange = (idx) => {
    setID(content[idx].embedId);
    console.log(youtubeEmbedID);
  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={3} sm={3} md={3}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Content</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                { content.length > 0 &&
                    <VerticalLinearStepper content={content} handleChange={handleChange}/>
                  }
                  
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={9} sm={9} md={9}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {  content.length > 0 &&
                    <YoutubeEmbed embedId={youtubeEmbedID} />
                  }
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
