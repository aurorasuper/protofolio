import React from 'react'
import {ReactComponent as Deco } from "../utils/images/Deco.svg"

const FlourishDecor = () => {
  return (
    <Deco className="w-16 transition scale-0 group-hover:ease-in group-hover:scale-100 :not:hover:scale-0 group-hover:fill-primaryLight dark:group-hover:fill-primaryDark"></Deco>
  )
}

export default FlourishDecor