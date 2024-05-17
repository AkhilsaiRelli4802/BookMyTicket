import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { Offcanvas,OffcanvasHeader,OffcanvasBody } from "reactstrap";
import "./Header.css";
// import { useState } from "react";
function Header(){
    // const [open,close] = useState(false);
    return(
        <div>
            <div className="HeaderContainer1">
                <div className="continer">
                    <img className="Headerlogo" src="https://img.freepik.com/premium-vector/tape-record-film-icon-vector-illustration-design_24877-18110.jpg?w=740" alt="Header logo"/>
                    <input className="searchbar" type="search" placeholder="Search For Movies,Events,Plays,Activities"/>
                </div>

                <div>
                <select className="places">
                        <option>Hyderabad</option>
                        <option>Visakhapatnam</option>
                        <option>Vijayawada</option>
                        <option>Rajahmundry</option>
                        <option>Vizianagaram</option>
                        <option>Nellimarla</option>
                        <option>Cheepurpalli</option>
                        <option>Rajam</option>
                        <option>Srikakulam</option>
                    </select>
                    {/* <button>SignIn</button> */}
                    {/* <NavLink to ="/"><Button color="dark" outline size="sm">Sign  In</Button></NavLink> */}

                    <Button color="primary" onClick={function noRefCheck(){}}>Sign In</Button>
                    <Offcanvas direction="end" scrollable toggle={function noRefCheck(){}}>
                    <OffcanvasHeader toggle={function noRefCheck(){}}>Offcanvas</OffcanvasHeader>
                    <OffcanvasBody>
                        <strong>
                            This is the Offcanvas body.
                        </strong>
                    </OffcanvasBody>
                    </Offcanvas>
                    </div>
                </div>


            <nav>
                <div className="HeaderContainer2">
                    <div className="firstpart">
                        <NavLink to="/Movies"><h1 className="clickabledetails">Movies</h1></NavLink>
                        <NavLink to = "/Stream"><h1 className="clickabledetails">Stream</h1></NavLink>
                        <NavLink to="/Events"><h1 className="clickabledetails">Events</h1></NavLink>
                        <NavLink to = "/Plays"><h1 className="clickabledetails">Plays</h1></NavLink>
                        <NavLink to="/Sports"><h1 className="clickabledetails">Sports</h1></NavLink>
                        <NavLink to = "/Activities"><h1 className="clickabledetails">Activities</h1></NavLink>
                    </div>
                    <div className="secondpart">
                        <NavLink to="/Gifts"><h1 className="clickabledetails">GiftCards</h1></NavLink>
                        <NavLink to = "/Offers"><h1 className="clickabledetails">Offers</h1></NavLink>

                    </div>

                </div>
            </nav>
        </div>
    )
}
export default Header