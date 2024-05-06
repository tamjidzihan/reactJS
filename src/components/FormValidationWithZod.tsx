import React, { FormEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "age field is requaird" })
    .min(18, { message: "user must be over 18 years" }),
  email: z
    .string({ required_error: 'email is requaired' })
    .min(10, { message: "email must be over 10 chr" }),
  password: z.string()
})


type FromData = z.infer<typeof schema>


function FormsUseState() {

  const { register, handleSubmit, formState: { errors } } = useForm<FromData>({ resolver: zodResolver(schema) })
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form className=' container py-5 col-lg-4' onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input {...register('name')}
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter Name" />
        {errors.name &&
          <div className="alert alert-danger py-0 my-1 " role="alert">
            {errors.name.message}
          </div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="age">Age</label>
        <input
          {...register('age', { valueAsNumber: true })}
          type="number"
          className="form-control"
          name='age'
          id="age"
          placeholder="Enter age"
        />
        {errors.age &&
          <div className="alert alert-danger py-0 my-1 " role="alert">
            {errors.age.message}
          </div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">Email address</label>
        <input  {...register('email')}
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email" />
        {errors.email &&
          <div className="alert alert-danger py-0 my-1 " role="alert">
            {errors.email.message}
          </div>}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input  {...register('password')}
          type="password"
          className="form-control"
          id="password"
          placeholder="Password" />
        {errors.password &&
          <div className="alert alert-danger py-0 my-1 " role="alert">
            {errors.password.message}
          </div>}
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
