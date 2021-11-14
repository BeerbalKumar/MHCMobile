# MHCmobile

Mobile application source code for myHealthCell project

Developing in React Native - expo. We will eject from expo when / if needed.

Will be using Hooks (functional components, not class)

Typescript

Redux

Multilingual support

We are using Prettier - Code Formatter as extension to VS Code.

Suggested library for backend calls: apisauce

Folder structure:
Everything goes into "app" folder, in the respective subfolder.

Subfolders:
app > api : This is where all the API calling functions reside. There should be a client.ts file which contains the setup of the api client. There should be one file per backend API endpoint exporting all the required functions to get/ post etc.

app > assets: Self explanatory. We have another subfolder here called "animations" where we put the .json files for the lottie animations.

app > components: All the reusable components created.

app > config: The constants used in the app. Colors and styles should be in here.

app > hooks: All custom hooks created.

app > models: All Typescript interfaces to represent backend models.

app > navigation: Each navigator in a separate file. There must be a routes.ts file containing the constant strings of the routes.

app > screens: All finished screens.
