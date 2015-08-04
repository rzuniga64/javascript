<?php
    $Zip = $_GET["zip"];
    $WeatherURL= "http://weather.yahooapis.com/forecastrss?p=".$Zip;
    header("Content-Type: text/xml");
    header("Content-Length: ".strlen(file_get_contents($WeatherURL)));
    header("Cache-Control: no-cache");
    readfile($WeatherURL);
?>