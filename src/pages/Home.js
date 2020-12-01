import React, { useEffect } from 'react'
import ApiService from '../api-service'
// import swal from 'sweetalert'

const Home = () => {
    useEffect(() => {
        ApiService.get("/checklist").then(response => {
            console.log(response)
        }).catch(err => {
            if (err.response.status === 401) {
                console.log("redirect to login")
            }
        })
    }, [])

    return (
        <h1>Hallo</h1>
    )
}

export default Home;
