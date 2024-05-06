import React, { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';


interface FromData {
  name: string,
  age: number,
  email: string,
  password: string
}


function FormsUseState() {

  const { register, handleSubmit, formState: { errors } } = useForm<FromData>()
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form className=' container py-5 col-lg-4' onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input {...register('name', { required: true, minLength: 3 })} type="text" className="form-control" id="name" placeholder="Enter Name" />
        {errors.name?.type === "required" &&
          <div className="alert alert-danger py-0 my-1 " role="alert">
            The name field is empty
          </div>}
        {errors.name?.type === "minLength" &&
          <div className="alert alert-danger py-0 my-1 " role="alert">
            The name must be at leat 3 chareacters
          </div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="age">Age</label>
        <input
          {...register('age', { required: true })}
          type="date"
          className="form-control"
          name='age'
          id="age"
          placeholder="Enter age"
        />
        {errors.age?.type === "required" && <div className="alert alert-danger py-0 my-1 " role="alert">
          Age field can not be empty
        </div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">Email address</label>
        <input  {...register('email')} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input  {...register('password')} type="password" className="form-control" id="password" placeholder="Password" />
      </div>

      <div className="form-check mb-4">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </form >
  )
}

export default FormsUseState
