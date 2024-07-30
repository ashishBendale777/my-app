import { useState } from "react"

const MyState = () => {
    const [count, setCount] = useState(0)
    // var count = 0

    function increment() {
        setCount(count + 1)
        console.log(count)
    }
    function decrement() {
        setCount(count - 1)
        console.log(count)
    }
    return (
        <div>
            <button onClick={() => decrement()}>Decrement</button>
            <span>{count}</span>
            <button onClick={() => increment()}>Increment</button>
        </div>
    )
}

export default MyState