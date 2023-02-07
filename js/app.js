const GetNote1 = document.getElementById('get_note1');
const GetNote2 = document.getElementById('get_note2');
const btnCalculate = document.getElementById('btnCalculate');

btnCalculate.addEventListener('click', (e) => {
    document.write(GetNote1 + GetNote2)
});

console.log(GetNote1 + GetNote2);