import dell from '../assets/dell.jpg';






// ------------------------------------------
export const Ads = () => {
    return (
        <>



            {/* Advertsement div */}
            <div className='p-3 my-4 rounded-lg w-full bg-white drop-shadow-lg'>

                <div className='flex justify-between'>
                    <p className='text-sm font-bold text-gray-500 mb-2 my-auto'>Advertisements</p>
                    <p className='text-xs font-bold text-gray-500 mb-2 my-auto'>Ads</p>
                </div>


                <div>
                    <img className='rounded-lg' src={dell} alt="ads" />
                </div>


                <div className='my-2'>
                    <p className='text-xs  text-gray-500 mb-2'>Dell laptops are designed with a touch screen and sturdy construction that makes it a favorite among college students, professional business people.</p>
                </div>

            </div>



        </>
    )
}
