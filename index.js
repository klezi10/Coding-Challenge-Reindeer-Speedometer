const speedometer = document.getElementById('speedometer');
const select = document.getElementById('select');
const time = document.getElementById('time');
let currentLocation = 'North Pole';
let timeTaken = 0;

let destination = [
  {
    name: 'Munich',
    distanceFromPrevDestination: 2892,
  },
  {
    name: 'Kiev',
    distanceFromPrevDestination: 1111,
  },
  {
    name: 'Ulaanbaatar',
    distanceFromPrevDestination: 5324,
  },
  {
    name: 'Sydney',
    distanceFromPrevDestination: 5458,
  },
  {
    name: 'Tijuana',
    distanceFromPrevDestination: 6531,
  },
  {
    name: 'Chicago',
    distanceFromPrevDestination: 1729,
  },
];

let div = document.createElement('div');
div.textContent = `Location: ${currentLocation}`;
speedometer.appendChild(div);

function calculateSpeed() {
  let speed = 0;
  currentLocation = select.value;

  for (let i = 0; i < destination.length; i++) {
    const prevDistance = destination[i].distanceFromPrevDestination;

    if (currentLocation.match(destination[i].name)) {
      // speed = distance/time
      speed = prevDistance / time.value;
      speedometer.textContent = `${Math.round(speed)} km/hr`;
    }
  }
}
document.addEventListener('keyup', calculateSpeed);

// Task:
// - Retrieve distance from previous destination from array of objects.
// - Calculate speed and round speed to an integer (whole number).
// - Display speed in speedometer paragraph.

// Stretch goals:
// - Display location as North Pole on pageload.
