import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  useFormik,
  useFormikContext,
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as yup from "yup";
import { Theme } from "./Main";
import Button from "@mui/material/Button";
const validationSchema = yup.object({
  field1: yup.string().required("Field1 is required"),
  field2: yup.string().required("Field2 is required"),
});

const Component1 = ({ changePage, values }) => {
  const data = useContext(Theme);
  let input1  = " ";
  let input2 = " ";
  if (data.form1 != undefined) {
    input1 = data.form1.field1;
    input2 = data.form1.field2;
  }
  
  
console.log("textfield values",input1,input2)
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ field1: input1, field2: input2}}
      onSubmit={async (formData) => {
        console.log("Component1 values", formData);
        data.setForm1(formData);
        console.log("parent  values", values);
        changePage();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            height: "100vh",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              size="small"
              ariant="outlined"
              //   label={label}
              id={"field1"}
              name="field1"
              type="field1"
              value={values.field1}
              // inputProps={{style: {textTransform: 'lowercase'}}}
              onChange={handleChange}
              onBlur={handleBlur}

              //   sx={styles}
            />
            <ErrorMessage
              className="textField"
              style={{ color: "red" }}
              component="div"
              name={"field1"}
            />
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              //   label={label}
              id={"field2"}
              name="field2"
              type="field2"
              value={values.field2}
              // inputProps={{style: {textTransform: 'lowercase'}}}
              onChange={handleChange}
              onBlur={handleBlur}
              //   value="field2"
              //   sx={}
            />
            <ErrorMessage
              className="textField"
              style={{ color: "red" }}
              component="div"
              name={"field2"}
            />
            <Button
              type="submit"
              sx={{ backgroundColor: "blue", color: "white" }}
              variant="text"
            >
              component2
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};
export default Component1;
