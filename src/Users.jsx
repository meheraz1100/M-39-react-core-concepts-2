import { useState } from "react"

export default function Users(){

    const [users, setUsers] = useState([]);


    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <li>Users : {users.length}</li>

        </div>
    )
}


/**
 * 1. declare a state to hold the data
 * 2. useEffect with callback and dependency arrays\
 * 3. use fatch to load data
 */