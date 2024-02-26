let resultado = document.querySelector('#resultado');
let total = document.querySelector('#total');
let buttons = document.querySelectorAll('.btn');

function salvarTotal() {
  localStorage.setItem('total', total.textContent);
}

function restaurarTotal() {
  total.textContent = localStorage.getItem('total') || '';
}

restaurarTotal();

buttons.forEach(button => {
  button.addEventListener('click', function () {
    if (resultado.textContent === '0') {
      resultado.textContent = '';
    }

    switch (button.textContent) {
      case '=':
        try {
          let expressao = resultado.textContent.replace(/x/g, '*');
          let resultadoOperacao = eval(expressao);
          total.textContent = `${operacaoAnterior} = ${resultadoOperacao}`;
          resultado.textContent = resultadoOperacao;
          operacaoAnterior = '';
        } catch (error) {
          resultado.textContent = 'Erro';
        }
        break;
      case 'C':
        resultado.textContent = '0';
        total.textContent = ''; 
        break;
      case '<':
        resultado.textContent = resultado.textContent.slice(0, -1);
        break;
      default:
        resultado.textContent += button.textContent;
        operacaoAnterior = resultado.textContent;
    }

    salvarTotal();
  });
});