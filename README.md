# Task List - Back-End Developments
Utilising SQL to feed information into a database and further using "Axios" to link both the back-end information from the tables into the front-end project.

# SQL - Get Tasks
```
[
    {
        "TaskId": 2,
        "Description": "LearnJS",
        "UserId": 1,
        "completed": 0
    },
    {
        "TaskId": 3,
        "Description": "LearnNodeJS",
        "UserId": 2,
        "completed": 0
    }
]
```
This will return an array of tasks when inserting the task individually into the SQL database. Each task has its own auto-incremented Task-ID.

The Description is a string value which allows the use to manually type a new task into the task list each time.

The UserId, generted as a number, will refer to the person who will need to complete the task as follows:
```
+--------+-------+
| UserId | Name  |
+--------+-------+
|      1 | Geoff |
|      2 | Susan |
+--------+-------+

```
Each time a task is added, a small counter within the header will automatically change each time in numerical value depending on the number of tasks added:

    class Header extends React.Component {
      render() {
        return (<div>
            <h1 style={styles.header}> Tiff's To Do List</h1>
           <h1 style={styles.subHeader}>You have {this.props.taskLength} tasks left to complete</h1>
        </div>);
    }
}

# SQL - Post Task

This inserts a new task into the list.

```
{
	"taskDescription" : "LearnMySql"
}

```
By using the same parameter "taskDescription", and inserting a different string value, this allows the user to manually type a new task each timeo into the task list. 

# SQL - Delete Task

As soon as the user has completed the task which has been inserted into the list, this can be removed by clicking the "done" button. 

Each time the task is removed, the counter below the main header will decrease in numerical value referring the list of tasks which need to be completed displayed on screen. 
