# Sprint Challenge: Advanced React - React Plants 🌿

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored some advanced React topics ⚛️. During this sprint, you studied class components, the component lifecycle and class component lifecycle methods, custom hooks, and React Testing Library 🐙. In your challenge this week, you will demonstrate your mastery of these skills by creating an app that will fetch data from a local server using a class component, displaying that data, using a custom hook, and writing tests for your app.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

[Plant List Page](https://tk-assets.lambdaschool.com/88008802-846c-46bb-8cf8-11ace219e2bf_ScreenShot2020-04-30at12.39.22PM.png)

[Successful Form Submission](https://tk-assets.lambdaschool.com/90ebefd4-ee0f-4b1c-884c-1336ce87441d_ScreenShot2020-04-30at12.40.56PM.png)

You will also need to build the two tests in the `CheckoutForm.test.js` file and make sure they are testing what the test title says they are.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1 Explain how to build stateful class components
There are several steps to follow in order to create a stateful class component. First we have to create a class (like a normal JS ES6 class), that extends ‘React.Component’.

Then we must build a constructor() function, and this is where the state will be defined. Before that though, we must add a super() keyword that acts as the glue between the class component and the constructor, adding the new state  to it. State properties are set up in an object using the ‘this.state’ syntax, ‘this’ keyword referring to the current class being handled. To render stateful
Class components to the DOM, it is mandatory to use the render() function that includes the return statement with the body of the class component. 




2 Describe the different phases of the component lifecycle.
Every component in React has what we call a lifecycle. The Lifecycle is a part of how our components operate under the hood.

There are 3 phases of the component lifecycle. First we have the mounting phase, where the render method is invoked. Whatever initial data we want to access is defined in this phase. The method ‘componentDidMount’ is called here. 

The next phase is the updating phase. Here data from initial state gets updated, making render to happen again. We use setState here to update state, and the ‘shouldComponentUpdate’ method to define what happens in case the update occurs.

The final phase is the un-mounting phase, which makes the component to be removed from the screen once its purpose is over. The componentWillUnmount method is called here and is used as cleanup. 



3 Demonstrate an understanding of class component lifecycle methods.

This question was answered in the post part in the last question. There are three component lifecycle methods (used in classes only). 

First the componentDidMount() method is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the call (with axios perhaps). 

componentDidUpdate() is invoked after updating occurs. State is updated in this phase and causes re-renders to happen each time state is updated. Here current props can also be compared to previous props using conditional logic. 
componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. It allows for cleaning up components  that are no longer used once their purpose is  fulfilled. 


4 Define stateful logic.

Stateful logic is any piece of code  that uses state. This is used mostly in hooks, and allows state to be passed around and reused in several components at the same  time. 


5 Describe how to test a React component with React Testing Library.

The first thing we must do when using react testing library is to create a simple test to see if  the library is working correctly. Normally we can just do a render(<App/>) test and this will suffice.

The second step is to create the tests for the site or application. For example, if we wnt to test a form then we would have to make sure that all input fields can be filled and submitted.

In this case, we need to target the correct elements, so we destructure by using one of  the react testing library tools such as ‘getByText’ or ‘getByPlaceholder’. Once the element has been targeted correctly, we save this in a variable and use the expect method by passing in the variable we want to test. An example would be to make sure the element we are targeting is part of the document. 

Once all this is in place, we can add input values to the field as if we were a user, and we do  this by using the fireEvent method. We call the variable that we want to target, and then we set the value to whatever we want the test to use for  that case. 

Once the fireEvent occurs, then we must once again use expect to ensure the test looks for the data after adding the values we set it to. If all is in place, the test will pass with no errors. Otherwise the  test will return a set of errors that explicitly label where the errors are to be fixed.


You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

_This project uses a local server for the data fetching. You will need three seperate terminal windows open:_

1. _one for your server_
2. _one for your React app (in the /client folder)_
3. _and one to run your tests_

_Please follow the setup instructions closely so that you can get everything up and running smoothly_

**Basic set up**

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.

**Starting the server**

- [ ] Run `npm install` to download dependencies for the server.
- [ ] Run the server using `npm start`.
- [ ] Open a new browser tab and navigate to `http://localhost:3333/plants` - if you see a JSON object with plants data, then you know the server is running 👍

**Starting the React app**

- [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
- [ ] Still inside the `client` folder run `npm run start` to run the client application.
- [ ] Your browser should open up the project as normal

**Starting your test runner**

- [ ] In the final terminal window, make sure you are in the `client` folder still
- [ ] Start the test runner with `npm test` (I recommend doing this only when you're testing - any change in your app will make the tests run, and that could eat up your computer power)

**Commit and Push OFTEN!**

- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

#### Plant List

Display a list of the plants from the server. This should be done in the class component `PlantList`.

- [ ] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants`
- [ ] Set the data to a state property called `this.state.plants`
- [ ] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart

#### Shopping Cart

Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

#### Checkout Form

The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

- [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic

_Note: You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step._

#### Testing the Checkout Form

- [ ] Build out the tests listed in `CheckoutForm.test.js`. You will need to make sure they are testing what the test title implies they are testing
- [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working

<hr/>
In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add a filter input to the plant list page.
- [ ] Build and implement another custom hook - a dark mode hook would be great for this project, though you'll have to style the light theme ☀️ 🌙
- [ ] Add a test file for the `ShoppingCart` component and test that it displays plants there (you'll need some mock plant data for the test, and then you can pass that data in as a prop when you call `render` and render the component - see the example below)

```js
const plants = {{}, {}, {}} // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  ...

})
```

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
