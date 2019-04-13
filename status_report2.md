# Team 10 Status Report 2

### This Week's Accomplishments
- Transitioned from using JSONP getting eBay data on a client-side JavaScript, which exposes our eBay dev authentication key, to a node.js server. Now the server mediates the client and eBay, handling client input and returned data from eBay. We didn't use the ebay package from npm because that one looks undermaintained (7 years ago!) and we had already discovered using GET method to request the ebay API actually returns the JSON file we want.

- Added a function that iterates through the response received from ebay, finds the highest and lowest prices (and the dates on which they occurred), and stores them in global variables. It also computes the average price and displays all three values on our HTML page.

- Added checks and error messages in case the user enters an invalid query or no sales results are found.

- Added selector to add platform of choice to query.

### Challenges
- Certain searches return many false positives. For example, searching for
  "Sin and Punishment" gets results for both the relatively expensive N64
  original and the relatively cheap Wii sequel. This renders result data
  less valuable. We have attempted to combat this by adding a platform
  selector to further narrow the search.

### Next Week's Plan
- We didn't get to do the database because we were struggling quite hard to having a server.js. Glad it works now so our developer key to use eBay API is secured (at least more secure than before). We still need to figure out a way to host index.html as the landing page and having server.js running at the same time.

- Next week we need to have our heroku app succesfully deployed with a mongodb.

- More operations need to be done on the JSON data before storing it into mongodb.

