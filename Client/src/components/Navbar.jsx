import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
      <div>
          <ul> 
              <li><Link to ='/home'>Contact</Link></li>
          </ul>
      </div>
    )
  }
  
  export default Navbar