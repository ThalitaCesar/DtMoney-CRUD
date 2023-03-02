import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  input {
    flex: 1;
    border: 0;
    border-style:none;
    border-radius: 6px;
    background-color: var(--grey);
    color:var(--text-body);
    padding: 1rem;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    &::placeholder {
      color: var(--text-body);
    }
    
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid  var(--green-light);
    color: var(--green-light);
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: var(--green-light);
      border: 1px solid var(--green-light);
      color: var(--text-title);
      transition: all 0.2s;
    }
    }
    `