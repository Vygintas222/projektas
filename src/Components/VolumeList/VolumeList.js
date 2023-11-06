import React from 'react'
import VolumeItem from '../VolumeItem/VolumeItem'
import styles from './VolumesList.module.scss'
import Container from '../Container/Container'
const VolumeList = ({volumes}) => {

    const VolumeElement = volumes.map(volume =>(<VolumeItem key={volume.id} data={volume} />)

        
    
)
  return (
   <Container>
      <div className={styles.volumeList}>

        {VolumeElement}
      </div>
   </Container>
    
  )
}

export default VolumeList