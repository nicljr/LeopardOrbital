# GetEfficient!


## About

A project created for Orbital Cohort 2022.
- Team Name: LEOPARD
- Team Code: 5158
- Members: Lim Jian Rong, Nicholas & Seah Zhi Han Mervyn
- Project Level: Gemini (Intermediate) 
- Adviser: Koh Vinleon

This build was tested on a Windows 11 and Windows 10 machine.


## Pomodoro Technique

The Pomodoro Technique is a time management system developedd by Franceso Cirillo in the late 1980s. The technique involves working for 25 minutes and resting for 5 minutes (ONE Pomodoro). 


## Motivation

As students, we often find ourselves struggling to main our focus. Adopting study and productivity methods such as the Pomodoro technique can be cumbersome, having to change our timers from 25 minutes to 5 minutes then back to 25 minutes. After hours of studying, we might also lose track of how many cycles we have completed, potentially missing a longer break.

Furthermore, students have busy schedules, having to keep track of different deadlines and assignments across their multiple modules. Additionally, some students also pursue external activities, interests and projects, contributing to their workload. 


## Desired Outcome

Though the web app is created with students in mind, other students of different academic level or universities, as well as adults, can utilise the app to maximise their productivity. The ease of being able to continue in your Pomodoro Technique stage without having to manually switch between timers allows users to maintain momentum as additional quality of life.


## User Stories

1. As a user, I want to be able to set a customised timer based on how long I want my productive sessions to be.
2. As a user, I want to be able to have a place to track and monitor my productivity.


## Functionality

Our web application is meant to track and monitor productivity. The web application also aims to help students to closesly monitor all their modules' respective assignments and dealines.

### Pomodoro Timer

Users can set a timer according to the respective stage of the Pomodoro technique to immerse themselves in the studying technique

Although the Timer was created with the Pomodoro Technique in mind, we have allowed the user the flexibility to set any duration (in minutes) for their productive and break cycles. This was done as different users work differently, often some wanting to have a longer work time and shorter rest time, etc. 

Originally we tried to implement Monster Hatching and Collection with the Pomodoro Timer Feature, this was meant to incorporate a gamified and competitive element to the users, however we thought it will take too much time to design a satisfactory amount of different monsters for the users to collect and compare with the different users. Hence we decided to scrap the Monster Hatching Element. However we are looking at some sort of Reward System implemented into our application, like Medals which is easier to implement compared to monsters given the timeframe.

### Lofi Music & NUSMods

A simple redirection to allow users to access websites that they commonly visit. The choice of Lofi Music was done as most students this generation has been a common genre of music for students to listen to while studying.

### Calendar Planner

We initially wanted to implement a Calendar Planner functionality that would incorporate NUSMods to allow accessibility and for users to be ahead of their schedules. However, we have since scrapped that functionality as NUSMods is exclusive to NUS students and does not appeal to the entirety of our target audience.


## System Design

```mermaid
graph TD
A[Users] -- Users register with Google via Firebase --> B

subgraph Application
B[+ Browser Router<br>+Firebase Authentication Hooks<br>- Application dissected into 3 main pages<br>-Usage of BrowserRouter to interchange between the different pages]
end

subgraph Navigation Bar
C[<Component><br>- Have the paths for interchanging the different functions]
end

D((User Interface))
B--> D
C--> D

subgraph Main Menu
E[<pages><br>Components: Navigation Bar]
end
D--> E

subgraph Pomodoro Timer
F[<pages><br>Components: Navigation Bar]
end
D--> F

subgraph Calendar Planner
G[<pages><br>Components: Navigation Bar]
end
D--> G

subgraph Firebase, Database
H[- Login/Logout: Authentication Hooks<br>- Firestore, store Login Information as well as Calendar details of users]
end

B -- User's Google login credentials will be stored in the project's designated Firebase --> H

G -- User's Calendar Plans will be stored into Firestore, NoSQL Document Database --> H
```


## Timeline

The web application will provide a timer system for any user (students, working adults, etc) to focus on required tasks & allow them to track their mindfulness and productivity

By Milestone 1:
-	Get the Login Page up  (Users will sign in through Google Accounts, hence they have to register a gmail account)
Users will be able to Login into the Application at least by Milestone 1

Progress: We only got the Login Page with FireBase Authentication Up and a Main Menu with nothing inside yet. 
We are currently still designing the Buttons and Headers with MUI (Material UI) and how we can put it on our Main Menu as we run into a lot of bugs with MUI. 

By Milestone 2:
-	Main Menu Page can be accessed after Logging in
-	A Calendar function and the Pomodoro Timer Function will be displayed on the Main Menu
-	Pomodoro Timer’s Basic Functionality is available at least (users will be able to start the 25minute Timer and able to set the 5-minute rest as well)

By MileStone 3:
-	Pomodoro Timer’s Functions are further developed, able to set intervals of 25 minutes. The No-Notification function will be developed and Tested.
-	Calender Function will be developed and the Users will be able to set reminders for their different Deadlines, as well as input the different classes they have on the different dates.

By Milestone 4:
-	The web application will be able to fully run without hicks, with different designs to make the application appealing to the users.


## Testing

### Milestone 1
[Proof of Concept Video Link](https://drive.google.com/file/d/1HzdzxDYUXQxmYw7TCRHSaplJ8exUkde-/view?usp=sharing)

### Milestone 2 -- Prototyping
[Poster Link](https://drive.google.com/file/d/1nqIEq6jAGFI3i_JJqJd2kb6pkN137_hG/view?usp=sharing) & [Video Link](https://drive.google.com/file/d/1d9-sfpvOJLDMpGEmc6kocC6SVdVgCyck/view?usp=sharing) 

#### Core Features Developed
- Main function of the Pomodoro Timer developed and working, with small adjustments to allow user to customise their Pomodoro Technique timings (ie. duration of work and duration of rest)
- Implementation of Material User Interface (MUI)
- Implementation of top bar & side tool bar (navigation bar)
- Background lo-fi music player
- Redirect function to NUSMods

#### Work in Progress
- Calendar planner 
- Log out functionality

#### Testing
- Unit testing of individual functions
- Integration testing of UI along with its functions

#### Evaluation of Testing Results
- Primary function, timer, is working fine
- Tested previous features while new features were being added
- Ensure functions work together
- Verify usabiltiy and visibility of the user interface

#### Interpretation of Feedback
- Timer is hardly visible
- Main menu looks empty
- Calendar planner not working as intended to

#### Future Plans
- Exploring ways to improve the timer's visibility, from increasing its size or introducing a drop shadow to create contrast with the background
- Small tidbits such as motivational quotes or cat fact of the day can be introduced into the main menu to make it look less empty
- Make the calendar palnner work


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
- FireBase (Database)



## Dependencies

- React
- Firebase
- MUI
