import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCompanies } from '../redux/features/companiesSlice'

function Companies() {

    const dispatch = useDispatch()
    const { companies } = useSelector(state => state.companies)

    useEffect(() => {
        dispatch(getAllCompanies())
    }, [])

    return (
        <div className="container mx-auto my-10">
            <button className="px-3 py-2 bg-green-500 rounded text-white">Add new</button>
            <div className='flex my-10 space-x-10'>{companies && companies.map(company => (
                <div key={company._id} className='border rounded shadow-md p-20'>
                    <h1 className='text-4xl font-semibold italic text-gray-700'>{company.companyName}</h1>
                    <p className='text-sm text-gray-500'>{company.companyEmail}, {company.companyPhone}</p>
                    <p className="">{company.companyWebsite}</p>
                    <p className="mt-10">{company.companyDescription}</p>
                </div>
            ))}</div>
        </div>)
}

export default Companies