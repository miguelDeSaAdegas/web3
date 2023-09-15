import { Header } from "../src/components/Header/Header";
import { Content } from "../src/components/Content/Content";
import { Total } from "../src/components/Total/Total";

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header {...{course}}/>
      <Content {...{part1,part2,part3,exercises1,exercises2,exercises3}}/>
      <Total {...{exercises1,exercises2,exercises3}}/>
    </div>
  )
}

export default App