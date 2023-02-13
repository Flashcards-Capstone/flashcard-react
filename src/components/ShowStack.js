import React, { useEffect, useState } from "react";
import StackApi from "../apis/StackApi"

const ShowStack = () => {
  const [stack, setStack] = useState({})
  const [cards, setCards] = useState([])

  useEffect( () => {
    StackApi.getStackById(setStack)

} )

  return(
    <h1>temp</h1>
  )
}

export default ShowStack;