
export default function Home() {
  return (
    <>
      <h1>Maze App</h1>
      <div id="gradient"></div>
    <div id="page">
      <div id="Message-Container">
        <div id="message">
          <h1>Congratulations!</h1>
          <p>You are done.</p>
          <p id="moves"></p>
          <input id="okBtn" type="button" onclick="toggleVisablity('Message-Container')" value="Cool!" />
        </div>
      </div>
      <div id="menu">
        <div class="custom-select">
          <select id="diffSelect">
                    <option value="10">Easy</option>
                    <option value="15">Medium</option>
                    <option value="25">Hard</option>
                    <option value="38">Extreme</option>                                      
                </select>
        </div>
        <input id="startMazeBtn" type="button" onclick="makeMaze()" value="Start" />
      </div>
      <div id="view">
        <div id="mazeContainer">
          
        </div>
      </div>
    </div>
    </>
  )
}
