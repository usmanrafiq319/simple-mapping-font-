// Define font mappings
const fonts = {
    font1: {
        'a': '♥𝒶', 'b': '♥𝒷', 'c': '♥𝒸', 'd': '♥𝒹', 'e': '♥𝑒', 'f': '♥𝒻', 'g': '♥𝑔', 'h': '♥𝒽', 'i': '♥𝒾', 'j': '♥𝒿',
        'k': '♥𝓀', 'l': '♥𝓁', 'm': '♥𝓂', 'n': '♥𝓃', 'o': '♥𝑜', 'p': '♥𝓅', 'q': '♥𝓆', 'r': '♥𝓇', 's': '♥𝓈', 't': '♥𝓉',
        'u': '♥𝓊', 'v': '♥𝓋', 'w': '♥𝓌', 'x': '♥𝓍', 'y': '♥𝓎', 'z': '♥𝓏',
        'A': '♥𝒜', 'B': '♥ℬ', 'C': '♥𝒞', 'D': '♥𝒟', 'E': '♥ℰ', 'F': '♥ℱ', 'G': '♥𝒢', 'H': '♥ℋ', 'I': '♥ℐ', 'J': '♥𝒥',
        'K': '♥𝒦', 'L': '♥ℒ', 'M': '♥ℳ', 'N': '♥𝒩', 'O': '♥𝒪', 'P': '♥𝒫', 'Q': '♥𝒬', 'R': '♥ℛ', 'S': '♥𝒮', 'T': '♥𝒯',
        'U': '♥𝒰', 'V': '♥𝒱', 'W': '♥𝒲', 'X': '♥𝒳', 'Y': '♥𝒴', 'Z': '♥𝒵'
    },
    font2: {
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
        'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
        'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
        'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
        'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩'
    },
    font3: {
        'a': '🅐', 'b': '🅑', 'c': '🅒', 'd': '🅓', 'e': '🅔', 'f': '🅕', 'g': '🅖', 'h': '🅗', 'i': '🅘', 'j': '🅙',
        'k': '🅚', 'l': '🅛', 'm': '🅜', 'n': '🅝', 'o': '🅞', 'p': '🅟', 'q': '🅠', 'r': '🅡', 's': '🅢', 't': '🅣',
        'u': '🅤', 'v': '🅥', 'w': '🅦', 'x': '🅧', 'y': '🅨', 'z': '🅩',
        'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙',
        'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣',
        'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩'
    },
    font4:{
        'a': '𝕬', 'b': '𝕭', 'c': '𝕮', 'd': '𝕯', 'e': '𝕰', 'f': '𝕱', 'g': '𝕲', 'h': '𝕳', 'i': '𝕴', 'j': '𝕵',
        'k': '𝕶', 'l': '𝕷', 'm': '𝕸', 'n': '𝕹', 'o': '𝕺', 'p': '𝕻', 'q': '𝕼', 'r': '𝕽', 's': '𝕾', 't': '𝕿',
        'u': '𝖀', 'v': '𝖁', 'w': '𝖂', 'x': '𝖃', 'y': '𝖄', 'z': '𝖅',
        'A': '𝕬', 'B': '𝕭', 'C': '𝕮', 'D': '𝕯', 'E': '𝕰', 'F': '𝕱', 'G': '𝕲', 'H': '𝕳', 'I': '𝕴', 'J': '𝕵',
        'K': '𝕶', 'L': '𝕷', 'M': '𝕸', 'N': '𝕹', 'O': '𝕺', 'P': '𝕻', 'Q': '𝕼', 'R': '𝕽', 'S': '𝕾', 'T': '𝕿',
        'U': '𝖀', 'V': '𝖁', 'W': '𝖂', 'X': '𝖃', 'Y': '𝖄', 'Z': '𝖅'
    }
    // Add more fonts here
};

// Function to convert text based on selected font
function convertText() {
    const textInput = document.getElementById('textInput').value;
    const fontSelect = document.getElementById('fontSelect');
    
    // Check if fontSelect.value is a valid key in the fonts object
    if (!fonts.hasOwnProperty(fontSelect.value)) {
        console.error('Invalid font selected:', fontSelect.value);
        return; // Exit the function early
    }

    const selectedFont = fonts[fontSelect.value];
    let convertedText = '';

    for (let char of textInput) {
        if (selectedFont[char]) {
            convertedText += selectedFont[char];
        } else {
            convertedText += char; // Append the character unchanged
        }
    }

    document.getElementById('output').innerText = convertedText;
}


   


   