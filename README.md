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

Upon selecting a file, the input field will disappear and a grid will be built using the file contents.  Once the grid appears just click the "Find Path" button to run the path algorithm and that's it!

### Troubleshooting
If the grid has empty cells then you may need to check your input file for spaces.

If a cell in the grid is missing an integer then you may need to check your input file to make sure that each line contains the same number of integers.
