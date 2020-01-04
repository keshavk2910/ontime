var axios = require('axios');
const chatUrl = 'https://chat.ontimewebservices.com'

export default ('/login', function (req, res) {
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
	const password = req.body.password;
	res.set('Access-Control-Allow-Origin', '*'); // this is the rocket.chat URL
	res.set('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'POST') {
	// do your own authentication process

	// after user is authenticated we can proceed with authenticating him on rocket.chat side

	//
	//
	// the code bellow is exact the same as the on /sso endpoint, excepts for its response
	// it was duplicated since the purpose of this is app is for helping people understanding
	// the authentication process and being a well designed app =)
	//
	//

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

				// since this endpoint is loaded within the iframe, we need to communicate back to rocket.chat using `postMessage` API
				res.set('Content-Type', 'text/html');
				res.send(`<script>
				window.parent.postMessage({
					event: 'login-with-token',
					loginToken: '${ response.data.data.authToken }'
				}, 'https://chat.ontimewebservices.com'); // rocket.chat's URL
				</script>`);
            }
        })
        .catch(function (error) {
			res.send(401);
		});
	} else {

		// otherwise create a rocket.chat session using rocket.chat's API
		axios.post(`${chatUrl}/api/v1/login`, {
			username: 'username-set-previously',
			password: 'password-set-previously'
		}).then(function (response) {
			if (response.data.status === 'success') {

				// since this endpoint is loaded within the iframe, we need to communicate back to rocket.chat using `postMessage` API
				res.set('Content-Type', 'text/html');
				res.send(`<script>
				window.parent.postMessage({
					event: 'login-with-token',
					loginToken: '${ response.data.data.authToken }'
				}, 'https://chat.ontimewebservices.com'); // rocket.chat's URL
				</script>`);
			}
		}).catch(function() {
			res.send(401);
		});
    }
}
});
