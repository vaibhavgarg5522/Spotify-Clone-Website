import React from 'react'
import Navbar from '../navbar/Navbar'
import { albumsData, songsData } from '../../assets/assets'
import AlbumItem from '../albumitem/AlbumItem'
import SongItem from '../songitem/SongItem'

const DisplayHome = () => {
  return (
    <>
    <Navbar></Navbar>
    {/* {--------Div Container[1]---------} */}
    <div className='my-5 font-bold text-2xl'>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'>
       {albumsData.map((item,index)=>{
        return <AlbumItem key={index} item ={item.name}  desc ={item.desc} id ={item.id}  image ={item.image}> 
        </AlbumItem>
      })}
      </div>
      </div>

      {/* {--------Div Container[2]---------} */}

      <div className='my-5 font-bold text-2xl'>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'>
       {songsData.map((item,index)=>{
        return <SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}></SongItem>
      })}
      </div>
      </div>
    </>
  )
}

export default DisplayHome