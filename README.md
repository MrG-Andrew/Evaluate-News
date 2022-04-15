# Evaluate News Articles Web App

## to start the app
1 - yarn install (to install all project dependencies)
2 - add API_KEY variable in a .env file in the root folder
3 - npm run build-prod (to create dist folder)
4 - npm run start (to start the server)
5 - npm run build-dev (would open localhost:3000 by default)

## description

this app >>> ONLY <<< evaluates articles, try putting a random article then it will evaluate it by calling the sentiment analysis (2.1) from the meaning cloud api
example: screenshot-1.jpg
{
    "agreement":"DISAGREEMENT"
    "confidence":"94"
    "irony":"NONIRONIC"
    "model":"general_en"
    "score_tag":"P+"
}

the app will give u the following msg: "pls enter a valid article url" if u entered a url that is not a valid article example: screenshot-2.jpg

and finally the app will give u the following msg "pls enter a url" if u entered nothing in the input element example: screenshot-3.jpg

## Additional functionalities

1 - u can test all functions using jest by running "yarn install" then "npm run test" example: screenshot-4-testing.jpg

2 - added SW so the app works even after closing (ctrl + c) the terminal running the "npm run build-dev" script, u have to make sure to run the app first with "npm run build-dev" then refresh the page a couple of times then close the script, make sure that the server (npm run start) script is still running