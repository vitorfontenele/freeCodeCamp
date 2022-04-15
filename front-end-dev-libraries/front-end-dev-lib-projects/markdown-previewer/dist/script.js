class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState(
    { markdown: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "flex-box" }, /*#__PURE__*/
      React.createElement("div", { className: "half-page gray centered border-radius" }, /*#__PURE__*/
      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "half-page gray centered border-radius" }, /*#__PURE__*/
      React.createElement(Viewer, { markdown: this.state.markdown }))));



  }}
;

const Editor = function (props) {
  return /*#__PURE__*/(
    React.createElement("textarea", { id: "editor", className: "white full-width full-height special-padding border-box", onChange: props.onChange }, props.markdown));

};

const Viewer = function (props) {
  return /*#__PURE__*/(
    React.createElement("div", { id: "preview", className: "white full-width scroll special-padding border-box", dangerouslySetInnerHTML: { __html: marked.parse(props.markdown) } }));


};

const placeholder = `# Dunder Mifflin Paper Company

## Dwight Schrute here...
### Speaking as assistant manager.

I am a full nerd and even write code for fun. I've mastered HTML quite well. But I can write markdown as well. Look at my \`<span></span>\`, between 2 backticks. I can write JS too!

\`\`\`
//how i became assistant manager

function invadeManagerOffice(){
   let myName = 'Dwight Schrute';
   employees[myName].job = 'Assistant Manager';
invadeManagerOffice();
\`\`\`

My priorities:
1. Prevent Jim's pranks;
2. Make employees obey;
3. Take care of Angela.

Not in the list, but **bears, beets and Battlestar Galactica** too. Just don't tell Jim.

As a wise man once said, _chimps show submission by smiling_. This is important.

To make it more clear:
> I never smile if I can help it. Showing one's teeth is a submission signal in primates. When someone smiles at me, all I see is a chimpanzee begging for its life.

A link to [Dunder Mifflin](https://en.wikipedia.org/wiki/Dunder_Mifflin) website.

![Dunder Mifflin Logo](https://iconape.com/wp-content/files/gh/286205/svg/286205.svg)
`;


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("super-container"));