import { useState } from "react"

function SignUp(){

 /*  const [firstName , setFirstName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('') */

  const [user , setUser] = useState({
    firstName:'',
    email:'',
    password : '',
    age:''
  })

  const handleChange = (e) => {
    const {name , value} = e.target
    setUser((prev) => ({...prev , [name]:value}))


  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const formData = {
      firstName : user.firstName,
      email :user.email,
      password : user.password,
      age : user.age
    }

    console.log(formData)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="">FirstName</label>
      <input type="text" value={user.firstName} onChange={handleChange} name="firstName"/>

      <br />

      <label htmlFor="">Email</label>
      <input type="text" value={user.email} onChange={handleChange} name="email"/>

      <br />

      <label htmlFor="">Password</label>
      <input type="text" value={user.password} onChange={handleChange} name="password"/>
      <br />

      <label htmlFor="">Age</label>
      <input type="text" value={user.age} onChange={handleChange} name="age" />
      
      <button>SignUp</button>
    </form>
  )
}

export default SignUp