import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>         
          <Link to="/" className="brand">
            <h1 className="text-purple font-black font-satoshi text-2xl tablet:text-4xl">My Best Recipes</h1>
          </Link>
          <Searchbar />
          <Link to="/create">Create</Link>
        </nav>
    </div>
  )
}
