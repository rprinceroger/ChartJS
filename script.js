document.addEventListener("DOMContentLoaded", function() {
    // Variables
    var graphVisible = false; // To track the graph visibility
    var stacked = false; // To track the current view mode
    var chart; // To store the chart instance
    var ctx = document.getElementById('myBarChart').getContext('2d'); // Get the canvas element

    // Get the current date as a reference
    var currentDate = new Date();

    // Generate labels for the chart based on the current date moving backward
    var labels = [];
    for (var i = 4; i >= 0; i--) {
        var date = new Date(currentDate);
        date.setDate(currentDate.getDate() - i);
        labels.push(date.toDateString());
    }

    // Generate random data for the chart
    var datasets = [
        {
            label: 'Campaign 1',
            data: generateRandomData(5),
            backgroundColor: 'rgba(75, 192, 192, 0.6',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            hidden: false, // Initially visible
        },
        {
            label: 'Campaign 2',
            data: generateRandomData(5),
            backgroundColor: 'rgba(255, 99, 132, 0.6',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            hidden: false, // Initially visible
        },
        {
            label: 'Campaign 3',
            data: generateRandomData(5),
            backgroundColor: 'rgba(54, 162, 235, 0.6',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            hidden: false, // Initially visible
        }
    ];

    // Define the data for the chart
    var data = {
        labels: labels,
        datasets: datasets
    };

    // Define chart options
    var options = {
        scales: {
            x: {
                stacked: stacked, // Stack bars on the X-axis
            },
            y: {
                stacked: stacked, // Stack bars on the Y-axis
                beginAtZero: true,
            }
        }
    };

    // Function to generate random data
    function generateRandomData(count) {
        var data = [];
        for (var i = 0; i < count; i++) {
            data.push(Math.floor(Math.random() * 100) + 20); // Simulated data
        }
        return data;
    }

    // Function to toggle the visibility of the graph
    function toggleGraphVisibility() {
        if (graphVisible) {
            document.getElementById('graphContainer').style.display = 'none';
            document.getElementById('showGraphButton').textContent = 'Show Bar Graph';
        } else {
            document.getElementById('graphContainer').style.display = 'block';
            document.getElementById('showGraphButton').textContent = 'Hide Bar Graph';
        }
        graphVisible = !graphVisible;
    }

    // Initial graph visibility
    document.getElementById('showGraphButton').addEventListener('click', toggleGraphVisibility);

    // Create the bar chart
    chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

    // Add a click event to the toggle button
    document.getElementById('toggleButton').addEventListener('click', function () {
        // Toggle between stacked and unstacked views
        stacked = !stacked;
        options.scales.x.stacked = stacked;
        options.scales.y.stacked = stacked;
        chart.destroy(); // Destroy the existing chart
        chart = new Chart(ctx, { // Create a new chart with updated options
            type: 'bar',
            data: data,
            options: options
        });
    });

    // Add click events to the week and month buttons

    // Add click events to the day, week, and month buttons
    document.getElementById('dayButton').addEventListener('click', function () {
        // You can implement your logic for viewing data by day here
        // For this example, we update the chart data with new data for days
        labels = [];
        datasets.forEach(function (dataset) {
            dataset.data = generateRandomData(5);
        });
        chart.data.labels = labels;
        chart.update(); // Update the existing chart with new data
    });
    
    document.getElementById('weekButton').addEventListener('click', function () {
        // You can implement your logic for viewing data by week here
        // For this example, we update the chart data with new data for weeks
        labels = [];
        datasets.forEach(function (dataset) {
            dataset.data = generateRandomData(5);
        });
        chart.data.labels = labels;
        chart.update(); // Update the existing chart with new data
    });

    document.getElementById('monthButton').addEventListener('click', function () {
        // You can implement your logic for viewing data by month here
        // For this example, we update the chart data with new data for months
        labels = [];
        datasets.forEach(function (dataset) {
            dataset.data = generateRandomData(5);
        });
        chart.data.labels = labels;
        chart.update(); // Update the existing chart with new data
    });
});
