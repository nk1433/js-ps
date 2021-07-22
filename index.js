const {task} = require("mocks");

const data = task();
console.log(JSON.stringify(data,null,'\t'));


const calculateCostWithoutMutate = (task) => {
    let output = {};
    let tasks = [];
    let totalCost = (task.cost || 0);
    tasks = task.tasks?.map((item) => {
        let task = calculateCostWithoutMutate(item);
        totalCost += task.cost;
        return task;
    })
    output.cost = totalCost;
    output.tasks = tasks;
    return output;
}

const output = calculateCostWithoutMutate(data);

console.log(JSON.stringify(output,null,'\t'));


