import capitalize from "../ToTitle";
import avatar from "../assets/nopicture.png"


export const User = ({pic, name}) => {

 
    
    return (
        <>

            <div className='flex my-2'>
                <img className='h-10 my-auto rounded-full' src={pic ? pic : avatar} alt="" />
                <div className='text-xs font-semibold my-auto mx-2 text-gray-500'>{capitalize(name)}</div>
            </div>

    
        </>
    )
}



