function Button({children,onClick,showAddFriend}){
    return <button 
            onClick={onClick}
            className="button" > {children} 
            </button>
}

export default Button