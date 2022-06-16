import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { reset, verify } from '../redux/features/authSlice';

function Verification() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { userId, tokenId } = useParams();
    const { isLoading, isSuccess, message, isError } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            setError(true);
        }
        return () => dispatch(reset())
    }, [isError])

    useEffect(() => {
        if (userId && tokenId) {
            setLoading(true);
            dispatch(verify({ userId, tokenId }))
            setLoading(false);
        }

        return () => dispatch(reset())
    }, [])


    return (
        <>
            {loading ? (<div className='flex justify-center items-center min-h-screen w-full'>Loading...</div>) : (
                <>{error ? (<div className='flex justify-center items-center min-h-screen w-full'>
                    <div className='bg-red-400 p-20 text-white text-lg font-semibold shadow-md text-center w-1/4 rounded'>
                        {message}
                    </div>
                </div>) : (
                    <div className='flex justify-center items-center min-h-screen w-full'>
                        <div className='bg-green-400 p-20 text-white text-lg font-semibold shadow-md text-center w-1/4 rounded'>
                            <p>Email successfully verified. Please <Link to="/login"><span className='text-blue-600'>login</span></Link> here</p>
                        </div>
                    </div>)}
                </>)}

        </>)
}

export default Verification