# FN IE11 react test env


Since we are unable to get IE11 support for storybook this is a workaround repository for IE11 testing.

This project is a basic create-react-app setup with a place to put the component your testing.

In order to test the design system locally we're using [yalc](https://www.npmjs.com/package/yalc).


## Setting up this repository to work with the [northants-design-system](https://github.com/FutureNorthants/northants-design-system)

Good article on this can be found [here](https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/)

Install yalc **globally**    
Using NPM: `npm i yalc -g`  
Using Yarn: `yarn global add yalc`  

In the **northants-design-system**  
You will need node v14.17.3 > to build on windows

run `yalc publish`

In **this repository**  
run `yalc add northants-design-system` then run `npm install` or `yarn`

Then run `npm run start` to run the application.




### *When you make changes to the design system* 

Running `yalc push` in the design system will   
push out the updates to everything depending on the package

alternatively run `yalc publish` in the design system  
and `yalc update` in this project

