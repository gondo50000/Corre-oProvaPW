import lombok.Data;

@Data
public class Financeiro {
    private int prazo;
    private Double getValorInicial;
    private Double valorFinal;
    private Double taxaJuro;
}
