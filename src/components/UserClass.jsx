import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userInfo: {
        name: "dummy",
        html_url: " dummy location",
      },
    };

    console.log(this.props.name + " Child constructor");
  }

  async componentDidMount() {
    //for API Call
    //Works like useEffect
    const data = await fetch("https://api.github.com/users/riya");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    console.log(this.props.name + " Child component did mount");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }
  componentWillUnmount(){
    console.log("Component will unmount");
  }
  render() {
    console.log(this.props.name + " Child render");
    const{name, html_url, avatar_url} = this.state.userInfo;
    
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h2>Follow:{ html_url}</h2>
       
      </div>
    );
  }
}

export default UserClass;
