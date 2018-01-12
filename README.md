# Webpack, ES6, Gulp project boilerplate

All working files are located in the app/ directory

##CSS
- Compiled with gulp and scss

##Javascript
- Compiled with webpack and babel loader

##Installation
- $ npm install

## Running the dev environment
- $ npm start
	* Sets gulp environment to dev
	* generates iconfonts
	* runs webpack dev server from app/ directory
		*** Note that webpack watch task will compile to memory, not disk
	* runs css and webpack watch tasks in app/ directory
- Point your browser to http://localhost:8080

## Build files for production
- $ npm build
	* Sets gulp environment to production
	* generates iconfonts
	* compiles css to dist folder
	* compiles js files to dist folder
	* copies static assets and html to dist folder

## Generating svg icon fonts
Place individual svgs into fonts/svg-sprites folder
- $ gulp iconfontfonts
	* This will create font files with all the svgs combined into a sprite







