 1) Why we need "React Router"?

React Router is a routing library of React, and is the core package for the router.

React Router lets you handle routing declaratively. The declarative routing (the process of keeping the browser URL in sync with what is being rendered on the page) approach allows you to control the data flow in your application.

React Router uses dynamic routing, which means that routing takes place as your app is rendering, not in a configuration or convention outside of a running app.

React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link.

2) challenges faced and how it was fixed;

a)
In src/App.js I set route path to <topics /> instead of <Topics/> as declared in function Topics
In the browser, Topics link did not navigate to another page.
So I correct by writing <Topics /> instead of  <topics />

b)
render ReactDom in ./src/index.js instead of ReactDOM, Therefore ReactDom becomes undefined. I fixed it by change it to ReactDOM

c)
here's a nested Route,
        match.url helps make a relative path become challenge on match to url
        <Link to={`${match.url}/components`}>Components</Link>
I was pass through nested Route tutorial and it is working