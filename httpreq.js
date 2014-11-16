http=require('http')

var options = {
   hostname: 'cruithne',
   port: 8000,
   path: '/api/unixtime?iso=2013-08-10T12:10:15.474Z',
   method: 'POST'
   };

var req = http.request(options, function(res) {
   console.log('STATUS: ' + res.statusCode);
   console.log('HEADERS: ' + JSON.stringify(res.headers));
   res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
      });
   res.on('end', function(){
      console.log("END")
      })
   });

req.on('error', function(e) {
   console.log('problem with request: ' + e.message);
   });

// write data to request body
//req.write('data\n');
//req.write('data\n');
req.end();