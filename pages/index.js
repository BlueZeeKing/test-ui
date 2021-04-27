import React from 'react';
import { Button, Typography, Divider, Row, Col, Layout, notification, Slider, Modal, Rate, Input, Form } from 'antd';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout

export default function Home() {
  return (
    <Layout className="w-screen h-screen overflow-hidden">
      <SideBar />
      <Layout className="flex flex-col h-full overflow-hidden">
        <Header className="text-6xl font-extrabold text-center h-auto p-4 text-white">Hello World</Header>
        <Content className="flex-grow m-2 overflow-x-hidden">
          <Grid />
        </Content>
        <Footer><NotificationOpener /></Footer>
      </Layout>
    </Layout>
  )
}

function SideBar() {
  const [state, open, close] = useOpenClose(false)
  const [title, setTitle] = React.useState('Hello World')

  return (
    <Sider className="w-56" collapsible>
      <div className="p-2">
        <Button type='primary' className="" onClick={open}>Hello</Button>
        <Divider className="border-gray-500" />
        <label htmlFor="title" className="text-white text-lg p-1">Title:</label>
        <Input id="title" className="bg-opacity-0 bg-white text-white" value={title} onChange={(e) => setTitle(e.target.value)}></Input>
        <Modal title={title} visible={state} onOk={close} onCancel={close}>
          <Rate />
        </Modal>
      </div>
    </Sider>
  )
}

function NotificationOpener() {
  const [count, increaseCount] = useCounter(1)
  const [duration, onChange] = React.useState(1)

  function openNotification() {
    notification.open({
      message: 'Notification Counter',
      description: `Hello World! You have clicked the button ${count} times`,
      duration: duration
    });

    increaseCount()
  }

  return (
    <>
      <Button onClick={openNotification}>Open Notification</Button>
      <Slider value={duration} onChange={(e) => onChange(e)} min={0} max={15}></Slider>
    </>
  )
}

function Grid(props) {
  return (
    <>
      <Row gutter={[5,5]}>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
        <Col span={ 5 }>
          <div className="bg-blue-500">Hello Grid</div>
        </Col>
      </Row>
    </>
  )
}

function useCounter(start) {
  const [count, setCount] = React.useState(start);

  function increase() {
    setCount(count + 1)
  }

  return [count, increase]
}

function useOpenClose(start) {
  const [state, setState] = React.useState(start);

  function open() {
    setState(true)
  }

  function close() {
    setState(false)
  }

  return [state, open, close]
}
