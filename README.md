# Productive Monsters


## About

A project created for Orbital Cohort 2022.
- Team Name: LEOPARD
- Members: Lim Jian Rong, Nicholas & Seah Zhi Han Mervyn
- Project Level: Apollo 11
- Adviser: Koh Vinleon

This build was tested on a Windows 11 and Windows 10 machine.


## Pomodoro Technique

The Pomodoro Technique is a time management system developedd by Franceso Cirillo in the late 1980s. The technique involves working for 25 minutes and resting for 5 minutes (ONE Pomodoro). Upon the completion of 4 Pomodoros, take a longer break of 15 to 20 minutes.


## Motivation

As students, we often find ourselves struggling to main our focus. Adopting study and productivity methods such as the Pomodoro technique can be cumbersome, having to change our timers from 25 minutes to 5 minutes then back to 25 minutes. After hours of studying, we might also lose track of how many cycles we have completed, potentially missing a longer break.

Furthermore, students have busy schedules, having to keep track of different deadlines and assignments across their multiple modules. Additionally, some students also pursue external activities, interests and projects, contributing to their workload. 


## Desired Outcome

Though the web app is created with students (NUS students particularly) in mind, other students of different academic level or universities, as well as adults, can utilise the app to maximise their productivity. The ease of being able to continue in your Pomodoro Technique stage without having to manually switch between timers allows users to maintain momentum as additional quality of life.

## Functionality

Our web application is meant to track and monitor productivity. The web application also aims to help students to closesly monitor all their modules' respective assignments and dealines.

### Pomodoro Timer

1.	As a User can set a timer according to the respective stage of the Pomodoro technique to immerse themselves in the studying technique
2.	As a User, once the timer is set, he will NOT be able to leave the application (to ensure mindfulness & productivity) to ensure the user is not distracted.
3.	As a user, once the timer is set, his notifications will be disabled as well to ensure that the user is not distracted during the stage of Pomodoro technique


### Calendar Planner

1.	As a User will be able to input their different modules, and its respective lecture and tutorial timings to keep track of their schedules
2.	As a User, will be able to key in reminders for the different deadlines of their assignments to help users keep track and meet their deadlines. (The reminders will ping them with a vibration and notification even during the respective stages of the Pomodoro Technique.)

## Timeline
The web application will provide a timer system for any user (students, working adults, etc) to focus on required tasks & allow them to track their mindfulness and productivity

By the end of Milestone 1:
-	Get the Login Page up  (Users will sign in through Google Accounts, hence they have to register a gmail account)
Users will be able to Login into the Application at least by Milestone 1
By Milestone 2:
-	Main Menu Page can be accessed after Logging in
-	A Calendar function and the Pomodoro Timer Function will be displayed on the Main Menu
-	Pomodoro Timer’s Basic Functionality is available at least (users will be able to start the 25minute Timer and able to set the 5-minute rest as well)

By MileStone 3:
-	Pomodoro Timer’s Functions are further developed, able to set intervals of 25 minutes. The No-Notification function will be developed and Tested.
-	Calender Function will be developed and the Users will be able to set reminders for their different Deadlines, as well as input the different classes they have on the different dates.

By Milestone 4:
-	The web application will be able to fully run without hicks, with different designs to make the application appealing to the users.


## Interface

### Login Page

The web app is implemented with a login page that utilised Firebase by Google.

### Dashboard

The dashboard of the web app is where you will be able to see your tasks, sticky notes and the Pomodoro Timers all at one compact place.


## User Roles

There are 3 user roles -- public and member users.

### Public

Public users will be able to utilise the Pomodoro Timer to track and increase their productivity. Public users are also able to edit their display name.

### Member

On top of the Pomodoro Timer function, Members will be able to log in using Google Authentication to keep track of their past timers. Members are also able to create tasks and sticky notes which can sync across devices (as long as they are logged in).


## Tech Stack

- React JS (FrontEnd)
- Node JS (BackEnd)
- FireBase (Databse)



## Dependencies

- React
- Firebase
- MUI
