
<h1> Instructions before pulling the repo:</h1>
<ul>
  <li>First open your terminal in the root directory of this repository and type <code>npm install</code>. This will install (nodejs-express) all the npm packages for the backend. </li>
  <li>After than navigate through client directory. Inside this client folder opent your terminal and again type <code>npm install</code>. This will install (React) all the npm packages for the frontend. </li>
  <li>Then navigate through the root directory of this repository. Now you have to create a <code>.env</code> file so our mogoDB database can run properly. Please note that before doing this step you have to create mongoDB Atlas account and setup properly. After creating an account account, copy your connection string and paste it to the .env file like this example:  </li>
  <li><code>MONGO_URI=Paste Your Connection Here</code> </li> Go the next line of your .env file and add these two lines as I give you an example:
  <li><code>JWT_SECRET=Type Any Secret You Want</code><br/><code>NODE_ENV=5000</code></li>
  <li>This three lines are mandatory to run this app properly. So your .env file should look like this:<br/> <code>MONGO_URI = SOMETHING </code><br/>
    <code>NODE_ENV=5000</code> <br/>
<code>JWT_SECRET=SOMETHING</code></li> As I said earlier that this .env file should be located inside root directory of this repository.
  <li>Finally run <code>npm start</code> in the the terminal inside root directory to run backend server. Then open another terminal and navigate to client folder and inside this folder open up your terminal and type<code>npm start</code>. This will start your frontend server. Thank you and enjoy :)</li>
</ul>

