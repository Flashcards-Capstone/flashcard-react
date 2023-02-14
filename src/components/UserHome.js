import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardApi from "../apis/CardApi";
import UserApi from "../apis/UserApi";

const UserHome = () => {
    // const [refresh, setRefresh] = useState(false)
    const [user, setUser] = useState({})
    const [userStacks, setUserStacks] = useState([])
    const [studyStack, setStudyStack] = useState([])
    
    // const [hasLoaded, setHasLoaded] = useState(false);
    const {id} = useParams();

    const waitForUser = async () => {
        const awaitUser = await UserApi.getUserById(id);

        return awaitUser
    }
    
    useEffect( () => {
        const awaitingUser = Promise.resolve(waitForUser())
        awaitingUser.then((value) => {
            setUser(value)
            setUserStacks(value.stacks)
        })
    }, [])

    

    return (
        <div>
            <h1>Welcome {user.username} </h1>
            <h2>List of your Stacks:</h2>
            {userStacks.map( stack =>
            
            <h4 key={stack.id}>
            {stack.subject}: {stack.title}<Link to={"/stack/" + stack.id} state={{ stackId: stack.id }}><button className='btn btn-success' onClick={() => setStudyStack(stack)}>Study</button></Link><Link to={"/user/" + user.id + "/stack/" + stack.id + "/add"}><button className='btn btn-success' onClick={() => setStudyStack(stack)}>Add Card to Stack</button></Link>
            <br/>
            <br/>
            {stack.cards.map(card =>
                <p key={card.id}>
                {card.question}|{card.answer}
                <Link to={"/card/" + {card}} >
                    <button className='btn btn-primary'>
                        Update Card
                    </button>
                </Link>
                <button className="btn btn-danger" onClick={() => CardApi.deleteCard(card.id)}>
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