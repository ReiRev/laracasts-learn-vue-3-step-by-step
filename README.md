# laracasts-learn-vue-3-step-by-step

## todo for each videos

### 01-Vue 3 Absolute Basics

- [ ] Display `Hello, World` using Vue.
- [ ] Also show the length of `Hello, World` using javascript.
- [ ] Change the text based on the value entered in the input field, using Vue’s two-way binding.
- [ ] Change the message to `Changed` 3 seconds after the page has loaded.

### 02-Attribute Binding and Event Handling

- [ ] Create a button and add a CSS style to put it to the center of the screen.
- [ ] Create a CSS style to make the text red or green, and set the button text to green.
- [ ] Toggle the color of the button when it's clicked.

### 03-Lists, Conditionals, and Computed Properties

- [ ] Create a section which contains heading and three unordered assignment lists with checkbox.
- [ ] Style the html with Tailwind.
- [ ] List the assignments from the Vue's data source.
- [ ] Change the assignment to complete when checkbox is checked. Confirm that the data is changed with showing it.
- [ ] Divide the section into "In Progress" and "Completed". Show proper assignments in each sections.
- [ ] Show the "Completed" section only if there are corresponding assignments. Try two different ways.
- [ ] Use computed properties to do the same things.

### 04-Your First Custom Vue Components

- [ ] Create a `app-button` component which is gray but become darker when it's hovered. Show it in the browser.
- [ ] Show the text content in the `app-button`.
- [ ] When the property `processing` is true, don't allow the cursor.

### 05-One Vue Component Per File

- [ ] Move `app-button` component to a single file.
- [ ] Fix `index.html` so that it works the same as before.

### 06-Component Props

- [ ] Move `App` component to a single file and fix `index.html`.
- [ ] Add `type` property to the `app-button` and set it to `primary`. Check if it works properly.
- [ ] Set default value of `type` property to `primary`.
- [ ] Change the style of the `app-button` based on the value of `type` property. The possible values are `primary`, `secondary`, `muted`.
- [ ] Change the `processing` to a property. Then show the spinner when `processing` is true. You can get the spinner snippet from [here](https://stephanwagner.me/only-css-loading-spinner).

### 07-Bring it All Together

- [ ] Copy the `section`s in the episode 3 and paste them to `template` of `App.js`. Similarly, copy and paste `data` and `computed`. You can copy the code from [here](https://github.com/ReiRev/laracasts-learn-vue-3-step-by-step/blob/03-lists-conditionals-and-computed-properties/index.html).
- [ ] Create `Assignments`, `AssignmentList`, `Assignment` component and move the existing code to them.
- [ ] Create `filter` computed property in `Assignment`.
  
### 08-Handle a Form Submission

- [ ] Refactor the styles of components.
  - [ ] Make the background of the page gray and text white. 
  - [ ] Add the border and divider to each assignment list. 
  - [ ] Align the checkboxes.
- [ ] Add a form to add a new assignment. Make it looks better.
- [ ] Show the alert when the form is submitted. Prevent page reload.
- [ ] Show the content of the textbox in the alert.
- [ ] Add the new assignment to In Progress list.

### 09-Parent-Child State Communication

- [ ] Create `AssignmentCreate` component and achieve the same functionality with passing `assignments` prop.
- [ ] Achieve the same functionality with the [event handling](https://vuejs.org/guide/essentials/event-handling.html).

### 10-It's All So Easy

- [ ] Display the number of assignments next to the heading.
- [ ] Setup the fake tags in `AssignmentList` and show them at the bottom of the heading as buttons. Style the appearance.
- [ ] Add a tag to each assignment data. Replace the fake tags in the previous todo.
- [ ] When the tag button is clicked, only show the assignments with that tag.
- [ ] Add an "all" button, which shows all assignments.
- [ ] Highlight the selected tag.

### 11-Component Responsibility

- [ ] Create `AssignmentTag.js` and achieve the same functionality. Achieve bidirectional communication of the currentTag value using an event handler.

### 12-A Deeper Look at V-Model

- [ ] Use v-model for AssignmentTag to achieve bidirectional binding.
- [ ] Add an argument to the v-model and achieve the same thing.

### 13-Lifecycle Hooks, Fake APIs, and AJAX

- [ ] Install json-server as a dev dependency.
- [ ] Move assignments data from Assignments.js to db.json. Run fake API server.
- [ ] Output the result of the request to fake API to console.log. Send the request when the component is created.
- [ ] Assign the result of fake API to assignments.

### 14-More Flexible Components With Slots and Flags

- [ ] Write the script in package.json to run both the server and fake API server.
- [ ] Align "In Progress" and "Completed" side by side. Set a fixed width for the AssignmentList. 
- [ ] Put the input box at the bottom of "In Progress" by using slot.
- [ ] Create a hide button and show it only if the list is not "In Progress". If the button is clicked, hide the list.

### 15-Named Slots

- [ ] Add background color to AssignmentList.
- [ ] Create a Panel.js, which show heading and slot with different slots. Show some text by using Panel.
- [ ] Show the heading only if the heading slot is specified.
- [ ] Add a footer to Panel.js and accept footer as a slot.
- [ ] Add a theme prop to Panel and change the style based on it. Add a footer to AssignmentList.

### 16-vite

- [ ] Create a vue project. Add a Vue router but not Pinia.
- [ ] Run the server and get yourself familiar with the project.
- [ ] Copy HomeView and create a Contact page. Make it accessible from `/contact`.
- [ ] Add a link to the contact page in homepage.

### 17-Little Confusing things

- [ ] Get yourself familiar with [RouterLink and RouterView](https://router.vuejs.org/guide/).
- [ ] Understand "The" prefix in components.

### 18-Two Mental Leaps to Script Setup

- [ ] Edit HomeView.vue and show the value of a message variable. Bind the variable to text input. Use composition API.

Note: Reactivity Transform is now [deprecated](https://github.com/vuejs/rfcs/discussions/369#discussioncomment-5059028).

### 19-From Mixins to Composables

- [ ] Install [sweetalert](https://github.com/t4t5/sweetalert).
- [ ] Create a composable which takes title, message, level as arguments. 
- [ ] Shot buttons on welcome and about page. When the buttons are clicked, show sweet alert.

### 20-Composable Examples: Local Storage

- [ ] Create "What is your favorite food?" paragraph in HomeView.vue. Create an input for the answer. Prevent the value of the input from losing even if the page is reloaded.
- [ ] Add "How old are you?" and do the same thing.
- [ ] use `watch` to update input value.
- [ ] Make the above logic composable.
- [ ] Remove storage item if the input is empty.
- [ ] Set a initial(default) value.