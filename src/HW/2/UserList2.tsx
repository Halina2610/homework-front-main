import {CurrentUser} from './CurrentUser';
import {AddressType, UsersObjectType, UserType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType;
	filterUsers: (address: AddressType) => void;
};

export const UserList2 = (props: UserList2PropsType) => {

	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers({ street: '', city: 'Los Angeles' })}>
				SHOW ME FRIENDS FROM LA
			</button>
			<ul>
				{props.users.myFriends.map((user: UserType) => (
					<CurrentUser key={user.id} user={user} />
				))}
			</ul>
		</div>
	);
};




