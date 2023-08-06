import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import {BiLogoMeta} from 'react-icons/bi'
import {BsGoogle} from 'react-icons/bs'
import {BiLogoUpwork} from 'react-icons/bi'
import {MdOutlineGroupWork} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'


const Data = [
    {
        id: 1,
        jobTitle: 'Software Engineer',
        time: 'Now',
        location: 'Canada',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti, laboriosam!',
        companyName: 'Meta.',
    },
    {
        id: 2,
        jobTitle: 'Data Analyt',
        time: '3min',
        location: 'United States',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti, laboriosam!',
        companyName: 'Google.',
    },
    {
        id: 3,
        jobTitle: 'UI Designer',
        time: '10Hrs',
        location: 'United Kingdom',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti, laboriosam!',
        companyName: 'Apple inc.'
    },
    {
        id: 4,
        jobTitle: 'UI Designer',
        time: '10Hrs',
        location: 'United Kingdom',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti, laboriosam!',
        companyName: 'Apple inc.'
    },
    {
        id: 5,
        jobTitle: 'UI Designer',
        time: '10Hrs',
        location: 'United Kingdom',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti, laboriosam!',
        companyName: 'Apple inc.'
    },
    {
        id: 6,
        jobTitle: 'UI Designer',
        time: '10Hrs',
        location: 'United Kingdom',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti, laboriosam!',
        companyName: 'Apple inc.'
    },
    {
        id: 7,
        jobTitle: 'UI Designer',
        time: '10Hrs',
        location: 'United Kingdom',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti, laboriosam!',
        companyName: 'Apple inc.'
    },
    {
        id: 8,
        jobTitle: 'UI Designer',
        time: '10Hrs',
        location: 'United Kingdom',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti, laboriosam!',
        companyName: 'Apple inc.'
    }, 
]

const Job = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10 '>

        {
            Data.map(({id, companyLogo, jobTitle, time, location, desc, companyName}) => {
                return (
                    <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg'>
                        <span className='flex justify-between items-center gap-4'>
                            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{jobTitle}</h1>
                            <span className='flex items-center gap-1 text-[#ccc]'>
                                <BiTimeFive className='' /> {time}
                            </span>
                        </span>

                        <h6 className='text-[#ccc]'>{location}</h6>


                        <p className='text-lg text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

                        <div className='company flex items-center gap-2'>
                            <BiLogoMeta className='w-[10%] text-xl text-blueColor group-hover:text-white'/>
                            <span className='text-[14px] py-[1rem] block group-hover:text-white'>{companyName}</span>
                        </div>

                        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                            Apply Now
                        </button>



                    </div>
                )
            })
        }

      </div>
    </div>
  )
}

export default Job
