import React from "react";
import "./styles.scss";

export interface FooterProps {
  label: string;
}

const Footer = (props: FooterProps) => {
  return <div className="my-test-css">
    <p>My test 1</p>
    <p>{props.label}</p>
  </div>;
};

export default Footer;