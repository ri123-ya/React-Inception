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
- Create Local State variable inside functional components
- Whenever State variable change  react rerender the component.(reconciliation cycle)
 (State variable keep in sync UI Layer and Data Layer => Efficient DOM Manipulation)

 
# UseEffect
- 2 Argument 
     - Callback function
     - dependency array
- it is rendered  every time components are rendered ---> when No dependency Array.
- it is rendred just one time after the component rendered ---> when Empty dependency array []
- it is rendered when the element in dependency array updated ---> [month] 
- IMP: Body-> Render -> Api call -> render
                           |
                       with useEffect

# Optional Chaining
-  setListOfResturants(json?.data?.cards[2]?.data?.data?.cards);

# SPA
- in a single page only the components are interchanged . Whole page is not reloaded.

# React Router Dom
- Routing to diff. pages 
- provides Link, RouterProvider, createBrowserRouter, Outlets

# 2 Types of Routing
- Client Side Routing(Just components interchange there is no netwrok call - only for first time and when calling api )
- Server Side Routing(Earlier apps , server fetch the aboutUs.html and show the page, whole page is reladed)

# Class components
- JS class
- user render method to return JS element

# Decrease the Load Time of our App
- Chunking
- Code Splitting
- Dynamic Bundling
- Lazy Loading
- On Demand Loading
- Dynamic import
- Using this will only load that component when demanded 

# Higher Order Components
- take the components 
- return the enhanced components
