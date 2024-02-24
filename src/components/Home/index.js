import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'
import './index.css'
const Home = () => {
    return(
        <div className="mainContainer">
            <Navbar collapseOnSelect expand="lg" className="navBack">
      <Container>
        <Navbar.Brand href="#home"><img src="https://hiwaycabs.com/wp-content/uploads/2022/07/HiWay-Logo-White-300x89.png" alt="brand" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggler'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className='item'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='item'>About Us</Nav.Link>
            <NavDropdown title="Services" className="item" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Local Travel</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Airport Transfer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Outstation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Corporate Car Rental
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Long Term Car Lease</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Taxis for Wedding,Events & Exhibitions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Tours/Packages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Luxury Cabs in Chandigarh</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Cab Rental Gurugoan-Hiway Cabs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="New Arrivals" className='item' id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#"> Unleash Opulence with Mercedes GLS on rent with HiWay Cabs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
              Kia Carnival On Rent in Chandigarh, Delhi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Toyota Vellfire on rent in Chandigarh with HiWay Cabs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                All- New Mercedes Benz-E-Class 2023 on Rent in Chandigarh
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Urbania on Rent in Chandigarh</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Toyota Innova Hycross on Rent in Delhi</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tours" className='item' id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Char Dham Yatra from Chandigarh</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Delhi to Char Dham Yatra
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Haridwar to Char Dham Yatra</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Delhi to Rajasthan Tour
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#test" className='item'>Testimonials</Nav.Link>
            <Nav.Link href="#blogs" className='item'>Blogs</Nav.Link>
            <Nav.Link href="#contact" className='item'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="banner">
      <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1708737999/hiway_zsui9z.png" className='bannerImg' alt="banner"/>
    </div>
    <div className='quote'>
      <h1 className='headLine'>Best Taxi Service in Chandigarh, Now Operational in Delhi & <br />Gurgaon!</h1>
      <hr />
      <p className='quoteContent'>
      The Best Taxi Service in Chandigarh, Delhi, Mohali, Panchkula, Gurgaon & Noida- HiWay Cabs, is adept in providing it’s clients a travel experience par excellence whilst basking in utmost luxury.
Enjoy local-city travel, outstation travel, airport transfers, railway station transfers or book tour packages in the most economical prices.<br /><br/>

We have a hands-on experience with luxury hotels & have catered to large scale events with  top event companies in Delhi as well as Chandigarh. 

Call- 8872711111 to book an efficient and comprehensive taxi service for a hassle-free travel experience.
      </p>
      <button type="button" className='bookBtn'>Book Now</button>
    </div>
    <div className='aboutSection'>
      <h1 className="headLine">ABOUT US</h1>
      <hr />
      <h1 className='headLine'>Who we are & why choose us ?</h1>
      <p className="aboutContent">HiWay Cabs provides a one-stop solution for all your travel needs. Aimed at simplifying long-distance traveling, we are committed to providing a safe, secure, luxurious, and economic service to our customers. Confident of our quality standards, and imparting the best taxi service in Chandigarh, for over 6 years, we wish to reform the way you travel.</p>
      <button className='knowBtn' type="button">Know More</button>
    </div>
    <div className='services'>
      <h1 className='headLine'>Taxi & Cab Services in Chandigarh</h1>
      <div className='AllServices'>
        <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/01-1.png" alt="Local Travel" className='serviceImg'/>
          <p className='serviceName'>Local Travel</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/02-1-300x102.png" alt="oustation travel" className='serviceImg'/>
          <p className='serviceName'>Outstation Travel</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/03-1.png" alt="airport transfers" className='serviceImg'/>
          <p className='serviceName'>Airport Transfers</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/04-1.png" alt="corporate car rental" className='serviceImg'/>
          <p className='serviceName'>Corporate car Rental</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/05-1.png" alt="long term car lease" className='serviceImg'/>
          <p className='serviceName'>Long-Term Car Lease</p>
          </div>
          <div className='service'>
          <img src="https://hiwaycabs.com/wp-content/uploads/2022/08/06-1.png" alt="cabs for weddings & events" className='serviceImg'/>
          <p className='serviceName'>Cabs For Weddings & Events </p>
          </div>
          {/* <button type='button' className='bookBtn'>Book Now</button> */}
      </div>
    </div>
    <div className='reviewSection'>
    <h1 className='headLine reviewHeadLine'>Reviews from our Travellers</h1>
    <br/>
    <div className='reviews'>
      <img src="https://hiwaycabs.com/wp-content/uploads/2022/07/606-6060823_trip-advisor-graphic-design-hd-png-download-300x231.png" alt="tripadvisor" className='advisorImage' />
      <div className='customerReviews'></div>
      <div className='googleRatingSection'>
        <img src="https://hiwaycabs.com/wp-content/uploads/2022/07/google-5-stars-reviews-png-11.webp" className='googleRating' alt="google" />
      </div>
      <button className='viewBtn' type="button">View More</button>
      </div>
    </div>
    <div className='typesOfCabs'></div>
    <div className='about'>
      <h1 className='aboutHeadLine'>Book the Best Taxi Service in Chandigarh with HiWay Cabs for a seamless travel experience, every single time.</h1>
      <p className='AboutContent'>Chandigarh, also known as City beautiful, is a union territory in India. It is a beautiful destination which is often a stop on the way for avid travelers moving towards Himachal Pradesh or to explore the culturally rich state of Punjab.

Despite the fact that Chandigarh is well-connected by airways and trains, the best way to travel to, in or from Chandigarh is by the means of a taxi. This allows people to explore the scenic beauty of the city while availing the benefit of its structurally planned road infrastructure which is  a sight to see in itself.

With the advancement in technology and grand infrastructure that the City of Chandigarh has to offer, you can now book a taxi in Chandigarh with a single call at +91-8872711111.

Depending on your specific travel needs, you can choose to hire a taxi in Chandigarh for the following services-
<ol>
  <li> Local Travel in Chandigarh</li>
  <li>Outstation Travel from Chandigarh</li>
  <li>Airport/ Railway station Transfers from Chandigarh</li>
  <li>Long- Term Leasing of Vehicles in Chandigarh</li>
  <li>Corporate Car Rental In Chandigarh</li>
  <li>Tour Packages from Chandigarh</li>
  <li>Luxury Cabs on Rent In Chandigarh</li>
</ol>
</p>
    </div>
        </div>
    )
}

export default Home