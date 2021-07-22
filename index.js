const {task} = require("mocks");

const data = task();
console.log(JSON.stringify(data,null,'\t'))

const calculateCost = (task) => {
    let childCost = (task.cost || 0);
    task.tasks?.forEach((item) => childCost += calculateCost(item));
    task.cost = childCost;
    return childCost;
};

calculateCost(data);


console.log(JSON.stringify(data,null,'\t'))


