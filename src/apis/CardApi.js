const URI = "http://localhost:8080/api/card"

const CardApi = {
    createCard: (cardToCreate) => {

        
        fetch( URI, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cardToCreate)
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("CARD CREATED")
                console.log(data)

            } )
            .catch( (error) => { console.log(error) } ) 
    },

    updateCard: (cardToUpdate, cardId) => {

        
        fetch( URI + '/' + cardId, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
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

export default CardApi;