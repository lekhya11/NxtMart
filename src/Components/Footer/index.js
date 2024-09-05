import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebookSquare, faPinterestSquare} from "@fortawesome/free-brands-svg-icons";

import "./index.css"

const  Footer = () => (
    <div className="main-con">
      <div className="para-con">
       <p>For any queries, contact +91-9876543210 </p>
       <p>  or mail us help@nxtmart.co.in</p>
       <div className="icons-con">
          <FontAwesomeIcon icon={faFacebookSquare } className="icon"/> 
          <FontAwesomeIcon icon={faPinterestSquare} className="icon"/>
          <FontAwesomeIcon icon={faTwitter} className="icon"/>
          <FontAwesomeIcon icon={faInstagram} className="icon"/>
       </div>
      </div>
       <div className="para-con1">
          <p>Copyright  2023 NxtMart Grocery Supplies Pvt Ltd</p>
       </div>
    </div>
)
export default Footer
