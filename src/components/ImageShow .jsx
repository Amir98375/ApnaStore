
import './imageShow.css'

export const ProductShow=({type,image})=>{
    return(
       
            <div className="container">
                <div className="main">
                    <img className='image' src={image}/>
                </div>
                <div className="feature">
                
                <p>{type}</p>
              
               
            

                </div>
            </div>
        
    )
}