import React from 'react'
import { useMeteors } from '../hooks/useMeteors'

const MeteorsMap = () => {

    const { mapContainer } = useMeteors()

    return (
        <div
            ref={mapContainer}
            style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
        />
    )
}

export default MeteorsMap