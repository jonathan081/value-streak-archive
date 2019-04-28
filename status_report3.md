# Team 10 Status Report 3

### This Week's Accomplishments
- This week, we have now have been able to link our front end visual script (index.js) with our back end server script (server.js). This has also allowed for better abstraction of data from the end client. Adding onto this, we also improved our server.js to better parse the data that we want from the JSON that eBay serves. 

- Have found and tested the Google Charts API to see how we can represent the data we want. This has not been implemented or pushed onto heroku yet but in test phase to see if it fits what want for our website.

- Can now display images of the games people query for. For now we are pulling the photo of the cheapest item that the eBay API returns.

### Challenges
- The biggest challenge this week was to be able to serve an alternate js file besies the server.js we have running for databases. We were concerned about teh security of allowing the user to directly interact with the database itself so we wanted to abstract the user's js script with a front end that could receive the data, check it, and then send it to the database to handle.

- Because we are limited from being able to run multiple scripts concurrently on the herokuapp, we had to figure out how to execute our front end html and js while having the server.js still run in the background. We found a particularly useful function app.use(express.static("public"));. This allowed the server to serve a static folder of content that we want the user to see.

### Next Week's Plan
- Next week, we want to take advantage of current server and log other data to better assist the user when buying the games. One example includes showing how many people have also searched for the same games in the past week to see how in demand the game is.

- Pass cleaner JSON data from the server.js to the index.js so that it's easier for the front end to handle the data that it only needs.

- Fully implement the google charts or any other visualizer so we can the past months data for a game on a scatter plot.
 
- Add the style sheet to support the mobile version of the site.

# Commments by Ming
* I'm curious what game / games work as test cases...
