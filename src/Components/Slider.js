import "./styles/Slider.css";
import  {useState} from "react";
export default function Slider(){
    const [index, setIndex] = useState(0);
    // const images = ["images/fish1.jpg","images/fish2.jpg","images/fish3.jpg"];
    const images = ["https://rainbowit.net/html/trydo/assets/images/bg/bg-image-30.jpg",
                    "https://rainbowit.net/html/trydo/assets/images/bg/bg-image-29.jpg"];

    function nextImage(){            
            if(index === images.length-1){
                setIndex(0);
            }else{
                setIndex(index+1)
            }
    }
    function prevImage(){
            if(index === 0){
                setIndex((images.length-1));
            }else{
                setIndex(index-1)
            }
    }
    return(
        <div className="slider">
            <img src={images[index]} alt=""/>
            <div className="prev-btn" onClick={prevImage}>←</div>
            <div className="next-btn" onClick={nextImage}>→</div>
        </div>
    );
}


// import "./styles/Slider.css";
// import  {useState} from "react";
// export default function Slider(){
//     const [img, setImg] = useState("images/fish1.jpg");
//     const [index, setIndex] = useState(0);
//     const images = ["images/fish1.jpg","images/fish2.jpg","images/fish3.jpg"];
//     // setImg(images[0])
//     function nextImage(){            
//             if(index === images.length-1){
//                 setIndex(0);
//             }else{
//                 setIndex(index+1)
//             }
//             setImg(images[index]);
//     }
//     function prevImage(){
//             if(index === 0){
//                 setIndex((images.length-1));
//             }else{
//                 setIndex(index-1)
//             }
//             setImg(images[index]);
//     }
//     return(
//         <div className="slider">
//             <img src={img} alt=""/>
//             <div className="prev-btn" onClick={prevImage}>prev</div>
//             <div className="next-btn" onClick={nextImage}>next</div>
//         </div>
//     );
// }

// export default function Slider(){
//     return(
//         <div className="slider">
//             <h1>Silide</h1>
//         </div>
//     );
// }

// import "./styles/Slider.css";
// import { useState } from "react";

// export default function Slider() {
//     const [index, setIndex] = useState(0);
//     const images = ["images/fish1.jpg", "images/fish2.jpg", "images/fish3.jpg"];
    
//     function nextImage() {
//         const newIndex = (index + 1) % images.length; // Wrap around using modulo
//         setIndex(newIndex);
//     }

//     function prevImage() {
//         const newIndex = (index - 1 + images.length) % images.length; // Wrap around
//         setIndex(newIndex);
//     }

//     return (
//         <div className="slider">
//             <img src={images[index]} alt="" />
//             <div className="prev-btn" onClick={prevImage}>prev</div>
//             <div className="next-btn" onClick={nextImage}>next</div>
//         </div>
//     );
// }
