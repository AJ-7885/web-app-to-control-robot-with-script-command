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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify





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
