import { useState, useEffect } from "react"
import Loading from "./components/Loading"
import Main from "./components/Main"
function App() {
  const [isLoading, setLoading] = useState(true)
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
      
    },2000)
  })
  return (
    <>
      {
        isLoading ? <Loading/> : <Main/>
      }
    </>
  )
}

export default App
