// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Fetch.css";

// const Fetch = () => {
//   const [cars, setCars] = useState([]);

//   const [newCar, setNewCar] = useState({ id:null,name: "", username: "", email: "" });

//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         const res = await axios.get(
//           `https://jsonplaceholder.typicode.com/users`
//         );
//         setCars(res.data);
//       } catch (error) {
//         console.error("fetch error", error);
//       }
//     };

//     fetchApi();
//     // console.log(cars)
//   }, []);

//   const deleteCar = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

//       setCars(cars.filter((car) => car.id !== id));
//     } catch (error) {
//       console.error("delete error", error);
//     }
//   };


//   const handleUpdate = async() => {

//     try{

    

//     await axios.put(`https://jsonplaceholder.typicode.com/users/${newCar.id}`,newCar );

// //     const updatedUser = cars.map(car => (
// // car.id === newCar.id ? newCar: car
// //     ))
// const updatedUsers = cars.map(car =>
//     car.id === newCar.id ? newCar : car
//   );

//     setCars(updatedUsers)

// setNewCar({id:null,name:'', username: '',email:''})
//     }

//     catch(error){

//         console.error('update error'+error)
//     }



// }

// const addCar = async() => {


//     const res = await  axios.post(`https://jsonplaceholder.typicode.com/users/`,newCar)

//     setCars(prevCar => [...prevCar,res.data])
//     setNewCar({id:null,name:'', username: '',email:''})


// }

//   const handleChange = (e) => {

//     setNewCar(prevCar =>({ ...prevCar, [e.target.name]: e.target.value})) 
//   }

//   const updateCar = (id) => {
//     const carToUpdate = cars.find((car) => car.id === id);
//     setNewCar(carToUpdate);
//   };

//   return (
//     <div className="conatiner">
//       <div>
//         <ul style={{ listStyleType: "none" }}>
//           {cars.map((car) => (
//             <li className="main" key={car.id}>
//               {/* <h1>{car.id}</h1> */}
//               <h1>
//                 {car.id}:{car.name}
//               </h1>
//               <p>{car.username}</p>
//               <p>{car.email}</p>
//               <button onClick={() => deleteCar(car.id)}>delete</button>
//               <button onClick={() => updateCar(car.id)}>update</button>
//             </li>
//           ))}
//         </ul>

//         <button onClick={handleUpdate}>Update Car</button>
//         <button onClick={addCar}>Add Car</button>
//         <label>Name:</label>
//         <input
//           type="text"
//           placeholder=" enter your name"
//           name="name"
//           value={newCar.name}
//           onChange={handleChange}
//         />
//         <label>Username:</label>
//         <input
//           type="text"
//           placeholder=" enter your userName"
//           name="username"
//           value={newCar.username}
//           onChange={handleChange}
//         />
//         <label>Email:</label>
//         <input
//           type="text"
//           placeholder=" enter your eamil"
//           name="email"
//           value={newCar.email}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Fetch;
