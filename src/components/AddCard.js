import React from "react";
import { useState } from "react";
import CardApi from "../apis/CardApi"
import { useParams } from "react-router-dom";

const AddCard = () => {
    // const[ sId, setStackId ] = useState("")
    const[ question, setQuestion ] = useState("")
    const[ answer, setAnswer ] = useState("")
    const[ realCard, setCard ] = useState("")
    
    const { stackId } = useParams();
    const { userId } = useParams();

    const handleSubmit = async (event) => {
        const card = {
            "question": question,
            "answer": answer
        }

        const output = await CardApi.createCard(card, stackId)

        const awaitingOutput = Promise.resolve(output)
        awaitingOutput.then((value) => {
            setCard(value)
            console.log("THIS IS THE VALUE", value)
        })

        console.log("THIS IS THE CARD", realCard)

        // CardApi.createCard(card, stackId)

        window.location.replace('http://localhost:3000/user/' + userId)
    }

    return(
        <div className="home">
            <div className="login-div">
                <form className="login-box" onSubmit={ handleSubmit }>
                    <div className="login-box-content">
                        <h3 className="login-box-title">Add Card</h3>
                        <div className="form-group mt-3">
                            <label>Question</label>
                            <input
                                type="question"
                                className="form-control mt-1"
                                id="card-question"
                                required
                                name="card-question"
                                placeholder="Enter Question"
                                value={question}
                                onChange={ (event) => { setQuestion(event.target.value) } }
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Answer</label>
                            <input
                                type="answer"
                                className="form-control mt-1"
                                id="card-answer"
                                required
                                name="card-answer"
                                placeholder="Enter Answer"
                                value={answer}
                                onChange={ (event) => { setAnswer(event.target.value) } }
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCard;