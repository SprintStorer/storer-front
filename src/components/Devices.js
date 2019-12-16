import React, { useState } from 'react'
import * as R from 'ramda'
import { Card, Form, Input, Button } from 'antd'

const Devices = ({ officeSlug, devices, handleEditDevice }) => {
  const [isBlocked, setIsBlocked] = useState(true)

  const handleSubmit = e => {
    e.preventDefault()
    const values = e.target
    const [ id, ip, code, type ] = [values[0].value, values[1].value, values[2].value, values[3].value]
    console.log('form submited')
    console.log(`ip: ${ip}, code: ${code}, id: ${id}, type: ${type}`)
    handleEditDevice({ id, ip, code, type, officeSlug })
  }

  const blockUnBlock = () => {
    setIsBlocked(!isBlocked)
  }

  return R.values(devices).map(device => (
    <Card
      key={device.code}
      title={device.type}
      style={{ width: 300 }}>

      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            addonBefore="id"
            defaultValue={device.id}
            disabled={true}
            style={{ width: 200 }}/>
        </Form.Item>

        <Form.Item>
          <Input
            addonBefore="ip"
            defaultValue={device.ip}
            disabled={isBlocked}
            style={{ width: 200 }}/>
        </Form.Item>

        <Form.Item>
          <Input
            addonBefore="code"
            defaultValue={device.code}
            disabled={isBlocked}
            style={{ width: 200 }}/>
        </Form.Item>

        <Form.Item>
          <Input
            hidden={true}
            defaultValue={device.type}/>
        </Form.Item>
        
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={isBlocked}>
              Submit
            </Button>
        </Form.Item>

      </Form>

      <Button
        type="secundary"
        onClick={() => blockUnBlock()}>

          {isBlocked ? "Unblock": "block"}

      </Button>
    </Card>)
  )
}

export default Devices