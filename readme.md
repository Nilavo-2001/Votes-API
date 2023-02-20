To start the project:

1. Install Node js.

2. Open this project folder in vscode.

3. Open terminal in vscode navigate to the API folder.

4. run command : npm install.

5. this will install all the necessary packages.

6. now to run the server run command : node index.js.

7. Open postman to test the API.

Features:

1.  Create a question.
2.  Add options to a question.
3.  Add a vote to an option of question.
4.  Delete a question.
5.  Delete an option.
6.  View a question with it’s options and all the votes given to it.

Required Routes :

# /questions/create (To create a question)

# /questions/:id/options/create (To add options to a specific question)

# /questions/:id/delete (To delete a question)

# /options/:id/delete (To delete an option)

# /options/:id/add_vote (To increment the count of votes)

# /questions/:id (To view a question and it’s options)
