import styled from 'styled-components'

export const Container = styled.div`
  width: 49%;
`

export const Title = styled.div`
  :before {
    content: '';
    width: 14px;
    height: 14px;
    margin-right: 5px;
    border-radius: 50%;
    display: inline-block;
    background-color: ${props => (props.medium ? '#ffa929' : '#06e606')}
  }
`

export const Row = styled.div`
  font-size: 14px;
  margin-top: 10px;
  margin-left: 15px;

  :before {
    content: '';
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border-radius: 50%;
    display: inline-block;
    background-color: ${props => (props.medium ? '#ffa929' : '#06e606')}
  }
`
