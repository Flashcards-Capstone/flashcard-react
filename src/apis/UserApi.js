import { useState } from "react"

const URI = "http://localhost:8080/api/user"

const UserApi = {
    authenticateUser: (userCredentials) => {
        fetch( "http://localhost:8080/authenticate", {
            method: "POST", 
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
             }, 
            body: JSON.stringify(userCredentials)
        } )
            .then( (result) => {     
                console.log("TOKEN RESULT:", result)

                // if (result !== null) {
                //     window.location.replace('http://localhost:8080/api/user/' + result['id'])
                // }

                return result.json()
            } )
            .then( (data) => {

                console.log("TOKEN DATA:", data)
                const token = data.jwt
                console.log("TOKEN:", token)
            } )
            .catch( (error) => { console.log(error) } ) 
    },

    getUserById: (userId) => {
        fetch( URI + '/' + userId )
            .then( (result) => {

                console.log("RESULT")
                console.log(result)

                return result.json()
            } )
            .then( (data) => {

                console.log("DATA:")
                console.log(data)

            } )
            .catch( (error) => { console.log(error) } );
    },

    getUserByUsername: (username) => {
        fetch("http://localhost:8080/api/login/" + username )
            .then( (result) => {     

                console.log("USER RESULT")
                console.log(result)

                return result.json()
            } )
            .then( (data) => {

                console.log("USER DATA:")
                console.log(data)

            } )
    }
}

export default UserApi;