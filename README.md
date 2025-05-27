There is some folders

- components :
Nav.jsx
Footer.jsx

- pages :
map.jsx >> in this file you can to add your lab pages path in link to fast access (you can delete)

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
To create new environment in React 

To create new app :

- npm create vite@latest my-react-app    
- cd my-react-app      
- npm install 
- npm run dev  

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
To add tailwind framework:

step 1# installing:
- npm install tailwindcss @tailwindcss/vite

step 2#  in vite.config.js file add this lines:

import tailwindcss from '@tailwindcss/vite'

  plugins: [
    tailwindcss(),
  ],

step 3# in index.css add:
@import "tailwindcss";


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
To using  react touter dom:

- npm install react-router-dom --save 

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
This is media queries to make responsive website:

// To laptop 
@media only screen and (min-width: 993px) {}

// To tablet
@media only screen and (max-width: 992px) {}

// To mobile
@media only screen and (min-width: 768px){}


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
To create new folder and file and open in vscode:

create new folder :
--> mkdir .....nameFolder..... 
--> cd  .....nameFolder.....

create new file:
-->  type null > nameFile.exe 
example: type null > index.html

to remove file :
---> rm -r file name

open in vscode:
--> code .

git command:
--> git init ----------------------------------------------------- to create new repository 
--> git status -------------------------------------------------- to know files status
--> git add . --------------------------------------------------- to add file to git
--> git commit -m "commit message" ----------------  to commit ur change 
--> git commit --amend -m  "message" --------------- if u want change last commit message
--> git log ------------------------------------------------------ to display all hash version 
--> git log --oneline ----------------------------------------- to git brief version
--> git checkout ...hash id... ------------------------------ to display version
--> git checkout master ------------------------------------ to display master version or git switch master
--> git restore ------------------------------------------------ to return to previous stage
--> git diff ----------------------------------------------------- to show deferent before and after changes   

here to create branches:
--> git branch ....branchName... ------------------------ to create new branch
--> git checkout ....branchName... -------------------- to switch from master to ur branch
-->	 ....branchName... ---------------- to create new branch and switch in same command and when i foregate create branch  
--> git branch ----------------------------------------------- to show all branches 
--> git branch -d ....branchName... -------------------- to delete branch (before delete, u have to switch to master branch)
--> git merge ....branchName... ------------------------ to merge branch  (before nerge, u have to switch to master branch)
--> git branch --merged  

here to create tags :
--> git tag ....tagName.... --------------------------------- to added tag to last commit like v0.1
--> git tag ----------------------------------------------------- to show all tags 
--> git tag -d ....tagName... ------------------------------ 	to delete tag

here to git clon:
--> git clon ...project url.... ----------------------------------- to take version to local devise 


here to push ur project:
--> git remote add origin ...project url... ---------------- to make remote 
--> git push -u origin master -------------------------------- to push ur project to server

