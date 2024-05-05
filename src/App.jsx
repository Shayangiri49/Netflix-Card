import { netflixData } from "./Data/NetflixData"
import Netflix from "./components/Netflix"

function App() {
  return (
    <>
    <h1 className="p-[30px] text-center uppercase text-[23px] tracking-widest font-bold text-[#868686] bg-[#fff] mb-[10px] ">List of top 6 Netflix Series</h1>
    <div className="p-[30px] grid grid-cols-4 max-[500px]:grid-cols-1 max-[800px]:grid-cols-2 max-[1050px]:grid-cols-3 gap-10 justify-center items-center">
        {netflixData.map((v, i) => {
          return (
            <Netflix nitems={v} key={i} />
          )
        })}
      </div>
    </>
      
  )
}

export default App
