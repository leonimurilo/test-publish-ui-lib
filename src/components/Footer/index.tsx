import React from 'react';
import style from './styles.module.scss';

export interface FooterProps {
  label: string;
}

const Footer = (props: FooterProps) => {
  const x = 12222;
  return (
    <div className={style.myTestClass}>
      <p>My test 1</p>
      <p>{props.label}</p>
    </div>
  );
};

export default Footer;