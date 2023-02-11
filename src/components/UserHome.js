import React, { useEffect, useState } from "react";
import StackApi from '../apis/StackApi';

const UserHome = () => {
    const [stackList, setStackList] = useState([])
    const [cardList, setCardList] = useState([])

    useEffect( () => {
        console.log("Hello, this component was mounted!")
        StackApi.getAllStacks(setStackList)

    }, [] )

    return (
        <div>
            <h1>List of your Stacks:</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Stacks:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stackList.map( s =>  
                                    <tr key={s.id}>
                                        <td>{s.name}</td>
                                        <td>{s.category}</td>
                                        <td>
                                            {
                                               stackList.cardList.map( c =>
                                                <tr key={c.id}>
                                                    <td>{c.name}</td>
                                                    <td>{c.category}</td>
                                                </tr>
                                               )
                                            }
                                        </td>
                                    </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserHome;