import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../assets/logo1.svg";
import {FaUserAstronaut,FaSearchPlus,FaLuggageCart} from "react-icons/fa";
const Header = () => {
  return (
    <ReactNavbar
    burgerColor="#FFDEAD"
    burgerColorHover="red"
    logo={logo}
    logoWidth="15vmax" 
    navColor1="white" 
    navColor2="rgb(10,47,49)" 
    logoHoverSize="10px" 
    logoHoverColor="rgb(147,100,226)" 
    link1Text="Home" 
    link2Text="Products" 
    link3Text="Contact" 
    link4Text="About" 
    link1Url="/" 
    link2Url="/products" 
    link3Url="/contact" 
    link4Url="/about" 
    link1Size="2.3vmax" 
    link1Color="white" 
    nav1justifyContent="flex-start" 
    nav2justifyContent="flex-end" 
    nav3justifyContent="flex-start" 
    nav4justifyContent="flex-start" 
    link1ColorHover="#8F00FF" 
    link1Margin="1.5vmax" 
    profileIconUrl="/login" 
    profileIcon={true}
    ProfileIconElement={FaUserAstronaut}
    profileIconColor="white"
    profileIconColorHover="#8F00FF"
    cartIcon={true}
    CartIconElement={FaLuggageCart}
    cartIconColor="white"
    cartIconColorHover="#8F00FF"
    cartIconMargin="1vmax"
    cartIconSize="3vmax"
    searchIcon={true}
    SearchIconElement={FaSearchPlus}
    searchIconColor="white"
    searchIconColorHover="#8F00FF"
    searchIconSize="2vmax"
    />
  );
};

export default Header;