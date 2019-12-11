<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="author" content="Kelly McLaren" />
    <meta name="description" content="Calorie Counter App">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" media="screen" href="styles.css" type="text/css" /> 
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <title>Tenai Calorie Counter</title>
</head>

<body>

<div id="wrapper">

<header>
    <?php include ('header.php');?>
</header>

<!-- *** MAIN PART OF THE PAGE *** -->

<main>

<div id="homepage">

<p>Easy. Fast. Smart. On the Go. <br />
Counting your calories has never been easier!</p>

<img id="landingimg" name="slideshow" src="images/meal_lrg.jpg" alt="A table full of food." />

</div>

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
