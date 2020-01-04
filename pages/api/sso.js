var axios = require('axios');
const chatUrl = 'https://chat.ontimewebservices.com'

export default ('/sso', function (req, res) {
const username = req.body.username;
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
res.set('Access-Control-Allow-Origin', '*'); // this is the rocket.chat URL
	res.set('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'POST') {
	// add your own app logic here to validate user session (check cookies, headers, etc)

	// if the user is not already logged in on your system, respond with a 401 status
	var notLoggedIn = false;
	if (notLoggedIn) {
		return res.sendStatus(401);
	}

	// you can save the token on your database as well, if so just return it
	// MongoDB - services.iframe.token
	// var savedToken = null;
	// if (savedToken) {
	// 	return res.json({
	// 		token: savedToken
	// 	});
	// }

	// if dont have the user created on rocket.chat end yet, you can now create it
	var currentUsername = null;
	if (!currentUsername) {
		axios.post(`${chatUrl}/api/v1/users.register`, {
			username: username,
			email: email,
			pass: password,
			name: name
		}).then(function (response) {

			// after creation you need to log the user in to get the `authToken`
			if (response.data.success) {
				return axios.post(`${chatUrl}/api/v1/login`, {
					username: username,
					password: password
				});
			}
		}).then(function (response) {
			if (response.data.status === 'success') {
				res.json({
					loginToken: response.data.data.authToken
				});
			}
		}).catch(function (error) {
			res.send(error);
		});
	} else {

		// otherwise create a rocket.chat session using rocket.chat's API
		axios.post(`${chatUrl}/api/v1/login`, {
			username: username,
			password: password
		}).then(function (response) {
			if (response.data.status === 'success') {
				res.json({
					loginToken: response.data.data.authToken
				});
			}
		}).catch(function(error) {
			res.send(error);
		});
    }
} else {
    res.send(404)
}
});
