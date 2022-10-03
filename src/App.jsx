import React, { useEffect, useState} from "react"
import axios from "axios"
import UserCard from "./components/UserCard"

export default function App(){

  // state
  const [users, setUsers] = useState([])
  // componentdidmount
  useEffect(()=>{
    // hit api json placeholder

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      console.info(res.data)
      // function merubah/update res.data (dalam objek)
      setUsers(res.data)
    })
    .catch(()=>{
      console.error(err)
    })
  }, [])


  return(
    <div>

      <h1>halo App</h1>
      {/* item untuk memanggil parameter pada objek  */}
      {users.map((item)=>{
        return(
          // ini props
          <UserCard 
          name={item.name}
          email={item.email}
          phone={item.phone}
          key={item.id}
          />
        )
      })}
    </div>
  )
}