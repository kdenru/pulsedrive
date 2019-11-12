import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
`

export const Title = styled.div``

export const TabsContainer = styled.div`
  display: flex;
  margin: 10px 0;
`

export const Tab = styled.div`
  cursor: pointer;
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 4px;
  text-transform: uppercase;

  ${props => props.active
      && css`background-color: #cccccc`
}
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`

export const Name = styled.div`
  font-size: 14px;
  margin-right: 10px;
`

export const Value = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
