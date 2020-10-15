# Booking

Database seed script: "seedDB"
Build script: "react-dev"
Run script: "start"

Uses mongoDB. Need to set mongo uri in both the database/index.js and database/seedDB.js files to use the proper database.

Set to use port 4002

# Endpoints
to obtain data make a get request to "/api/low-days/:id" where id is the name of the document you want to recieve.

to update or create a document make a post request to 'post request to "/api/low-days/update/:name" where name is the name of the desired object you wish to update or create. in the request body send a JSON object that either contains the changes you wish to make, or mimics your desired new docment.

to delete an object send a post request to "/api/delete/low-days/". in the request body, send an object with a "name" property whos value is a string pertaining to the name of the document you wish to delete.




