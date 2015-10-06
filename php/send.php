
<?php

$to = "pakistan@imperial.ac.uk";
$sub = "PakSoc Contact Form";

$msg = $_POST['message'];
$from = $_POST['email'];
$fromTitle = $_POST['name'];

$header = "From: $fromTitle <$from>";

mail($to,$sub,$msg,$header);

?>