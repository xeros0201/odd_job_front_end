
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'
import { API_KEY } from '../../instances'

const center = { lat: 48.8584, lng: 2.2945 }

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:"AIzaSyDAY9MTrjco1CsK-ZlDggeR0QgkEgKdm2o",
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return  <Skeleton variant="rectangular" width={210} height={118} />
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <div className=" relative flex flex-col items-center h-full w-full"
  
    >
      <div className=" absolute left-0 top-0 h-full w-full" >
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
      <div
      className=" p-4 rounded-lg bg-white shadow-neutral-200 w-80 z-[1]"
  
      >
        <Stack spacing={2} justifyContent='space-between'>
          <div className="flex-grow"  >
            <Autocomplete>
              <input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </div>
          <div  className="flex-grow">
            <Autocomplete>
              <input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </div >

          <ButtonGroup>
            <Button color='success' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            <Button
       
              endIcon={<AccessTimeFilledIcon sx={{ fontSize:20}} />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </Stack>
        <Stack spacing={4} mt={4} justifyContent='space-between'>
          <Typography>Distance: {distance} </Typography>
          <Typography>Duration: {duration} </Typography>
          <Button
       
       endIcon={<MyLocationIcon sx={{ fontSize:20}} />}
       isRound
       onClick={() => {
         map.panTo(center)
         map.setZoom(15)
       }}
     />
       
        </Stack>
      </div>
    </div>
  )
}

export default Map