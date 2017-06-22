function User(profile) {
	this.name = 'name'; 
	this.address = 'address';
	this.city = 'city';
	this.state = 'state';
	this.zipcode = 'zipcode'; 
	this.avatar = 'avatar' 
}

console.log(User)

function getProfileUpdate(){
	this.name = 'William Miller',
	this.address = '6102 S Claiborne Ave',
	this.city = 'New Orleans',
	this.state = 'LA',
	this.zipcode = '70125',
	this.avatar = 'german'
}

var n = new User();

var q = new getProfileUpdate();


Object.assign(n,q);

console.log(n);