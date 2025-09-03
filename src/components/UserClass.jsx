import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count: 0,
        }
    }
  render() {
    const {name} = this.props;
    const { count} = this.state;
    return (
      <div className="user-card">
        <p>Count Class = {count}</p>
        <button onClick={()=>{
            this.setState({
                count: this.state.count +1,
            })
        }}>Class Increase</button>

        <h2>Name: {name}</h2>
        <h2>Age: 23</h2>
        <h2>Place: Bangalore</h2>
      </div>
    );
  };
};

export default UserClass;
