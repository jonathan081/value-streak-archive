# Team 10 Status Report 1

### This Week's Accomplishments
So far, we have been able to successfully request and receive JSON data from the eBay API
to access price data. This is arguably the most important step given this data drives the interactivity of the site. We have also been able to now customize the search request from
a users data in our websites search bar.  

### Challenges
The biggest hurdle was actually understanding the eBay API documentation because it
didn't use a simple XMLHTTPRequest like other assignments. With eBay's API, we created a
a script element that contained a src URL. This url variable we pass contains our given
search query. This url also calls a callback function we made that parses the actual data
and turns it into a JSON that we can use.


### Next Week's Game Plan
For next week, we want to start implementing the MongoDB database to facilitate storage of
people's games to track the value of their inventory. At minimum, we want to configure the 
MongoDB component of site so we can send basic JSON data to store and pull from by the end
of the week. We also want to start utlizing the eBay data by implementing it into content
the user can view. Hopefully we can start logging the data on a graph or showing the lowest
price for a search query.