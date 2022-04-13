const array1 = [1, 2, 3, 4, 5]
const array2 = [1, 2, 3, 4, 5]
for (let i = array1.length - 1; i >= 0; i--){
    if (array1[i] !== array2[i]){
        console.log("Parece que", array1[i], "es diferente de", array2[i])
        break;
    } else {
        console.log("Son iguales");
    }
}