import React from 'react'

// function Button({incre}) {
//     console.log("child render");
    
//   return (
//     <div>
//         <button className="btn btn-success px-4" onClick={incre}>
//             <i className="bi bi-dash-lg"></i> +
//           </button>
//     </div>
//   )
// }

const Button = React.memo(({incre})=>{
       console.log("child render");
    
  return (
    <div>
        <button className="btn btn-success px-4" onClick={incre}>
            <i className="bi bi-dash-lg"></i> +
          </button>
    </div>
  )
})

export default Button