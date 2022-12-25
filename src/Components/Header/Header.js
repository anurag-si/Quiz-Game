import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
          QUIZ ME
      </Link>
      <hr className="divider"/>
    </div> 
  )
}

export default Header
