# ninja-tasker

* IDEA
----------------------
** Web Designer / UI Designer
- create a wireframe - DONE
    - create a mockup / htmls / framework, e.g. Bootstrap
- create html page of the mockup - DONE
- style the html page - DONE
    * using Figma to design the logo for the site


* Project Setup
----------------------
- node
- git

** tools
- nodemon
- colorize
- prettier
- scripts



* Displaying to do items
----------------------
** Back-end
- create an express server 
- create a GET route in express server 
- GET route should render the html page created from mock up 
- set up express with a view engine to render html files
- add styles to the html page
- use a data structure LIST(array) to store to do items
- add dummy data to LIST
- pass the LIST to the html page created from mock up

** Front-end
- display each item in the LIST passed to the html page



* Adding to do items
----------------------
** Back-end
- set up express server to accept incoming POST requests
- look at incoming request
- parse the incoming request
- store the incoming task into the LIST storing to do items
- pass the LIST to the html page created from mock up

** Front-end
- name input field in form holding the users input
- set up form to POST items to express server
- display each item in the LIST passed to the html page




* Removing to do items
----------------------
** Back-end
- set up express server to accept incoming DELETE requests
- use params place holder to identify the items to be deleted by index
- remove item from LIST

** Front-end
- manipulate the DOM to send DELETE request to express server delete route when an item is clicked.

