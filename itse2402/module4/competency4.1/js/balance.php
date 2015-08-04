<?php
    include 'getBalance.php';
    $returnValue = readBalance();
?>
<!DOCTYPE html >
<head>
    <title>Express Bank | Balance</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta name="description" content="Competency 4.1-4.2 for ITSE 2402 | Balance">
    <meta name="author" content="Raul Zuniga">
    <!-- Mobile viewport optimized -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link href="../css/competency4_1.css" rel="stylesheet" type="text/css">
    <!-- Include Modernizr in the head, before any other Javascript -->
    <script src="../js/modernizr-2.6.2.min.js"></script>
</head>
<body>
    <div class="container">
        <div id="flag"></div>
    </div>
    <div class="container">
        <div class="starter-template">
            <form role="form" class="form">
                <h1 id="h1">Express Bank </h1><br />
                <fieldset class="scheduler-border">           
                    <?php
                        echo "<p>Your account balance: " ;
                        printf ( "%01.2f", $returnValue ) ;
                        echo "</p>" ;
                        echo "<p><a href=\"../login.htm\">Login Page</a></p>";
                    ?>
                </fieldset>
            </form>
        </div>
    </div>
    <div id="footer">
        &copy; 2014 Raul Zuniga | <a href="mailto:raul.zuniga@g.austincc.edu">raul.zuniga@g.austincc.edu</a>
        <script type="text/javascript" src="../../js/validation.js"></script>
    </div>
</body>
</html>


