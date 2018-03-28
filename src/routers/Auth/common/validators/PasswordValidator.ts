export default class PasswordValidator {
    static isValidPassword(password: string): boolean {
        if (!password) { return false; }
        const SIZE_PASSWORD = 6;
        return password.length < SIZE_PASSWORD;
    }
}