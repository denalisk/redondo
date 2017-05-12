# "Redondo Tile" Artistic Cement Tiles Online

#### _Redondo Tile_, 05.07.2017

### By _Sam Kirsch_

## Description

#### A website built to display product and company information about a cement tile manufacturer, constructed for a proof-of-concept display. Visitors can view tiles, past installations by the company, and look at basic information about the company. Built using Angular and Typescript.

## Specifications

* Tiles and other information can be stored persistently and remotely
* Users can view individual tiles details and sort by category
* Users can view past installations by the company and look at photos
* Users can easily navigate the site between pages
* General aesthetic of the site is appealing

#### Next Steps

* Primary desired functionality: an in-page application that allows users to customize tile template images and save their custom designs to be ordered
* Create admin portal to allow easy maintenance for future owners

## Setup
>Requires: angular-cli, npm

* Clone this repository
* From inside the root level of the repository, run npm install, bower install, and bower install bootstrap
* Add Firebase:
  * create a new project in your firebase
  * import data from '/src/app/seedData.json'
  * on the main page, click "add to my web app" and copy everything inside the {} after "var config ="
  * Create the file 'src/app/api-keys.ts' and create this exported object, pasting in the copied text where indicated:
>export var masterFirebaseConfig = {PASTE COPIED TEXT HERE}

* run ng serve and navigate to http://localhost:4200/

### Technologies Used

* HTML and CSS
* TypeScript with Angular2 to manage packages and Firebase for data storage

##### Copyright (c) 2017 Sam Kirsch.

##### Licensed under the MIT license.
