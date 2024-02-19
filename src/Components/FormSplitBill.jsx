import { useState } from "react"
import Button from "./Button"

function FormSplitBill({selectedFriend,setFriends,friends,handleSplitBill}) {
  
    const [bill,setBill] = useState("")
    const [paidByUser,setPaidByUser] = useState("")
    const [whoIsPaying,setWhoIsPaying] = useState("user")
  
    const paidByFriend = bill - paidByUser

  
    
  
    const handleSplit =  (e) =>{
  
      e.preventDefault()
  
      if( !bill || !paidByUser ) return;
  
      handleSplitBill( whoIsPaying === "user" ? paidByFriend : -paidByUser )
  
    }
  
  
    return (   <form className="form-split-bill">
    <h2> Split a bill with {selectedFriend.name} </h2>
    <label >Bill value </label>  
    <input type="text" onChange={(e)=>setBill(Number(e.target.value))} />
  
    <label >Your Expense </label>  
    <input type="text" 
    value={paidByUser}
    onChange={(e)=>
    setPaidByUser( Number(e.target.value) > bill ? paidByUser : Number(e.target.value) )}
    />
  
    <label >{selectedFriend.name}'s expense </label>  
    <input type="text" value={paidByFriend} disabled />
    
    <label> Who is paying the bill </label>
    <select onChange={(e)=>setWhoIsPaying(e.target.value)} >
      <option value='user' >You</option>
      <option value='friend'>{selectedFriend.name}</option>
    </select>
  
      <Button onClick={(e)=>handleSplit(e)} > Split bill </Button>
    </form>)
  
  }

  export default FormSplitBill