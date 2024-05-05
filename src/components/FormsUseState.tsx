import React, { FormEvent, useState } from 'react'

function FormsUseState() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    email: '',
    password: ''
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(profile);
  }


  return (
    <form className=' container py-5 col-lg-4' onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input onChange={(event) =>
          setProfile({
            ...profile,
            name: event.target.value
          })}
          value={profile.name} type="text" className="form-control" id="name" placeholder="Enter Name" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="age">Age</label>
        <input onChange={(event) =>
          setProfile({
            ...profile,
            age: event.target.value
          })}
          value={profile.age} type="number" className="form-control" id="age" placeholder="Enter age" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="emain">Email address</label>
        <input onChange={(event) =>
          setProfile({
            ...profile,
            email: event.target.value
          })}
          value={profile.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input onChange={(event) =>
          setProfile({
            ...profile,
            password: event.target.value
          })}
          value={profile.password} type="password" className="form-control" id="password" placeholder="Password" />
      </div>
      <div className="form-check mb-4">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormsUseState
