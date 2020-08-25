# Event RSVP Form

An [express](http://expressjs.com/), and [pug](https://pugjs.org/api/getting-started.html) app that collects RSVPs for an event, and stores them in [MongoDB](https://www.mongodb.com/).

## Instructions

1. Fill the form with your name and email.
2. Select whether you're attending or not.
3. In case you select `"I'll be there"` you should select also the number of guests (including yourself) are attending in the next question.
4. If `"I can't make it"` was selected so the numbers of guests will be disabled.
5. After submission you'll see a Thank You note and a link trough the list of guests.
6. To check the Guest List you can click on the link provided in the Thank You note or going through the path `/guests`.

## Requirements

- Three pages using [pug](https://pugjs.org/api/getting-started.html) templates to create the HTML.
- Posting the form (to the `POST /reply` roue) should response with a "Thank you" note and a link to the Guest List.
- Create a schema for storing each response. The information gets inserted within the database named `rsvp`.
- Use `express.urlencoded` middleware to automatically populate `request.body` with the values submitted on the form.
- The Guest List should show all entries in the responses collection splitted into two groups: Attending and Not Attending.
- Run MongoDB in a separate command line/terminal to get access to the database.

## Run local project

To start the project first install the dependencies:

```bash
npm install
```

then you can start the application with:

```bash
node app
```
