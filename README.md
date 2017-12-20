# Path of Lowest Cost
A practice script that selects the path with the lowest sum of values from each of its cells.
...

### Installation
Download the source code then upload the files to your server.

``` 
$ git clone https://github.com/rielmedia/path-of-lowest-cost.git 
```

### Usage
Select a .txt file using the file upload input field.  The contents of the .txt file will be used to build the grid so it should contain a series of delimited integers on a single line.  

**Each line should:**
* Consist of positive and negative integers only. Duplicate integers are allowed.
* Contain the same number of integers to keep the grid uniform
* Not contain spaces in between each integer

Upon selecting a file, the input field will disappear and a grid will be built using the file contents.  Once the grid appears just click the "Find Path" button to determine the path with the lowest cost.

The path with the lowest cost will be highlighted once determined and some results information will appear below the button. The word **Yes** indicates that the completed path stretches from the left side of the grid to the right.  The number below it refers to the sum of the path's integer values or the total cost of the path. The number below that represents a series of integers related to the rows traversed by the path along it's journey.

### Troubleshooting
If the grid has empty cells then you may need to check your input file for spaces.

If a cell in the grid is missing an integer then you may need to check your input file to make sure that each line contains the same number of integers.
