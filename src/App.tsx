import {useState} from "react"
import "./components/styles/bar.css"
import "./components/styles/app.css"
import First from "./components/first"
import Second from "./components/second"
import Third from "./components/third"


export default function App(){
  const [pages, Setpages] = useState("first")
  return(
    <div>
      <div className="bar">
            <button  className="barbtn" onClick={()=> Setpages("first")} >🏠Home</button>
            <button  className="barbtn" onClick={()=> Setpages("second")}>🎞️Movies</button>
            <button  className="barbtn" onClick={()=> Setpages("third")}>🎮Videogames</button>
      </div>

      <div className="appBody">
      {pages === "first" && <First/>}
      {pages === "second" && <Second/>}
      {pages === "third" && <Third/>}
  

      </div>


    </div>
  )
}