import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StackApi from "../apis/StackApi"

const ShowStack = () => {
  const [stack, setStack] = useState({})
  const [cards, setCards] = useState([])

  const {id} = useParams();

  const waitForStack = async () => {
    const awaitStack = await StackApi.getStackById(id);

    return awaitStack
  }

  useEffect( () => {
      const awaitingStack = Promise.resolve(waitForStack())
      awaitingStack.then((value) => {
          setStack(value)
          setCards(value.cards)
      })
  }, [])


  return(

   <div>
       <h1>{stack.title}</h1>
       {cards.map( c =>
        <h2>
        {c.question}
        <br />
        {c.answer}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </h2>
        
      )}
    </div>
  );
}

export default ShowStack;
