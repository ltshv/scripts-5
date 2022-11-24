//5.3.2
x = true;

if ((typeof x !== 'number' && typeof x !== 'boolean') && typeof x == 'string') {
    console.log('х - текст');
    } else if ((typeof x !== 'number' && typeof x !== 'string') && typeof x == 'boolean') {
        console.log('х - логическое выражение');
    } else if ((typeof x !== 'boolean' && typeof x !== 'boolean') && typeof x == 'number') {
        console.log('х - число');
    } else {
        console.log('Тип x не определён');
    }