
const InputForm = React.createClass({
    getInitialState: function(){
        return {
        value:''
        };
    },
    handleChange: function(e){
        this.setState({
            value: e.target.value
        })
    },

    handleSubmit: function(e){
        this.setState({
            value: e.target.value

        })

    },

    render:function(){
        const value = this.state.value;
        let jsonUrl = 'https://graph.facebook.com/v2.8/ssimg_'+value.match(/[\d]{2,100}/)+'?access_token=EAAI4BG12pyIBABnY1GZBJoR4rl2TbspZBWCVsf5AdakeRfNPw6aWDLiFZB8DYNDCEJSSySRfEGaZCfqgve38ffnfN6V2eJqOcDqZCHeq0wZALmrPlZBJcSSwvKAeqdcAk5mT1w40gEuqcwpm9N2vMUvgu8Djo16zst2crVYRi5pti55QI93aWW0zoTkzI3nNWUZD'
        let request = new XMLHttpRequest();
        request.open('GET',jsonUrl,false)
        request.send();
        let jsonText = JSON.parse(request.responseText);
        let imgUrl = jsonText.preview_url;
        imgUrl = decodeURIComponent(escape(imgUrl))

        return (
            <div>
                <form className="shutter" onSubmit={e=>this.handleSubmit(e)}>
                    <input className="text" type="text" value={value} onChange={e=>this.handleChange(e)}/>
                    <input className="submit" type="submit"/>
                </form>
                <img src = {imgUrl} />
            </div>
        )
    }
})
const ImageFrame = React.createClass({
    getInitialState: function () {
        return {imgLink: ''}
    },


    render: function () {
        return (<div className="col-xs-2">H1</div>)
    }
})
const App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <InputForm />
                <ImageFrame />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);