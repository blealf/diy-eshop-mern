import React, {useState, useEffect} from 'react';
import '../../styles/Footer.scss';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube} from 'react-icons/fa';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import {AiFillAndroid, AiFillApple} from 'react-icons/ai';

const Footer = () => {

  const [clickedMenu, setClickedMenu] = useState();
  useEffect(() => {

  }, []);

  const menuShow = (e) => {
    var menuButton = e.target
    if(menuButton.tagName !== "H3") {
      menuButton = menuButton.closest('H3');
    }
    const slideMenu = menuButton.nextElementSibling;
    const menuItems = Array.from(document.getElementsByClassName('menuItem'));
    menuItems.map((item) => {
      item.classList.remove('show');
      item.previousElementSibling.children[0].style.display = "block";
      item.previousElementSibling.children[1].style.display = "none";
    })
    
    // console.log(slideMenu);
    if(slideMenu === clickedMenu){
      setClickedMenu();
      slideMenu.classList.remove('show')
      menuButton.children[0].style.display = "block";
      menuButton.children[1].style.display = "none";
    } else{
      setClickedMenu(slideMenu);
      slideMenu.classList.add('show')
      menuButton.children[0].style.display = "none";
      menuButton.children[1].style.display = "block";
    }
  }


  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerMenuWrapper">
          <div className="footerMenuItem">
            <h3 onClick={menuShow}>Customer Support <span><FiChevronDown /></span><span className="up"><FiChevronUp /></span></h3>
            <ul className="menuItem">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Return and Exchange</a></li>
            </ul>
          </div>
          <div className="footerMenuItem">
            <h3 onClick={menuShow}>Account <span><FiChevronDown /></span><span className="up"><FiChevronUp /></span></h3>
            <ul className="menuItem">
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Manage Account</a></li>
              <li><a href="#">Email Preferences</a></li>
            </ul>
          </div>
          <div className="footerMenuItem">
            <h3 onClick={menuShow}>About Us<span><FiChevronDown /></span><span className="up"><FiChevronUp /></span></h3>
            <ul className="menuItem">
              <li><a href="#">About DIY-ESHOP</a></li>
              <li><a href="#">Sell on DIY-ESHOP</a></li>
            </ul>
          </div>
          <div className="footerMenuItem">
            <h3 onClick={menuShow}>Services<span><FiChevronDown /></span><span className="up"><FiChevronUp /></span></h3>
            <ul className="menuItem">
              <li><a href="#">Recycling Information</a></li>
              <li><a href="#">Sponsor</a></li>
            </ul>
          </div>
          <div className="footerMenuItem">
            <h3 onClick={menuShow}>Mobile Apps<span><FiChevronDown /></span><span className="up"><FiChevronUp /></span></h3>
            <ul className="menuItem">
              <li><a href="#"><span><AiFillAndroid /></span>Android App </a></li>
              <li><a href="#"><span><AiFillApple /></span>iOS App</a></li>
            </ul>
          </div>
        </div>

        <div className="footerSocial">
          <div className="subscribe">
            <input type="text" placeholder="Email Address"/>
            <button>Sign Up</button>
          </div>
          <div className="footerSocialButtons">
            <ul>
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaLinkedinIn /></a></li>
              <li><a href="#"><FaPinterestP /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lastFooter">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Copyright @ 2020</a>
          <a href="#">Accessibility Policy</a>
          <a href="#">Product Recalls</a>
          <a href="#">Credits</a>
        </div>
    </div>
  )
}

export default Footer
