const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller')
const passport = require('passport');
const bodyParser = require('body-parser');

const LocalStrategy = require('passport-local').Strategy;

//destructuring from .env
const {PORT, DB_CON} = process.env;
const app = express();
app.use(express.json());

massive(DB_CON).then(dbInstance => {
  app.set('db', dbInstance);  
}).catch(err => console.log(err, "DB Error"));

//setup express server
//configure app to use sessions and passport
app.use(bodyParser.json());
app.use( session({
    secret: 'secretone',
    resave: false,
    saveUninitialized: false
}));
//Always used with passport
app.use(passport.initialize());
//always used with session
app.use(passport.session());

//configure passport, take in middleware name and new "Strategy"
passport.use('login', new LocalStrategy({
    usernameField: 'username',
}, (username, password, done) => {
    const db = app.get('db');
    db.users.find({username}).then(userResults => {
        if(userResults.length == 0) {
            return done(JSON.stringify({message: 'username or password is invalid'}))
        };

        //if find user, store user in variable
        const user = userResults[0];

        //store password
        const storedPass = user.password;
        if (!bcrypt.compareSync(password, storedPass)){
            return done(JSON.stringify({message: 'username or password is invalid'}));
        };
        delete user.password;
        done(null, userResults[0]);
    }).catch(err => {
        console.warn(err);
        done(JSON.stringify({message: 'unknown error. try again.'}));
    });
}));

//Register a user
passport.use('register', new LocalStrategy({
    usernameField: 'username',
},
(username, password, done) => {
    const db = app.get('db');
    
    db.users.find({username}).then(userResults => {
        if (userResults.length > 0) {
            return done (JSON.stringify({message: 'username is already in use'}))
        };
        const hashedPassword = bcrypt.hashSync(password, 15);
        return db.users.insert({
            username,
            password: hashedPassword,
        });
    }).then(user => {
        done(null, user);
    }).catch(err => {
        console.warn(err);
        done(JSON.stringify({message: 'unknown error, try again.'}))
    });
}));
//pick what properties we want to store on session.
passport.serializeUser(function(user, done) {
    done(null, user.id)
});
passport.deserializeUser((id, done) => {
    const db = app.get('db');

    db.users.find(id)
        .then(user => {
            if (!user) return done(null, undefined);

            delete user.password;

            return done(null, user);
        })
        .catch(err => {
            console.warn(err);
            done('System failure');
        });
});


//endpoints
app.get('/api/posts', controller.getOne);
app.get('/api/posts', controller.getAll);
app.post('api/posts', controller.create);
app.delete('/api/posts/:id', controller.delete);
app.put('/api/posts/:id', controller.update);
app.get('/api/auth/me', controller.login);

//login endpoint, calls authenticate on passport. 
app.post(`/api/auth/login`, passport.authenticate('login'), (req, res) => {
    req.session.userid();
    return res.send({message: 'Authenticated!', user: req.user});
});
//register endpoint, 
app.post('/api/auth/register', passport.authenticate('register'), (req, res) => {
    req.session.userid();
    return res.send({message: 'Logged In!', user: req.user})
});
//logout endpoint,
app.post('/api/auth/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.sendStatus(200);
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//TODO: The endpoint should respond with the post title, image, and content for that post, as well as the username and profile picture of the post author (Hint: Use a join).