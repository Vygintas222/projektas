import axios from "axios"
import { useState } from "react"
import { API_URL } from "../../config"
import { toast } from "react-toastify"


const VolumeItem = ({ data }) => {
  const { id } = data
  const [volumes, setVolumes] = useState(data.volumes)
  const [title, setTitle] = useState('')
  const [volumeDeleted, setVolumeDeleted] = useState(false)

  const [editing, setEditing] = useState(null)

  const titleHandler = (event) => {
    setTitle(event.target.value)
  }

  const newVolumeHandler = async (event) => {
    event.preventDefault()

    const newVolume = {
      bookId: id,
      title,
    }

    const res = await axios.post(`${API_URL}/volumes`, newVolume)

    if (res.statusText === 'Created') {
      setVolumes([...volumes, newVolume])
      toast.success(`Volume ${title} was added`)
    } else {
      console.error('Something went wrong.')
    }

    setTitle('')
  }

  const deleteVolumeHandler = async (id, title) => {
    await axios.delete(`${API_URL}/volumes/${id}`)

    toast.error(`Volume: ${title} was deleted`)
    setVolumes((prevState) => prevState.filter((volume) => volume.id !== id))
  }

  const editVolumeHandler = async (volume) => {

    const res = await axios.put(`${API_URL}/volumes/${volume.id}`, { title: volume.title })

    if (res.statusText === 'OK') {
      
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
      <fieldset>
        <legend>Add Volume</legend>
        <form onSubmit={newVolumeHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input name="title" id="title" onChange={titleHandler} value={title}></input>
          </div>
          <button type="submit">Add</button>
        </form>
      </fieldset>
      <h2>{data.title}</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            {editing === volume.id ? (
              <div>
                <input
                  type="text"
                  value={volume.title}
                  onChange={(e) =>
                    setVolumes((prevVolumes) =>
                      prevVolumes.map((newVolume) => (newVolume.id === volume.id ? { ...newVolume, title: e.target.value } : newVolume))
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
