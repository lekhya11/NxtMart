import {Component} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./index.css"

class Login extends Component {
    state = {
        username: "",
        password: "",
        isChecked: false
    }

    OnSubmitForm = async (event) => {
        event.preventDefault();
        const {username, password} = this.state
        const userDetails = {username, password}
        const url = "https://apis.ccbp.in/login"
        const objects = {
            method: "POST",
            data : JSON.stringify(userDetails)
        }
        const response = await fetch(url,objects)
        const data = await response.JSON()
        console.log(data)

    }

    OnClickCheckbox = () => {
      this.setState((prev) => ({isChecked: !prev.isChecked}))
    }

    OnClickUser = (event) =>{
      this.setState({username: event.target.value})
    }

    OnClickPassword = (event) =>{
        this.setState({password: event.target.value})
    }

    render () {
        const {username , password, isChecked} = this.state
        const type = isChecked ? "text" : "password"
        console.log(username)
    return (
    <div className="bg-image"> 
      <h1>login page</h1>
        <form className="formEl" onSubmit={this.OnSubmitForm}>
           <img src="https://res.cloudinary.com/ds79zalba/image/upload/v1725434929/Logo_2_ley4ni.png" alt="logo"/>
           <div>
           <label htmlFor="username">User Name</label><br/>
           <div className="inputdiv">
           <FontAwesomeIcon icon={faUser}  />
           <input value={username} id="username" type="text" onChange={this.OnClickUser} className="inputEl"/><br/>
           </div>
           <label htmlFor="password" >Password</label><br/>
           <div className="inputdiv">
           <FontAwesomeIcon icon={faLock}  />
           <input value={password} id="password" type={type} onChange={this.OnClickPassword} className="inputEl"/><br/>
           </div>
           <input type="checkbox" id="checkbox" onClick={this.OnClickCheckbox}/> 
           <label htmlFor="checkbox"> Show Password </label>
           <button  type="submit" className="buttonEl" > Login </button>
           </div>
       </form>
    </div>
   )
    }
}
export default Login