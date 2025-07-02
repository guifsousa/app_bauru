let total = 0; //Declara a variável total, que acumula o valor total do pedido.
    let carrinho_compra = [] // Criação de uma variável utilizando array para armazenar os pedidos

    function adicionarPedido() {  //Função será executada quando o botão "Adicionar ao pedido" for clicado.
        const produto = parseInt(document.getElementById('produto').value);
        const quantidade = parseInt(document.getElementById('quantidade').value);
        //Captura o valor selecionado no <select> com id="produto" e o converte em número inteiro.
        //Ex: se o usuário escolheu "Bauru de Coração", o valor será 2.

        let nome = "";
        let preco = 0; //Declara a variável preco, para guardar o valor unitário de cada produto

        switch (produto) { // uma forma de verificar vários casos baseados 
            // no valor de produto (substituindo if e else)
            case 1: nome = "Bauru de Alcatra ", preco = 38.00;
                break
            case 2: nome = "Bauru de Coração", preco = 36.00;
                break
            case 3: nome = "Bauru de Bacon", preco = 35.00;
                break
            case 4: nome = "Bauru de Galinha", preco = 24.00;
                break
            case 5: nome = "Bauru de Calabresa", preco = 29.00;
                break
            case 6: nome = "Bauru Vegetariano", preco = 25.00;
                break
            case 7: nome = "Refrigerante", preco = 10.00;
                break
            default:
                alert('Produto inválido')
                return; //Se produto não for nenhum dos casos acima, 
            // mostra um alerta e encerra a função (return).
            // o case verifica o código do produto e define seu preço correspondente

        }

        const subtotal = preco * quantidade //Calcula o valor total de um item específico.
        total += subtotal; //Soma o valor do item ao total acumulado da compra.
        carrinho_compra.push({ nome, quantidade, subtotal }); //Adiciona um objeto com os dados do item 
        // ao carrinho de compras
        atualizarTotal();
    }

    function finalizarPedido() { // função chamada quano o usuário clica no botão finalizar pedido
        if (carrinho_compra.length === 0) { // verifica se o carrinho está vazio
            alert("Você não adicionou nenhum item na lista")
            return // Interrompe a função — nada mais será executado abaixo se o carrinho estiver vazio.
        }

        let mensagem = "Sua compra foi finalizada com sucesso \n Resumo do pedido:\n"

        carrinho_compra.forEach(item => {   //para cada item no carrinho, a função forEach percorre o array
            mensagem += `- ${item.quantidade}x ${item.nome} → R$ ${item.subtotal.toFixed(2)}\n `
            //para cada item, aparece uma mensagem indicando quantidade, nome do produto e 
            // valor subtotal com 2 casas decimais 
        })

        mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

        alert(mensagem)

        //Limpa os dados para preparar o sistema para uma nova compra
        total = 0; //zera o valor do pedido
        carrinho_compra = []; // o carrinho de compras fica vazio
        atualizarTotal(); // atualiza a mensagem referente ao valor total da compra para zero

    }

    function atualizarTotal() {
        document.getElementById('total').innerText = `Total: R$ ${total.toFixed(2)}`;
    }