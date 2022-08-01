import './imageShow.css'

export const ProductElectronics=({type,image})=>{
    return(
       
            <div className="container">
                <div className="main-image">
                    <img className='image-elctr' src={image}/>
                </div>
                <div className="feature">
                
                <p>{type}</p>
              
               
            

                </div>
            </div>
        
    )
}