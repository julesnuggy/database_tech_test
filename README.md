# Tech Test


·▄▄▄▄   ▄▄▄· ▄▄▄▄▄ ▄▄▄· ▄▄▄▄·  ▄▄▄· .▄▄ · ▄▄▄ .    .▄▄ · ▄▄▄ .▄▄▄   ▌ ▐·▄▄▄ .▄▄▄  
██▪ ██ ▐█ ▀█ •██  ▐█ ▀█ ▐█ ▀█▪▐█ ▀█ ▐█ ▀. ▀▄.▀·    ▐█ ▀. ▀▄.▀·▀▄ █·▪█·█▌▀▄.▀·▀▄ █·
▐█· ▐█▌▄█▀▀█  ▐█.▪▄█▀▀█ ▐█▀▀█▄▄█▀▀█ ▄▀▀▀█▄▐▀▀▪▄    ▄▀▀▀█▄▐▀▀▪▄▐▀▀▄ ▐█▐█•▐▀▀▪▄▐▀▀▄
██. ██ ▐█ ▪▐▌ ▐█▌·▐█ ▪▐▌██▄▪▐█▐█ ▪▐▌▐█▄▪▐█▐█▄▄▌    ▐█▄▪▐█▐█▄▄▌▐█•█▌ ███ ▐█▄▄▌▐█•█▌
▀▀▀▀▀•  ▀  ▀  ▀▀▀  ▀  ▀ ·▀▀▀▀  ▀  ▀  ▀▀▀▀  ▀▀▀      ▀▀▀▀  ▀▀▀ .▀  ▀. ▀   ▀▀▀ .▀  ▀

## Introduction


## Domain Model
[Domain Model](./assets/Tech_Test_Database_Domain_Model.jpg)

## Project Approach
Learning from the Bank Tech Test, I took time to carefully domain model this project first. As well as the possible classes and methods, categorised using the MVC approach, I modelled the architecture and two possible view flows as well. My initial thoughts are that building the first app which just pushes to memory should not be difficult as it should not be drastically different from the Thermostat app I made or Mary's Count app. However, I will need to consider carefully how I code in such a way as to allow for easy modification onto a real database store in future.

My tech stack of choice will be JavaScript based for this tech test, so I decided to go back and look at my past repos for Thermostat and MakersBnB. Doing this, I realised that my domain model was wrong, so I went back and refined the domain model. That likely saved me from a lot of unproductive coding time.

My process for then generating code is:
1. Set up initial project structure (base files, folder structure, node packages, test frameworks, etc.)
2. Create a basic non-functioning user interface to get a feeling for how the logic / model will need to operate.
3. Write first test (Red)
4. Pass first test (Green)
5. Improve code (Refactor)
6. Repeat 3-6

## Logic
