const {task} = require("mocks");

const data = task();
console.log(JSON.stringify(data,null,'\t'))

const calculateCost = (task) => {
    let childCost = (task.cost || 0);
    task.tasks?.forEach((item) => {
        childCost += calculateCost(item);
    });
    task.cost = childCost;
    console.log(childCost)
    return childCost;
}

const actions = {
    cost: (data) => {
        let totalCost = (data.cost || 0);
        data.tasks?.forEach((item) => {
            totalCost += calculateCost(item);
            data.cost = totalCost;
        });
        return totalCost;
    },
};

const keywords = Object.keys(actions);

const parser = (data) => {
    Object.keys(data).filter((item) => keywords.indexOf(item) !== -1).
    forEach((key) => actions[key](data));
};
parser(data)
console.log(JSON.stringify(data,null,'\t'))
// console.log(data)

