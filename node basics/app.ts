let courseLearning: String = 'Backend Development';
console.log(courseLearning);

let countNumber = (start: number, end: number): void => {
    let temp: String = '';
    if (start < end) {
        for (let i: number = start; i <= end; i++) {
            temp += `${i} `;
        }
        console.log(temp);
    } else {
        console.log('Invalid numbers');
    }

};

countNumber(0,100);