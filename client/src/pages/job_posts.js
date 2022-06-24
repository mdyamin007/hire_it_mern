import React, { useState } from 'react'
import JobList from '../components/JobList'
import Button from "../components/Elements/Button"
import AddNewJob from '../components/Admin/Job/AddNewJob'

function JobPosts() {
    const [openAddModal, setOpenAddModal] = useState()

    return (<>
        <div className='container mx-auto my-10'>
            {openAddModal && (<AddNewJob setOpenAddModal={setOpenAddModal} />)}
            <Button bgColor={"bg-green-500"} hoverColor={"hover:bg-green-600"} text={"Add new"} textColor={"text-white"} type={"button"} onClick={() => setOpenAddModal(true)} />
        </div>
        <JobList />
    </>
    )
}

export default JobPosts