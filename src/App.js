import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Row } from 'react-bootstrap';
import Home from './Components/Home/Home';
// import EventsAll from './Components/EventsAll.js'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//import EventsAll from './Components/EventsAll'
import AddEvent from './Components/Addevent/Addevent';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">EventsApp</Link>
          </Navbar.Brand>
        </Navbar.Header>       
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/registrarse">Registrarse</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/iniciar-sesion">Iniciar sesión</Link>
            </NavItem>
          </Nav>
      </Navbar>

      <Route exact path="/" component={Home} />
      <Route path="/registrarse" component={Registrarse} />
      <Route path="/iniciar-sesion" component={IniciarSesion} />
      <Route path="/quienes-somos" component={QuienesSomos} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/ayuda" component={Ayuda} />
      <Route path="/temas" component={Temas} />
      <Route path="/blog" component={Blog} />

      <Navbar collapseOnSelect>       
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/quienes-somos">Quienes somos</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/contacto">Contacto</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="/ayuda">Ayuda</Link>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Link to="/temas">Temas</Link>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <Link to="/blog">Blog</Link>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  </Router>
);

const Registrarse = () => (
  <div>
    <h2>Registrarse</h2>
  </div>
);

const IniciarSesion = () => (
  <div>
    <h2>IniciarSesion</h2>
  </div>
);

const QuienesSomos = () => (
  <div>
    <h2>QuienesSomos</h2>
  </div>
);

const Contacto = () => (
  <div>
    <h2>Contacto</h2>
  </div>
);

const Ayuda = () => (
  <div>
    <h2>Ayuda</h2>
  </div>
);

const Temas = () => (
  <div>
    <h2>Temas</h2>
  </div>
);

const Blog = () => (
  <div>
    <h2>Blog</h2>
  </div>
);

/*class App extends Component {
  render() {
    return (
        <Grid fluid className="container-app">
<<<<<<< HEAD
          <Ho*me />
          <Addevent />
=======
          <Home />
          <AddEvent />
>>>>>>> añadiendo ventana administrador para añadir/borrar eventos
        </Grid>
    );
  }
}*/

export default App;

// <Navbar.Collapse>        
//           <Nav pullRight>
//             <NavItem eventKey={1} href="#">
//               <Link to="/about">Registrarse</Link>
//             </NavItem>
//             <NavItem eventKey={2} href="#">
//               <Link to="/topics">Iniciar sesión</Link>
//             </NavItem>
//           </Nav>
//         </Navbar.Collapse>