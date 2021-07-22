const {task} = require("mocks");

const data = task();
console.log(JSON.stringify(data,null,'\t'))


const calculateCostWithoutMutate = (task) => {
    let output = {};
    let totalCost = (task.cost || 0);
    output.tasks = task.tasks?.map((item) => {
        let task = calculateCostWithoutMutate(item);
        totalCost += task.cost;
        return task;
    })
    output.cost = totalCost;
    return output;
}

const output = calculateCostWithoutMutate(data);

console.log(JSON.stringify(output,null,'\t'))


