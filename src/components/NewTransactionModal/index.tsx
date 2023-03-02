import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/IconEntrada.svg';
import outcomeImg from '../../assets/IconSaida.svg';
import { useTransactions } from '../../context/TransactionsContext/useTransactions';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

const customStyles = {
  content: {
    width:'550px',
    height:'600px',
    background:'#121214',
    border:'none',
    top:'0',
    left:'30%'
  },
};

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {

  const { createTransaction } = useTransactions();
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      style={customStyles}
    >

      <Container onSubmit={handleCreateNewTransaction}>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
        <h2>Nova Transação</h2>
        <button
        onClick={onRequestClose}
        style={{background:"#121214", border:'none', fontSize:"24px", marginRight:"10px"}}
      >
        X
      </button>
      </div>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="text"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}