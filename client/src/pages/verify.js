import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Verify() {

    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    const navigate = useNavigate()

    useEffect(() => {
        if (user || !isSuccess) {
            navigate("/")
        }

    }, [user, isSuccess])

    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <div className='w-1/2 rounded border border-red-600 p-20'>
                <p className='text-center text-lg font-normal font-sans'>An email has been sent to your email, please check it and verify your email by going to the given link. Thank you.</p></div>
        </div>
    )
}

export default Verify