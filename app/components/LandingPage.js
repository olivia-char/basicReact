import React, { Component } from 'react'

export default class LandingPage extends Component {
  constructor(props){
    super(props)
  }

  render() {
		return (
      <div>
        <div style={styles.container}className="row">
          <div style={styles.box} className="col-lg-6 col-lg-offset-3">
            <h1>this is box</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-5">
            <h1>Hello world</h1>
          </div>
          <div className="col-lg-4 col-lg-offset-6">
            <h1>Hello world</h1>
          </div>
          <div className="col-lg-4 col-lg-offset-4">
            <h1>Hello world</h1>
          </div>
          <div className="col-lg-4 col-lg-offset-4">
            <h1>Hello world</h1>
          </div>
        </div>
      </div>
		)
	}
}
const styles = {
  container: {
    position: "sticky"
  },
  box: {
    padding: "10%",
    borderRadius: "100%",
    border: "100px green solid",
    position: "fixed",
  }
}
