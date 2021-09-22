/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */



// Define function that will run on page load
function init() 
{

	var out = "";
	var i;

	for(i = 0; i < arr.length; i++) 
	{out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';}

	document.getElementById("id01").innerHTML = out;

    // Read json data

        // Parse and filter data to get sample names

        // Add dropdown option for each sample

    // Call functions below using the first sample to build metadata and initial plots

}



// Define a function that will create metadata for given sample
function buildMetadata(sample) 
{

    // Read the json data

        // Parse and filter the data to get the sample's metadata

        // Specify the location of the metadata and update it

}


// Define a function that will create charts for given sample
function buildCharts(sample) 
{
	let xData = [1, 2, 3, 4, 5];
	let yData = [1, 2, 4, 8, 16];

	let trace1 = {
		x: xData,
		y: yData
	};

	let data = [trace1];

	let layout = {
		title: "A Plotly plot"
	};

	Plotly.newPlot("plot", data, layout);


    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}


function optionChanged(sample)
{
    // The parameter being passed in this function is new sample id from dropdown menu

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

