const App = React.createClass({
    getInitialState(){
        return {
            isEditor: true,
            elements: []
        }

    },
    toggle: function () {
        this.setState({isEditor: !this.state.isEditor})
    },
    add:function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements});
    },
    delete:function (index) {
        const elements = this.state.elements;
        elements.splice(index, 1);
        this.setState({elements});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.toggle}>{isEditor ? "Preview" : "Editor"}</button>
                <div className={isEditor?"hidden":""}>
                    <Preview elements = {this.state.elements}/>
                </div>
                <div className={isEditor?"":"hidden"}>
                    <Editor elements = {this.state.elements} onAdd = {this.add} onDelete = {this.delete}/>
                </div>
            </div>
        )
    }
});
const Preview = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele,index)=>{
            return <div key = {index}>
                <input type={ele} />
            </div>
        });
        return (
            <div>
                {elements}
                <button>Submit</button>
            </div>
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
    remove:function (index) {
      this.props.onDelete(index)  
    },
    render: function () {
        const elements = this.props.elements.map((ele,index)=>{
            return <div key = {index}>
                <input type={ele} />
                <button onClick = {this.remove.bind(this,index)}>X</button>
            </div>
        });
        return (
            <div>
                {elements}
            </div>
        )
    }
});
const Right = React.createClass({
    add:function () {
      this.props.onAdd($("input[name = select]:checked").val())  
    },
    render: function () {
        return (
            <div>
                <input type="radio" name="select" value="text" />TEXT
                <input type="radio" name="select" value="date" />DATE
                <button onClick = {this.add}>+</button>
            </div>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('content'));