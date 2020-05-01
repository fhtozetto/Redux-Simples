
// Action Creator
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: 'NUM-MIN-ALTERADO',
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: 'NUM-MAX-ALTERADO',
        payload: novoNumero
    }
}