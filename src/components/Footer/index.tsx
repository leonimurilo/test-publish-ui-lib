import React from "react";

export interface FooterProps {
  label: string;
}

const Footer = (props: FooterProps) => {
  return <div>{props.label}</div>;
};

export default Footer;