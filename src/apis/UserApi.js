const URI = "http://localhost:8080/api/user"

const UserApi = {

    authenticateUser: (userCredentials) => {
        fetch( "http://localhost:8080/authenticate", {
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(userCredentials)
        } )
            .then( (result) => {     

                console.log("RESULT")
                console.log(result)

                if (result !== null) {
                    window.location.replace('http://localhost:8080/api/user/' + result['id'])
                }

                return result.json()
            } )
            // .then( (data) => {

            //     console.log("DATA:")
            //     console.log(data)

            // } )
            // .then( window.location.replace('http://localhost:8080/api/user/' + data['id']) )
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