describe('Bottles', () => {
    test('the first verse', () => {
        const expected =
            '99 bottles of beer on the wall, ' +
            '99 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '98 bottles of beer on the wall.\n';
        expect(new Bottles().verse(99)).toBe(expected)
    });

    test('another verse', () => {
        const expected = 
            '3 bottles of beer on the wall, ' +
            '3 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '2 bottles of beer on the wall.\n';
        expect(new Bottles().verse(3)).toBe(expected)
    })

    test('verse 2', () => {
        const expected =
            '2 bottles of beer on the wall, ' +
            '2 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '1 bottle of beer on the wall.\n';
        expect(new Bottles().verse(2)).toBe(expected)
    })

    test('verse 1', () => {
        const expected =
            '1 bottle of beer on the wall, ' +
            '1 bottle of beer.\n' +
            'Take it down and pass it around, ' +
            'no more bottles of beer on the wall.\n'
        expect(new Bottles().verse(1)).toBe(expected)
    })

    test('verse 0', () =>{
        const expected = 
            'No more bottles of beer on the wall, ' +
            'no more bottles of beer.\n' + 
            'Go to the store and buy some more, ' +
            '99 bottles of beer on the wall.\n';
        expect(new Bottles().verse(0)).toBe(expected)
    })

    test('a couple verses', () => {
        const expected = 
            '99 bottles of beer on the wall, ' +
            '99 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '98 bottles of beer on the wall.\n' +
            '\n' +
            '98 bottles of beer on the wall, ' +
            '98 bottles of beer.\n' +
            'Take one down and pass it around, ' +
            '97 bottles of beer on the wall.\n';
        expect(new Bottles().verses(99, 98)).toBe(expected)
    })
})

 class Bottles{
    // **verse 0 code**
    verse(number){
        switch(number){
            case 0: 
                return (
                    'No more bottles of beer on the wall, ' +
                    'no more bottles of beer.\n' +
                    'Go to the store and buy some more, ' +
                    '99 bottles of beer on the wall.\n'
                )
            case 1:
                return (
                    '1 bottle of beer one the wall, ' + 
                    '1 bottle of beer.\n' +
                    'Take it down and pass it around, ' + 
                    'no more bottles of beer on the wall.\n'
                )
            case 2: 
                return (
                    '2 bottles of beer on the wall, ' +
                    '2 bottles of beer.\n' +
                    'Take one down and pass it around, ' +
                    '1 bottle of beer on the wall.\n'   
                )
            default: 
                return (
                    `${number} bottles of beer on the wall. ` +
                    `${number} bottles of beer.\n` +
                    'Take one down and pass it around, ' +
                    `${number - 1} bottles of beer on the wall.\n`
                )
        }
    }

    verse(){
        return this.verse(99) + '\n' + this.verse(98)
    }

    // **verse 1 code**
    // verse(number){
    //     switch(number){
    //         case 1: 
    //             return (
    //                 '1 bottle of beer on the wall, ' + 
    //                 '1 bottle of beer.\n' +
    //                 'Take it down and pass it around, ' +
    //                 'no more bottles of beer on the wall.\n'
    //             )
    //         case 2:
    //             return (
    //                 '2 bottles of beer on the wall, ' +
    //                 '2 bottles of beer.\n' +
    //                 'Take one down and pass it around, ' +
    //                 '1 bottle of beer on the wall.\n'
    //             )

    //         default:{
    //             return (
    //                 `${number} bottles of beer on the wall, ` +
    //                 `${number} bottles of beer.\n` +
    //                 'Take one down and pass it around, ' +
    //                 `${number - 1} bottles of beer on the wall.\n`
    //             )
    //         }
    //     }
    // }

    // **interpolated conditional**
    // verse(number){
    //     return (
    //         `${number} bottles of beer on the wall, ` +
    //         `${number} bottles of beer.\n` +
    //         'Take one down and pass it around, ' + 
    //         `${number - 1} bottle${number - 1 === 1 ? '' : 's'} of beer on the wall.\n`
    //     )
    // }

    // **stark conditional**
    // verse(number){
    //     if (number == 2){
    //         return (
    //             '2 bottles of beer on the wall, ' +
    //             '2 bottles of beer.\n' +
    //             'Take one down and pass it around, ' +
    //             '1 bottle of beer on the wall.\n'
    //         )
    //     } else {
    //         return (
    //             `${number} bottles of beer on the wall, ` +
    //             `${number} bottles of beer.\n` +
    //             'Take one down and pass it around, ' +
    //             `${number - 1} bottles of beer on the wall.\n`
    //         )
    //     }
    // }

    // **interpolation**
    // verse(number){
    //     return (
    //         `${number} bottles of beer on the wall, ` +
    //         `${number} bottles of beer.\n` +
    //         'Take one down and pass it around, ' +
    //         `${number - 1} bottles of beer on the wall.\n`
    //     )
    // }

    // **verse 99 code**
    // verse(){
    //     return(
    //         '99 bottles of beer on the wall, ' +
    //         '99 bottles of beer.\n' +
    //         'Take one down and pass it around, ' +
    //         '98 bottles of beer on the wall.\n'
    //     )
    // }

    // **conditional**
    // verse(number){
    //     if (number === 99){
    //         return (
    //             '99 bottles of beer on the wall, ' +
    //             '99 bottles of beer.\n' +
    //             'Take one down and pass it around, ' +
    //             '98 bottles of beer on the wall.\n'
    //         )
    //     } else{
    //         return (
    //             '3 bottles of beer on the wall, ' +
    //             '3 bottles of beer.\n' +
    //             'Take one down and pass it around, ' +
    //             '2 bottles of beer on the wall.\n'
    //         )
    //     }
    // }

    // **sparse conditional**
    // verse(number){
    //     let n

    //     if(number === 99){
    //         n = 99
    //     } else {
    //         n = 3
    //     }

    //     return (
    //         `${n} bottles of beer on the wall, ` +
    //         `${n} bottles of beer.\n` +
    //         'Take one down and pass it around, ' +
    //         `${n - 1} bottles of beer on the wall.\n`
    //     )
    // }
}