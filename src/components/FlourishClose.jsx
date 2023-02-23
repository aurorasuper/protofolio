import React from 'react';
import {ReactComponent as Deco} from "../utils/images/DecoClose.svg"

const FlourishClose = ({onClickFunc}) => {
  return (
    <Deco id="closeMenu" className={`w-8 
    fill-primaryLight dark:fill-primaryDark
    group-hover:fill-darkestRed dark:group-hover:fill-lightCyan
    `}
    onClick={onClickFunc}></Deco>
  )
}

export default FlourishClose