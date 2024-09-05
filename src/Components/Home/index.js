import Header from "../Header"
import Footer from "../Footer"
import "./index.css"

const Home = () => (
    <div>
       <Header />
       <div className="Home-con">
        <div>
            <h1>Categories</h1>
        </div>
        <div>
            <h1>Fruits & Vegetables</h1>
        </div>
       </div>
       <Footer />
    </div>
)

export default Home