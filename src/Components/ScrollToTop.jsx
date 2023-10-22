import {useRef, useState, useEffect} from "react";
import {AiOutlineArrowUp} from "react-icons/ai";
import Header from "./Header";



export default function ScrollToTop(){

    const [isNavVisible, setIsNavVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsNavVisible(true)

            }
            else{
                setIsNavVisible(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
        
            
        
    

    const buttonRef = useRef(null)

    const scrollTop = () => {

        window.scrollTo({
            top:0,
            scroll: 'scroll'
        })
    }

    return(


        <>
          <div>
      {isNavVisible ?  
      <button ref={buttonRef} onClick={scrollTop} className="scroll-to-top-button" ><AiOutlineArrowUp /></button> : null
      }
      
    </div>
        
        </>

    );
}