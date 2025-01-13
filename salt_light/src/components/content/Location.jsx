// import React, { useState, useEffect } from "react";

// export function Location(){

//   const [location, setLocation] = useState({ latitude: null, longitude: null });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       // Geolocation is available
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         (error) => {
//           setError(error.message);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   console.log(location)

//   return (
//     <div>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <p>
//         </p>
//       )}
//     </div>
//   );
// };
