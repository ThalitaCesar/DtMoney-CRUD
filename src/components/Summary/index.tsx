import { Container } from "./styles";
import IconEntrada from '../../assets/IconEntrada.svg';
import IconSaida from '../../assets/IconSaida.svg';
import IconTotal from '../../assets/IconTotal.png'
import { useTransactions } from "../../context/TransactionsContext/useTransactions";

export function Summary() {
    
    const { transactions } = useTransactions();

    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'deposit') {
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
        }
  
        return acc;
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0,
      },
    );
  
  return (
    <Container>
        <div>
            <header>
                Entradas
            <img src={IconEntrada} alt="Icon Entrada"/>
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
            </strong>
        </div>
        <div>
            <header>
                Saídas
            <img src={IconSaida} alt="Icon Saida"/>
            </header>
            <strong>
            {summary.withdraws !== 0 ? '-' : ''}
            {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
            </strong>
        </div>
        <div className="highlight-background">
            <header>
                Total
            <img src={IconTotal} alt="Icon Total"/>
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
            </strong>
        </div>
    </Container>
  );
}

export default Summary;