import React, { FormEvent, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

function FormsUseState() {

  const { register, handleSubmit } = useForm()
  console.log(handleSubmit)
  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <form className=' container py-5 col-lg-4' onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input {...register('name')} type="text" className="form-control" id="name" placeholder="Enter Name" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="age">Age</label>
        <input  {...register('age')} type="number" className="form-control" id="age" placeholder="Enter age" />
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
