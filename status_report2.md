# Team 10 Status Report 2

### This Week's Accomplishments
- We added a function that iterates through the response received from ebay,
  finds the highest and lowest prices (and the dates on which they occurred),
  and stores them in global variables. It also computes the average price and
  displays all three values on our HTML page.
- Added checks and error messages in case the user enters an invalid query
  or no sales results are found.
- Added selector to add platform of choice to query.

### Challenges
- Certain searches return many false positives. For example, searching for
  "Sin and Punishment" gets results for both the relatively expensive N64
  original and the relatively cheap Wii sequel. This renders result data
  less valuable. We have attempted to combat this by adding a platform
  selector to further narrow the search.

### Next Week's Game Plan