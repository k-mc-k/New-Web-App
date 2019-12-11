<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="author" content="Kelly McLaren" />
    <meta name="description" content="Calorie Counter App">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" media="screen" href="styles.css" type="text/css" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <title>Calorie Counter | Contact</title>
</head>

<body id="contact-head">

<div id="wrapper">

<header>
    <?php include ('header.php');?>
</header>

<!-- *** MAIN PART OF THE PAGE *** -->

<main>

<h1>Let's Chat!</h1>

<p>We appreciate our customer's feedback! Please fill out the form below.</p>

<form id=contact>
Your Name: <br /><input id="name" type="text"><br />
Email Address: <br /><input id="email" type="text"><br />
Phone Number: <br /><input id="number" type="text"><br />
Message: <br /><input id="message" type="text" style="height:200px"><br />
</form>
<button id=contactButton onClick="myButton()">Send your Message</button><br >

</main>

<!-- **** MAIN PART OF PAGE ENDS HERE **** -->
    
<!-- *** FOOTER *** -->
    
<footer id="footer">
    <?php include ('footer.php');?>
</footer>
    
</div>
<!-- *** DIV ENDS HERE *** -->

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script src="finalproject.js"></script>
<script>AOS.init();</script>

</body>
</html>