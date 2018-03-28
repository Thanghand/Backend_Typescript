import * as bcrypt from 'bcryptjs';

export default class PassWordUtils {

    static comparePassword(candidatePassword: string, hashPassword: string): boolean {
        try {
            return bcrypt.compareSync(candidatePassword, hashPassword);;
        } catch (error) {
            return false;
        }
    }
}