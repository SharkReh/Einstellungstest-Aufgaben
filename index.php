/*Aufgabe 11 Lösung */
<?php
function calculateAverage($numbers) {
    $sum = 0;
    $count = 0;
    foreach ($numbers as $number) {
      $sum += $number;
      $count++;
    }
    if ($count > 0) {
      $average = $sum / $count;
      return $average;
    } else {
      // Verhindert eine Division durch Null, falls das Array leer ist
      return 0;
    }
  }
  
  $numbers = [2, 4, 6, 8, 10];
  $result = calculateAverage($numbers);
  echo "Durchschnitt: " . $result;
?>