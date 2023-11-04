import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"


const VolumeItem = ({ data }) => {
 
  const [volumes, setVolumes] = useState(data.volumes)
  
  const [editing, setEditing] = useState(null)


  const deleteVolumeHandler = async (id, title) => {
    await axios.delete(`${API_URL}/volumes/${id}`)

    toast.error(`Volume: ${title} was deleted`)
    setVolumes((prevState) => prevState.filter((volume) => volume.id !== id))
  }

  const editVolumeHandler = async (volume) => {

    const res = await axios.put(`${API_URL}/volumes/${volume.id}`, { title: volume.title })

    if (res.statusText === 200) {
      
      setVolumes((prevVolumes) =>
        prevVolumes.map((newVolume) => (newVolume.id === volume.id ? { ...newVolume, title: volume.title } : newVolume))
      )

      toast.success(`Volume ${volume.title} was updated`)
    } else {
      console.error('Something went wrong.')
    }

    
    setEditing(null)
  }

  return (
    <div>
  
      <h2>{data.title}</h2>
      <Link to={`/add-new-volume/${data.id}`} >Add volume</Link>
      <ul>
        {volumes.map((volume) => (
          
          <li key={volume.id}>
            {editing === volume.id ? (
              <div>
                <input
                  type="text"
                  value={volume.title}
                  onChange={(event) =>
                    setVolumes((prevVolumes) =>
                      prevVolumes.map((newVolume) => (newVolume.id === volume.id ? { ...newVolume, title: event.target.value } : newVolume))
                    )
                  }
                />
                
                <button onClick={() => editVolumeHandler(volume)}>Save</button>
                <button onClick={() => setEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {volume.title}{' '}
               
                <button onClick={() => setEditing(volume.id)}>Edit</button>
                <button onClick={() => deleteVolumeHandler(volume.id, volume.title)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VolumeItem
