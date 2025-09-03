import {useState} from "react";


const User = ({name}) => {
    const [count, setCount] = useState(0);
        const [count1] = useState(1);

  return (
    <div className="user-card">
        <p>Count Function = {count}</p>
         <button onClick={()=>{
            setCount(count+1)
         }}>Function Increase</button>

      <h2>Name: {name}</h2>
      <h2>Age: 23</h2>
      <h2>Place: Bangalore</h2>
    </div>
  );
};

export default User;



