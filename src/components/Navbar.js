
import { Button, Container, Form} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from 'react-router-dom';
function Navbars() {

  return (
    <>

      <Navbar expand="lg" className="header">
      <Container fluid>
      <Navbar.Brand href="#"><img src='http://www.legend.com.kh/images/legend_logo.png' /></Navbar.Brand>
        <Navbar.Toggle className='icon' aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav className="me-auto">
              <Link to='/now_showing' className='hed'>Now Showing</Link>
              <Link to='/coming_soon' className='hed'>Coming Soon</Link>
              <Link to='/popular' className='hed'>Popular</Link>
              <Link to='/top_rate' className='hed'>Top Rate</Link>
              <Link to='/contact' className='hed'>Contact</Link>
            </Nav>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>

  )

}
export default Navbars;