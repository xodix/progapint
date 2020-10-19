export {};
function suma(a: number, b: number): number {
    return a + b;
};

function wiek(lat) {
    if(lat <18) return "Nie masz 18 lat";
    if(lat >18) return "Masz wiecej 18 lat";
    else return "Masz 18 lat";
};

console.log(wiek(18));