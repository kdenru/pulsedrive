import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder'
import isEmpty from 'lodash/isEmpty'

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

const Properties = ({ data, loading }) => {
  const [activeTab, setActiveTab] = useState('dns')
  return (
    <>
      {(!isEmpty(data) || loading) && (
        <Container>
          <ReactPlaceholder ready={!loading} rows={8}>
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
              !isEmpty(data) && Object.keys(data[activeTab]).map(key => (
                <Row key={key}>
                  <Name>{key}:</Name>
                  <Value>{data[activeTab][key]}</Value>
                </Row>
              ))
            }
          </ReactPlaceholder>
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
  loading: PropTypes.bool.isRequired,
}

export default Properties
