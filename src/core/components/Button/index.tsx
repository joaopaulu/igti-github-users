import React from 'react';
import './styles.scss';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => (
  <button className="btn btn-primary btn-default">
    <span>{text}</span>
  </button>
);

export default Button;
