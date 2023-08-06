import React from 'react' 
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-12 '>

      <form action=''>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
            <div className='flex gap-2 items-center'>
                <AiOutlineSearch className='text-2xl icon'/>
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by jobs...'/>
                <AiOutlineCloseCircle className='text-xl text-[#a5a6a6] hover:text-textColor icon'/>
            </div>

            <div className='flex gap-2 items-center'>
                <BsHouseDoor className='text-2xl icon'/>
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company...'/>
                <AiOutlineCloseCircle className='text-xl text-[#a5a6a6] hover:text-textColor icon'/>
            </div>
            <div className='flex gap-2 items-center'>
                <CiLocationOn className='text-2xl icon'/>
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search for location...'/>
                <AiOutlineCloseCircle className='text-xl text-[#a5a6a6] hover:text-textColor icon'/>
            </div>

            <button className='border-2 border-blueColor bg-blueColor h-full p-2.5 px-10 rounded-[10px] text-white cursor-pointer hover:border-blueColor hover:border-transparent hover:bg-transparent hover:text-blueColor'>Search</button>



        </div>
      </form>

        <div className='secDiv flex items-center gap-10 justify-center'>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by:</label>

                <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="" selected disabled>--- select one ---</option>
                    <option value="">Relevance</option>
                    <option value="">Inclusive</option>
                    <option value="">Starts With</option>
                    <option value="">Contains</option>
                </select>
            </div>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor='type' className='text-[#808080] font-semibold'>Type:</label>

                <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="" selected disabled>--- select one ---</option>
                    <option value="">Full-time</option>
                    <option value="">Part-time</option>
                    <option value="">Remote</option>
                    <option value="">Internship</option>
                    <option value="">Contract</option>
                </select>
            </div>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor='level' className='text-[#808080] font-semibold'>Level:</label>

                <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="" selected disabled>--- select one ---</option>
                    <option value="">Intern</option>
                    <option value="">Entry-level</option>
                    <option value="">Mid-level</option>
                    <option value="">Senior</option>
                </select>
            </div>

            <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
        </div>

    </div>
  )
}

export default Search
