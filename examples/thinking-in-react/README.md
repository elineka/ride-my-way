1) What is the difference between State and Props?

props (short for “properties”) and state are both plain JavaScript objects. While both hold information that trigger the output of render. You could say props + state is the input data for the render() function of a Component. Both props and state are deterministic means that if your Component generates different outputs for the same combination of props and state then you are doing something wrong.

If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component.
props (short for “properties”) and state are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components.

State is optional. Since state increases complexity and reduces predictability, a Component without state is preferable. Even though you clearly cannot do without state in an interactive app, you should avoid having too many Stateful Components.
The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It is a serializable representation of one point in time.
A Component manages its own state internally, but besides setting, an initial state has no business fiddling with the state of its children. You could say the state is private. We did not say props are also serializable because it is common to pass down callback functions through props.

You can use only props and no state in a Component where by that Component becomes Stateless Component, and There's not much going on besides the render() function and all their logic revolves around the props they receive. All visualization and formatting logic should move downstream into as many Stateless Components 

Also you can use both props and state in a Component where by that component becomes Stateful Component/ State Managers. They are in charge of client-server communication (XHR, web sockets, etc.), processing data and responding to user events. These sort of logistics should be encapsulated in a moderate number of Stateful Components.

2)Challenges faced with ReactDOM.render() and how it was fixed;

Challenge was;

My App is FilterableProductTable and I was render FilterableProductTable App in src/App.js such as;

ReactDOM.render(
<FilterableProductTable products={PRODUCTS} />,
Document.getElementById(‘container’)
);

And at the same time in src/index.js file I was render App such as 

ReactDOM.render(<App products={PRODUCTS}/>, 
document.getElementById('container')
); 

So I was having two ReactDOM.render().
The first one in src/App.js render correctly and the second one in src/Index.js have an error said that App is undefined

How it was fixed;

I was change my FilterableProductTable Component name in App Component, and removing ReactDOM.render() in src/App.js such as;
<FilterableProductTable products={PRODUCTS} />,
Document.getElementById('container')
);
in src/App.js  remaining with one ReactDOM.render() in src/index.js file. 
So the App component becomes defined and rendered correctly.

