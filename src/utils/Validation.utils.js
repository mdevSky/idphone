export class Validation {
    static isValid(number) {
        this.minLength = 10
        this.maxLength = 12

        let valid = false
        let validMessage = ''
        let prefixAllowed = ['08', '62', '+62']

        // if + isnot on start string || string include not number
        let regex = /^[0-9+]+$/
        let numberSliceLength = 0

        if (number.startsWith('+62')) {
            numberSliceLength = 3
        } else if (number.startsWith('62')) {
            numberSliceLength = 2

        } else if (number.startsWith('0')) {
            numberSliceLength = 1
        }

        if (number.slice(numberSliceLength).length < this.minLength || number.slice(numberSliceLength).length > this.maxLength) {
            valid = false
            validMessage = `number length is not valid (min: ${this.minLength}, max: ${this.maxLength})`
        } else if (!regex.test(number) || number.indexOf('+', 1) !== -1) {
            valid = false
            validMessage = "number is contain illegal charachter"
        } else if (!number.startsWith('08') && !number.startsWith('62') && !number.startsWith('+62')) {
            valid = false
            validMessage = `number prefix is not valid. (prefix number allowed: ${prefixAllowed})`
        }
        else {
            valid = true
            validMessage = "Number is valid"
        }

        return {
            valid,
            validMessage
        };
    }
}