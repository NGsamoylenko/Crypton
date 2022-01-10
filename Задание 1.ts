// ������ 1: ����������� ������� getStatistics

interface Student {
    name: string; // ��� ��������
    avgMark: number; // ������� ���� ��������
}

interface Statistics {
    avgMark: number; // ������� ������ ���� ���������
    highestMark: string; // �������� � ����� ������� ������� ������
    lowestMark: string; // ��� �������� � ����� ������ ������� ������
}

function getStatistics (marks: Student[]):Statistics {
    //���������� �������
    
    let retStat :Statistics = {
      avgMark: 0,
      highestMark: 'gagH',
      lowestMark: 'gagL'  
    }

    marks.sort(compareMark);
    retStat.highestMark = marks[marks.length-1].name;
    retStat.lowestMark = marks[0].name;
    retStat.avgMark = average(marks);

    return retStat;

}

//������� ��������� ���� ������ ��� ������������� "Sort"
function compareMark(persOne: Student, persTwo: Student){
if (persOne.avgMark > persTwo.avgMark) {
    return 1;
} else if (persOne.avgMark === persTwo.avgMark) {
    return 0;
} else {
    return -1;
}
}

// ������� ���������� ������� ������ ���� ���������
function average(massMarks: Student[]){
let sum: number =0;    
for(let i = 0; i < massMarks.length; i++) {
        sum += massMarks[i].avgMark;
    } 
    return +(sum / massMarks.length).toFixed(2);
}

//������� ��� ��������
let testMarks = [{name: 'Vasya', avgMark: 3.75},
                    {name: 'Lena', avgMark: 4.89}]

let MytestMarks = [{name: 'Vasya', avgMark: 3.75},
                    {name: 'Lena', avgMark: 4.89},
                    {name: 'Test', avgMark: 0}]

console.log('�������� � ���� �������� ��������')
console.log(getStatistics(MytestMarks));//{avgMark:4.32, highestMark: "Lena", LowestMark: "Vasya"}

console.log('�������� � �������� �������� �� �������')
console.log(getStatistics(testMarks));//{avgMark:4.32, highestMark: "Lena", LowestMark: "Vasya"}


