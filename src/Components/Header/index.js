import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./index.css"


const Header = () => (
    <div className="main-div">
     <div className="container">
        <div>
            <img class="imgEl" src="https://res.cloudinary.com/ds79zalba/image/upload/v1725434929/Logo_2_ley4ni.png" alt="header logo" /> 
        </div>
        <div className="link-container">
            <p>Home</p>
            <p>Cart</p>
            <div>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <p>Logout</p>
            </div>
        </div>
     </div>
    </div>
)

export default Header