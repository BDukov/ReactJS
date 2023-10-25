import "../node_modules/react/umd/react.production.min.js"; //Import REACT
import "../node_modules/react-dom/umd/react-dom.production.min.js"; //Import REACT DOM

var rootDomElement = document.getElementById('root'); //GET DOM from html

var root = ReactDOM.createRoot(rootDomElement); //Create root DOM

// const reactHeadingElement = React.createElement('h1', {}, 'Hellow From JSX'); //Create element
// const reactSecondHeading =  React.createElement('h2', {}, "The best syntax ever!")
// const header = React.createElement('header', { clssName: 'site-header'}, reactHeadingElement, reactSecondHeading);


var headerJSX = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello from JSX"
    ),
    React.createElement(
        "h2",
        null,
        "The best syntax ever"
    )
);

// root.render(header)   //Render Heading Element

root.render(headerJSX);