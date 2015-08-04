<?php

function readBalance()
{ 
    $file = "balance.txt";
    $fp = fopen($file, "r");
    if (!$fp)
    {
        echo "<p>Could not open the data file.</p>";
        $balance = 0;
    }
    else
    {
        $balance = fgets($fp);
        fclose ($fp);      
    }
    return $balance;
}

