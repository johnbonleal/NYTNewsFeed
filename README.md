# NYTNewsFeed App v3.2

Get your daily top stories from well-known American newspaper company, New York Times.

### Prerequisites

* Node.js - v13.12.0
* Yarn - v1.22.4
* React Native - v0.63.0
* React - v16.13.1
* React Native CLI - v2.0.1
* Git - v2.24.3

> NOTE: We prefer to use yarn over npm for a number of reasons. But mainly because it is much faster and lesser issues.

### Environment Setup

It is recommended to prepare your local development machine with the necessary requirements in building React Native applications. Just follow the official [Documentation of React Native](https://facebook.github.io/react-native/) for more info.

### Getting Started

1.) Once you’re done with the setup, open your terminal and clone the repository.

`$ git clone [url-of-the-repo]`

2.) Navigate to the project directory and run:

`$ yarn install`

This will install the project dependencies located inside the package.json file, which is needed by the app. Remember that React Native does not give you all the tools out-of-the-box so you might need external libraries for maps, camera, etc. This will take long depending on the number of dependencies or your network connection.

#### Autolinking

For RN >= v0.60, autolinking is done under the hood.

### Additional Steps for iOS

If you're using cocoapods to manage iOS dependencies, you need to run:

`$ yarn pod-install`

