// Defining new user 
let entry= { 
	"Title": "Mr",
	"Category": "Coding",
	"Content": "I love Coding",
	"Source": "HPEnvyM6",
	"URL": "mccollins.com",
	"Author": "Mccollins",
	"Tags": "coding, json, web dev, dev-ops",
	"Date": "myDate"
}; 

var fs = require('fs');
fs.readFile('entry_catalog.json', function (err, data) {
    var filecontent = JSON.parse(data);
    console.log(filecontent)
    filecontent.push(entry);    
    fs.writeFile("entry_catalog.json", JSON.stringify(filecontent, null, 2), function(err){
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
});