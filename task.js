const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function (request, response) {

  const TaskList =
  {
    task: [ {
      TaskId: 1,
      Description: "LearnMySql",
      UserId: "1",
      Completed: false
    },
    {
      TaskId: 2,
      Description: "LearnJS",
      UserId: "1",
      Completed: false
    },
    {
      TaskId: 3,
      Description: "LearnNodeJS",
      UserId: "2",
      Completed: false
    }
  ]};

//   const username = request.query.username;

//   const TaskList = {
//     message: "Hello " + username
//   };
//   response.json(TaskList);
// })


module.exports.handler = serverless(app);