import React, {memo} from 'react';

const Header = memo(() => {
    return(
        <div className="">
            <h1 className='text-9xl text-center text-myred-500'>todos</h1>
            <input 
            className='w-full h-full p-[16px_16px_16px_60px] border-2 bg-white shadow-xl text-4xl py-5 mt-5 italic'
            type="text" name="name" placeholder='What needs to be done?'/>
        </div>
            
    )
})

export default Header