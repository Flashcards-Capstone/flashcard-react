//import { useState } from "react"

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



                return result.json()
            } )
            .then( (data) => {

                console.log("TOKEN DATA:", data)
                const token = data.jwt
                console.log("TOKEN:", token)
            } )
            .then( () => {
                UserApi.getUserByUsername(userCredentials.username)
                // console.log(testUser)
                // return testUser

            })

            
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
        fetch("http://localhost:8080/api/login/" + username , {
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
             }, 
        })
            .then( (result) => {     

                console.log("USER RESULT")
                console.log(result)

                return result.json()
            } )
            .then( (data) => {

                console.log("USER DATA:")
                console.log(data)
                return data;
                //window.location.replace('http://localhost:3000/user/' + data.id)
            } )

    }
}

export default UserApi;