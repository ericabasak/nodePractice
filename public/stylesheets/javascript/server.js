const http = require('http');

const fs = require('fs');

const path = require('path');

const mime = require('mime');

const cache = {};


// helper function used for serving static HTTP files
function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}

// helper function serve file data
// function first writes the appropraite HTTP headers and then sends the contents of the file
function sendFile(response, filePath, fileContents) {
    response.writeHead(
        200,
        {"content-type": mime.lookup(path.basename(filePath))}
    );
    response.end(fileContents);
}