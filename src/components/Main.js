import React, { useState ,createContext, useEffect} from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
export const Theme = createContext()
export const Theme1 = createContext()
export const Theme2 = createContext()
export const Main = ()=> {
  const [page, setPage] = useState("component1");
const[form1,setForm1] = useState(" ")
const[form2,setForm2] = useState(" ")
const[form3,setForm3] = useState(" ")
const [button,setButtonState] = useState("disabled")
useEffect(()=>{

},[page])
  return (
    
  <div>
      <span style={{ display: "flex", flexDirection: "row" }}>
        <span>
          <button
          style={{backgroundColor:form1 != " "?"blue":" ",pointerEvents:form1 === " "?"none":" "}}
            onClick={() => {
              setPage("component1");
            }}
          >
            Component1
          </button>
        </span>
        <span>
          <button
          style={{backgroundColor:form2!= " "?"blue":" ",pointerEvents:form2 === " "?"none":" "}}
            onClick={() => {
              setPage("component2");
            }}
          >
            Component2
          </button>
        </span>
        <span>
          <button
          style={{backgroundColor:form3 != " "?"blue":" ",pointerEvents:form3 === " "?"none":" "}}
            onClick={() => {
              setPage("component3");
            }}
          >
            Component3
          </button>
        </span>
      </span>
      
      {page === "component1" ? (
        <Theme.Provider value ={{form1,setForm1}}>
        <Component1
        
        values = {form1}
          changePage={() => {
            setPage("component2");
          }}

        />
        </Theme.Provider>
      ) : page === "component2" ? (
        <Theme1.Provider value ={{form2,setForm2}}>
        <Component2
        values = {form2}
          changePage={() => {
            setPage("component3");
          }}
        />
        </Theme1.Provider>
      ) : (
        <Theme2.Provider value ={{form3,setForm3}}>
        <Component3
        values = {form3}
          changePage={() => {
            setPage("component1");
          }}
        />
        </Theme2.Provider>
      )}
      Welcome
    </div>
    
  );
}
