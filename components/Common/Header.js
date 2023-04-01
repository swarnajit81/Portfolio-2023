import React from 'react'
import { Columns, Grid } from 'react-feather'


const Header = ({view , toggleView}) => {
  return (
    <header className='flex items-center absolute right-[1.6rem] top-[5rem] z-10' >
        <button onClick={() => toggleView(!view)} className='bg-white border-none shadow-none  flex p-[10px] border-[1px] border-royal-orange hover:bg-royal-orange transition-all hover:text-white text-black duration-300' >
            {view ? <Columns /> : <Grid />}
        </button>
    </header>
  )
}

export default Header