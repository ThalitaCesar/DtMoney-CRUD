import styled from "styled-components";

export const Container = styled.main`
margin-top:4rem;
table{
    width:100%;
    border-spacing: 0 0.5 rem;
    border-collapse:collapse;
    th{
        color: var(--text);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align:left;
        line-height:1.5rem;
    }
    tr{
        border-radius: 0.5rem;
    }
    td{
        padding: 1rem 1rem;
        background: var(--grey-light);
        border-bottom: 7px solid  var(--background);

    &.deposit{
        color: var(--green-light)
    }
    &.withdraw{
        color: var(--red)
    }
}
}
`