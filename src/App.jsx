import { useState } from 'react'
import './App.css'
import { Item } from './components/item/Item'
import { Layout } from './components/layout/Layout'
import { Panel } from './components/panel/Panel'

function App() {

  const [doors, setDoors] = useState([
    {id: 1, title: 'Противопожарные'},
    {id: 2, title: 'Двери ФКР'},
    {id: 3, title: 'Двери максимального остекления'},
    {id: 4, title: 'Двери из нержавеющей стали'},
    {id: 5, title: 'Квартирные двери'},
    {id: 6, title: 'Ворота распашные'},
  ])

  return (
    <>
      <Layout>
        <div className="wrapper">
          <Panel />
          <div className="content">
            <div className="row">
              {doors.map((door) => (
                <Item door={door} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App
