import { Position } from "../../store/store";
// Radius of the Earth in meters
const earthRadius = 6371000; // Approximately 6,371 km

function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function calculateHaversineDistance(pos1: Position, pos2: Position): number {
  const { lat: lat1, lng: lng1 } = pos1;
  const { lat: lat2, lng: lng2 } = pos2;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLng = degreesToRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in meters
  const distance = earthRadius * c;

  return distance;
}

export function arePositionsWithin50Meters(
  pos1: Position,
  pos2: Position
): boolean {
  const distance = calculateHaversineDistance(pos1, pos2);
  return distance <= 20;
}
