console.log("Heyy");

var arr1 = [0,1,2,3,4,5,6,7];

var arr2 = new Array(0);

console.log(arr2[7]);

var arr4 = [7,6,5,4,3,2,1];

console.log(arr4[3]);

console.log(arr4.length);

console.log(arr4.push());
console.log(arr4);

arr4[0] = 0;

console.log(arr4);

console.log(arr4.pop());
console.log(arr4);

console.log(arr4.shift());
console.log(arr4);

console.log(arr4.splice(2,2));
console.log(arr4);

var dict1 = {
    "chave":"valor"
}

console.log(dict1);

console.log(dict1.chave);
console.log(dict1["chave"]);

console.log(dict1[0]);

var matriz = [[1,2,3],[4,5,6],[7,8,9]];

console.log(matriz[1]);

var parte = matriz[1];
console.log(parte);
console.log(parte[1]);

console.log(matriz[1][1]);

var disctondict = {
    "dict2":{
        "chave3":"valor"
    },
    "outrodict":{
        "chave":"valor",
        "dict2":{
            "chave2":"valor2"
        }
    }
}

console.log(disctondict);

console.log(disctondict["outrodict"]["dict2"]);

disctondict["outrodict"]["dict2"]["chave4"]=valor4;

var dictionarray = [{"chave":"valor"}],disctondict

console.log(dictionarray);

console.log(dictionarray[2][2][2]);

for(var i=0; i<=9; i++){
    console.log("iteracao:" +i);
}

for(var i=9; i>=0; i--){
    console.log("iteracao:" +i);
}

for(var i=0; i<matriz.length; i++){
    console.log(matriz[i]);
    console.log(matriz[i].length);
    for(var j=0; j<matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}

while(2==2){
    console.log("o prof e toto");
}