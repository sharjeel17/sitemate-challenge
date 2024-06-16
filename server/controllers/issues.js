import fs from "fs";

//Send back all of the issues
//Used for READ operation 
export const getIssues = async (req, res) => {
    
    fs.readFile("data.json", 'utf8', function(err, data){
        console.log(data);
        if (err) {
            res.status(500).json({message: "something went wrong in the server"})
            throw err;
        }

        res.status(200).json(JSON.parse(data));
    });
}

//Add an issue to the JSON data
//used for CREATE operation
export const addIssue = async (req, res) => {
    
    const { id, title, description } = req.body;
    const newIssue = {id, title, description};

    //logs the object to be created to the console
    console.log(newIssue);

    fs.readFile('data.json', function (err, data) {
        const json = JSON.parse(data);
        json.push(newIssue);    
        
        fs.writeFile("data.json", JSON.stringify(json), function(err){
          if (err) {
            res.status(500).json({message: "something went wrong in the server"})
            throw err;
            
          }

          console.log('Added new issue to data.json');
          res.status(201).json(newIssue);
        });
    })
}

//update the issue using id
//used for UPDATE operation
export const updateIssue = (req, res) => {

    //log object to be updated
    console.log(req.body);

    fs.readFile('data.json', function (err, data) {
        //get json data fron data.sjon
        var json = JSON.parse(data);

        const {id, title, description} = req.body

        const editedData = json.map((data) => {
          if(data.id == id){
            return {id, title, description};
          }
          return data;
        })
  
        fs.writeFile("data.json", JSON.stringify(editedData), function(err){
          if (err) {
            res.status(500).json({message: "something went wrong in the server"})
            throw err;
          }
  
          console.log('Edited data');
  
          res.json(editedData);
        });
    })
  }

  export const deleteIssue = (req, res) => {

    console.log(`id of object to delete: ${req.params.id}`);

    fs.readFile('data.json', function (err, data) {
        var json = JSON.parse(data);

        //get all data except for the one that matches the id to remove
        const filteredData = json.filter((issue) => {
          return issue.id != req.params.id
        });
  
        fs.writeFile("data.json", JSON.stringify(filteredData), function(err){
          if (err) {
            res.status(500).json({message: "something went wrong in the server"})
            throw err;
            
          }
  
          console.log('Deleted data successfully');
          res.json({message: `Deleted data with id ${req.params.id}`})
        });
    })
  }