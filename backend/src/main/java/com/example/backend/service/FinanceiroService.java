package com.example.backend.service;

@Service
class FinanceiroService {

    public finaceiro calcularJuro(Financeiro finaceiro) {
        Double  resultado = finaceiro.getValorInicial() * Math.pow((1 + finaceiro.getTaxaJuro() / 100), financeiro.getPrazo());
        financeiro.setValorInicial(resultado);
        return finaceiro;
    }
}