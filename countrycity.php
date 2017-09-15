<?php
/*
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "root", "", "customer");
$country = $conn->query("SELECT name,id FROM tblcountry");
$city = $conn->query("SELECT name, 	countryid FROM tblcity");
$arr=array('record'=>array('country'=>array(
    'india'=>array(
        'city'=>array('noida','gzb')
    ),
    'uk'=>array(
        'city'=>array('newyork','wang')
    ),
    'usa'=>array(
        'city'=>array('lasvegas','xyz')
    )
)
                          )
          );
echo json_encode($arr);exit;
$outp = "";
while($rs = $country->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Countries":"'  . $rs["name"] . '"}';
   //  $outp .= '"City":"'   . $rs["city"]        . '",';
   // $outp .= '"Country":"'. $rs["country"]     . '"}';
    
    while($rs = $city->fetch_array(MYSQLI_ASSOC)) {
        
    }
}
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
*/

?>
<?php
/*
        // set up the connection variables
        $db_name  = 'customer';
        $hostname = 'localhost';
        $username = 'root';
        $password = '';

        // connect to the database
        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

        // a query get all the records from the users table
        $sql = 'SELECT name FROM tblcountry';

        // use prepared statements, even if not strictly required is good practice
        $stmt = $dbh->prepare( $sql );

        // execute the query
        $stmt->execute();

        // fetch the results into an array
        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

        // convert to json
        $json = json_encode( $result );

        // echo the json string
        echo $json;*/
?>
[{"name":"India","cities":[{"name":"Noida"},{"name":"Delhi"}]},{"name":"USA","cities":[{"name":"NewYark"},{"name":"Washingatom"}]},{"name":"UK","cities":[{"name":"loswagas"},{"name":"Birmingham"}]}]