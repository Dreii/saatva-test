import React from 'react'
import './List.css'
import ArrowIcon from "../Icons/ArrowIcon"
import HTMLEntities from 'html-entities'

//Get html entities controller to convert all html entities to React readable.
const Entities = HTMLEntities.AllHtmlEntities
const entity = new Entities()

class ListItem extends React.PureComponent {

  state = {
    open: false
  }

  //toggles the open state for the listing.
  onOpen = () => this.setState({open: !this.state.open})

  render() {
    let {data} = this.props
    let {open} = this.state

    return (
      // Top half shows title info and an image.
      <div className={`list-item ${open ? "open":""}`}>
        <div className="list-item-header" onClick={this.onOpen}>
          <div className="image" style={{backgroundImage: `url(${data.urlToImage})`}}></div>
          <div className="title-container">
            <p className="title">{data.title}</p>
            <p className="author">- {data.author}</p>
          </div>
        </div>

        {/* bottom half opens on toggle and shows a bio plus read more link. */}
        <a className="body-container" href={data.url} target="_blank" rel="noopener noreferrer">
          <p className="body">{entity.decode(data.description)}</p>
          <div className="button">Read More <ArrowIcon className="arrow-icon" /></div>
        </a>
      </div>
    )
  }

}

export default ListItem
