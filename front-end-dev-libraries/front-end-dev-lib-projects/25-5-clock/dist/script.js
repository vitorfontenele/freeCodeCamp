class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerStatus: 'Session',
      running: false,
      timeLeft: "25:00" };

    this.controlBreakIncrement = this.controlBreakIncrement.bind(this);
    this.controlBreakDecrement = this.controlBreakDecrement.bind(this);
    this.controlSessionIncrement = this.controlSessionIncrement.bind(this);
    this.controlSessionDecrement = this.controlSessionDecrement.bind(this);
    this.playPauseSession = this.playPauseSession.bind(this);
    this.resetSession = this.resetSession.bind(this);
    this.updateCounter = this.updateCounter.bind(this);

  }
  controlBreakIncrement(event) {
    if (this.state.breakLength < 60 && !this.state.running) {
      this.setState(state => ({ breakLength: state.breakLength + 1 }),
      () => this.updateTimeLeft(this.state.breakLength, 'Break'));
    }
  }
  controlBreakDecrement(event) {
    if (this.state.breakLength > 1 && !this.state.running) {
      this.setState(state => ({ breakLength: state.breakLength - 1 }),
      () => this.updateTimeLeft(this.state.breakLength, 'Break'));
    }
  }
  controlSessionIncrement(event) {
    if (this.state.sessionLength < 60 && !this.state.running) {
      this.setState(state => ({ sessionLength: state.sessionLength + 1 }),
      () => this.updateTimeLeft(this.state.sessionLength, 'Session'));
    }
  }
  controlSessionDecrement(event) {
    if (this.state.sessionLength > 1 && !this.state.running) {
      this.setState(state => ({ sessionLength: state.sessionLength - 1 }),
      () => this.updateTimeLeft(this.state.sessionLength, 'Session'));
    }
  }
  updateTimeLeft(entry, status) {
    if (this.state.timerStatus === status) {
      this.setState({ timeLeft: (entry >= 10 ? entry.toString() : "0" + entry.toString()) + ":00" });
    }
  }
  updateCounter() {
    //console.log(this.state)
    let newTime = new Date().getTime();
    let interval = newTime - this.clickTime;
    let dateLeft = new Date(this.msLeft - interval);
    let minutesLeft = dateLeft.getMinutes() >= 10 ? dateLeft.getMinutes().toString() : "0" + dateLeft.getMinutes().toString();
    let secondsLeft = dateLeft.getSeconds() >= 10 ? dateLeft.getSeconds().toString() : "0" + dateLeft.getSeconds().toString();
    this.setState({ timeLeft: minutesLeft + ":" + secondsLeft }, () => this.checkZero(this.state.timeLeft));
  }
  checkZero(timeLeft) {
    if (timeLeft === "00:00") {
      clearInterval(this.myInterval);
      document.getElementById("beep").play();
      //console.log(this.state.sessionLength, this.state.breakLength);
      this.triggerCounter();
    }
  }
  triggerCounter() {
    let breakLength = (this.state.breakLength >= 10 ? this.state.breakLength.toString() : "0" + this.state.breakLength.toString()) + ":00";
    let sessionLength = (this.state.sessionLength >= 10 ? this.state.sessionLength.toString() : "0" + this.state.sessionLength.toString()) + ":00";
    this.triggerTimeout = setTimeout(() => {
      this.setState(state => ({ timerStatus: state.timerStatus === "Session" ? "Break" : "Session" }), () => this.counter(true, this.state.timerStatus === "Session" ? sessionLength : breakLength));
    }, 1000);
  }
  counter(check, timeLeft = this.state.timeLeft) {
    if (check) {
      this.setState({ timeLeft: timeLeft });
      this.counterTimeout = setTimeout(() => {
        this.clickTime = new Date().getTime();
        let minutesLeft = parseInt(timeLeft.split(":")[0]);
        let secondsLeft = parseInt(timeLeft.split(":")[1]);
        this.msLeft = minutesLeft * 60 * 1000 + secondsLeft * 1000;
        this.myInterval = setInterval(this.updateCounter, 100);
      }, 1000);
    } else {
      clearTimeout(this.counterTimeout);
      clearTimeout(this.triggerTimeout);
      clearInterval(this.myInterval);
    }
  }
  playPauseSession(event) {
    this.setState(state => ({
      running: !state.running }),
    () => this.counter(this.state.running));
  }
  resetSession(event) {
    clearTimeout(this.counterTimeout);
    clearTimeout(this.triggerTimeout);
    clearInterval(this.myInterval);
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    this.setState({
      running: false,
      breakLength: 5,
      sessionLength: 25,
      timeLeft: "25:00",
      timerStatus: "Session" });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "clock" }, /*#__PURE__*/
      React.createElement(Break, { breakLength: this.state.breakLength, controlBreakIncrement: this.controlBreakIncrement, controlBreakDecrement: this.controlBreakDecrement }), /*#__PURE__*/
      React.createElement(Session, { sessionLength: this.state.sessionLength, controlSessionIncrement: this.controlSessionIncrement, controlSessionDecrement: this.controlSessionDecrement }), /*#__PURE__*/
      React.createElement(Timer, { timerStatus: this.state.timerStatus, timeLeft: this.state.timeLeft, playPauseSession: this.playPauseSession, resetSession: this.resetSession })));


  }}
;

const Break = function (props) {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "break-label" }, "Break Length"), /*#__PURE__*/
    React.createElement("button", { id: "break-increment", onClick: props.controlBreakIncrement }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-plus" })), /*#__PURE__*/

    React.createElement("button", { id: "break-decrement", onClick: props.controlBreakDecrement }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-minus" })), /*#__PURE__*/

    React.createElement("div", { id: "break-length" }, props.breakLength)));


};

const Session = function (props) {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "session-label" }, "Session Length"), /*#__PURE__*/
    React.createElement("button", { id: "session-increment", onClick: props.controlSessionIncrement }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-plus" })), /*#__PURE__*/

    React.createElement("button", { id: "session-decrement", onClick: props.controlSessionDecrement }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-minus" })), /*#__PURE__*/

    React.createElement("div", { id: "session-length" }, props.sessionLength)));


};

const Timer = function (props) {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { id: "timer-label" }, props.timerStatus), /*#__PURE__*/
    React.createElement("div", { id: "time-left" }, props.timeLeft), /*#__PURE__*/
    React.createElement("button", { id: "start_stop", onClick: props.playPauseSession }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-play" })), /*#__PURE__*/

    React.createElement("button", { id: "reset", onClick: props.resetSession }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-arrow-rotate-left" })), /*#__PURE__*/

    React.createElement("audio", { id: "beep", src: "https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cheesy%20Lo-Fi%20Sound%20Effects/60[kb]Busyfone.wav.mp3" })));


};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("container"));