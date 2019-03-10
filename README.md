# Comp 20 Spring 2019 Semester Group Project Team 10

### Title

Value Streak

### Problem

How to tell if a used game on ebay is currently selling for a good value.

### Solution

A site to check and display ebay pricing history for a specified game over a predetermined period of time.

### Use Scenario

When the user visits the site, they are prompted to enter the name of a video game, along with its platform(XBOX, PS4, Switch or PC). The user can also specify the time period of the price.
They will then be presented with a picture of the game and data indicating the prices that game has sold for on ebay over a predetermined period of time. This data will indicate whether the average sale price of the game is rising or falling over time and thus tell whether it is currently a good time to buy or to sell the game.

### Features
- Search for a game listing on ebay based on a query inputted by the user.
- Display cover art for the specified game.
- Display the lowest and highest sale prices in the predetermined period.
- Display a graph charting the change in sale price over time in the predetermined period.

### Data
- Queries inputted by the user.
- JSON lists of all completed transactions corresponding to the query obtained using the ebay API's findCompletedItems request.

### APIs
- ebay API: findCompletedItems and more

### Techniques
- The price history data is derived from all items whose listings are completed and are no longer available for sale on ebay.
- It will be necessarily to parse large volumes of sales data. We will need to come up with a set of very specific parameters when using ebay API to make sure the return JSON won't be too large.
- In order to display a correct item image, we will an absolute reference to the item picture specified in Item.PictureDetails.PictureURL in the returned JSON.
- We need to write algorithms that filter the parsed data for this purpose.
- We are considering using a database to reduce processing time on duplicate queries.

### Mock-Ups
![Landing page](/wireframe/Landing_Page.png "Landing Page")
![Search results](/wireframe/Search_Result.png "search results")
![Price History](/wireframe/Search_Result_-_History_Diagram.png "Price History")
![About page](/wireframe/About_new.png "about")

### Comments by Ming
* For some reason, I feel way too excited about this project. YES!
* This is actually a real problem. I bought Legend of Zelda: Link to the Past a few years ago and I think I overpaid for it apparently.  It sucks when Nintendo had to release SNES Classic which tanked the price of a games.
* I usually don't do this but here's a real kickass feature: inventory of your games, keep track of the worth of your library
