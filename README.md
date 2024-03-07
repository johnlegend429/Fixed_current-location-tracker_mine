# Current Location Tracker

## Tech Stacks used:

- HTML
- CSS
- Javascript
- Firebase
- Google Maps API

## Demo Video 👇

https://user-images.githubusercontent.com/84177086/211191693-ea7989d8-e201-4d2a-b2d5-90bb4f59aaa5.mp4



## :point_down:Steps to initialize the project:

### Clone the repository
```
$ git clone https://github.com/anjupriya-v/current-location-tracker.git
```
### Redirect to the cloned repo directory

### set up the firebase:
- Redirect to this site
 [Firebase](https://console.firebase.google.com/)
 
- click on add project

- enter your project name as current-location-tracker and continue

- This project doesn't requires analytics and disable it and continue

- Now the project is created

- This is the web project. so, click on the web icon (</>)

- Then enter the web app name as current-location-tracker and register it.

- It shows the npm code for firebase initialization and copy it.Then paste it instead of below code. This code is present in /src/index.js.

![image](https://user-images.githubusercontent.com/84177086/192140424-867f31d0-31b8-4e6c-a9b3-be93d7c75e23.png)

- Then click continue to console.

- In the side menu bar, inside the build option, click on firestore database,

- Then Click on create database and check on start in production mode and click next.

- Then provide the cloud firestore location and click on enable.

- click on start collection and give collection ID as current-location-tracker.

- Then provide the document id or auto generate it and give the field values if you want or you can give it from frontend.

### set up the google map api.
- Go to this link [google map api](https://mapsplatform.google.com/)

- click on get started and and make sure you have enable the billing for best user experience and work on many features.

- Once you’ve confirmed your billing is up-to-date, click on the Google Cloud Platform home in upper left corner again.

- Hover to APIs & Services and go to Credentials.

- If you want to use an existing project, please select it from the list. Otherwise, select ‘Create a new project’ and enter a project name.

- Click the Close button in the API key dialogue. Your new API key will be listed on the Credentials page under API keys.

- Click Create credentials and select API key. You will see a new dialog that displays the newly created API key.

- for restricting the api key, refer this [API restriction](https://developers.google.com/maps/documentation/javascript/get-api-key)

- Paste the api key instead of YOUR_API_KEY. This code is in `/src/Script.js`
![image](https://user-images.githubusercontent.com/84177086/192141144-313800bf-5e96-41cf-a2db-ec1b28f60bcc.png)
 
### Open up the terminal 

### Install the dependencies
```
npm install
```
### For running the web pack.
```
npm run build
```
### Then for starting the project, use the live server in visual studio code.
