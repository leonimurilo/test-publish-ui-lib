import React from "react";

export interface FooterProps {
  label: string;
}

const Footer = (props: FooterProps) => {
  return <div>
    <p>My test 1</p>
    <p>{props.label}</p>
  </div>;
};

export default Footer;