

export default function UserCard({name, email,phone}){

  return(
    <div>
      <h1>{name}</h1>
      <small>{email}</small>
      <small>{phone}</small>

    </div>
  )
}