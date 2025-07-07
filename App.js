const heading = React.createElement(
    "div",
    {id:'parent'},
     React.createElement(
    "div",
    {id:'child'},
    React.createElement("h1",{},"I'm react child")
    
)
);
console.log(heading); //return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>I'm react children</h1>
    </div>
</div> */}