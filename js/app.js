const GetNote1 = document.getElementById('get_note1');
const GetNote2 = document.getElementById('get_note2');
const GetNote3 = document.getElementById('get_note2');

const txt_result = document.getElementById('txt-result');
// const txt_recovery = document.getElementById('txt-recovey');
// const txt_honors = document.getElementById('txt-honors');

const postResult = document.getElementById('result');

const btnCalculate = document.getElementById('btnCalculate');

btnCalculate.addEventListener('click', calculate);

function calculate() {
    let AverageNote1 =  parseFloat (GetNote1.value);
    let AverageNote2 =  parseFloat (GetNote2.value);
    let AverageNote3 =  parseFloat (GetNote3.value);

    let note1 = AverageNote1 * 30/100;
    let note2 = AverageNote2 * 30/100;
    let note3 = AverageNote3 * 40/100;

    let totalAverage = note1 +  note2 + note3;

    postResult.textContent = `Su promedio total es: ${totalAverage.toFixed(2)}`

    if(totalAverage.toFixed(2) <= 2.0) {
        txt_result.textContent = `Si deseas recuperar, necesitas: ${totalAverage.toFixed(2)}`
    }else if (totalAverage.toFixed(2) >= 2.1 && totalAverage.toFixed(2) <= 3.4) {
        txt_result.textContent = `Para ganar necesitaras minimo: ${totalAverage.toFixed(2)}`
        let recovery = 3.4 - totalAverage.toFixed(2);

    txt_result.textContent = `Le falta ${recovery.toFixed(2)} para aprobar la asignatura `

    }else if (totalAverage.toFixed(2) >= 3.5 && totalAverage.toFixed(2) <= 4.5) {
        txt_result.textContent = `Aprobo con un promedio de: ${totalAverage.toFixed(2)}`
    }else if (totalAverage.toFixed(2) >= 4.6 && totalAverage.toFixed(2) <= 5.0) {
        txt_result.textContent = `Aprobo con un promedio de: ${totalAverage.toFixed(2)} y sera reconocido como aprendiz con honores`
    }
}





////////////////////////////Logica Consola///////////////////////////////

// function notePercetageConverter(note, percentage) {
//     let noteConverted = (note / 100) * percentage;
//     return noteConverted
// };

// let getNote1 = notePercetageConverter(2.5, 30);
// let getNote2 = notePercetageConverter(5, 30);
// let getNote3 = notePercetageConverter(4.0, 40);

// let sixtyPercetageNote = getNote1 + getNote2;

// let noteNeededToRecover = 2.1 - sixtyPercetageNote;
// let noteNeededToAprove = 3.5 - sixtyPercetageNote;
// let noteNeededForHonorAprove = 4.5 - sixtyPercetageNote;

// let noteForRecover = (noteNeededToRecover / 40) * 100;
// let noteForAprove = (noteNeededToAprove / 40) * 100;
// let noteForHonorsAprove = (noteNeededForHonorAprove / 40) * 100;

// let finalNote = getNote1 + getNote2 + getNote3;

// console.log(`La nota final es: ${finalNote}
// Las notas son:
// `);

// console.log(`Si deseas recuperar, necesitas: ${noteForRecover.toFixed(2)}
// Para ganar necesitaras minimo: ${noteForAprove.toFixed(2)}
// Para ganar con honores necesitarias minimo: ${noteForHonorsAprove.toFixed(2)}
// `);