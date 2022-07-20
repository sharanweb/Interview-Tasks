import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formData));
    setSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post("http://localhost:8080/Data", formData);
    }
  }, [formErrors]);

  function validate(values) {
    const errors = {};
    console.log(values, "values");

    if (!values.username) {
      errors.username = "username required";
    }

    if (!values.email) {
      errors.email = "email required";
    }

    if (!values.password) {
      errors.password = "password required";
    } else if (values.password.length < 4) {
      errors.password = "pass 4";
    } else if (values.password.length > 10) {
      errors.password = "pass 10";
    }

    return errors;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1> Form </h1>
      <div>
        <label>Username</label>
        <input
          type='text'
          placeholder='Enter your name'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <h3>{formErrors.username} </h3>

      <div>
        <label>Email</label>
        <input
          type='email'
          placeholder='Enter your email'
          value={formData.email}
          name='email'
          onChange={handleChange}
        />
      </div>
      <h3>{formErrors.email} </h3>

      <div>
        <label>Password</label>
        <input
          type='password'
          placeholder='Enter your password'
          value={formData.password}
          name='password'
          onChange={handleChange}
        />
        <h3>{formErrors.password} </h3>
      </div>

      <button type='submit'> Submit</button>
    </form>
  );
};

export default Form;

// import React from "react";
// import axios from "axios"
// import { useEffect } from "react";

// const Form = () => {
// const initialValue = {username: "", email:"", password: ""}

// const [formData, setFormData] = React.useState(initialValue)
// const [formError, setFormError] = React.useState({})
// const [isSubmit, setSubmit] = React.useState(false)

// function handleChange(e){
//  const {name, value} = e.target

//  setFormData({...formData, [name]: value})

// }

// function handleSubmit(e){
//   e.preventDefault()

//   setFormError(validate(formData))

//   setSubmit(true)

// }

// useEffect(()=>{

//   console.log(formError)
// if(Object.keys(formError).length === 0 && isSubmit==true){

// alert("Form Submitted successfully")
//   axios.post("http://localhost:8080/Data", formData)
// }

// },[formError])

// function validate(values){
// const errors= {}

// const regex= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test
// if(!values.username){
//   errors.username= "username requred"
// }

// if(!values.email){
//   errors.email= "email requred"
// }
// else if(!regex.test(values.email)){
//   errors.email= "email not valid"
// }

// if(!values.password){
//   errors.password= "password requred"
// }
// else if(values.password.length< 4){
//   errors.password= "pass 4"
// }
// else if(values.password.length > 4){
//   errors.password= "pass 10"
// }

// return errors

// }

//   return (
//     <form onSubmit={handleSubmit} >
//       <pre> {JSON.stringify(formData, undefined, 2) }</pre>
//       <div>
//         <label> UserName</label>
//         <input type='text' name='username' placeholder='Enter Name' value={formData.username} onChange={handleChange}/>
//       </div>
//       <h2>{formError.username} </h2>

//       <div>
//         <label> Email </label>
//         <input type='email' name='email' placeholder='Enter Name' value={formData.email} onChange={handleChange}/>
//       </div>
//       <h2>{formError.email} </h2>

//       <div>
//         <label> Password</label>
//         <input type='password' name='password' placeholder='Enter Name' value={formData.password} onChange={handleChange}/>
//       </div>

//       <h2>{formError.password} </h2>

//       <button> Submit </button>
//     </form>
//   );
// };

// export default Form;
