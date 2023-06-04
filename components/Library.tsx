'use client';

import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';
import { Song } from '@/types';
import MediaItem from './MediaItem';
import useOnPlay from '@/hooks/useOnPlay';
import useSubscribeModal from '@/hooks/useSubscribeModal';

interface LibraryProps{
    songs: Song[];
  }


const Library:React.FC<LibraryProps> = ({
    songs
}) => {
    const authModel = useAuthModal();
    const { user, subscription } = useUser();
    const uploadModel = useUploadModal();
    const onPlay = useOnPlay(songs)
    const subscribeModal = useSubscribeModal();
    
    const onClick = () => {
        //handle upload later
        if(!user) {
            return authModel.onOpen();
        }
      
        if (!subscription) {
          return subscribeModal.onOpen();
        }

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
           {songs.map((item)=>
          <MediaItem
            onClick={(id:string)=>onPlay(id)}
            key={item.id}
            data={item}

          />)}
        </div>
    </div>

  )
}

export default Library