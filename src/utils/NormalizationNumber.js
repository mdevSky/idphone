/**
* Normalisasi nomor telepon Indonesia ke format tertentu
* @param {string} number - input nomor, bisa 08..., 62..., +62...
* @param {'08'|'62'|'+62'} normalizeType - target format
* @returns {string} - nomor hasil normalisasi
*/
export function NormalizationNumber(number, normalizeType) {
    if (!number) return '';
    number = number.replace(/[^\d+]/g, '');

    if (number.startsWith('+62')) {
        number = number.slice(3);
    } else if (number.startsWith('62')) {
        number = number.slice(2);
    } else if (number.startsWith('0')) {
        number = number.slice(1);
    }

    switch (normalizeType) {
        case '08':
            return '0' + number;
        case '62':
            return '62' + number;
        case '+62':
        default:
            return '+62' + number;
    }

}