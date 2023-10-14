function test () {

    document.querySelector('.confirm').addEventListener('click', 
    function () {
        let result = `ФИ: ${document.querySelector('#name').value}` + '\n\n' + `1: ${document.querySelector('#q1').value}\n` + `2: ${document.querySelector('#q2').value}\n` + `3: ${document.querySelector('#q3').value}\n` + `4: ${document.querySelector('#q4').value}\n` + `5: ${document.querySelector('#q5').value}\n` + `6: ${document.querySelector('#q6').value}\n` + `7: ${document.querySelector('#q7').value}\n` + `8: ${document.querySelector('#q8').value}\n` + `9: ${document.querySelector('#q9').value}\n` + `10: ${document.querySelector('#q10').value}\n` + `11: ${document.querySelector('#q11').value}\n` + `12: ${document.querySelector('#q12').value}\n` + `13: ${document.querySelector('#q13').value}\n` + `14: ${document.querySelector('#q14').value}\n` + `15: ${document.querySelector('#q15').value}\n` + `16: ${document.querySelector('#q16').value}\n` + `17: ${document.querySelector('#q17').value}\n`;
        alert(result)
        document.querySelector('.confirm p').innerText = 'Ответы отправлены'
    })
    
}
test()