<?php
$name = "localhost";
$uname = "root";
$password = "";
$db_name = "test_db";
$conn = mysqli_connect($sname, $password, $db_name);
if(!$conn){
    echo"Connection Failed";
}