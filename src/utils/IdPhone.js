import fs from 'fs'
import { Validation } from './Validation.utils.js';
import { NormalizationNumber } from './NormalizationNumber.js';

export default class IdPhone {

    constructor() {

        this.ndc = JSON.parse(fs.readFileSync('./assets/ndc.json'));
    }

    checkProvider = (number, normalizeType) => {
        if(!number) throw new Error("number is required!!");
        let numberNormalization = ''
        
        // sterilization string 
        number = number.trim()
        normalizeType = normalizeType ? normalizeType.toString().trim() : '08'

        // normalize type allowed 
        let normalizeTypeAllowed = ['08', '62', '+62']
        if(!normalizeTypeAllowed.includes(normalizeType)) throw new Error(`normalize-type not supported(${normalizeType})!! Normalize type supported are ${normalizeTypeAllowed}`)
        

        // normalization number 
        numberNormalization = NormalizationNumber(number, normalizeType)

        // list correct provider 
        let providersCorrect = []

        // get prefix number 
        let prefixNumber = number.substr(0, 4)

        for(let item of Object.keys(this.ndc)) {
            if(this.ndc[item].includes(prefixNumber)) {
                providersCorrect.push(item)
                // break;
                
            }
            
        }

        let validation = Validation.isValid(numberNormalization)
        
        
        // console.log({
        //     number: number,
        //     provider: providersCorrect,
        //     normalize: numberNormalization,
        //     isValid: validation.valid,
        //     validMessage: validation.validMessage
        // });
        return {
            number: number,
            provider: providersCorrect,
            normalize: numberNormalization,
            isValid: validation.valid,
            validMessage: validation.validMessage
        };
        
        
        

    }

    static isValid = (number) => {
        return Validation.isValid(number.toString().trim())
    }
}