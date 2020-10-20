# Booking

Database seed script: "seedDB"
Build script: "react-dev"
Run script: "start"

Uses mongoDB. Need to set mongo uri in both the database/index.js and database/seedDB.js files to use the proper database.

Set to use port 4002

# Initial setup
install dependancies with npm install in terminal.
install cassandra:
  "https://cassandra.apache.org/download/"
after that, see "database and dataGenerator" section.

# Endpoints
to obtain data make a get request to "/api/low-days/:id" where id is the name of the document you want to recieve.

to update or create a document make a post request to 'post request to "/api/low-days/update/:name" where name is the name of the desired object you wish to update or create. in the request body send a JSON object that either contains the changes you wish to make, or mimics your desired new docment.

to delete an object send a post request to "/api/delete/low-days/". in the request body, send an object with a "name" property whos value is a string pertaining to the name of the document you wish to delete.

# Database and dataGenerator
==dataGenerator==

to generate data run "npm run 10mil" in the terminal.

==seeding==

to seed the database open a terminal and run "cqlsh" to open the cassandra terminal. use the following querry to create a keyspace:

CREATE KEYSPACE hotels WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

run the following command in the cqlsh terminal:

CREATE TABLE hotels.hotel (locationId text, rooms int, name text PRIMARY KEY, lowDays text);

then run the following command in the same terminal:

COPY hotels.hotel (locationId, rooms, name, lowDays) FROM 'out.csv' WITH HEADER = TRUE;

NOTE: this may take some time.

from here use "ctrl + d" to exit cqlsh or close the terminal.





