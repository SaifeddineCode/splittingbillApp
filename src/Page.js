import { useState } from "react";
import FriendList from "./Components/FriendList";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function Page() {

  const [friends,setFriends] = useState(initialFriends)
  const [showAddFriend,setShowFriend] = useState(false)

  const [selectedFriend, setSelectedFriend] = useState("")



  function toggleAddFriend(){
    setShowFriend(!showAddFriend)
  }

  function handleAddFriend (friend){
    setFriends( prev => [...prev,friend] )
    setShowFriend(false)
  }


  function hundleSelection (friend) {
    // setSelectedFriend(friend)
    setSelectedFriend( (cur) => cur?.id === friend.id ? null : friend )
    setShowFriend(false)
  }

  function handleSplitBill (value) {
    // console.log(value)
    setFriends(friends => friends.map((friend)=> friend.id === selectedFriend.id ? {...friend,balance : friend.balance + value} 
    : friend
    ))
    setSelectedFriend(null)

  }


  return (  
    <div className='app' > 
      <div className="sidebar">
          <FriendList hundleSelection={hundleSelection} selectedFriend={selectedFriend}  friends={friends} />
          {showAddFriend && <FormAddFriend  onAddFriend={handleAddFriend} />}  
          <Button onClick={toggleAddFriend} >
            {showAddFriend ? "Close" : "Add friend"}
          </Button>
      </div>
     {selectedFriend && <FormSplitBill key={selectedFriend.id} handleSplitBill={handleSplitBill} friends={friends} setFriends={setFriends} selectedFriend={selectedFriend} />}
    </div>
  )
}

