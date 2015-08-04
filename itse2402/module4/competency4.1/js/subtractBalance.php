<?php
    $newWithdrawal=(float)$_POST['withdrawalAmount'];
    $file = "balance.txt";
    $fp = fopen($file, "r");
    if (!$fp) {
        echo "<p>Could not open the data file.<br />";
        echo "The system is down.  Please try back later.</p>";
        echo "<p><a href=\"../login.htm\">Login Page</a></p>";
        exit;
    } else {
        $balance = fgets($fp);
    }
    fclose ($fp);
    
    if ($newWithdrawal > $balance) {
        echo "<p>Your account balance does not have sufficient funds.";
        echo " Please try back later.</p>";
        echo "<p><a href=\"../login.htm\">Login Page</a></p>";
        exit;
    }
    
    $file = "balance.txt";
    $fp = fopen($file, "w+");
    if (!$fp) {
        echo "<p>Could not open the data file.<br />";
        echo "The system is down.  Please try back later.</p>";
        echo "<p><a href=\"../login.htm\">Login Page</a></p>";
        exit;
    } else {
        $newBalance = $balance - $newWithdrawal;
        fwrite( $fp, "$newBalance");
    }
    fclose ($fp);
    
    $file = "transaction.txt";
    $fp = fopen($file,"a");
    if (!$fp) {
        echo "<p>Could not open the data file.<br />";
        echo "The system is down.  Please try back later.</p>";
        echo "<p><a href=\"../login.htm\">Login Page</a></p>";
        exit;
    } else {
        fwrite( $fp, "w $newWithdrawal $newBalance\n");
    }
    fclose ($fp);
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
            <form  method="post" action="addBalance.php" enctype="application/x-www-form-urlencoded" role="form" class="form">
                <h1 id="h1">Express Bank </h1><br />
                <fieldset class="scheduler-border">           
                    <?php
                        echo "Thank you for your withdrawl.<br />For another transaction return to the login page.";
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
