export function manageFriends(state, action){
  let friends
  switch(action.type) {
    case 'ADD_FRIEND':
      friends = state.friends
      let newFriend = action.friend
      let newFriends = [...friends, newFriend]
  }
}
