import Counter from "./01-useState/Counter"
import CounterWIthCustomHook from "./01-useState/CounterWIthCustomHook"
import SimpleForm from "./02-useEffect/SimpleForm"

const HooksApp = () => {
  return (
    <>
    <h1>HooksApp</h1>
    <Counter></Counter>
    <CounterWIthCustomHook></CounterWIthCustomHook>
    <SimpleForm></SimpleForm>
    </>
  )
}

export default HooksApp