# Handling Http Calls in Angular

Added error handling to the service. In the course, they use a resolver.
A resolver automatically subscribes to the events that it gets.
A resolver is intermediate code, which can be executed when a link has been clicked, and before a component is loaded.  

A resolver is an Injectable service.  

Since I don't have routes, I don't need to do a resolver.  

It looks like I still need to do the filtering in the component.
The subscribe isn't something that you do in a service.
