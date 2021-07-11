import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
const Navbar=()=>{
  const location = useLocation();
return <>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand logo-font" to="/"><span className="logo-color">tatli.dev</span></Link>
    
    <div className="d-flex">
    
    <Link class={`navbar-brand ${location.pathname==="/"&&"active"}`} to="/">Main Page</Link>
    <Link class={`navbar-brand ${location.pathname==="/about"&&"active"}`} to="/about">About</Link>
    <Link class={`navbar-brand ${location.pathname==="/projects"&&"active"}`} to="/projects">Projects</Link>
    <Link class={`navbar-brand ${location.pathname==="/contact"&&"active"}`} to="/contact">Contact</Link>
    </div>

  </div>
</nav>
</>
}
export default Navbar