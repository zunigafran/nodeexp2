- Bug 1: Missing Async/Await in Login Route:
The login route is missing the await keyword when calling the asynchronous User.authenticate method.

let user = await User.authenticate(username, password);


- Bug 2: Missing Async/Await in Delete Route:
The delete route is missing the await keyword when calling the asynchronous User.delete method.

await User.delete(req.params.username);

- Bug 3: Incomplete Error Handling in Update Route
The update route lacks proper error handling for potential errors thrown by the User.update method.

try {
  let user = await User.update(req.params.username, fields);
  return res.json({ user });
} catch (err) {
  return next(err);
}

- Bug 4: Authorization Check Error Message
The authorization check error message has a placeholder "that" and could be improved for clarity.

throw new ExpressError('Only the user or an admin can edit a user.', 401);

- Bug 5: Incorrect Use of new express.Router()
Instead of new express.Router(), use express.Router() directly when creating a router instance.

const router = express.Router();

- Bug 6: Missing Await in Register Route
The register route is missing the await keyword when calling the asynchronous User.register method.

let user = await User.register({username, password, first_name, last_name, email, phone});
