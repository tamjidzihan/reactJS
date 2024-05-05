import React, { FormEvent, useRef } from 'react'

function Forms() {

    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const profile = {
        name: '',
        age: 0,
        email: '',
        password: ''
    }


    const handleSubmit = (event: FormEvent) => {
        if (nameRef.current !== null) profile.name = nameRef.current.value
        if (ageRef.current !== null) profile.age = parseInt(ageRef.current.value)
        if (emailRef.current !== null) profile.email = emailRef.current.value
        if (passRef.current !== null) profile.password = passRef.current.value
        console.log(profile)
    }



    return (
        <form className=' container py-5 col-lg-4' onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input ref={nameRef} type="text" className="form-control" id="name" placeholder="Enter Name" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="age">Age</label>
                <input ref={ageRef} type="number" className="form-control" id="age" placeholder="Enter age" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="emain">Email address</label>
                <input ref={emailRef} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input ref={passRef} type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Forms
