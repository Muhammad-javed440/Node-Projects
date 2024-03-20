# Node-Projects
## Simple command line calculator

> To check this calculator in your *laptop*.Run this commond in terminal in powershell
```
npx n6ra11-simple-calculator
```
> first of all to create calculator we install NPM in our project
```
npm init
```
>In our project we give information about our project.we must gave a unique name  our project

{ "name" : "n6ra11-simple-calculator",
  "version" : "1.0.0",
  "description" : "A simple calculator with TypeScript, Node.js and Inquirer" ,
  "main" : " index.js" ,
  "type":"module",
  "bin":"index.js",
  "scripts" : {
     "test" : "echo \"Error: no test specified\"&& exit 1"
},
"keywords":[],
  "author" : "Muhammad Javed ",
  "lincense" : "MIT" // FOR PUBLIC
}

> Is this ok ? (yes)
## To instsll Typescript in our project
```
tsc --init
```
## We need some changes in tsconfig.json file
```
  "target" : " ES2022",
  "module" : "NodeNext",
  "moduleResolution" : "NodeNext"
```
## To install npm module inquirer in our project by this code
```
 npm i Inquirer
```
## We import inquirer by using this code
```
npm i --save-dev @types/inquire
```
> Thus by these code we can make our simple calculator.
# To publish it on npm
- 1- we write this commond on the top of ts.index file
```
#! /usr/bin/env node
```
- 2-To login in npm in the terminal
```
npm login
```
- 3- To publish it on npm
```
npm publish
```
# To run our CALCULATOR in any LAPTOP to run this commond in terminal in powershell.
```
npx n6ra11-simple-calculator
```

