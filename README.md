# README for VAintelegence_test

1. Make sure you have installed mySQL on your computer 
2. Clone this repository with **git clone** command 
3. Install required dependences with **npm i** command 
4. Provide your database user data **(DB_HOST, DB_USER, DB_PASSWORD, DATABASE)** for mySQL configuration in **.env** file. 
5. Before running the app, start initialisation script with **npx ts-node src/firstInitializationScript.ts** command. It would prepare database tables and default set values 
6. Start node proccess with **npm start** command


You can use VA.postman_collection exported filed file for your Postman to test routes quickly and convenient

Also app caches get requests with same parameters, allows to filter get request with any parameter, just pass it as query parameters
