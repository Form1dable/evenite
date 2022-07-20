# Evenite (In Progress)

## Description

---

Evenite is a web event management application for the students of FH Südwestfalen students. This application will provide features like, creating events and inviting participants who belong to a certain campus or program. It will also have a built-in survey form, user generated polls and a comment section to form a discussion. The data provided by the survey and poll will be visualized using different charts.

The other feature that this event management application will be providing is the participation confirmation of an event through a generated QR code which redirects to a form. Users confirming their participation won’t need to register an account and only need to confirm with a confirmation link provided to their email.

## Objective

---

The objective of building this project was to learn the fundamentals of web application development and to get a deeper understanding of both front and backend.

My goal was to learn by creating a project that is functional and somewhat resembles a real world web application. This application will serve as an event platform for the students of FH-SWF where all the events will be cataloged and can be searched by the users based on different criterias. The few criterias that I had in mind were to catalog events like workshops, career events, competitions and casual events created by the students which can be further filtered. 

**Frontend**

1. Learn typescript
2. Using frontend to request advanced search queries
3. Handle large application wide state management
4. Creating elegant and functional UI
5. Creating UI animations
6. Making REST API calls with proper error handling
7. Creating a dashboard to learn data visualization with D3.
8. Responsive Design

**Server and Database**

1. Learning Django
2. Designing and implementing REST API to handle search queries
3. Learn fundamentals of HATEOAS
4. Creating REST API documentation with open api specifications
5. Planning and Designing Database
6. Creating ERD diagrams
7. Learn fundamentals of web security (CORS, XSS, CSRF etc.)
8. Compress and store image files
9. Caching

## Technologies Used

---

**Frontend**

- React
- Typescript
- Redux Toolkit
- Tailwindcss
- Framer Motion
- D3 (Not implemented yet)

**Backend**

- Django
- Django rest framework
- JWT Access and Refresh Token Authentication

**Database**

- Sqlite3 (Development)
- Postgres (Production)
- Redis & Celery for caching and task queue (Yet to be implemented)

**Tools**

- Postman (API testing and documentation)
- Figma (Design prototype)
- [Draw.io](http://Draw.io) (ERD Design)

## Requirements & Features

---

### 1. User

---

**Account Creation and Authentication**

1. User account registration
2. Profile creation
3. User login
4. Updating profile information
5. User deletion
6. Profile Dashboard

**Event Searching and Participation**

1. Events can be searched  and filtered based on
    1. Categories
        1. Workshops
        2. Career Events
        3. Competitions
        4. Meetups
    2. Upcoming dates
    3. Pattern matching
    4. Creators
    5. Event ID
    6. QR Code
    7. Programs

### 2. Creator

---

**Events Creation and Invitation**

1. Registered user can create an event
2. Event creator can designate other people as coordinators 
3. Event creator will be able to invite participants individually
4. Event creator will be able to invite participants belonging to a certain group
5. Created events will have a form for users to register for participation
6. Registered users can participate with their pre-existing data
7. Non-registered users can fill out the form to participate
    1. Confirmation email will be sent after filling out the form along with an unique ID
    2. Unique ID can be used to participate in the survey and polls
8. Event creator can generate a QR code to redirect to the event page

**Survey** 

1. Event creator can create one survey for the event
2. Survey can have close ended questions with single and multiple choices.
3. Survey can be filled out by participants.
4. Result of the survey will be visible to the event creator only
5. For non-registered participants a unique ID will be required to participate in the survey 

**Polls**

1. Event creator can create [5] polls for the event.
2. Polls can have minimum of 2 options to a maximum of 10.
3. Result of the polls will be visible to both event creators and participants.
4. For non-registered participants a unique ID will be required to participate in the poll

**Event Dashboard**

1. Event dashboard will show the number of participants.
2. New participants can be individually invited from the dashboard.
3. Participants belonging to a certain group can be invited from the dashboard.
4. Participation can be revoked form a dashboard.
5. Specific users can be blocked from the event from the dashboard.
6. Event information can be changed from the event dashboard.
7. Event dashboard will show the satistics in a graph of each question in the survey.
8. Event dashboard will show the statistics in a graph of polls and their options.
9. Email can be sent to the participants from the dashboard.

## Database Design

---

**User and Authentication**

1. Users
2. Profiles

**Events & Invitations**

1. Events
2. Participants (Bridge Table)
3. Followings
4. Tags
5. Event Tags (Bridge Table)
6. Categories

Survey and Polls

1. Survey
2. Questions
3. Question Type
4. Single Choice Response
5. Multiple Choice Response

![ERD Evenite.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c268db24-4279-4318-ba52-269efd2463af/ERD_Evenite.jpg)

## Solution approach

---

### **Authentication**

---

**Requirements**

- Tokens should be restored on page reload
- Access token should be passed in the network requests
- After expiration access token should be updated by refresh token if the last one is presented
- React components should have access to the auth information to render appropriate UI

Implemented application wide token access with the help of redux toolkit to handle the auth state. The token can be fetched only from the `api/token` url where an email and password needs to be provided. The url will then provide with an `access` and `refresh` token. The access token will have an expiration time of 5 minutes and refresh token will have 7 days. When the access token is expired, a refresh token can be obtained from the `api/token/refresh` route by providing the `access` token.

This token will then be saved to the localstorage and attached to an `axios` instance header for all request to get access to the protected routes.

### API Call

---

**Requirements**

- An error or success message will be displayed
- Loading spinner should be display until api call gets fulfilled or rejected
