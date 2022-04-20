const audio = { "Q": "Bendy", "W": "Blobble", "E": "Bongo-Hi", "A": "Crikix", "S": "Lotabla", "D": "Pipechimes", "Z": "Steel-Drum", "X": "Tablaesque", "C": "Verby-Rattle" };
const audioIds = Object.keys(audio);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    let buttonId = event.target.getAttribute("id");
    let button = document.getElementById(buttonId);
    let buttonText = button.textContent;
    let audioId = buttonText;
    document.getElementById("display").textContent = audio[audioId];
    document.getElementById(audioId).play();
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h1", null, "Drum Machine"), /*#__PURE__*/
      React.createElement(Display, null), /*#__PURE__*/
      React.createElement("div", { id: "drum-buttons" }, /*#__PURE__*/
      React.createElement(Bendy, { onClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Blobble, { onClick: this.handleClick }), /*#__PURE__*/
      React.createElement(BongoHi, { onClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Crikix, { onClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Lotabla, { onClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Pipechimes, { onClick: this.handleClick }), /*#__PURE__*/
      React.createElement(SteelDrum, { onClick: this.handleClick }), /*#__PURE__*/
      React.createElement(Tablaesque, { onClick: this.handleClick }), /*#__PURE__*/
      React.createElement(VerbyRattle, { onClick: this.handleClick }))));



  }}


const Display = function (props) {
  return /*#__PURE__*/(
    React.createElement("div", { id: "display" }));


};

const Bendy = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "bendy-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[0], /*#__PURE__*/
    React.createElement("audio", { id: "Q", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/91[kb]african-pe-med.wav.mp3", className: "clip" })));


};

const Blobble = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "blobble-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[1], /*#__PURE__*/
    React.createElement("audio", { id: "W", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/36[kb]blobble.wav.mp3", className: "clip" })));


};

const BongoHi = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "bongo-hi-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[2], /*#__PURE__*/
    React.createElement("audio", { id: "E", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/12[kb]bongo%20hi.wav.mp3", className: "clip" })));


};

const Crikix = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "crikix-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[3], /*#__PURE__*/
    React.createElement("audio", { id: "A", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/69[kb]crikix.wav.mp3", className: "clip" })));


};

const Lotabla = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "lotabla-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[4], /*#__PURE__*/
    React.createElement("audio", { id: "S", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/201[kb]lotabla.wav.mp3", className: "clip" })));


};

const Pipechimes = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "pipechimes-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[5], /*#__PURE__*/
    React.createElement("audio", { id: "D", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/122[kb]pipechimes.wav.mp3", className: "clip" })));


};

const SteelDrum = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "steel-drum-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[6], /*#__PURE__*/
    React.createElement("audio", { id: "Z", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/83[kb]steeldrum.wav.mp3", className: "clip" })));


};

const Tablaesque = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "tablaesque-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[7], /*#__PURE__*/
    React.createElement("audio", { id: "X", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/11[kb]tablaesque.wav.mp3", className: "clip" })));


};

const VerbyRattle = function (props) {
  return /*#__PURE__*/(
    React.createElement("button", { id: "verby-rattle-audio-button", className: "drum-pad", onClick: props.onClick }, audioIds[8], /*#__PURE__*/
    React.createElement("audio", { id: "C", src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/54[kb]verby-rattle.wav.mp3", className: "clip" })));


};

document.addEventListener('keypress', function (event) {
  let code = event.code;
  let codeId = code.split("Key")[1];
  if (audioIds.includes(codeId)) {
    document.getElementById("display").textContent = audio[codeId];
    document.getElementById(codeId).play();
  }
});

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("container"));