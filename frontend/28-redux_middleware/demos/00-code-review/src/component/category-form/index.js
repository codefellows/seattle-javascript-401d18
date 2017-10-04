import React from 'react'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.category ? props.category.title : '',
      id: props.category ? props.category.id : null,
      timestamp: props.category ? props.category.timestamp : null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('__FORM_PROPS__', this.props)
  }

  handleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(Object.assign({}, this.state))
    this.setState({title: ''})
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input 
          required
          type="text"
          name="title"
          placeholder="enter a title"
          value={this.state.title}
          onChange={this.handleChange}/>

          <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm