import React, { Component } from 'react'

export default class Grid extends Component {
  toCssClasses(numbers) {
    const col = numbers ? numbers.split(' ') : []
    let classes = ''

    if (col[0]) classes += 'col-xs-'+col[0]
    if (col[1]) classes += ' col-xs-'+col[1]
    if (col[2]) classes += ' col-xs-'+col[2]
    if (col[3]) classes += ' col-xs-'+col[3]

    return classes

  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12)
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}
