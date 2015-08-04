<?php
    function readTrans(){ 
        $file = "transaction.txt";
        $fp = fopen($file, "r");
        if (!$fp)
        {
          echo "<p>Could not open the transaction file.</p>";
        } else {     
            $transData = fgets($fp);
            while (!feof ($fp))
            {
              $transArry = explode(" ", $transData);
              $type = $transArry[0];
              $amount = $transArry[1];
              $balance = $transArry[2];
              if ($type == 'w')
                echo "<p>withdrawal ".$amount." ".$balance." </p>";
              else
                echo "<p>deposit ".$amount." ".$balance." </p>";
              $transData = fgets($fp);
            }
            fclose($fp);
          }
        }
?>
