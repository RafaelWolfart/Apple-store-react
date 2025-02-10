import { useState } from 'react';


export default function ItemCount() {

    const [count, setCount] = useState(0);

    return(
        <div className="item-count">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span> {count} </span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )

}