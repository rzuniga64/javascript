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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
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
                    <legend class="scheduler-border" style="color:white">List of Transactions</legend>
                    <?php
                       $file = "transaction.txt";
                        $fp = fopen($file, "r");
                        if (!$fp) {
                            echo "<p>Could not open the data file.<br />";
                            echo "The system is down.  Please try back later.</p>";
                            echo "<p><a href=\"../login.htm\">Login Page</a></p>";
                            exit;
                        } else {
                            $transactions = fgets($fp);
                            $count = 1;
                            echo "<p>";
                            while (!feof($fp)) {
                                echo "$transactions<br/>";
                                $transactions = fgets($fp);
                                ++$count;
                            }
                            echo "</p>";
                            echo "<p><a href=\"../login.htm\">Login Page</a></p>";
                        }
                        fclose ($fp);
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
