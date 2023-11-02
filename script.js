document.addEventListener("DOMContentLoaded", function() {
    var graphVisible = false; // Variable to track the graph visibility
    var stacked = false; // Variable to track the current view mode
    var chart; // Variable to store the chart instance

    // Get the canvas element
    var ctx = document.getElementById('myBarChart').getContext('2d');

    // Define the data for the chart
    var data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
            {
                label: 'Campaign 1',
                data: [10, 20, 15, 30, 25],
                backgroundColor: 'rgba(75, 192, 192, 0.6',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                hidden: false, // Initially visible
            },
            {
                label: 'Campaign 2',
                data: [15, 10, 25, 20, 30],
                backgroundColor: 'rgba(255, 99, 132, 0.6',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hidden: false, // Initially visible
            },
            {
                label: 'Campaign 3',
                data: [5, 15, 10, 15, 20],
                backgroundColor: 'rgba(54, 162, 235, 0.6',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                hidden: false, // Initially visible
            }
        ]
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
        data.labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
        data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return Math.floor(Math.random() * 10) + 1; // Simulated data
            });
        });
        chart.update(); // Update the existing chart with new data
    });
    
    document.getElementById('weekButton').addEventListener('click', function () {
        // You can implement your logic for viewing data by week here
        // For this example, we update the chart data with new data for weeks
        data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
        data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return Math.floor(Math.random() * 50) + 10; // Simulated data
            });
        });
        chart.update(); // Update the existing chart with new data
    });

    document.getElementById('monthButton').addEventListener('click', function () {
        // You can implement your logic for viewing data by month here
        // For this example, we update the chart data with new data for months
        data.labels = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'];
        data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return Math.floor(Math.random() * 100) + 20; // Simulated data
            });
        });
        chart.update(); // Update the existing chart with new data
    });
});
