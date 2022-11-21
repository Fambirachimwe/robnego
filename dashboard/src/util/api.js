
// get reservations 



export const getReservations = () => {
    // get all 
    const response = fetch("https://robnego-production.up.railway.app/reservation/").then((response) => response.json())
    return response

}

export const getReservationById = async (id) => {
    const response = await fetch(`https://robnego-production.up.railway.app/reservation/${id}`)

    const res = response.json()
    // console.log(res)
    return res.data
}

// get orders

// get feedback

// get suggestions