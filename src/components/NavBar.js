import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RowContainer } from "./StyledContainers";
import logo from "../logo.svg";

const linkStyle = {
  padding: "1rem",
  textDecoration: "none",
  fontSize: "12",
  fontWeight: "bold",
  color: "hsla(0, 0%, 28%, 1)"
};

const navLinks = [
  {
    title: "No Time to Host?",
    to: "/no-time-to-host"
  },
  {
    title: "Become a Host",
    to: "/become-host"
  },
  {
    title: "Help",
    to: "/help"
  },
  {
    title: "Sign Up",
    to: "/signup"
  },
  {
    title: "Log In",
    to: "/login"
  }
];

const SearchInput = styled.input`
  flex: 2;
  visibility: ${props => (props.searchVisible ? "visible" : "hidden")};
`;

const NavBar = props =>
  <RowContainer>
    <img
      style={{ justifyContent: "flex-start" }}
      src={logo}
      className="App-logo"
      alt="logo"
    />

    <SearchInput
      searchVisible={props.searchVisible}
      placeholder="Search Terms"
    />

    <RowContainer style={{ flex: "8", justifyContent: "flex-end" }}>
      {navLinks.map((navItem, i) =>
        <Link style={linkStyle} to={navItem.to}>
          {navItem.title}
        </Link>
      )}
    </RowContainer>
  </RowContainer>;

export default NavBar;
