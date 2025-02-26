const express = require('express');
const fs = require('fs');
const app = express();

// Define the log file location
const logFilePath = '/var/log/app/requests.log';

// Simple GET endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
    
    // Write logs to a file (this is where Fluentd can pick up the logs)
    const logMessage = `New request at ${new Date().toISOString()}\n`;
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
    console.log(logMessage); // Also log to console for local visibility
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log('Web app running on port 8080');
});
