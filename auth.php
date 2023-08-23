<?php
// Simulate user authentication
$username = $_POST['username'];
$password = $_POST['password'];

// For demonstration purposes, let's consider valid credentials as "admin" and "password"
if ($username === "admin" && $password === "password") {
  echo "success";
} else {
  echo "failure";
}
