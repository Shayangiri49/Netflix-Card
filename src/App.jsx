import { netflixData } from "./Data/NetflixData"
import Netflix from "./components/Netflix"

function App() {
  return (
      <div className="p-[30px] flex flex-wrap gap-10">
        {netflixData.map((v, i) => {
          return (
            <Netflix nitems={v} key={i} />
          )
        })}
      </div>
  )
}

export default App
