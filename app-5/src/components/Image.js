import React from 'react'

export default function Image() {
  return (
    <div>
      <img src={this.props.url} alt={this.props.alt} />
      <caption>Error 599</caption>
    </div>
  )
}
