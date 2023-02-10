const URI = "http://localhost:3000/api/v1/user"

const UserApi = {

    authenticateUser: (userCredentials) => {
        fetch( URI, {
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(userCredentials)
        } )
            .then( (result) => {     

                console.log("RESULT")
                console.log(result)

                return result.json() 
            } )
            .then( (data) => {

                console.log("DATA:")
                console.log(data)

            } )
            .then( window.location.replace('http://localhost:3000/user/' + data['id']) )
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
    }
}