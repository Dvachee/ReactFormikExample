import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import FirsComponent from './components/firstComponent';
import { addItem, secondItem, thirdItem, deleteItem } from './redux/test-reducer';

class App extends React.Component {

  state = {
    items: [
      {name: '', year: '', level: 1},
      {name: '', year: '', level: 2},
      {name: '', year: '', level: 3},
    ]
  }

  onSubmit = (values) => {
    const obj = [
      {name: values.level === 1 && values.name,
       year: values.level === 1 && values.year},
      {name: values.level === 2 && values.name,
        year: values.level === 2 && values.year},
      {name: values.level === 3 && values.name,
        year: values.level === 3 && values.year}
    ] 
    console.log(obj)
  }

  render() {
    console.log(this.state.items)
    return (
      this.state.items.map(e => {
        return <FirsComponent 
          key={e.level}
          name={e.name}
          year={e.year}
          onSubmit={this.onSubmit}
          level={e.level} />
      })
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.test.items
  }
}

const mapDispatchToProps = {
  addItem,
  deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
