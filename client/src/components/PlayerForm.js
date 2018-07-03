import React,{Component} from 'react'

class Players extends Component {

  render(){

    return (
      <div>
        <p>Players page</p>
        <form className="create-form">
          <input type="text" placeholder="Enter User Name"/>
          <input type="submit" value="Create"/>
        </form>
      </div>
    ) // end of return
  } // end of players
}

export default Players;
