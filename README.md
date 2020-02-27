# _Doctor Lookup!_

#### _Find doctors near you based on what issue you are having, or search for a doctor by name!_

#### By _**Alex Skreen**_

## Description
_Achoo! As we all know, everybody needs to see a doctor sometimes. But finding a doctor that provides the services you need nearby can be time consuming. To facilitate this, this website allows users to enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue. Cool!_

## Setup/Installation Requirements

### Node install

#### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* ``$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``
* ``$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile``

_Install Git with the following command:_
* ``$ brew install git``

_Next, install Node.js by entering the following command in Terminal:_
* ``$ brew install node``

#### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

### Setup/install this application

_Clone this repository via Terminal using the following commands:_
* ``$ cd desktop``
* ``$ git clone https://github.com/alexskreen/DoctorLookup``
* ``$ cd doctorlookup``

_Confirm that you have navigated to the doctor lookup directory (e.g., by entering the command_ ``pwd`` _in Terminal). Next, add a file named .env to project root directory (e.g., by entering the command_ ``touch .env`` _in Terminal)._
* _Make an API key for the [BetterDoctor API site](https://developer.betterdoctor.com/) by navigating to the linked website and clicking "sign up of login to get an API Key"_
* _Store your API key for the BetterDoctor API in first line of the .env file in the following format: API_KEY = {replace curly braces and this text with your API key}_

_Next, install node package manager (npm) at the project's root directory via the following command:_
* ``$ npm install``

_Open this application via live server using the following command:_
* ``$ npm run start``

_To view/edit the source code of this application, open the contents of the camping directory in a text editor or IDE of your choice (e.g., to open all contents of the directory in Visual Studio Code on macOS, enter the command_ ``code .`` _in Terminal)._



## Specs
### Behavior Driven Development Spec List

Behavoir | Input | Output
:---------:|:------:|:------:
| A user will get an error code if the API returns an error | Headache | I'm sorry, there was an error with the BetterDoctor API. Please try again.
| A user can enter a medical issue and receive a list of doctors that can help with that issue | Headache | Here is a list of doctors in your area that specialize in that area |
| A user should be able to enter a name to receive a list of doctors in the area | Smith | Here are doctors in Portland that match the name Smith |
| If there are no doctors in the area that can help the website will display a message letting the user know | Obscure medical issue. User located in obscure city | I'm sorry, there are no doctors in your area that currently specialize in this issue |



## Support 

_The software is provided as is. If you experience an issue please reach out to me using the contact information provided._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [jQuery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
* [webpack](https://webpack.js.org/)
* [ESLint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Uglifyjs](https://www.uglifyjs.net/)
* [BetterDoctor API](https://developer.betterdoctor.com/)



### License

This project is licensed under the MIT License

Copyright (c) 2020 **_Alex Skreen_**

