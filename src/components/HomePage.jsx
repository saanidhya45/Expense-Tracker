import { useState } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const HomePage = () => {
    let tempList = JSON.parse(localStorage.getItem('list')) || [];
    const [UserList, setUserList] = useState(tempList)
    const [Budget, setBudget] = useState(0)

   const setItem = (list) =>{
    localStorage.setItem('list', JSON.stringify(list));
  }
  return (
    <div className='h-screen bg-white flex'>
          <Section1 UserList = {UserList} setUserList = {setUserList} Budget={Budget} setBudget={setBudget}
          setItem={setItem}/>
          <Section2 UserList = {UserList} setUserList = {setUserList} Budget={Budget} 
           setItem={setItem}/>
    </div>
  )
}

export default HomePage