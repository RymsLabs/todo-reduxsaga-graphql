import React , {memo} from 'react'

const Footer = memo(props => {
    const filterBtn = [{
        title:'All',
        isActive:true,
        onCLick: () =>{} ,
        link : ''
    } ,{
        title:'Active',
        isActive:false,
        onCLick: () =>{} ,
        link : 'active'
    } ,{
        title:'Completed',
        isActive:false,
        onCLick: () =>{} ,
        link : 'completed'
    }]

    return(
        <footer className='grid grid-cols-[150px_350px_20px]  shadow-xl p-2 px-5 bg-white  box-border border-2 relative'>
            <div className='flex gap-2 items-center'>
                <strong className=''>2</strong>
                <span className=''>Items left</span>
            </div>
                
            <div className='flex gap-4 items-center'>
                {
                    filterBtn.map(btn => (
                        <FilterBtn {...btn} />
                    ))
                }
                
            </div>
            
            <div className='flex hover:underline w-28 items-center justify-end'>
                <button className=''>
                    Clear Selection
                </button>
            </div>
        </footer>
    )
})

const FilterBtn = memo(props => {
    const { title, onClick , link, isActive } :any = props 
    return(
        <>
        <div className='border-1 p-1 text-center hover:ring ring-pink-100'>
            <a
                href={`#/${link}`}
                className={`${isActive ? 'selected' : ''}`}
                onClick={()=>{}}>
                {title}
            </a>
        </div>
        </>
    )
})
export default Footer;