//ex3
function classificar(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}
console.log(classificar(10));
console.log(classificar(1));
console.log(classificar(6));