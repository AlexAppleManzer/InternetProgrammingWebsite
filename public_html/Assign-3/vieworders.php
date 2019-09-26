<?php
  // create short variable name
  $document_root = $_SERVER['DOCUMENT_ROOT'];
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Bob's Auto Parts - Customer Orders</title>
    <style>
      table {
        border: 2px;
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
        die("Connection failed: " . $conn->connect_error);
      }

      $sql = "SELECT OrderId, TireQuantity, OilQuantity, SparkQuantity, Address FROM Orders";
    
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
        echo "<table><tr><th>Order Id</th><th>Tire Quantity</th><th>Oil Quantity</th><th>Spark Quantity</th><th>Address</th></tr>";
      // output data of each row
      while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["OrderId"]."</td><td>".$row["TireQuantity"]."</td><td>".$row["OilQuantity"]."</td><td>".$row["SparkQuantity"]."</td><td>".$row["Address"]."</td></tr>";
      }
        echo "</table>";
      } else {
        echo "0 results";
      }
      $conn->close(); 
    ?>
  </body>
</html>