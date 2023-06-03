'use client';

import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';

const Library = () => {
    const authModel = useAuthModal();
    const {user} = useUser();
    const uploadModel = useUploadModal();

    const onClick = () => {
        //handle upload later
        if(!user) {
            return authModel.onOpen();
        }
        //TODO: check for subscription

        return uploadModel.onOpen();
    };

  return (
    <div className="flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4">
            <div 
            className="inline-flex items-center gap-x-2 ">
                <TbPlaylist size={26}
                className='text-neutral-400'/>
                <p className='text-neutral-400 font-medium text-md '>
                    Your Library
                </p>
            </div>
        <AiOutlinePlus 
        onClick={onClick}
        className='text-neutral-400 cursor-pointer hover:text-white transition'
        size={20}/>
        </div>
        <div className='flex flex-col gap-y-2 px-3 mt-4'>
            List of songs
        </div>
    </div>
  )
}

export default Library