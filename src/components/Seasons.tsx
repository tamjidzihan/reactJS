// import React from 'react'
// import { useState } from 'react';
// import { MouseEvent } from 'react';

// function Seasons() {
//     let seasons = [
//         'Summer',
//         'The rainy-season',
//         'The autumn',
//         'Late-autumn',
//         'Winter',
//         'Spring'
//     ]
//     // seasons = [];
//     const message = seasons.length === 0 && <p className=' lead '>No Item Found</p>


//     const [selecetedIndex, setSelecetedIndex] = useState(-1)

//     return (
//         <> <div className='container my-5'>
//             <h1 className=' text-uppercase bg-primary text-center text-white rounded-5 '>seasons of bangladesh</h1>
//             {message}
//             <ul className="list-group" >
//                 {seasons.map((season, index) =>
//                     <li
//                         className={selecetedIndex === index
//                             ? "list-group-item active"
//                             : "list-group-item "}
//                         key={season}
//                         onClick={(e) => {
//                             setSelecetedIndex(index)
//                             // console.log(`Button click index=${index + 1} : ${season}, browser event: ${e}`)
//                             console.log(e)
//                         }
//                         }
//                     > {index + 1}: {season}</li>
//                 )}

//             </ul>
//         </div >
//         </>
//     )
// }

// export default Seasons;
