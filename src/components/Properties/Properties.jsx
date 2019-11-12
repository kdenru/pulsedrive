import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Title,
  TabsContainer,
  Tab,
  Row,
  Name,
  Value,
} from './styles'

const tabs = ['dns', 'ssl', 'http']

const Properties = ({ data }) => {
  const [activeTab, setActiveTab] = useState('dns')
  return (
    <>
      {data.dns && (
      <Container>
        <Title>Properties</Title>
        <TabsContainer>
          {tabs.map(item => (
            <Tab
              key={item}
              active={item === activeTab}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </Tab>
          ))}
        </TabsContainer>
        {
          Object.keys(data[activeTab]).map(key => (
            <Row key={key}>
              <Name>{key}:</Name>
              <Value>{data[activeTab][key]}</Value>
            </Row>
          ))
        }
      </Container>
      )}
    </>
  )
}

Properties.defaultProps = {
  data: {},
}

Properties.propTypes = {
  data: PropTypes.object,
}

export default Properties
