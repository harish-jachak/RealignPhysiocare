<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['value1']) && isset($_POST['value2']) &&
        isset($_POST['value3'])) {
        
        $value1 = $_POST['value1'];
        $value2 = $_POST['value2'];
        $value3 = $_POST['value2'];
        //$email = $_POST['email'];
        //$phoneCode = $_POST['phoneCode'];
        //$phone = $_POST['phone'];

        $host = "sql6.freesqldatabase.com";
        $dbUsername = "sql6506979";
        $dbPassword = "n5sqLEZkVd";
        $dbName = "sql6506979";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            //$Select = "SELECT phone FROM register WHERE Phone = ? LIMIT 1";
            $Insert = "INSERT INTO RealignAppointments("", value1, value2, value3) values(?, ?, ?, ?,)";

            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $phone);
            $stmt->execute();
            $stmt->bind_result($resultPhone);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;

            if ($rnum == 0) {
                $stmt->close();

                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("isii", "", $value1, $value2, $value3);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registered using this phone.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}
?>
