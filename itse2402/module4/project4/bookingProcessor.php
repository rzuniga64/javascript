<?php
    $firstName=$_POST['fname'];
    $lastName=$_POST['lname'];
    $mobile=$_POST['mobile'];
    $email=$_POST['email'];
    $address=$_POST['address'];
    $city=$_POST['city'];
    $State=$_POST['State'];
    $zip=$_POST['zip', 'groupNumber'];
    $groupNumber=$_POST['groupNumber'];
    $select=$_POST['select'];
    $totalCost=$_POST['totalCost'];

    $file = "transaction.txt";
    $fp = fopen($file,"a");
    if (!$fp) {
        echo "<p>Could not open the data file.<br />";
        echo "The system is down.  Please try back later.</p>";
        echo "<p><a href=\"../login.htm\">Login Page</a></p>";
        exit;
    } else {
        fwrite( $fp, "$firstName"," ","$lastName\n");
    }
    fclose ($fp);
?>

<!DOCTYPE html>

<html>
	<head>

		<!-- Website Title & Description for Search Engine purposes -->
		<title>Carillo Tours</title>
        <meta name="author" content="Raul Zuniga">
        <meta charset="utf-8" />

		<!-- Mobile viewport optimized -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<!-- Bootstrap CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/bootstrap-glyphicons.css" rel="stylesheet">

		<!-- Custom CSS -->
		<link href="css/project4.css" rel="stylesheet">

		<!-- Include Modernizr in the head, before any other Javascript -->
        <!-- Plugin that allows older browser to recognize HTML5 elements. Put before any HTML is rendered. -->
		<script src="js/modernizr-2.6.2.min.js"></script>

        <!-- Custom JS -->
        <script src="js/project4.js"></script>
        <!-- jQuery -->
        <script type="text/javascript" src="../../js/jquery-1.11.1.min.js"></script>
        <!-- Bootstrap JS -->
        <script type="text/javascript" src="js/bootstrap.min.js"></script>

        <script type="text/javascript">
            /* <![CDATA[ */
            $('.carousel').carousel();

            var $ = jQuery.noConflict();
            $(document).ready(function() {
                $('#myCarousel').carousel({cycle:true});
            });
            /* ]]> */
        </script>

	</head>
    <body>

        <!-- class container is a bootstrap3 wrapper that centers the website in the middle of the browser and it cuts off the edges -->
        <div class = "container" id="main" style="width:900px">

            <!-- bootstrap3 classes which will give the div the style of the navbar -->
            <!-- this is set as position=fixed so it doesn't behave as if it is within its parent -->
            <nav id="nav" class="navbar navbar-fixed-top" id="navbar">
                <!--want contents of navbar to be in a container so the it is fixed within an area, not full width-->
                <div class="container">
                    <!-- will target div element with class navbar-response-collapse below, bootstrap3 feature-->
                    <button type="button" class="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" id="brand" href="index.html">Carillo Tours</a>

                    <!--nav-collapse allows our navbar to be responsive to mobile size-->
                    <div class="nav-collapse collapse navbar-responsive-collapse navigation">
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <!--droptown-toggle is a bootstrap3 class, data-toggle is a tag for the dropdown-->
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Tours<strong class="caret"></strong></a>
                                <ul id="tours" class="dropdown-menu">
                                    <li><a href="booking.html">Italy Tours</a></li>
                                    <li><a href="booking.html">Hawaii Tours</a></li>
                                    <li><a href="booking.html">Costa Rica Tours</a></li>
                                </ul> <!--dropdown-menu-->
                            </li>
                        </ul> <!--nav-->

                    </div> <!--nav-collapse-->
                </div> <!--constainer-->
            </nav> <!-- navbar -->

            <!-- bootstrap classes that give you a carousel style and have it slide -->
            <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel" >

                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li class="active" data-slide-to="0" data-target="#myCarousel"></li>
                    <li data-slide-to="1" data-target="#myCarousel"></li>
                    <li data-slide-to="2" data-target="#myCarousel"></li>
                </ol>
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                    <div class="item active">
                        <div class="carousel-caption">
                            <h4></h4>
                        </div><!-- end carousel-caption-->
                    </div><!-- end item -->

                    <div class="item">
                        <div class="carousel-caption">
                            <h4 style="font-family: 'Times New Roman'">Hawaii Tours 2015
                            <small style="color:dodgerblue">9 days among the islands!</small></h4>
                        </div><!-- end carousel-caption-->
                    </div><!-- end item -->

                    <div class="item">
                        <div class="carousel-caption">
                            <h4 style="font-family: 'Times New Roman'">Costa Rica Tours 2015
                                <small style="color:dodgerblue">9 days in paradise!</small></h4>
                        </div><!-- end carousel-caption-->
                    </div><!-- end item -->
                </div><!-- carousel-inner -->

                <!-- Controls -->
                <a class="left carousel-control" data-slide="prev" href="#myCarousel"><span class="icon-prev"></span></a>
                <a class="right carousel-control" data-slide="next" href="#myCarousel"><span class="icon-next"></span></a>

            </div><!-- end myCarousel -->

            <div id="page_content">
                <p><span class="dropcap">P</span>lease enter your contact information. </p>
                <form method="post" action="bookingProcessor.php"  enctype="application/x-www-form-urlencoded" role="form" class="form">
                    <fieldset class="scheduler-border">
                        <legend class="scheduler-border">Contact Information</legend>
                        <?php
                            echo $firstName;
                            echo $lastName;
                            echo $mobile;
                            echo $email;
                            echo $address;
                            echo $city;
                            echo $State;
                            echo $zip
                            echo $groupNumber
                            echo $select
                            echo $totalCost
                        ?>
                    </fieldset>
                </form>
            </div>

        </div> <!-- container -->

        <!-- put the footer outside the container so it's not chopped off -->
        <footer>
            <div class="container">
                <div class="row">

                    <div class="col-sm-2">
                        <h6>Copyright &copy; 2014 Carillo Tours</h6>
                        <table>
                            <tr>
                                <td>
                                    <a href="http://validator.w3.org/check/referer">Conformance<br>Checker</a><br />
                                    <a href="http://validator.w3.org/checklink">Link Checker</a>
                                </td>
                                <td>
                                    <a href="http://jigsaw.w3.org/css-validator/check/referer">
                                    <img src="http://www.austincc.edu/jscholl/images/vcss.png" alt="Valid CSS!" height="31" width="88" style="border: 0">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div> <!--col-sm-2-->

                    <div class="col-sm-4">
                        <h6>Contact Us</h6>
                        <p>2910 South Congress<br>512-444-6696</p>
                    </div><!--col-sm-4-->

                    <div class="col-sm-2">
                        <h6>Navigation</h6>
                        <ul class="notstyled">
                            <li><a href="booking.html">Ttaly Tours</a></li>
                            <li><a href="booking.html">Hawaii Tours</a></li>
                            <li><a href="booking.html">Costa Rica Tours</a></li>
                        </ul>
                    </div> <!--col-sm-2-->

                    <div class="col-sm-2">
                        <h6>Follow Us</h6>
                        <ul class="notstyled">
                            <li><a href="#" target="_blank"><img src="images/twittericon.png" alt=""> Twitter</a></li>
                            <li><a href="#" target="_blank"><img src="images/facebookicon.png" alt="">Facebook</a></li>
                            <li><a href="#" target="_blank"><img src="images/instagramicon.png" alt="">Instagram</a></li>
                        </ul>
                    </div> <!--col-sm-2-->

                    <div class="col-sm-2">
                    </div><!-- end col-sm-2 -->

                </div><!--row-->
            </div><!--container-->
        </footer>
	</body>
</html>

