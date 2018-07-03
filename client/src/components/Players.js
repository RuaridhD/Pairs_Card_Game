import React,{Component} from 'react'

const Players = () => {

  return (
    <div>
    <p>Players page</p>
    <form className="create-form">
      <input type="text" placeholder="Enter User Name"/>
      <input type="submit" value="Create"/>
    </form>
  </div>
  ) // end of retrun
} // end of players

export default Players;
