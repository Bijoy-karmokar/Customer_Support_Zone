1.What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML.
It is mainly used with React to describe what the UI should look like.

=> JSX is used in React for several important reasons:

i.Makes Code Easier to Read
ii.Allows Writing UI Inside JavaScript
iii.Improves Developer Experience
iv.Prevents Injection Attacks
v.Component-Based Structure

2.What is the difference between State and Props?

Main Differences

Feature	               Props	             State
Mutability	          Immutable 	         Mutable
Passed By	          Parent	             Component itself
Purpose	              To pass data	         To manage local data & UI
Who can change	      Child cannot change	 Component can change
Example	           <Child name="Bijoy" />	 const [count, setCount] = useState(0)

3.What is the useState hook, and how does it work?

useState is a React Hook that lets you add state to functional components.
Before hooks, only class components could have state.
With useState, you can store and update data that affects the UI.

i.state → the current value of the state
ii.setState → a function to update the state
iii.initialValue → the initial state value

Key Points About useState
i.You can use useState multiple times in a single component for different states:
const [name, setName] = useState("Bijoy");
const [age, setAge] = useState(25);
ii.The state update is asynchronous, meaning React batches updates to improve performance.
iii.setState replaces the old state for that variable, not the entire component.
iv.Works only in functional components, not class components.

4.How can you share state between components in React?
1️.Lifting State Up
When to use: Components have a common parent.
Move the state to the closest common parent.
Pass the state down as props to child components.
Child components can also trigger state changes via functions passed as props.

2️.Using Context API
When to use: Components are deeply nested, and passing props manually becomes tedious.
React’s Context API allows state to be shared globally without prop drilling.

3️.Using Global State Libraries
For large applications, you can use libraries like:
Redux – centralizes state in a store
Zustand – lightweight state management
Recoil – React-focused state management

4️.Using URL or Local Storage
Sometimes you can store state in the URL query params or localStorage to share across components or sessions.


5.How is event handling done in React?

i.Passing Parameters to Event Handlers
ii.Basic Example with Functional Component
iii.Event Handling in Class Components
iv.Common React Events
v.Synthetic Events