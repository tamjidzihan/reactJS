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
})


type FromData = z.infer<typeof schema>


function SubmitButtonDisable() {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FromData>({ resolver: zodResolver(schema) })
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

      <button disabled={!isValid} type="submit" className="btn btn-primary">Submit</button>

    </form >
  )
}

export default SubmitButtonDisable
