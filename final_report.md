# Team 10 Final Report

## Purpose
To enable users to check videogame prices on eBay over time and check whether a buying or selling price is a good deal.

## Features
- Uses eBay API to search for completed sales.
- Uses an mLab MongoDB database to track average prices over a longer period than eBay sales data and inform users of long-term trends.
- Uses Google Charts to present sales data to users in a visually appealing manner.

## Challenges
- Similar names (most often seen with sequels/prequels) often return false positives (mitigated by the addition of platform selector).
- Bundles of multiple games including the game searched for often appear as outliers on the upper end of search results.
- Special characters such as apostrophes and exclamation points caused issues with output (fixed by removing these characters from input before use).

## Security
- The user is only allowed access to a public folder served as static content.
- Only the server is authenticated to communicate with the database.
- All API keys, etc. are stored in environment variables or otherwise in accordance with Google security recommendations.
- User input is stripped of special characters before transmission to the server and escaped using validator when it is received by the server.
- CORS is only enabled for our own domain (i.e. the client-facing static content).
- eBay data is processed on the server and stripped down to only the components we intend to display to the user before being sent to client facing pages.
- No sensitive data or potentially identifying information is stored in the database.

## Features We Would Like to Add
- Options to filter results by condition.