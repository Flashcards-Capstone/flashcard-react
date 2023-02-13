import React, { useEffect, useState } from "react";

const fakeStackList = [
    {
        "id": 1,
        "title": "WWI",
        "subject": "History",
        "publiclyVisable": true,
        "cardList": [
          {
            "id": 1,
            "question": "Question 1",
            "answer": "Answer 1"
          },
          {
            "id": 2,
            "question": "Question 2",
            "answer": "Answer 2"
          },
          {
            "id": 3,
            "question": "Question 3",
            "answer": "Answer 3"
          }
      ]
    },
    {
        "id": 2,
        "title": "Second Punic War",
        "subject": "History",
        "publiclyVisable": true,
        "cardList": [
          {
            "id": 4,
            "question": "Question 4",
            "answer": "Answer 4"
          },
          {
            "id": 5,
            "question": "Question 5",
            "answer": "Answer 5"
          },
          {
            "id": 6,
            "question": "Question 6",
            "answer": "Answer 6"
          }
        ]
    },
    {
        "id": 3,
        "title": "Genes",
        "subject": "Biology",
        "publiclyVisable": true,
        "cardList": [
          {
            "id": 7,
            "question": "Question 7",
            "answer": "Answer 7"
          },
          {
            "id": 8,
            "question": "Question 8",
            "answer": "Answer 8"
          },
          {
            "id": 9,
            "question": "Question 9",
            "answer": "Answer 9"
          }
        ]
    }
]

const UserHome = () => {
    const [stackList, setStackList] = useState(fakeStackList)

    useEffect( () => {
        // StackApi.getAllStacks(setStackList)

    }, [] )

    return (
        <div>
            <h1>List of your Stacks:</h1>
            {stackList.map( stack => 
            <h4 key={stack.id}>
              {stack.subject}: {stack.title}
              <button type="success" class="btn btn-success">Start learning this card</button>
              <br/>
              <br/>
              {stack.cardList.map(card =>
                <p key={card.id}>
                  {card.question}|{card.answer}
                  <button type="button" class="btn btn-primary">Edit Card</button>
                  <button type="button" class="btn btn-danger">Delete Card</button>
                </p>
                )}
              ________________________________________________________________
            </h4>
            )}
        </div>
    );
}

export default UserHome;