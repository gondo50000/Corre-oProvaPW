import com.example.backend.model.Financeiro;

@RestController
@RequestMapping("/financeiro")
public class FinanceiroController {

    @Autowired
    private FinanceiroService FinanceiroService;

    @PostMapping("/calcular")
    public Financeiro calcularJuro(@RequestBody Financeiro finaceiro) {
        return FinanceiroService.calcularJuro(finaceiro);
    }

}