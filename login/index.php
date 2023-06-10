<?php
session_start();
if (!isset($_SESSION["user"])) {
   header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>User Dashboard</title>
    <title>NOTEX</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header class="header">
      <h1>NOTEX</h1>
      <nav>
        <ul class="nav-links">
          <li><a href="index.php">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contract.html">Contact Us</a></li>
         
          <a href="logout.php" class="btn btn-warning">Logout</a>
        </ul>
      </nav>
    </header>
    <div class="container my-3">
      <h2>Welcome to NOTEX</h2>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Write Your Notes Here</h5>
          <div class="form-group">
            <input type="text" class="form-control" id="noteTitle" placeholder="Title">
          </div>
          <div class="form-group">
            <textarea class="form-control" id="noteDesc" rows="4" placeholder="Description"></textarea>
          </div>
          <br>
          <button class="btn btn-primary" id="addBtn">Add a Note</button>
        </div>
      </div>
      <hr>
      <h3>Your Notes</h3>
      <hr>
      <div id="notes" class="row container-fluid"></div>
    </div>
    <script src="app.js"></script>


    <footer>
        <div class="footer-content">
          <div class="footer-logo">
            <img src="logo.png" alt="Logo">
            <h3>NOTEX</h3>
          </div>
          <nav class="footer-menu">
            <ul>
              <li><a href="index.php">Home</a></li>
              <li><a href="about.html">About Us</a></li>
             
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
          <div class="footer-social">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 NOTEX. All rights reserved.</p>
        </div>
      </footer>
      
       
    </div>
</body>
</html>