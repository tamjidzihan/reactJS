import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';


const catagorys = ['Groceries', 'Utilities', 'Entertainment'] as const

const schema = z.object({
    description: z.string().min(3, { message: 'Description should be at least 3 Charecter' }),
    amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01).max(100_000),
    catagory: z.enum(catagorys, {
        errorMap: () =>
            ({ message: "Catagory Is requaired" })
    }),
    input: z.string().min(1, { message: "This field Is requaired" })
})

type FromData = z.infer<typeof schema>


function Project() {

    const { register, handleSubmit, formState: { errors } } = useForm<FromData>({ resolver: zodResolver(schema) })

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }


    return (
        <form className=' container py-3' onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group pb-3">
                <label htmlFor="description">Description</label>
                <input
                    {...register('description')}
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Product Description" />
                {errors.description &&
                    <div className="alert alert-danger py-0 my-1 " role="alert">
                        {errors.description.message}
                    </div>}
            </div>

            <div className="form-group pb-3">
                <label htmlFor="input">Input</label>
                <input
                    {...register('input')}
                    type="text"
                    className="form-control"
                    id="input"
                    placeholder="Product Description" />
                {errors.input &&
                    <div className="alert alert-danger py-0 my-1 " role="alert">
                        {errors.input.message}
                    </div>}
            </div>


            <div className="form-group pb-3">
                <label htmlFor="amount">Amount</label>
                <input
                    {...register('amount', { valueAsNumber: true })}
                    type="number"
                    className="form-control"
                    name='amount'
                    id="amount"
                    placeholder="Product Amount" />
                {errors.amount &&
                    <div className="alert alert-danger py-0 my-1 " role="alert">
                        {errors.amount.message}
                    </div>}
            </div>


            <div className="form-group pb-3">
                <label htmlFor="inputState">Catagory</label>
                <select
                    {...register('catagory')}
                    name='catagory'
                    defaultValue={''}
                    id="inputState"
                    className="form-control">
                    <option value="" >Choose...</option>
                    {catagorys.map((catagory, index) =>
                        <option key={index} value={catagory} >{catagory}</option>
                    )}
                </select>
                {errors.catagory &&
                    <div className="alert alert-danger py-0 my-1 " role="alert">
                        {errors.catagory.message}
                    </div>}
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}

export default Project
