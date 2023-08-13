function previsaoLamina() {
    /*Obeservação: o valor da variável tamanhoFinal poderá ser alterado dependendo do caso onde esta sendo aplicado tal código. Além disso o valor 100 existente no código também pode ser alterado dependendo do caso aplicado

    Obeservação 2: o valor 100 no código representa o tamanho da lâmina quando ela esta nova ou em perfeito estado fisico.

     */
    var tamanhoFinal = 60
    var tamanhoAtual = parseFloat(prompt('Digite o tamanho atual da lâmina.'))

    var horasDesejadas = parseInt(prompt('Digite a quantidade de horas desejadas para o funcionamento adequado da lâmina.'))

    var valorTotalHoras = parseInt(prompt('Digite o total de horas que lâmina foi utilizada.'))

    var iraReduzir = horasDesejadas * (100 - tamanhoAtual) / valorTotalHoras

    if (tamanhoAtual - iraReduzir > tamanhoFinal) {
        var horaspossiveis = (tamanhoAtual - iraReduzir - tamanhoFinal) * valorTotalHoras / (100 - tamanhoAtual)

        alert('A lâmina pode ser utilizada, porém apenas por ' + horaspossiveis + 'horas.')


    } else {
        var horaspossiveis = (tamanhoAtual - iraReduzir - tamanhoFinal) * valorTotalHoras / (100 - tamanhoAtual)
        alert('A lâmina não pode ser mais utilizada e deve ser trocada para uso adequado.')
        alert('A lâmina pode ser utilizada apenas por aproximadamente' + horaspossiveis)
    }

}

