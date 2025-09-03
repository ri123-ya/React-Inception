import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count1: 1,
        }
    }
  render() {
    const {name} = this.props;
    const { count, count1} = this.state;
    return (
      <div className="user-card">
        <p>Count Class = {count}</p>
                <p>Count Class1 = {count1}</p>

        <h2>Name: {name}</h2>
        <h2>Age: 23</h2>
        <h2>Place: Bangalore</h2>
      </div>
    );
  };
};

export default UserClass;
