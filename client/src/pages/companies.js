import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCompanies } from '../redux/features/companiesSlice'

function Companies() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCompanies())
    }, [dispatch])

    return (
        <div>Companies</div>
    )
}

export default Companies