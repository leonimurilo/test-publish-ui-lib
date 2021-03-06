import React from 'react';
import style from './styles.module.scss';

export interface FooterProps {
  label: string;
}

const Footer = (props: FooterProps) => (
  <div className={style.myTestClass}>
    <p>My test SYMLINK Test WATCH POWER 57!</p>
    <p>{props.label}</p>
  </div>
);

export default Footer;
