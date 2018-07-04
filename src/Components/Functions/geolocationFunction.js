
function geo_success(position) {
    console.log(position.coords.latitude, position.coords.longitude);
  } 
function geo_error() {
 console.log('No position available!');
}
let geo_options = {
// enableHighAccuracy: true, 
maximumAge        : 30000, 
timeout           : 27000
};

let userLocation = navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);

export default userLocation; 