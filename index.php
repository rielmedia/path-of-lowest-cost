<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Pixel Test</title>

        <link href="css/main.css" media="all" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <h1>Path of lowest cost</h1>
        <div class="container">
            <div class="left">
                <div id="gridContainer"></div>
            </div>
            <div class="right">
                <div id="upload">
                    <h3>Select a file. <span><em>(.txt)</em></span></h3>
                    <input type="file" name="file" id="file" onchange="Grid.readFile(this);" />
                </div>
                <div id="estimate">
                    <button class="btn" onclick="Grid.buildPaths();">Find Path</button>
                    <div id="outputContent">
                        <span id="isComplete"></span><br />
                        <span id="totalCost"></span><br />
                        <span id="rowsTraversed"></span>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/vendor/jquery.min.js" type="text/javascript"></script>
        <script src="js/app.js" type="text/javascript"></script>
    </body>
</html>