import React, {Component} from 'react'

const TableHeader = () => {
  return(
    <thead>
      <tr>
        <th style={{color: "blue", width:"7px"}}>S/N</th>
        <th style={{ color: "blue", width:"550px"}}>Article Title</th>
        <th style={{ color: "blue", width:"120px"}}>Category</th>
        <th style={{ color: "blue", width:"300px"}}> Article Content</th>
        <th style={{ color: "blue", width:"200px"}}>Article Source</th>
        <th style={{ color: "blue", width:"150px"}}>Source url</th>
        <th style={{ color: "blue", width:"120px"}}>Original Poster/Author</th>
        <th style={{ color: "blue", width:"160px"}}>Tags</th>
        <th style={{ color: "blue", width:"110px"}}>Date</th>
      </tr>
    </thead>
  )
}

  const TableBody = () =>{
    return(
     <tbody id="data-tbody">
    </tbody>
  )
}

class Table extends Component {
  loadDoc = () => {
    var request = new XMLHttpRequest()
    request.open('GET', '.catalog/tableEntries.json', true)
    request.onload = function() {
      // Begin accessing JSON data here & decode
      var tableBody = ""
      var data = JSON.parse(this.response);
      var i = 0;
      if (request.status >= 200 && request.status < 400) {
        data.forEach(entry => {
          i++
          //console.log(entry.Content)
          entry.Content = entry.Content.substring(0, 26)
          tableBody += "<tr><td>" +
          i +
          "</td><td>" +
          entry.Title +
          "</td><td>" +
          entry.Category +
          "</td><td>" +
          `${entry.Content}...` +
          "</td><td>" +
          entry.Source +
          "</td><td style='width: 400px; word-break:break-all'>" +
          entry.URL +
          "</td><td>" +
          entry.Author +
          "</td><td>" +
          entry.Tags +
          "</td><td>" +
          entry.Date +
          "</td></tr>"
        });
        document.getElementById("data-tbody").innerHTML = tableBody;
      }
    }
    request.send();
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.loadDoc}>Get Archive</button>
        <table className="table table-hover table-bordered">
          <TableHeader />
          <TableBody />
        </table>
        </div>
    )
  }
}

export default Table