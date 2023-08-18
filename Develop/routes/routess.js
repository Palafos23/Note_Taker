const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    console.info(`${req.method} request received!`);
    readFromFile('./Develop/db/db.json').then((data) => res.json(JSON.parse(data))) 
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request received!`);
    // Destructuring assignment for the items in req.body
    const {title, text} = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        text_id: uuidv4(),
      };
  
      readAndAppend(newNote, './Develop/db/db.json');
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting note');
    }
  });

  module.exports = notes;
