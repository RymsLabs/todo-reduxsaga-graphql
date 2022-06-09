import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { ActiveTodo, AllTodo, CompletedTodo } from '../actions/index';
const Footer = memo(props => {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(CompletedTodo());
    }

    const handleActive = () => {
        dispatch(ActiveTodo());
    }

    const handleAll = () => {
        dispatch(AllTodo());
    }

    const filterBtn = [{
        id: 1,
        title: 'All',
        isActive: true,
        link: ''
    }, {
        id: 2,
        title: 'Active',
        isActive: false,
        link: 'active'
    }, {
        id: 3,
        title: 'Completed',
        isActive: false,
        link: 'completed'
    }]

    const onFiltersClick = (title) => {
        switch (title) {
            case 'All':
                handleAll();
                break;
            case 'Active':
                handleActive();
                break;
            case 'Completed':
                handleComplete();
                break;

        }
    }

    return (
        <footer className='grid grid-cols-[150px_350px_20px]  shadow-xl p-2 px-5 bg-white  box-border border-2 relative'>
            <div className='flex gap-2 items-center'>
                <strong className=''>2</strong>
                <span className=''>Items left</span>
            </div>

            <div className='flex gap-4 items-center'>
                {
                    filterBtn.map(btn => {
                        console.log(btn, '>> btn')
                        return (
                            <ul key={btn.id}>
                                {/* do not pass props like -> {...btn} */}
                                <FilterBtn  {...btn} onFiltersClick={onFiltersClick} />
                            </ul>

                        )
                    }
                    )
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

const FilterBtn = memo((props: any) => {
    const { title, onFiltersClick, isActive } = props

    return (
        <>
            <div className='border-1 p-1 text-center hover:cursor-pointer hover:ring ring-pink-100'>
                <button
                    className={`${isActive ? 'selected' : ''}`}
                    onClick={() => onFiltersClick(title)}
                >
                    {title}
                </button>
            </div>
        </>
    )
})
export default Footer;