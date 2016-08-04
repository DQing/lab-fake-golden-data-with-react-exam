const App = React.createClass({
    getInitialState(){
      return{
          isEditor:true
      }  
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button>{isEditor ? "Preview" : "Editor"}</button>
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
ReactDOM.render(<App />,document.getElementById('content'));