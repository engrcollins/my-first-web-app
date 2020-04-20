import React, { useState } from 'react'
import Header from './Header'
import ArchiveNav from './Navigation'
import Table from './Table'
import MyForm from './Form'


const App = () => {
  const entryData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [entries, setEntries] = useState(entryData)

  const addEntry = entry => {
    setEntries([...entries, entry])
  }
      return (
        <div>
          <Header />
          <ArchiveNav />
          <div className="container row">
            <div className="leftSide col-9 col-s-8">
              <h3 className="data-table">ARCHIVE TABLE</h3>
              <Table />
              <br />
            </div>
            <div className="rightSide col-3 col-s-4">
              <h3 className="entry-form">New Entry</h3>
              <MyForm addEntry={addEntry}/>
            </div>
          </div>
        </div>
      );
      }


export default App