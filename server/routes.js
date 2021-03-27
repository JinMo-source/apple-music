// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/serach";


// User
const USERS = "/users";
const USER_DETAILS = "/:id";
const EDIT_PROFILES = "/edit-profiles";
const CHANGE_PASSWORD = "/change-password";


// Music
const MUSIC ="/musics";
const MUSIC_DETAILS = "/:id";



const routes = {
    //Global
    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    serach:SEARCH,
    //users
    users:USERS,
    userDetails:USER_DETAILS,
    editProfiles:EDIT_PROFILES,
    changePassword:CHANGE_PASSWORD,
    music :MUSIC,
    musicDetails:MUSIC_DETAILS
};

export default routes;