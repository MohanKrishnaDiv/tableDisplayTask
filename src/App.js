import './App.css';
import { useEffect, useState } from 'react';
import DisplayData from './DisplayData/Index'
import DisplayTrashData from './DisplayTrashData/DisplayTrashData';
import Starred from './DisplayStarred/Starred';
 
function App() {

  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState('');
  const [trash, setTrash] = useState([]); 
  const [dropdown, setDropdown] = useState('');
  const [starred, setStarred] = useState([]);
  const [isTrash, setIsTrash] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [isHome, setIsHome] = useState(true);


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

  function handleStarredList(id,i){
  
    
    if(!starred.includes(userData[i])){
      setStarred([...starred,userData[i]])
    }
    else{
      setStarred([...starred.filter((data) => data.id!==id)])
    }
    console.log(starred)

  }


  const inputHandler = (e) =>{
    setSearch(e.target.value)
    console.log(search)
  }

  const handleDropdown = (e) =>{
    setDropdown(e.target.value)
    //console.log(dropdown)
  }

  const homeVisibility = () =>{
    setIsHome(true);
    setIsTrash(false);
    setIsStarred(false)
  }

  const trashVisibility = ()=>{
    setIsTrash(true);
    setIsStarred(false);
    setIsHome(false);
  }

  const starredVisibility = () =>{
    setIsStarred(true);
    setIsTrash(false);
    setIsHome(false)
  }

  return (
    <div className="App">
      <br/>
      <div className='buttons'>
          <span onClick={homeVisibility}>Home</span>
          <span onClick={starredVisibility}>Starred</span>
          <span onClick={trashVisibility}>Trash</span>
      </div>

      <input type="text" placeholder='search...' value={search} onChange={inputHandler} className="inp"/>

      <select onChange={handleDropdown}>
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>        
      </select>
      
      {isHome && <DisplayData userData = {userData} sendRemoveList = {sendRemoveList} search = {search} dropdown={dropdown} handleStarredList={handleStarredList} />}

      {isTrash && <DisplayTrashData trash={trash}/>}

      {isStarred && <Starred  starred = {starred}/>}
      
      
    </div>
  );
}

export default App;
