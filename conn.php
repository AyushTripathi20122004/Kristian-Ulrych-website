<?php
$conn = mysqli_connect('localhost', 'root', '', 'resumedata');

if (!$conn) {
    die('Database not connected: ' . mysqli_connect_error());
}
?>