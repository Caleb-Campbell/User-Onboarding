import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, {useState, useEffect} from 'react'
import * as yup from 'yup'
import axios from 'axios';




function App() {

  // STATE SLICES ARE DEFINED //
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    termsOfService: false,
  })
  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    termsOfService: '',
  })
  const [disabled, setDisabled] = useState(false)

  // CHANGE EVENT IS HANDLED //

  const handleChange = (event) => {
    const {name, value} = event.target
    validate(name, value)
    setFormData({...formData, [name]: value})
    }

    // FORM IS VALIDATED VIA YUP SCHEMA //
    const validate = (name, value) => {
      yup.reach(formSchema, name)
      .validate(value)
      .then(valid => setErrors({...errors, [name]: ''}))
      .catch(err => {
        setErrors({...errors, [name]: err.errors[0]})
      })
    }
  

  


  
  // YUP SCHEMA IS SHAPED //

  const formSchema = yup.object().shape({
    fname: yup
    .string()
    .required('Please enter your First Name'),
    lname: yup
    .string()
    .required('Please enter your Last Name'),
    email: yup
    .string()
    .email('Please enter a valid Email Address')
    .required('Email Address Required'),
    password: yup
    .string()
    .required('Please enter a password')
    .min(6, 'Password must exceed 5 Characters in length'),
    termsOfService: yup
      .boolean()
      .oneOf([true], 'You must accept Terms and Conditions to Continue')

    })

    



    // APP COMPONENT IS RETURNED WITH FORM //

  return (
    <div className="App">
      <div className='errors'><div>{errors.fname}</div><div>{errors.lname}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.termsOfService}</div></div>
      <Form setUsers={setUsers} users={users} formData={formData} change={handleChange} />
    </div>
  );
}

export default App;
