import React from 'react'
import VolumeItem from '../VolumeItem/VolumeItem'
import './VolumesList.css'
const VolumeList = ({volumes}) => {

    const VolumeElement = volumes.map(volume =>{

        return (<VolumeItem key={volume.id} data={volume} />)
    }
)
  return (
    <div className='volumes-list'>
        {VolumeElement}
    </div>
  )
}

export default VolumeList