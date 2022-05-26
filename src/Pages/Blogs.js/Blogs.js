import React from "react";
const Blogs = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="text-lg">
                        <h1 className="text-2xl font-medium"> How will you improve the performance of a React Application?</h1>
                        <p>Use React.Fragment to Avoid Adding Extra Nodes to the DOM</p>
                        <p>Use Production Build</p>
                        <p>Use React.Suspense and React.Lazy for Lazy Loading Components</p>
                        <p>Use React.memo for Component Memoization
                        </p>
                        <p>Virtualize a Large List Using react-window
                        </p>
                    </div>
                    <div className="text-lg">
                        <h1 className="text-2xl font-medium"> Are the different ways to manage a state in a React application?</h1>
                        <p>
                            Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                            There are several other ways to manage state​s in React, including the use of:
                            Hooks,
                            React Context API,
                            Apollo Link State
                        </p>
                    </div>
                    <div className="text-lg">
                        <h1 className="text-2xl font-medium">How does prototypical inheritance work?</h1>
                        <p>
                            Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

                            All JavaScript objects inherit properties and methods from a prototype:

                            Date objects inherit from Date.prototype.
                            Array objects inherit from Array.prototype.
                            Player objects inherit from Player.prototype.
                        </p>
                    </div>
                    <div className="text-lg">
                        <h1 className="text-2xl font-medium">What is a unit test? Why should write unit tests?</h1>
                        <p>
                            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
                            A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                        </p>
                    </div>
                    <div className="text-lg">
                        <h1 className="text-2xl font-medium"> Why you do not set the state directly in React</h1>
                        <p>
                            One should never update the state directly because of the following reasons:

                            If you update it directly, calling the setState() afterward may just replace the update you made.
                            When you directly update the state, it does not change this.state immediately.Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            You will lose control of the state across all components.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Blogs;



