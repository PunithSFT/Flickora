import { Avatar } from '@mui/material';
import React from 'react';


function Suggestions() {
  return (
    <div className='suggestions mt-[30px] mr-[20px]' >
      <div className='suggestions_title text-gray-500 font-semibold'>Suggestions for you</div>
      <div className='suggestions_usernames'>


        <div className='suggestions_username flex justify-between mt-[15px]'>
          <div className='username_left flex items-center'>
            <span className='avatar'>
              <Avatar className='mr-[10px]'>R</Avatar>
            </span>
            <div className='username_info flex flex-col'>
              <span className='username font-semibold text-[15px]'>Punith</span>
              <span className='relation text-gray-400 text-[12px]'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button text-[#0095f6] font-semibold text-[13.5px] hover:text-white hover:cursor-pointer'>Follow</button>
        </div>

        <div className='suggestions_username flex justify-between mt-[15px]'>
          <div className='username_left flex items-center'>
            <span className='avatar'>
              <Avatar className='mr-[10px]'>R</Avatar>
            </span>
            <div className='username_info flex flex-col'>
              <span className='username font-semibold text-[15px]'>Punith</span>
              <span className='relation text-gray-400 text-[12px]'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button text-[#0095f6] font-semibold text-[13.5px] hover:text-white hover:cursor-pointer'>Follow</button>
        </div>

        <div className='suggestions_username flex justify-between mt-[15px]'>
          <div className='username_left flex items-center'>
            <span className='avatar'>
              <Avatar className='mr-[10px]'>R</Avatar>
            </span>
            <div className='username_info flex flex-col'>
              <span className='username font-semibold text-[15px]'>Punith</span>
              <span className='relation text-gray-400 text-[12px]'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button text-[#0095f6] font-semibold text-[13.5px] hover:text-white hover:cursor-pointer'>Follow</button>
        </div>

        <div className='suggestions_username flex justify-between mt-[15px]'>
          <div className='username_left flex items-center'>
            <span className='avatar'>
              <Avatar className='mr-[10px]'>R</Avatar>
            </span>
            <div className='username_info flex flex-col'>
              <span className='username font-semibold text-[15px]'>Punith</span>
              <span className='relation text-gray-400 text-[12px]'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button text-[#0095f6] font-semibold text-[13.5px] hover:text-white hover:cursor-pointer'>Follow</button>
        </div>

        <div className='suggestions_username flex justify-between mt-[15px]'>
          <div className='username_left flex items-center'>
            <span className='avatar'>
              <Avatar className='mr-[10px]'>R</Avatar>
            </span>
            <div className='username_info flex flex-col'>
              <span className='username font-semibold text-[15px]'>Punith</span>
              <span className='relation text-gray-400 text-[12px]'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button text-[#0095f6] font-semibold text-[13.5px] hover:text-white hover:cursor-pointer'>Follow</button>
        </div>
        </div>
    </div>
  )
}

export default Suggestions