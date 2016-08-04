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
    Add:function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState(elements);
    },
    Delete:function (index) {
        const elements = this.state.elements;
        elements.splice(index, 1);
        this.setState(elements);
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.toggle}>{isEditor ? "Preview" : "Editor"}</button>
                <div className={isEditor ? "hidden" : ""}>
                    <Preview elements = {this.state.elements}/>
                </div>
                <div className={isEditor ? "":"hidden"}>
                    <Editor elememts = {this.state.elements} onAdd = {this.Add} onDelete = {this.Delete}/>
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
                <Left elements = {this.props.elements} onDelete = {this.props.onDelete}/>
                <Right onAdd = {this.props.onAdd}/>
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