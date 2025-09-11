import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is about page.</p>
      {/**<User  name={"Riya (function)"}/>*/}
      <UserClass name={"Riya (Class)"}/>
     

    </div>
  )
}

export default About;
