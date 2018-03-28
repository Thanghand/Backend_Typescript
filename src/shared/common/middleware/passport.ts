import { Strategy, ExtractJwt } from 'passport-jwt';
import { Passport } from "passport";

import UserDao from '../../../routers/Auth/repository/dao/UserDao';

/**
 * passport jwt configuration
 */
export class PassportConfig {
    private userDao: UserDao;
    public passport: Passport;

    constructor(passport: any) {
        this.passport = passport;
        this.userDao = new UserDao();
    }

    public init() {
        let opts = {
            jwtFromRequest: ExtractJwt.fromAuthHeader(),
            secretOrKey: process.env.APPLICATION_SECRET
        };

        this.passport.use(new Strategy(opts, (jwtPayload, done) => {
            this.userDao.findOne({ _id: jwtPayload._doc._id }, (err, user) => {
                if (err) {
                    return done(err, false);
                } else if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }));
    }
}