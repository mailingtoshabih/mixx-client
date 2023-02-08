

export const Metadata = () => {
    return (
        <div>



            <div className='rounded-lg bg-white my-3 shadow-md shadow-purple-200/50 p-4'>

                {/* profile metadata > who viewed your profile */}
                <div>

                    <div className='text-sm font-bold my-auto text-gray-600'>Activities</div>

                    <div className='flex justify-between my-2'>
                        <div className='text-xs font-semibold my-auto  text-gray-500'>Who's viewed your profile</div>
                        <div className='text-xs font-semibold my-auto  text-indigo-500'>53</div>
                    </div>

                    <div className='flex justify-between my-2'>
                        <div className='text-xs font-semibold my-auto  text-gray-500'>Your Followers</div>
                        <div className='text-xs font-semibold my-auto  text-indigo-500'>3443</div>
                    </div>

                    <div className='flex justify-between my-2'>
                        <div className='text-xs font-semibold my-auto  text-gray-500'>Total likes</div>
                        <div className='text-xs font-semibold my-auto  text-indigo-500'>934643</div>
                    </div>
                </div>

            </div>




        </div>
    )
}
