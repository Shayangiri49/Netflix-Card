import { netflixData } from "./Data/NetflixData"
import Netflix from "./components/Netflix"

function App() {
  return (
      <div className="p-[30px] grid grid-cols-4 max-[500px]:grid-cols-1 max-[800px]:grid-cols-2 max-[1050px]:grid-cols-3 gap-10 justify-center ">
        {netflixData.map((v, i) => {
          return (
            <Netflix nitems={v} key={i} />
          )
        })}
      </div>
  )
}

export default App
