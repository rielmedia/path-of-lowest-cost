(function($){
	"use strict";

	window.Grid = {

		input: '341286\n618274\n593995\n841326\n372864',
		grid: [],
		costs: [],

		init: function () {

			var _this = this;

			// Cast input into a multi-dimensional array
			var rows = this.input.split('\n');
			for(var r=0; r<rows.length; r++){
				_this.grid[r] = rows[r].split('');
			}

			// Build the grid
			_this.buildGrid();
		},

		buildGrid: function() {
			var grid = '';

			this.grid.forEach((row,r) => {
				grid += '<div class="row r'+(r+1)+'">';
				row.forEach((cell,c) => {
					grid += '<div class="col c'+(c+1)+'">'+cell+'</div>';
				});
				grid += '</div>';
			});

			$('#gridContainer').html(grid);
		},

		buildPaths: function() {
			// console.log(this.grid); 

			var columns = [];
			var paths = [];
			var rows = this.grid;

			for(var i=0; i<rows[0].length; i++){
				var c = [];
				rows.forEach((cells,r) => {
					c.push(cells[i]);
				});
				columns.push(c);
			}
			// console.log(columns);

			columns.map((column,i) => {
				console.log(column);

				var sums = [];
				var moves = [];
				var path = [ Number(column[0]) ];
				
				column.map((col,j) => {
					// console.log(col);

					columns[i+1].map((next,n) => {
						var n1 = (j==0) ? columns[i+1][columns[i+1].length-1] : columns[i+1][j-1];
						var n2 = columns[i+1][j];
						var n3 = (j==(columns[i+1].length-1)) ? columns[i+1][0] : columns[i+1][j+1];

						moves = [ 
							Number(n1), 
							Number(n2), 
							Number(n3) 
						];

						sums = [
							Number(col) + Number(n1),
							Number(col) + Number(n2),
							Number(col) + Number(n3),
						];
					});

					// Sort from min to max value
					moves.sort((a, b) => {
						return a - b;
					});
					
					sums.sort((a, b) => {
						return a - b;
					});

					var min = Math.min.apply(null,sums);
					path.push( moves[sums.indexOf(min)] );

					console.log(Number(col));
					console.log(moves);
					console.log(sums);
				});
				// console.log(path);
			});
		},

	}

	Grid.init();

})($);
