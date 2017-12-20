(function($){
	"use strict";

	window.Grid = {

		grid: [],

		// Reads the uploaded .txt file
		readFile: function(e) {
			var _this = this;

			var fr = new FileReader();
			fr.onload = function(){
				_this.buildGrid( this.result );
			}
			fr.readAsText(e.files[0]);

			// Show/Hide the file input field and the "Find Path" button
			document.getElementById('upload').style.display = 'none';
			document.getElementById('estimate').style.display = 'block';
		},


		// Builds the grid using uploaded input data
		buildGrid: function( input ) {

			var _this = this;

			// Cast input data into a global array
			var rows = input.split('\n');
			for(var r=0; r<rows.length; r++){
				_this.grid[r] = rows[r].split('');
			}

			var grid = '';
			_this.grid.forEach((row,r) => {
				grid += '<div class="row r'+(r)+'">';
				row.forEach((cell,c) => {
					grid += '<div class="col r'+(r)+'c'+(c)+'">'+cell+'</div>';
				});
				grid += '</div>';
			});
			$('#gridContainer').html(grid);
		},


		// Determines the path with the lowest cost
		buildPaths: function() {

			var _this = this;
			var rows = this.grid;
			var paths = [];
			var results = '';

			// Loop through rows
			rows.map((row,r) => {

				var sum = 0;
				var path = [];
				var totalCost = 0;
				var rowsTraversed = [];

				row.map((cell,c) => {

					if(totalCost < 50){

						// Adds the total cost of the path
						totalCost += Number(rows[r][c]);

						// Stores the costs of each cell in the path
						path.push( Number(rows[r][c]) );

						// Stores the rows that the path traversed
						rowsTraversed.push(r);

						if(c < row.length-1){

							var sums = [];
							var moves = [];

							sum += Number(cell);

							var temp = _this.calculateNextMove(r,rows);
							temp.map((move,m) => {
								moves.push( rows[move][c+1] );
								sums.push( Number(cell) + Number(rows[move][c+1]) );
							});

							// Resets the row index to the key associated with the lowest value
							r = temp[ _this.getLowestValue(sums) ];
						}
					}
				});

				console.log('Total Cost: ' + totalCost );
				console.log('Path length: ' + path.length);
				console.log('Path: ' + path);

				// Stores all of the path results
				paths.push({
					isComplete: _this.isPathComplete(path,row),
					totalCost: totalCost,
					rowsTraversed: rowsTraversed,
				});

				// sort by value
				paths.sort(function (a, b) {
				  return a.totalCost - b.totalCost;
				});

				console.log(paths);
			});

			// Prints results
			_this.printResults(paths);

			// Highlight grid cells
			_this.highlightGridCells(paths);
		},


		// Prints results
		printResults: function(output) {
			document.getElementById('isComplete').textContent = output[0].isComplete;
			document.getElementById('totalCost').textContent = output[0].totalCost;
			document.getElementById('rowsTraversed').textContent = output[0].rowsTraversed;
		},


		// Highlights the path with the lowest cost
		highlightGridCells: function(paths) {
			var rows = paths[0].rowsTraversed;
			for(var j=0; j<6; j++){
				rows.map((row,i) => {
					var className = 'r'+row+'c'+i;
					document.getElementsByClassName(className)[0].style.color = '#FFFFFF';
					document.getElementsByClassName(className)[0].style.backgroundColor = '#FF3300';
				});
			}
		},


		// Calculates the next 3 possible moves using the element's array key
		calculateNextMove: function(i,arr) {
			var moves = [];
			moves.push( (i==0) ? arr.length-1 : i-1 );
			moves.push( i );
			moves.push( (i==arr.length-1) ? 0 : i+1 ); 
			return moves;
		},


		// Returns the key of the element with the lowest value
		getLowestValue: function(arr) {
			var min = Math.min.apply(null,arr);
			return arr.indexOf(min);
		},


		// Determines if the given path spanned the entire length of the grid
		isPathComplete: function(path,arr) {
			return (path.length === arr.length) ? 'Yes' : 'No';
		},


		// Callback for the reduce() function which returns the sum of the elements of an array
		getSum: function(total, num) {
			return total + num;
		},
	}

})($);
