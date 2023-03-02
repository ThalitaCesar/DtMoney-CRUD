
import { useTransactions } from "../../context/TransactionsContext/useTransactions";
import { SearchForm } from "../SearchForm";
import { Container } from "./styles";


export function TransactionsTable() {

  const { transactions } = useTransactions();

  return (
    <Container>
      <SearchForm/>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tbody>

        {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable;