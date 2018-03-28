export default class EmailValidator {

    static isValidEmail(email: string): boolean {
        if (!email) {
            return false;
        }
        const pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
    }
}