import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductElectronics } from "../components/imageelctronics"
import { ProductShow } from "../components/ImageShow "
import { fetchData, fetchGujData, fetchPackageData } from "../Redux/Actions"
import { HomepageSlider } from "./SliderHome"

export const HomePage=()=>{
  const dispatch=useDispatch()
 const elctronics=useSelector((state)=>state.productReducer.electronicsData)
  const databooks=useSelector((state)=>state.productReducer.products)
  useEffect(()=>{
    dispatch(fetchPackageData())
    dispatch(fetchGujData())

  },[])

//  console.log(elctronics,"elc")
  // console.log(databooks)
    return(
        <div>
          <div className="imageslider">
            <HomepageSlider/>
          </div>
          <div className="headingbooks">
             
             <p className="bookspara1">Limited offers</p>
             <p className="bookspara2">Winter Sale</p>
             <p className="bookspara">Get 20% Discounts On Books</p>
          </div>
          <div className="booksshow">
                
                 <div className="center-booksshow">
                 
                  {databooks?.map((el)=><ProductShow type={el.type} image={el.image}/>)}
                 
                 </div>
                 
          </div>
          <div className="headingclothes">
             <div className="heading-right">
            <p className="clothespara3">Get Upto 50% discount lucky winner</p>     </div>
             <div className="heading-left">
             <p className="clothespara1">Limited offers</p>
             <p className="clothespara2">Winter Sale</p>
             <p className="clothespara">Get 20% Discounts On Electronics</p>
             </div>
            
            
          </div>
          <div className="booksshow">
                
                <div className="center-booksshow">
                
                 {elctronics?.map((el)=><ProductElectronics type={el.type} image={el.image}/>)}
                
                </div>
                
         </div>
        
        </div>
    )
}