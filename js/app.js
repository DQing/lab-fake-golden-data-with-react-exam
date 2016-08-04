const App = React.createClass({
    render: function () {
        return (
            <div>
                <button>Preview</button>
                <Preview />
                <Editor />
            </div>
        )
    }
});
const Preview = React.createClass({
    render: function () {
        return (
            <div>Preview</div>
        )
    }
});
const Editor = React.createClass({
    render: function () {
        return (
            <div>Editor</div>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('content'));