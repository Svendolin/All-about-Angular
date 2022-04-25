![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/All-about-Angular?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/All-about-Angular?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/All-about-Angular?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/All-about-Angular?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/All-about-Angular?color=yellow&style=for-the-badge)


***
<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" /> 



# &nbsp;- ALL ABOUT ANGULAR - ✔

This "All about Angular"-repository catches up its focus on all the Projects and Excercises I've made with Angular through the years as a **SAE-Web Development** student with exercise lessons every week as well as tutorial videos on _Youtube_.
        
* Direct Link to the place where I'm studying are you going to find [HERE](https://www.sae.edu/che/de?utm_source=PS01&gclid=Cj0KCQjw-4SLBhCVARIsACrhWLVIaD_aUt7y4brT7tqMW9o7tskgb1vjQqJFkzQwkwdN_40_Ls7MgAEaAtXxEALw_wcB)

* Kevin Kreuzer, one of the Angular experts beside Tomas Trajan on [YOUTUBE](https://www.youtube.com/channel/UCFT4YVZl7AFia7rZBTEvavw/videosB)

* ANGULAR BLOG from Tomas are you going to find [HERE](https://tomastrajan.medium.com/)

* ANGULAR TALKS from Tomas are you going to find [HERE](https://tomastrajan.com/speaking/conferences)

* ANGULAR EXERCISES from Tomas are you going to find [HERE](https://github.com/tomastrajan/angular-mastery-workshop)

* Presentation: https://drive.google.com/file/d/12sQ0uXbHAKkHme4WY_dY3vY6y9888t66/view?usp=sharing

<br />
<br />


***
## Folder Directory
***

| Topic | Content  | 
|:--------------| :--------------|
| 01_Typescript |  Basic Usage of Typescript |
| 02_Angularproject |  My very first angular project |


<br />
<br />

***
## Technologies and Installation ✅
***


**Node.js - INSTALLATION:** *(Used for runtime environment for Javascript, script performs directly on the computer and not just on a web browser)*
* https://nodejs.org/en/ (Recommend LTS = Long Term Support for an unbuggy / non-risky experience)
* Open BASH or CMD or POWERSHELL to check with node --version if you installed it correctly
* Node works via the command lines and is not executed via graphical components.
* Together with NODE we also get the tool "Node Package Manager" = software can be installed via the command line!
<br />

**Angular - INSTALLATION:** *(Our CLI: Command Line Interface)*
* https://angular.io/cli (npm install -g @angular/clie)
<br />

**VSC and CHROME** *(Code Editor and Webbrowser)*
* Chrome is recomended because of the close origin of Angular by Google
<br />



NODEMON - INSTALLATION:
* https://www.npmjs.com/package/nodemon 
* (Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected).
<br />
<br />

***
<img align="left" alt="Angular" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" /> 

<img align="left" alt="Typescript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" /> 


## &nbsp;Angular / Typescript - Useful Assistance ✅
***
``Angular`` = Javascript Framework ("vorprogrammiertes Programmiergerüst / Rahmenstruktur")

``Typescript`` = Javascript Extension "Erweiterung" (Superset)

<br />

_**WHY SHALL I USE ANGULAR?**_

- Provides components to effectively connect to the server or increase compatibility
- Scripts are already available (safe time) and here to simplify the programming process
- Other well-known Javascript frameworks are React and View
- Provides a variety of libraries (code libraries) -> **Material Design** for graphical components
- Built and used by Google = support is guaranteed



```js
/* ---- ALWAYS USE CONST and LET to guarantee to work with BLOCK-SCOPE ---- */

<script>
function foo() {
  if(true)  {// FUNCTION SCOPE - START | BLOCK SCOPE - START
    var heroOne = 'Iron Man'; // Functionscope
    let heroTwo = 'Superman'; // Blockscope (console.log is in the wrong scope)
    const heroThree = 'Batman';// Blockscope (console.log is in the wrong scope)
  }                           // BLOCK SCOPE - END
  console.log(heroOne); // 'Iron Man'
  console.log(heroTwo); // 'heroTwo is not defined'
  console.log(heroThree); // 'heroThree is not defined'

}// FUNCTION SCOPE - END

foo();
</script>
```

_**WHY DO WE USE TYPESCRIPT?**_

- This programming language is almost the same like Javascript, but it is an EXTENSION with some advantages
- Everything which can be written in Javascript is also possible with Typescript
- Old web browsers may not be able to read the constantly updated Javascript codes. Typescript remains at a rustic level, but at the same time we also write modernised Javascript

<br />
<br />

_**What's the MEANING OF THE FOLDERS in ANGULAR?**_

* _node_modules_ = Libraries used for our Angular Project
* _src_ = Source for all the code we're typing over there
  * _app_ = Components for the page (With Import and Export we generate dependencies and add only the content we need)
  * _assets_ = Safe images, videos and sounds
  * _environment_ = API keys, infos to our webapp like server URL changes
  * _index.html_ = Starting the process
  * _main.ts_ = Configurations (Imports the first module)
* _.browserlistrc_ = Webbrowser Output Support
* _.editorcofig_ = Configuration of our Code Editor VSC
* _.gitignore_ = All the data which isnt shown in .git
* _angular.json_ = Angular Configuration
* _karma.conf.js_ = Testrunner (To test our Webapp)

(**IMPORTANT: src is the most used folder here, in general you keep the others unattached**)



***
## &nbsp;TERMINAL COMMANDS I USED HERE (FOR PRE-DEFINED WORKSPACE) ✅
***

| COMMAND | EFFECT  | 
|:--------------| :--------------|
| $ node --version | Checks the node.js version (None if you havent installed it) |
| $ npm --version | Checks the NPM Version (Node Package Manager) |
|$ npm install -g @angular/cli|Command to Install Angular CLI (Command Line Interface)|
|$ npm install -g typescript| Command to Install Typescript|
|tsc script.ts|TSC = Typescriptcompilation = Compiles the Typescript File script.ts to Javascript in script.js (only JS is readable for a browser)|
|(...)| 1) Use Trick 17 to be in the right path = Right click of your desired file in your explorer > "OPEN IN INTEGRATED TERMINAL" > 2) Initialize Angular to the project with the NAME you want, for this example we use "my-first-project", the step next step will do this:|
|$ ng new my-first-project| Initializes your Project with a PRE DEFINED WORKSPACE  |
| (...)| 3) y to accept routing for multiple subpages > 4) Choose Design language (like SCSS) > Installing small libraries (packages) > 5) Puts in all the packages to your "my-first-project"-folder (Component Architecture)|


<br />
<br />

***
## &nbsp;TERMINAL COMMANDS I USED HERE (FOR CUSTOM WORKSPACE) 🔧
***

* Create new Angular workspace
* Learn how to use Angular schematics
* Create application in the workspace
* Run the application (and options)
* Build the application (and options)
* Test the application (and options)
* Analyze the application
* Explore workspace configuration
* Add Prettier support
* Remove default placeholder content
* Add Angular Material component framework

| COMMAND | EFFECT  | 
|:--------------| :--------------|
| $ ng new my-first-project --create-application false --style scss | Initializes your Project with a CUSTOM WORKSPACE |

<br />
<br />


***
## Collaboration ✅
***
> Feel free to contact me if you've seen something wrong, found some errors or struggled on some mistakes! Always happy to have a clean sheet here! :)


<br />
<br />

***
## FAQs ✅
***
0 Questions have been asked, 0 answers have been given, 0 changes have been made.

| Questions | Anwers | Changes |
|:--------------|:-------------:|--------------:|
| 0 | 0 | 0 |
