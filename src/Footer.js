import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const FooterPage = () => {
return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 bg-dark text-white">
    <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="6">
            <h5 className="title text-uppercase"><strong>Stay Connected</strong></h5>
            <p>
            Join with us with more than 1 million customers
            </p>
            <input type="email" placeholder="Email Address" className="input-footer" />
            <button className="button-footer h6">Sign Up</button>
            <div className="social">
            <a href="https://www.facebook.com/" target="_blank">
            <FacebookIcon className="fb"/> </a>
            &nbsp; &nbsp;
            <a href="https://twitter.com/home" target="_blank">
            <TwitterIcon className="tw"/></a>
            &nbsp; &nbsp;
            <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon className="tw"/></a> 
            &nbsp; &nbsp;
            <a href="https://in.linkedin.com/" target="_blank">
            <LinkedInIcon className="tw"/></a>
            </div>
        </MDBCol>
        <MDBCol md="6">
        <div class="row">
<div class="col-sm-4">
<div className="commit">
<h4>We are Open</h4>
<p>Our experts are standing by to help you</p>
<h6>Our commitment to you during <span className="text-danger">COVID-19</span></h6>
</div>
</div>
<div class="col-sm-4">
<div>
    <ul className="about">
        <li>Home</li>
        <li>About Us</li>
        <li>Developer</li>
    </ul>
</div>
</div>
<div class="col-sm-4">
<div>
    <ul className="about">
        <li>Privacy</li>
        <li>Terms & Policy</li>
    </ul>
</div>
</div>
</div>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright&nbsp; | &nbsp; All Rights Reserved | &nbsp;Made with&nbsp;<FavoriteIcon className="heart"/>
        </MDBContainer>
    </div>
    </MDBFooter>
);
}

export default FooterPage;