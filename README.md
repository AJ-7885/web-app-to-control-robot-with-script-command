

# WEB APP TO CONTROL ROBOT WITH SCRIPT COMMAND.

The interface allow the user insert command which robot can understand and process it. Below is more details:

### Web App
Develop a simple web application where you control a robot using a predefined script.
The script has to be executed in Frontend only. After script execution UI should render a new robot position on the grid and direction it looks to. Ideally with a robot animation reflecting the single commands of the script.
Please implement the movement/business logic using React, Vue.js or similar mature library.
Please create meaningful tests for at least one component, a full test-coverage is not necessary.

### Script
POSITION 1 1 EAST //sets the position of the robot, pointing east FORWARD 3 //lets the robot do 3 steps forward
WAIT //lets the robot do nothing
TURNAROUND //lets the robot turn around
FORWARD 1 //lets the robot do 1 step forward RIGHT //lets the robot turn right
FORWARD 2 //lets the robot do 2 steps forward

### Frontend Style
The frontend should be styled. You can do it yourself or use some framework. SASS support is optional. The design of the frontend should match the idealo design (see picture below). We expect a page with the colors of idealo (idealo.de), a header including our logo, an empty footer and a content area with a tile where the result is to be displayed.
You should limit the grid to a dimension of 5 x 5. The initial grid position of the robot is (0, 0) which is in the top left corner. Apart from that the content's design is up to you.
Your solution should be consistent for desktop, tablet and mobile devices and it should work in Chrome, Firefox and Internet Explorer 11.

### General Conditions
You can spend as much time on this task as you like. However, we don't expect you to invest more than 6 to 8 hours. If you are not able to finish everything within this timeframe, please add a readme.md file that describes, what you would tell us about the current status of your work in a daily stand-up meeting. We'd love to know what parts you consider finished, what your next steps would be and which of the things you wrote already you'd still like to improve if there was more time.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`
Check the code by ESlint tools to show the issues base on the setting on eslintrc

### `yarn lint:fix`
Will fix the issues which ESlint can find it. 

### `yarn format`
It will use pritter to format whole code to match with pritter configuration in .pritterrc


# What is the status / What next?!

I look at the task and seems very easy that's why I thought there is catch for that reason I was over thinking what I can do to make it more attractive and impressive. Therefore I did not start immediately which better to not doing it for next time.

#### DONE : 
1. ROBOT can start with predefine task as well as can accept new command from user 
2. Interface has been process (I had limit resource to check 100% on IE11, in the emulators seems working correctly)
3. Design Match with IEDALO website.
4. There is 5x5 grid for Robot Land to move
5. Logic for Robot Land area till robot can not move out if the Robot Land.
6. Unit test has been added but not for all the components and sections which need to be work on it. 

#### WISH / NEXT THING TO DO
1. Complete the unite test for use custom hook,
2. At this moment I would like to move the animation and whole robot section into different solution and use HTML5 Canvas 
3. Show the status of process in Command Panel, till user know which command has been executed , executing or will execute
4. Adding local persistance layer to keep tracking of all the commands , undo or clear.
5. Fix the design for better user experience on mobile devices with small screen size.

Many thanks for your time :)
