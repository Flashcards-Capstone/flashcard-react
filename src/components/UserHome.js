import React, { useEffect, useState } from "react";
import StackApi from '../apis/StackApi';
import { Link } from "react-router-dom";
import CardApi from "../apis/CardApi";

const UserHome = (props) => {
    const user = props
    const stacks = user.stacks
    // const [stackList, setStackList] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect( () => {

    }, [refresh] )

    return (
        <div>
            <h1>Welcome {user.username} </h1>
            <h2>List of your Stacks:</h2>
            {stacks.map( stack => 
            <h4 key={stack.id}>
              {stack.subject}: {stack.title}
              <br/>
              <br/>
              {stack.cardList.map(card =>
                <p key={card.id}>
                  {card.question}|{card.answer}
                  <Link to={"/card/" + {card}} onClick={() => props.setCardToUpdate(card)}>
                      <button className='btn btn-primary'>
                          Update Card
                      </button>
                  </Link>
                  <button className="btn btn-danger" onClick={() => CardApi.deleteCard(card, setRefresh)}>
                      Delete Card
                  </button>
                </p>
                )}
              ________________________________________________________________
            </h4>
            )}
        </div>
    );
}

export default UserHome;