import { Link } from "react-router-dom"

function Component2() {
 return(
  
  <div className='bg-black w-screen flex flex-col items-center justify-center text-3xl '>
  <h1 className="italic text-gray-700 " >Página 2</h1>

  <div className="text-white">Páginas</div>
  <div className="text-white flex py-4 gap-5">
    <div className="hover:bg-pink-600 rounded"><Link to="/">Home</Link></div>
    <div className="hover:bg-pink-600 rounded"><Link to="/Component1">About</Link></div>
    <div className="hover:bg-pink-600 rounded"><Link to="/Component2">Contact</Link></div> 
    <div className="hover:bg-pink-600 rounded"><Link to="/Component3">Info</Link></div>
  </div>
  
  </div>
  
  
  )
 
}
export default Component2
