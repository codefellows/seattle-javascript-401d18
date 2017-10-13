import React from 'react'
import {connect} from 'react-redux'
import PhotoForm from '../photo-form'
import * as utils from '../../lib/utils'
import {GridTile} from 'material-ui/GridList'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep'
import {photoUpdateRequest, photoDeleteRequest} from '../../action/photo-actions'

class PhotoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing})
  }

  render() {
    let {photo} = this.props
    const styles = {
      gridList: {
        'min-width': '45%',
        'positiion': 'relative',
      },
      icons: {
        'position': 'absolute',
        'top': '5%',
      },
      edit: {
        'color': '#ddd',
        'left': '10%',
      },
      delete: {
        'color': '#ddd',
        'left': '2%',
      }
    }

    return (
      <GridTile className="photo-item" title={photo.description} >
        <div style={styles.icons}>
          <DeleteIcon style={styles.delete} onClick={() => this.props.photoDelete(photo)}/>
          <EditIcon style={styles.edit} onClick={this.toggleEdit}/>
        </div>
        
        {utils.renderIf(!this.state.editing, <img src={photo.url} style={{"width": "100%"}} />)}

        {utils.renderIf(this.state.editing, 
          <PhotoForm 
            buttonText="update"
            photo={photo}
            toggle={this.toggleEdit}
            onComplete={this.props.photoUpdate}/>
        )}
      </GridTile>
    )
  }
}

let mapStateToProps = state => ({})
let mapDispatchToProps = dispatch => ({
  photoUpdate: photo => dispatch(photoUpdateRequest(photo)),
  photoDelete: photo => dispatch(photoDeleteRequest(photo)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoItem)