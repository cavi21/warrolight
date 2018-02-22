if (!window.socket) {
  window.socket = io();
}

class DevicesStatus extends React.Component {
  constructor() {
    super(...arguments)

    this.state = {
      devices: []
    }
  }

  componentDidMount() {
    socket.on('devicesStatus', (devices) => {
      this.setState({devices})
    });
  }

  render() {
    let devices = this.state.devices.map(d => <div className={`device device-${d.state}`}>
      <div>{d.deviceId}</div>
      <div>{d.state}</div>
      <div>{d.lastFps}</div>
    </div>)

    return <div className="devices">
      {devices}
    </div>
  }
}