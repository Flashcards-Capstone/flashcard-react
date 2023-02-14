const URI = "http://54.215.44.229:8080/api/card"

const CardApi = {
    createCard: async (cardToCreate, stackId) => {
        
        const addedCard = fetch( URI + "/" + stackId, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
             },
            body: JSON.stringify(cardToCreate)
        } )
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
            .catch( (error) => { console.log(error) } )
        return addedCard
    },

    updateCard: (cardToUpdate, cardId) => {

        
        fetch( URI + '/' + cardId, {
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
             },
            body: JSON.stringify(cardToUpdate)
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("CARD UPDATED")
                console.log(data)

            } )
            .catch( (error) => { console.log(error) } ) 
    },

    deleteCard: (cardToDelete) => {
        fetch(URI + '/' + cardToDelete, {
            method: 'DELETE',
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
             }
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

export default CardApi;