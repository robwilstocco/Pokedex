import styled from "styled-components";

export const TreeList = styled.ul`
  padding-top: 20px;
  position: relative;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
`;

export const TreeItem = styled.li`
  float: left;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 1px solid #ccc;
    width: 50%;
    height: 20px;
  }
  &::after {
    right: auto;
    left: 50%;
    border-left: 1px solid #ccc;
  }

  &:only-child::after,
  &:only-child::before {
    display: none;
  }

  &:only-child {
    padding-top: 0;
  }

  &:first-child::before,
  &:last-child::after {
    border: 0 none;
  }

  &:last-child::before {
    border-right: 1px solid #ccc;
    border-radius: 0 0.5rem 0 0;
    -webkit-border-radius: 0 0.5rem 0 0;
    -moz-border-radius: 0 0.5rem 0 0;
  }
  &:first-child::after {
    border-radius: 0.5rem 0 0 0;
    -webkit-border-radius: 0.5rem 0 0 0;
    -moz-border-radius: 0.5rem 0 0 0;
  }

  & a {
    text-decoration: none;
    display: inline-block;

    border-radius: 0.5rem;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;

    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
  }

  & a:hover,
  & a:hover + ul li a {
    background: #c8e4f8;
    color: #000;
    border: 1px solid #94a0b4;
  }

  & a:hover + ul li::after,
  & a:hover + ul li::before,
  & a:hover + ul::before,
  & a:hover + ul ul::before {
    border-color: #000;
  }
`;

export const TreeContainer = styled.div`
  & ul ul::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 1px solid #ccc;
    width: 0;
    height: 20px;
  }
`;
