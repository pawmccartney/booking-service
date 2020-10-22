# Booking

Database seed script: "seedDB"
Build script: "react-dev"
Run script: "start"


Set to use port 4002

# Endpoints
to obtain data make a get request to "/api/low-days/:id" where id is the name of the document you want to recieve.

to update or create a document make a post request to 'post request to "/api/low-days/update/:name" where name is the name of the desired object you wish to update or create. in the request body send a JSON object that either contains the changes you wish to make, or mimics your desired new docment.

to delete an object send a post request to "/api/delete/low-days/". in the request body, send an object with a "name" property whos value is a string pertaining to the name of the document you wish to delete.

# init
be sure postgress is installed on the machine:
  https://www.postgresqltutorial.com/install-postgresql-linux/

after that, in the base directory:
  run "npm install" to install the dependancies.

# Setting up postgres

be sure to see the "init" section above before proceeding.

log into the default postgres user with:

  sudo -i -u postgres;

then jump into the psql terminal with:

  psql;

from here run:

  create database hotels;

after that things will get a little weird, just dont question it lol.
use ctrl + d until you are back at the base terminal.
then run the following commands:

  sudo -u postgres psql

this will take you to an administrative terminal for psql. we do this because on ubuntu and some other linux OS the default password is set to something unspecific, and we need one for our node application.
so from inside this admin terminal, run the following to set the password for the "postgres" user to "password":

  ALTER USER postgres PASSWORD 'password';

after that your done! ctrl+d back to the base terminal or close the termial all together. your choice.


# Tools

  to see what information about the postgres server, open the psql terminal and run the following:

    \conninfo

  to switch to a database

    \c dvdrental

  to display tables once you have selected a database:

    \dt

  when connected to a database, use the following to drop a table:

    DROP TABLE <table_name>;
