# PlexTech Recipe Project

Hey everyone! This project will require you to create a basic React app showing different recipes. Based off what you have learned about JSX, React, JavaScript, HTML, CSS, and APIs, try your best to show a user a view of 10 data objects you choose. You will need to make a copy of this repository and clone it onto your system in order to push changes to it.

Basic requirements:
- Needs to be a React application
- There needs to be at least 10 items you fetch from your API endpoint rendered
  - Layout of each item(depends on what you fetch from the API)
      - Item name
      - Item Data

Instructions:

First you would copy this repository and give it a name. Then you would clone it onto your system using: git clone <repository_url>.git

Then, making sure you are in the repository, you would type in npm init create-react-app <app name you think of>

Within your React project directory, make sure you can understand the file structure that we mentioned and talked about during lecture! Understanding it will help greatly and will spare a lot of confusion. Reference the lesson slides if necessary. 

For fetching from the API, we can use a particular method, fetch. If you go to Mozille Developer Network documenation and search up "fetch", it will give you examples and a solid understanding of why we use fetch. For creating each recipe, you can decide whether to use class or functional components. But you will need to create a main(App.js) component that renders 10 child "item" components. Try to follow my asynchronous demo, and how I hardcoded a specific number of objects, and then mapped them to child components using the JavaScript Array map method. The only difference is you won't be hardcoding those objects in this case, but fetching them from an API.

Frequently add, commit, and push your code to submissions folder in the submissions branch!
- do "git checkout submissions" to switch to the submissions branch
- Any files you added or changed please do: git add <file_name>
- Once you have added all the files you needed, then do: git commit -m "<Your commit message - make it as descriptive as possible"
- Then finally push your commits to the remote repository's submission branch(Here on GitHub): git push

Once you have finished your project, title the last commit with "Finished project - <Your name>" so we can identify who finished it.
  


If you have any questions, please email me at wlouis23@berkeley.edu or Ansh! Good luck and I hope you enjoy this project.
