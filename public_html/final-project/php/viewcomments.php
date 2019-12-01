<?php
  // create short variable name
  $document_root = $_SERVER['DOCUMENT_ROOT'];
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Cat Facts - Comments</title>
    <style>
      table {
        border-collapse: collapse;
      }

      table, th, td {
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <h1>Bob's Auto Parts</h1>
    <h2>Customer Orders</h2> 
    <?php
      $servername = "localhost";
      $username = "amanzer";
      $password = "";
      $dbname = "amanzer";

      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);
      // Check connection
      if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
      }

      $sql = "SELECT * FROM Comments";
    
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
        echo "<table><tr><th>Username</th><th>Comment</th>";
      // output data of each row
      while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["Username"]."</td><td>".$row["Comment"]."</td></tr>";
      }
        echo "</table>";
      } else {
        echo "0 results";
      }
      $conn->close(); 
    ?>
    <a href="./insertcomment.html">New Order</a>
  </body>
</html>