import React from 'react'
import axios from 'axios'



export default function Form(props) {
const {formData, change, users, setUsers} = props

  const submit = (event) => {
    event.preventDefault()
    axios.post('https://regres.in/api/users', formData)
    .then(res => {
      setUsers([...users, res.formData ])
    })
    .catch(err => console.error(err))
} 

  return (
    <div>
      <form >
        <label> First Name: 
            <input
            type='text' 
            name='fname'
            value={formData.fname}
            onChange={change}
            placeholder='Justin'
            />
        </label>
        <label> Last Name: 
            <input
            type='text' 
            name='lname'
            value={formData.lname}
            onChange={change}
            placeholder='Turner'
            />
        </label>
        <label> Email: 
            <input
            type='email' 
            name='email'
            value={formData.email}
            onChange={change}
            placeholder='goDodgers@email.com'
            />
        </label>
        <label> Password: 
            <input
            type='text' 
            name='password'
            value={formData.password}
            onChange={change}
            placeholder='bleedingblue456'
            />
        </label>
        <label className='termsOf'> Terms of Service: 
            <input
            type='checkbox' 
            name='terms'
            value={formData.termsOfService}
            onChange={change}
            />
        </label>
        <input onSubmit={submit} className='submitter' name='submit' type='submit' />
      </form>
    </div>
  )
}
