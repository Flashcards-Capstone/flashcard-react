import React, { useEffect, useState } from "react";
import CardApi from "../apis/CardApi";

const CardEdit = (props) => {
    const card = props.cardToUpdate

    const[ id, setId ] = useState(card ? card.id : 0)
    const[ question, setQuestion ] = useState(card ? card.id : "")
    const[ answer, setAnswer ] = useState(card ? card.id : "")

    console.log(test)

    useEffect(() =>{
        if (card) {
            setId(card.id)
            setQuestion(card.question)
            setAnswer(card.answer)
        }
    }, [card])

    const handleSubmit = (event) => {
        const card = {
            'id': id,
            'question': question,
            'answer': answer
        }

        CardApi.updateCard(card)
    }
    
    return (
        card ?
        (<div className="home">
            <div className="login-div">
                <form className="login-box" onSubmit={ handleSubmit }>
                    <div className="login-box-content">
                        <h3 className="login-box-title">Edit Card</h3>
                        <div className="form-group mt-3">
                            <label>ID</label>
                            <input
                                type="id"
                                className="form-control mt-1"
                                id='card-id'
                                required
                                name="card-id"
                                value={id}
                                readOnly
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Question</label>
                            <input
                                type="question"
                                className="form-control mt-1"
                                id="card-question"
                                required
                                name="card-question"
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
        </div>)
        : "Please return to your dashboard"
    );
};

export default CardEdit;