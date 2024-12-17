import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  return (
    <div className='sidenav fixed flex flex-col justify-between z-10'>
      <img className=' w-[120px] m-[25px]' src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt=''/>
    
    <div className='sidenav__buttons flex flex-col '>
      <button className='sidenav__button flex flex-row items-center mt-[5px] mb-[10px] mr-[5px] ml-[10px] pt-[10px] pb-[15px] pr-[10px] pl-[10px] rounded-[15px] w-[100%] hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.128]'>
        <HomeIcon/>
        <span className='text-18px font-semibold ml-[10px]'>Home</span> 
      </button>

      <button className='sidenav__button flex flex-row items-center mt-[5px] mb-[10px] mr-[5px] ml-[10px] pt-[10px] pb-[15px] pr-[10px] pl-[10px] rounded-[15px] w-[100%] hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.128]'>
        <SearchIcon/>
        <span className='text-18px font-semibold ml-[10px]'>Search</span> 
      </button>

      <button className='sidenav__button flex flex-row items-center mt-[5px] mb-[10px] mr-[5px] ml-[10px] pt-[10px] pb-[15px] pr-[10px] pl-[10px] rounded-[15px] w-[100%] hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.128]'>
        <ExploreIcon/>
        <span className='text-18px font-semibold ml-[10px]'>Explore</span> 
      </button>

      <button className='sidenav__button flex flex-row items-center mt-[5px] mb-[10px] mr-[5px] ml-[10px] pt-[10px] pb-[15px] pr-[10px] pl-[10px] rounded-[15px] w-[100%] hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.128]'>
        <SlideshowIcon/>
        <span className='text-18px font-semibold ml-[10px]'>Reels</span> 
      </button>

      <button className='sidenav__button flex flex-row items-center mt-[5px] mb-[10px] mr-[5px] ml-[10px] pt-[10px] pb-[15px] pr-[10px] pl-[10px] rounded-[15px] w-[100%] hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.128]'>
        <ChatIcon/>
        <span className='text-18px font-semibold ml-[10px]'>Messages</span> 
      </button>

      <button className='sidenav__button flex flex-row items-center mt-[5px] mb-[10px] mr-[5px] ml-[10px] pt-[10px] pb-[15px] pr-[10px] pl-[10px] rounded-[15px] w-[100%] hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.128]'>
        <FavoriteBorderIcon/>
        <span className='text-18px font-semibold ml-[10px]'>Notification</span> 
      </button>

      <button className='sidenav__button flex flex-row items-center mt-[5px] mb-[10px] mr-[5px] ml-[10px] pt-[10px] pb-[15px] pr-[10px] pl-[10px] rounded-[15px] w-[100%] hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.128]'>
        <AddCircleOutlineIcon/>
        <span className='text-18px font-semibold ml-[10px]'>Create</span> 
      </button>
      </div>
      <div className='sidenav__more fixed bottom-[3px]'>
        <button className='sidenav__button flex flex-row items-center mt-[5px] mb-[10px] mr-[5px] ml-[10px] pt-[10px] pb-[15px] pr-[10px] pl-[10px] rounded-[15px] w-[100%] hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.128]'>
          <MenuIcon/>
          <span className='text-18px font-semibold ml-[10px]'>More</span>
        </button>
      </div>
      </div>
  )
}

export default Sidenav