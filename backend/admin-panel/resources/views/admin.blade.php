<html>
    <body>
        <h1>Hello Admin ! </h1>

        <h1> Login Form </h1>

        <form action="/api/authenticate" method="POST">
            <label id="adminEmail"> Email </label>
            <input id="adminEmail" type="email" placeholder="Enter Email" />
            
            <label id="adminPassword"> Password </label>
            <input id="adminPassword" type="password" placeholder="Enter Password" />

            <button type="submit"> Login </button> 
        </form>
    </body>
</html>

