import React from 'react'
import {ReactComponent as Deco } from "../utils/images/DecoMenuV2.svg"

const FlourishMenu = ({onClickFunc}) => {
  return (
    <Deco id="openMenu" className={`w-8 
    fill-primaryLight dark:fill-primaryDark
    group-hover:fill-darkestRed dark:group-hover:fill-lightCyan
    block md:hidden `}
    onClick={onClickFunc}/>
  )
}

export default FlourishMenu