import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCompanies, setACompany } from '../redux/features/companiesSlice'
import FormTitle from "../components/Elements/FormTitle"
import Input from "../components/Elements/Input"
import Button from "../components/Elements/Button"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'

function Companies() {
    const [openAddModal, setOpenAddModal] = useState(false)

    const dispatch = useDispatch()
    const { companies } = useSelector(state => state.companies)

    useEffect(() => {
        dispatch(getAllCompanies())
    }, [])

    return (
        <div className="container mx-auto my-10">
            {openAddModal && (<AddNewCompany setOpenAddModal={setOpenAddModal} />)}
            <button onClick={() => setOpenAddModal(true)} className="px-3 py-2 bg-green-500 rounded text-white">Add new</button>
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

const AddNewCompany = ({ setOpenAddModal }) => {

    const [newCompany, setNewCompany] = useState();

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { message } = useSelector(state => state.companies)

    const handleInputChange = (e) => {
        if (e.target.value) {
            setNewCompany(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }

    const handleSubmit = async () => {
        if (newCompany) {
            try {
                await dispatch(setACompany(newCompany))
                window.location.reload()
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.message)
            }
        }
    }

    return (
        <div className='absolute inset-0' style={{ background: "rgba(0,0,0,0.6)" }}>
            <div className="relative container mx-auto bg-white p-20 mt-20 rounded z-40">
                <p className="absolute top-2 right-3 text-2xl cursor-pointer" onClick={() => setOpenAddModal(false)}>X</p>
                <FormTitle title={"Add new company"} />
                <Input id={"companyName"} label={"Company Name"} name={"companyName"} required={true} type={"text"} onChange={handleInputChange} />
                <Input id={"companyEmail"} label={"Email address"} name={"companyEmail"} required={true} type={"text"} onChange={handleInputChange} />
                <Input id={"companyPhone"} label={"Phone"} name={"companyPhone"} required={true} type={"text"} onChange={handleInputChange} />
                <Input id={"companyAddress"} label={"Address"} name={"companyAddress"} required={true} type={"text"} onChange={handleInputChange} />
                <Input id={"companyWebsite"} label={"Website(if any)"} name={"companyWebsite"} required={false} type={"text"} onChange={handleInputChange} />
                <Input id={"companyDescription"} label={"Description"} name={"companyDescription"} required={false} type={"text"} onChange={handleInputChange} />
                <Button bgColor={"bg-green-500"} hoverColor={"bg-green-600"} text={"Create"} textColor={"text-white"} type={"button"} onClick={handleSubmit} />
            </div>
        </div>
    );
}

export default Companies