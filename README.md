Comp 20
Spring 2019
Semester Group Project
Team 10

###Title

Value Streak

###Problem

How to tell if a used game on ebay is currently selling for a good value.

###Solution

A site to check and display ebay pricing history for a specified game over a predetermined period of time.

###Use Scenario

When the user visits the site, they are prompted to enter the name of a video game.
They will then be presented with data indicating the prices that game has sold for on ebay over a predetermined period of time. This data will indicate whether the average sale price of the game is rising or falling over time and whether it is currently a good time to buy or to sell the game.

###Features
- Search for a game listing on ebay based on a query inputted by the user.
- Display cover art for the specified game.
- Display the lowest and highest sale prices in the predetermined period.
- Display a graph charting the change in sale price over time in the predetermined period.

###Data
- Queries inputted by the user.
- JSON lists of all completed transactions corresponding to the query obtained using the ebay API's findCompletedItems request.

###APIs
- ebay API

###Techniques
- It will be necessarily to parse large volumes of sales data. We will need to write algoryhtms for this purpose.
- We are considering using a database to reduce processing time on duplicate queries.

###Mock-Ups
![Main page](/wireframe/index.png "index")
![Search results](/wireframe/search_results.png "search results")
![About page](/wireframe/About.png "about")