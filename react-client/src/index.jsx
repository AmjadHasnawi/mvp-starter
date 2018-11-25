import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ListItem from './components/ListItem.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      item: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

    
  search (term) {
    console.log(`${term} was searched`);
    // TODO
    var that = this;
    $.ajax({
      type: "POST",
      url: "/items", 
      data: JSON.stringify({data: term}),
      contentType:'application/json',
      success: function(d) {
        console.log(d)
        that.setState({
          items: d
        });

      }

    });
  }

  onChange (e) {
    this.setState({
      item: e.target.value
    });
  }

  render () {
    return (<div>
      <h1>Universities Guide</h1>
      <h2> Type universities sector </h2>
      <input  onChange={this.onChange}/>
      <button onClick={this.search.bind(this,this.state.item)}>Click</button>
       <div>{this.state.items.map(item => <ListItem item={item}/>)}</div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));