import SimpleImageSlider from "react-simple-image-slider"
import './imageslider.css'

const images = [
    { url: "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" },
    { url: "https://images-na.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/2020/Rain_Duet_Amazon_Banner_1500x300-01._SX3000_QL85_.jpg" },
    { url: "https://images-na.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/Brand/Havells/IR__Smart_Socket_1500X300._CB635576681_.jpg" },
    { url: "https://images-na.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/Store/Tools--home-PC._CB651716570_.jpg" },
  
  ]

export const HomepageSlider=()=>{
  
    return(
        <div className="imageslider">
             <SimpleImageSlider
        width={"80%"}
        height={280}
        object-fit={"contain"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
        </div>
    )
}