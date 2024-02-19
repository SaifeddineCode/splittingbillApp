import Friend from "./Friend"

function FriendList ({friends,hundleSelection,selectedFriend}) {
    return <ul>
            {friends.map((friend)=>{
              return  <Friend key={friend.id}  selectedFriend={selectedFriend} hundleSelection={hundleSelection}  friend={friend} />
            })}
          </ul>
  }
 
export default FriendList