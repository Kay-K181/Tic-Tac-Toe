import { useState } from "react"

export default function Player({initalName, symbol, isActive, onChangeName}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initalName);

    function handleEditClick() {
        setIsEditing(prevState => !prevState);
        
        if(isEditing) {
        onChangeName(symbol, playerName);
    }
    }

   let editablePlayerName = <span className="player-name">{playerName}</span>;

   if(isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>;
   } 

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player"> 
                {editablePlayerName}             
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}