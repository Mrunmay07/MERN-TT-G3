import { useRef } from "react"

function SignUp(){

    const email = useRef(null)
    const password = useRef(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email.current.value , password.current.value)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="text" ref={email} id="email"/>
            <br />
            <label>Password</label>
            <input type="text" ref={password} id="password"/>
            <br />
            <button>SignUp</button>
        </form>
    )
}

export default SignUp