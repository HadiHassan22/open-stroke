import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { Box, Paper } from "@material-ui/core";

const validationSchema = yup.object({
});

const WithMaterialUI = (props) => {
  const formik = useFormik({
    initialValues: {
      gender: "0",
      age: "",
      hypertension: "0",
      heart_disease: "0",
      work_type: "2",
      avg_glucose_level: 180,
      bmi: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.handleSubmit(values);
    },
  });

  return (
    <Paper style={{marginBottom: 25}}>
      <div style={{ paddingRight: 50, paddingLeft: 50, paddingTop: 25, paddingBottom: 25  }}>
        <form onSubmit={formik.handleSubmit}>
    
          <FormControl component="fieldset">
            <Box my={1} />
            <FormLabel focused={true} component="legend">
              What is your gender?
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Female" />
              <FormControlLabel value="0" control={<Radio />} label="Male" />
              <FormControlLabel value="-1" control={<Radio />} label="Other" />
            </RadioGroup>
            <Box my={1} />

            <TextField
              fullWidth
              id="age"
              name="age"
              label="How old are you?"
              value={formik.values.age}
              onChange={formik.handleChange}
              my={2}
            />

            <Box my={3} />
            <FormLabel focused={true} component="legend">
              Do you have a history or background of hypertension?
            </FormLabel>
            <RadioGroup
              aria-label="hypertension"
              name="hypertension"
              value={formik.values.hypertension}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="0" control={<Radio />} label="No" />
            </RadioGroup>
            <Box my={3} />

            <FormLabel focused={true} component="legend">
              Do you have a history or background of heart disease?
            </FormLabel>
            <RadioGroup
              aria-label="heart_disease"
              name="heart_disease"
              value={formik.values.heart_disease}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="0" control={<Radio />} label="No" />
            </RadioGroup>

            <Box my={3} />
            <FormLabel focused={true} component="legend">
              What is your type of employment?
            </FormLabel>
            <RadioGroup
              aria-label="work_type"
              name="work_type"
              value={formik.values.work_type}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Government Job"
              />
              <FormControlLabel value="1" control={<Radio />} label="Private" />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="Self-employed"
              />
              <FormControlLabel
                value="-1"
                control={<Radio />}
                label="Children"
              />
              <FormControlLabel
                value="-2"
                control={<Radio />}
                label="Never worked"
              />
            </RadioGroup>

            <Box my={3} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <TextField
                fullWidth
                id="bmi"
                name="bmi"
                my={2}
                label="What is your body mass index?"
                value={formik.values.bmi}
                onChange={formik.handleChange}
              />
              <a
                target="_blank"
                href="https://www.calculator.net/bmi-calculator.html"
              >
                ?
              </a>
            </div>

            <Box my={3} />

            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    </Paper>
  );
};

export default WithMaterialUI;
