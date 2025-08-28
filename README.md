/*
const heading = React.createElement(
    "div",
    {id:'parent'},
    "I'm react child");

console.log(heading); //return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/******************/

//JSX !== HTML but similar to it
//this is not proper Jsx that Js engine understand (ECMAscript)
//parcel will transpiled this before it reaches JS - Babel does it

//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

//React Element
const jsxHeading = <h1 id="parent">- Namaste REact using JSX</h1>;

//React Functional Components
const Components2 = () => <h1>This is Functional components2</h1>;

//this is components composition
const Components = () => (
  <div id="container">
    {jsxHeading}
    
    <h1>This is Functional components</h1>
    {Components2()}
    <Components2></Components2>
    <Components2 />
    
    <NormalComponent/>
  </div>
);

const NormalComponent = function (){
    return <h1>We can use Normal JS function as  react function</h1>
}

//for multiple line use () for babel to understand
/*const jsxHeading2 = (<h1 id="parent">Namaste
    REact using JSX2</h1>)*/

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
root.render(<Components />);

# Food App Structure

/*
*Header
-Logo
-Nav
*Body
-Search
-Resturant Card container
  -Resturant list
     -Img
     -name,rating,cusine,price
*Footer
-Copyright
-Links
-Address
-Contact
*/

....
# HOOKS

- Normal JS utility functions 
- IMP : useState, useEffect

# UseState

- Whenever State variable change  react rerender the component.(reconciliation cycle)
 (State variable keep in sync UI Layer and Data Layer => Efficient DOM Manipulation)

 
# UseEffect
- 2 Argument 
     - Callback function
     - dependency array
- it is rendered after the components are rendered 
- IMP: Body-> Render -> Api call -> render
                           |
                       with useEffect

# Optional Chaining
-  setListOfResturants(json?.data?.cards[2]?.data?.data?.cards);
