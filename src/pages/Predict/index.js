import { useState } from "react";
import WithMaterialUI from "./survey";
import Result from "./result";

const { Paper } = require("@material-ui/core");
const { default: Page } = require("material-ui-shell/lib/containers/Page");
const { Formik, Form, Field } = require("formik");
const axios  = require("axios");

const Predict = () => {
  const handleSubmit = (values) => {
    axios
    .post("http://localhost:5000/api", {
      input_values: Object.values(values).map((value) => parseInt(value)),
    })
    .then((response) => setStroke(response.data.data));
    setSurveyFinished(true);
  };

    const [surveyFinished, setSurveyFinished] = useState(false)
    const [stroke, setStroke] = useState(1)


     
   return (<Page>
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h4
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 36,
            }}
          >
            Stroke Prediction
          </h4>
         {surveyFinished? null : (<h3
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Answer the following questions and find out if you are at risk of stroke.
          </h3>)}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {surveyFinished?  (<Result stroke={stroke} />) :(<WithMaterialUI handleSubmit={handleSubmit} />)}
        </div>
      </div>
    </Page>); 
  
};

export default Predict;
