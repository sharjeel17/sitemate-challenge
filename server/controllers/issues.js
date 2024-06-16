import fs from "fs";

//Send back all of the issues
//Used for READ operation 
export const getIssues = async (req, res) => {
    fs.readFile("data.json", 'utf8', function(err, data){
        console.log(data);
        res.status(200).json(JSON.parse(data));
    });
}

//Add an issue to the JSON data
//used for CREATE operation
export const addIssue = async (req, res) => {

    fs.readFile('data.json', function (err, data) {
        var json = JSON.parse(data);
        const { id, title, description } = req.body;
        const newIssue = {id, title, description};

        //logs the object to be created to the console
        console.log(newIssue);

        json.push(newIssue);    
        
        fs.writeFile("data.json", JSON.stringify(json), function(err){
          if (err) throw err;

          console.log('Added new issue to data.json');
          res.status(201).json(newIssue);
        });
    })
}