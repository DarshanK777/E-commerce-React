import styled from 'styled-components'

export const CheckoutPageStyles = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;


    button {
      margin-left: auto;
      margin-top: 50px;
    }

`

export const CheckoutHeaderStyles = styled.div`
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;
`

export const HeaderBlockStyles = styled.div`
    text-transform: capitalize;
        width: 23%;
  
        &:last-child {
          width: 8%;
        }
`

export const TotalStyles = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`

