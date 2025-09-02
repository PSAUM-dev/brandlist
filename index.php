<!DOCTYPE html>
<html lang="en">
<?php $version = 1; ?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brand TopList</title>

    <!-- BootStrap -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

    <!-- My custom ccss -->
    <link rel="stylesheet" href="assets/css/style.css" />
    
</head>
<body class="position-relative">

    <?php

        // Header
        include 'components/comp.header.php';

        // Page body
        $pageIndex = isset($_GET['p']) ? $_GET['p'] : 'home';

        switch ($pageIndex) {
            case 'home' :
                include "pages/$pageIndex.php";
                break;

            default :
                include "pages/404.php";
                break;
        }

        // Footer
        include 'components/comp.footer.php';

        //Bootstrap
        echo "<script src='assets/js/bootstrap.bundle.min.js'></script>";

        // Page controller
        echo "<script type='module' src='controller/controller.$pageIndex.js?version=$version'></script>";
    ?>

</body>
</html>