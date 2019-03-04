Comp 20
Spring 2019
Semester Group Project
Team 10

Title: Value Streak

Problem: How to tell if a used game on ebay is currently selling for a good value.

Solution: A site to check and display ebay pricing history for a specified game over a predetermined period of time.

Features:
- Search for a game listing on ebay based on a query inputted by the user.
- Display cover art for the specified game.
- Display the lowest and highest sale prices in the predetermined period.
- Display a graph charting the change in sale price over time in the predetermined period.

Data:
- Queries inputted by the user.
- JSON lists of all completed transactions corresponding to the query obtained using the ebay API's findCompletedItems request.

Techniques:
- ebay API.
- It will be necessarily to parse large volumes of sales data.
- We are considering using a database to reduce processing time on duplicate queries.