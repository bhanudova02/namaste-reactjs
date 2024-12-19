var parent = [React.createElement("div", { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'i\'m h1 tag'), React.createElement('h1', {}, "I'm New HTML")]
    )
), React.createElement("div", { id: 'parent-1' },
    React.createElement('div', { id: 'child-1' },
        [React.createElement('h1', {}, 'i\'m h1 tag'), React.createElement('h1', {}, "I'm New HTML")]
    )
)]
var heading = React.createElement("h1", { id: "heading" }, "Hello Reactjs From Demo HTML file");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent)