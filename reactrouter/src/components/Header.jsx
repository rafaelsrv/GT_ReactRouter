import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <>
        
            <nav>
                
            <div className="h-full bg-black">
                <div className="flex flex-col bg-indigo-400 h-1/2 rounded-xl " >
                <ul>
                    <Link to="/"><li className=" m-10 text-center bg-blue-500 hover:bg-pink-600 text-white font-bold py-4 px-4 rounded whitespace-nowrap">HOME</li></Link> 
                    <Link to="/Component1"><li className=" text-center m-10 bg-blue-500 hover:bg-pink-600 text-white font-bold py-4 px-4 rounded whitespace-nowrap">ABOUT</li></Link> 
                    <Link to="/Component2"><li className=" m-10 text-center bg-blue-500 hover:bg-pink-600 text-white font-bold py-4 px-4 rounded whitespace-nowrap">CONTACT</li></Link> 
                    <Link to="/Component3"><li className=" m-10 text-center bg-blue-500 hover:bg-pink-600 text-white font-bold py-4 px-4 rounded whitespace-nowrap">INFO</li></Link> 
                </ul>
                </div>
                                
                <div className="h-1/2 bg-black"></div>
                
        
            </div>
                    
            </nav>
        
        </>
     );
}
 
export default Header;