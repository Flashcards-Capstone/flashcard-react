const URI = "http://localhost:8080/api/stack"

const StackApi = {
    getAllStacks: (setStackList) => {

        fetch( URI )
            .then( (result) => {

                console.log("RESULT")
                console.log(result)

                return result.json()
            } )
            .then( (data) => {

                console.log("DATA:")
                console.log(data)

                setStackList(data)

            } )
            .catch( (error) => { console.log(error) } );
        
    },

    getUsersStacks: (setStackList, userId) => {

        fetch( URI + '/' + userId )
            .then( (result) => {

                console.log("RESULT")
                console.log(result)

                return result.json()
            } )
            .then( (data) => {

                console.log("DATA:")
                console.log(data)

                setStackList(data)

            } )
            .catch( (error) => { console.log(error) } );
        
    },

    createStack: (stackToCreate, userId) => {

        
        fetch( URI + '/' + userId, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(stackToCreate)
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("STACK CREATED")
                console.log(data)

            } )
            .catch( (error) => { console.log(error) } ) 
    },

    getStackById: async (stackId) => {

        const stack = await fetch( URI + '/' + stackId )
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
        return stack
    },

    getStacksBysubject: (subject, setStackList) => {

        fetch( URI + '/' + subject )
            .then( (result) => {

                console.log("RESULT")
                console.log(result)

                return result.json()
            } )
            .then( (data) => {

                console.log("DATA:")
                console.log(data)

                setStackList(data)

            } )
            .catch( (error) => { console.log(error) } );
        
    },

    updateStack: (stackToUpdate, stackId) => {

        
        fetch( URI + '/' + stackId, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(stackToUpdate)
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("STACK UPDATED")
                console.log(data)

            } )
            .catch( (error) => { console.log(error) } ) 
    },

    deleteStack: (stackToDelete) => {
        fetch(URI + '/' + stackToDelete, {
            method: 'DELETE'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.json())
                }
                window.location.reload(false)
            })
            .catch( (error) => { console.log(error) } )
    }
}

export default StackApi;