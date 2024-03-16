# Node-Projects
## Simple command line calculator
> first of all to create calculator we install NPM in our project
```
npm init
```
>In our project we give information about our project.

{ "name" : "simple-calculator",
  "version" : "1.0.0",
  "description" : "A simple calculator with TypeScript, Node.js and Inquirer" ,
  "main" : " index.js" ,
  "scripts" : {
     "test" : "echo \"Error: no test specified\"&& exit 1"
},
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
