
/* 

 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.

    ex. de corpo da requisição:

[
    {
        "nome": "Porcelanato",
        "codigo": 1,
        "preco": 20.36
    },
    {
        "nome": "Cimento",
        "codigo": 2,
        "preco": 40.76
    },
        {
        "nome": "Argamassa",
        "codigo": 3,
        "preco": 50.76
    },
    ...
]
 */
app.post("/exercicio7", (req, res) => {
    const corpo = req.body
    let listaProdutos = []
    
    corpo.forEach(produto => {
        listaProdutos.push(produto)
    });

    let soma = 0
    listaProdutos.forEach(produto => {
        soma = soma + produto.preco
    })

    const media = soma / listaProdutos.length

    // calcular o maiorPreco
    let maiorPreco = 0
    // logica
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPreco){
            maiorPreco = produto.preco
        }
    })

    const resultado = {
        precoMedio: media.toFixed(2),
        maiorPreco: maiorPreco
    }
    res.json(resultado)
})


app.listen(3000, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})