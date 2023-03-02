import React from 'react';
import logo from '../../assets/LogoTitle.svg'
import { Container, Content } from './styles';


interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}


export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
        <Content>
        <img src={logo}/>
          <button onClick={onOpenNewTransactionModal}>
            <strong>
                Nova transação
            </strong>
            </button>
        
        </Content>
    </Container>
     
  );
}

export default Header;