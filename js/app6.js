const App = React.createClass({
    getInitialState(){
        return {
            isEditor: true,
            elements:[]
        }
    },
    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        })
    },

    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.toggle}>{isEditor ? "Preview" : "Editor"}</button>
                <div className={isEditor?"hidden":""}>
                    <Preview elememts = {this.state.elements}/>
                </div>
                <div className={isEditor?"":"hidden"}>
                    <Editor elememts = {this.state.elements} onAdd = {this.add} onDelete = {this.delete}/>
                </div>
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
            <div>
                <Left />
                <Right />
            </div>
        )
    }
});
const Left = React.createClass({
    render: function () {
        return (
            <div>Left</div>
        )
    }
});
const Right = React.createClass({
    render: function () {
        return (
            <div>Right</div>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('content'));