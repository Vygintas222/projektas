import { Link } from 'react-router-dom'

const VolumeItem = ({data}) => {
  
  return (
    <a href={`#${data.id}`}>{data.title}</a>
  )
}

export default VolumeItem