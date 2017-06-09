
var id = 0;
export default function getMockProduct(label, cost){
    return {
        id: id++,
        label: label,
        description: `Hi this is a ${label}, this is the best ${label}`,
        cost: cost
    }
}