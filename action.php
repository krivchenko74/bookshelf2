$f = fopen('test_results.txt', a);
fwrite($f, $_POST['q1']);
fclose($f);