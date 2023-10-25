import "../node_modules/react/umd/react.production.min.js";   //Import REACT
import "../node_modules/react-dom/umd/react-dom.production.min.js";  //Import REACT DOM

const rootDomElement = document.getElementById('root'); //GET DOM from html

const root = ReactDOM.createRoot(rootDomElement)  //Create root DOM

// const reactHeadingElement = React.createElement('h1', {}, 'Hellow From JSX'); //Create element
// const reactSecondHeading =  React.createElement('h2', {}, "The best syntax ever!")
// const header = React.createElement('header', { clssName: 'site-header'}, reactHeadingElement, reactSecondHeading);

// const Footer =  () => {
//     return React.createElement('div', {className: 'site-footer'}, React.createElement('p', {}, "All rights reserved"));
// }

const Footer = () => {
    <div className="site-footer">
        <p>All rights reserved &copy;</p>
    </div>
};

const headerJSX = (
    <div>
    <header className="site-header"> 
    <h1>Hello from JSX</h1>
    <h2>The best syntax ever</h2>
    <p>Something else here</p>
    </header>

    <Footer/>
    </div>
);
 

// root.render(header)   //Render Heading Element

root.render(headerJSX);