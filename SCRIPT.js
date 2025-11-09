 const tela = document.getElementById('tela');

    function adicionarValor(valor) {
        tela.value += valor;
    }

    function calcular() {
        try {
            tela.value = eval(tela.value);
        } catch (e) {
            alert('Erro na expressão');
        }
    }

    function limparTela() {
        tela.value = '';
    }



    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
            adicionarValor(key);
        } else if (key === 'Enter') {
            event.preventDefault();
            calcular();
        } else if (key === 'Backspace') {
            tela.value = tela.value.slice(0, -1);
        } else if (key.toLowerCase() === 'c') {
            limparTela();
        }
    });
