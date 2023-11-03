import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import VolumeList from '../../Components/VolumeList/VolumeList'

const VolumesPage = () => {


const [element ,setElement] = useState([])





    useEffect(()=>{
      

        async function fetchVolumes(){
            const res =await fetch(`${API_URL}/books?_embed=volumes`)
            const volumeData = await res.json()
           setElement(volumeData)
            
         
        }
        fetchVolumes()
        
    },[])
console.log(element)
  return (
    <VolumeList volumes={element}/>
  )
}

export default VolumesPage