<?php
  // create short variable names
  $comment = $_POST['comment'];
  $name = $_POST['name'];
  $document_root = $_SERVER['__PATH__'];
  $date = date('H:i, jS F Y');
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Cat Facts</title>
  </head>
  <body>
    <h1>Cat Facts Comments</h1>
    <h2>Comment Results</h2> 
    <?php
      echo "<p>Comment added at ".date('H:i, jS F Y')."</p>";
      echo "<p>Your comment is as follows: </p>";

      echo "<p>Comment: ".$comment."<br />";
      echo "Name:".$name."</p>";
      

      // open file for appending
      $servername = "localhost";
      $username = "amanzer";
      $password = "";
      $dbname = "amanzer";

      echo "1";
      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);
      echo "2";
      // Check connection
      if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
      }
      $sql = "INSERT INTO Comments (Username, Comment)
              VALUES ($name, $comment)";
    echo "3";
      if ($conn->query($sql) === TRUE) {
        echo "<p>Order written.</p>";
      } else {
        echo "fuck";
        throw new Exception("Error: " . $sql . "<br>" . $conn->error);
      }
    ?>

    <a href="./insertcomment.html">New Order</a>
    <a href="./viewcomments.php">View Orders</a>
  </body>
</html>

