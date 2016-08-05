const App = React.createClass({

    getInitialState(){
        return {
            elements: []
        }
    },
    Delete: function (index) {
        const elements = this.state.elements;
        elements.splice(index, 1);
        this.setState({elements});
    },
    Add: function (element) {
        const elements = this.state.elements;
        elements.push(element);
        this.setState({elements});
    },
    render: function () {
        return (
            <div>
                {this.props.children && React.cloneElement(this.props.children, {
                    elements: this.state.elements,
                    onAdd: this.Add,
                    onDelete: this.Delete
                })}
            </div>
        )
    }
});
const Preview = React.createClass({
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div className={index}>
                <input type={ele} className="b4 input-lg"/>
            </div>
        });
        return (
            <div className="b6">
                <ReactRouter.Link to="/Editor">Editor</ReactRouter.Link>
                {elements}
                <button className="btn-lg">Submit</button>
            </div>
        )
    }
});
const Editor = React.createClass({
    render: function () {
        return (
            <div className="container">
                <ReactRouter.Link to="/Preview">Preview</ReactRouter.Link>
                <div className="row">
                    <div className="col-lg-6 b1">
                        <Left elements={this.props.elements} onDelete={this.props.onDelete}/>
                    </div>
                    <div className="col-lg-6 b2">
                        <Right onAdd={this.props.onAdd}/>
                    </div>
                </div>
            </div>
        )
    }
});
const Left = React.createClass({

    remove: function (index) {
        this.props.onDelete(index)
    },
    render: function () {
        const elements = this.props.elements.map((ele, index)=> {
            return <div key={index}>
                <input className="input-lg b4" type={ele}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.remove.bind(this,index)}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
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
    add: function () {
        const element = $("input[name=select]:checked").val();
        this.props.onAdd(element)
    },
    render: function () {
        return (
            <div className="b5">
                <input type="radio" name="select" value="text" />&nbsp;&nbsp;TEXT&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="select" value="date" />&nbsp;&nbsp;DATE&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-default" aria-label="Left Align" onClick = {this.add}>
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
            </div>
        )
    }
});
ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Editor}/>
            <ReactRouter.Route path="Preview" component={Preview}/>
            <ReactRouter.Route path="Editor" component={Editor}/>
        </ReactRouter.Route>
    </ReactRouter.Router>, document.getElementById('content'));