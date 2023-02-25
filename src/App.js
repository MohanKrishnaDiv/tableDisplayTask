import './App.css';
import { useEffect, useState } from 'react';
import DisplayData from './DisplayData/Index'
import DisplayTrashData from './DisplayTrashData/DisplayTrashData';
 
function App() {

  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState('');
  const [trash, setTrash] = useState([]);
  const [isTrash, setIsTrash] = useState(false);
  const [dropdown, setDropdown] = useState('')


  useEffect( () => {
    fetch("https://mocki.io/v1/d1f16339-9aec-4696-b302-7fd0cb0db28b").then(
    (response) => response.json()).then(
      (data) => setUserData(data));    
    },[])

  function sendRemoveList(id,i){
    setTrash([...trash,userData[i]]);
    // console.log(trash)
    setUserData([...userData.filter((data) => data.id!==id)])
    // console.log(userData)
  }

  const inputHandler = (e) =>{
    setSearch(e.target.value)
  }

  const handleDropdown = (e) =>{
    setDropdown(e.target.value)
    //console.log(dropdown)
  }

  const trashVisibility = ()=>{
    setIsTrash(prevVal => !prevVal);
  }

   

  return (
    <div className="App">
      <br/>
      <div className='buttons'>
          <span>Home</span>
          <span>Starred</span>
          <span onClick={trashVisibility}>Trash</span>
      </div>
      <input type="text" placeholder='search...' value={search} onChange={inputHandler}/>
      <select onChange={handleDropdown}>
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>        
      </select>
      {isTrash && <DisplayTrashData trash={trash}/>}
      {isTrash ? '' :<DisplayData userData = {userData} sendRemoveList = {sendRemoveList} search = {search} dropdown={dropdown}/>}
    </div>
  );
}

export default App;
