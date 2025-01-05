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
