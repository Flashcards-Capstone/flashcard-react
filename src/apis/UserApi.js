//import { useState } from "react"

// import { AsyncLocalStorage } from "async_hooks"
// import { async } from "q"

const URI = "http://54.215.44.229:8080/api/user"

const UserApi = {
    authenticateUser: async (userCredentials) => {
        const auth = await fetch( "http://54.215.44.229:8080/authenticate", {
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
            // .then( () => {
            //     UserApi.getUserByUsername(userCredentials.username)
            //     // console.log(testUser)
            //     // return testUser

            // })
            .catch( (error) => { console.log(error) } ) 

            return auth
    },

    getUserById: async (userId) => {
        const userAgain = await fetch( URI + '/' + userId )
            .then( (result) => {

                console.log("RESULT")
                console.log(result)

                return result.json()
            } )
            .then( (data) => {

                console.log("DATA:")
                console.log(data)
                return data
            } )
            .catch( (error) => { console.log(error) } );

            return userAgain
    },

    getUserByUsername: async (username) => {
        const user = await fetch("http://54.215.44.229:8080/api/login/" + username , {
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
            console.log("THIS IS THE REAL USER:", user)
        return user
    }
}

export default UserApi;