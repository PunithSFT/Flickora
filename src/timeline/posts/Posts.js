import { Avatar } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function Posts({user, postImage, likes, timestamp}) {
  return (
    <div className='post w-[550px mt-[30px] mr-[40px] mb-[50px] ml-[40px]'>
        <div className='post__header flex justify-between flex-row items-center mb-[10px]'>
            <div className='post__headerAuthor flex flex-row items-center font-bold '>
            <Avatar className='mr-[10px]'>{user.charAt(0).toUpperCase}</Avatar>
            {user} • <span className='text-gray-400 text-[15px]'>{timestamp}</span>

            </div>
            <MoreHorizIcon className=' cursor-pointer' />
        </div>
        <div className='post__image'>
          <img className='w-[100%] rounded-[6px] border-[0.6px] border-[rgb(128,128,128,0.516)]' src={postImage} alt=''></img>
        </div>
        <div className='post__footer'>
          <div className='post__footerIcons flex flex-row items-center justify-between'>
            <div className='post__iconsMain'>
              <FavoriteBorderIcon className='Post_icon cursor-pointer mr-1' />
              <ChatBubbleOutlineIcon className='Post_icon cursor-pointer mr-1'/>
              <TelegramIcon className='Post_icon cursor-pointer mr-1'/>
            </div>
            <div className='post__iconSave'>
              <BookmarkBorderIcon className='Post_icon cursor-pointer '/>
            </div>
          </div>
          Liked by {likes} people
        </div>
    </div>
  )
}

export default Posts