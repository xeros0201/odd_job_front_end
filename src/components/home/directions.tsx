import { useEffect, useState } from "react";
import { DirectionsRenderer } from "react-google-maps";

export default function  MapDirectionsRenderer(props:any):any {
  const [directions, setDirections] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const { places, travelMode } = props;

    const waypoints = places.map((p: { latitude: any; longitude: any; }) => ({
      location: { lat: p.latitude, lng: p.longitude },
      stopover: true
    }));
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints
      },
      (result, status) => {
        console.log(result)
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          setError(result);
        }
      }
    );
  });

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    directions && (
      <DirectionsRenderer directions={directions} />
    )
  );
}