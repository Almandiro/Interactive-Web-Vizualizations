//Modified by: Ali Daneshmand
//Modified On: September 22, 2021

// Define function that will run on page load
function init() 
{

	var mydata = JSON.parse(sample);

	var out = "";
	var i;

	for(i = 0; i < arr.length; i++) 
	{out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';}

	document.getElementById("id01").innerHTML = out;

	return out;

}



// Define a function that will create metadata for given sample
function buildMetadata(sample) 
{

        var out = "";
        var i;

        for(i = 0; i < sample.length; i++)
        {out += '<a href="' + sample[i].url + '">' + sample[i].display + '</a><br>';}

        document.getElementById("id01").innerHTML = out;

	return out;

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

function selDataset(sample)
{

	var json = require('./sample.json');

	var readJson = (path, cb) => {

	fs.readFile(require.resolve(path), (err, data) => {
	if (err)
		cb(err)
	else
		cb(null, JSON.parse(data))
  	})
	}
}

// Initialize dashboard on page load
init();
