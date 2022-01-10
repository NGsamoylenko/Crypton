//������� 3 (���������� "���������" �������)
//������ ����������� �� ����������� � � ������ ���������� ����� � ������
//������ ��� "�������� �������"(��� �����) ����� 1, 2, 3, 5, 7"
//������ ��� "�������� �������" (� �������) ����� 0, 4, 6, 9 � 8 ����� ������� (��� �����)
//���������� ����� � ����� ������������� ��� "���" �������� ����� "18" ��� ��� =2, ����� "550" ��� ��� =1
//����� ������� 18(2)>550(1) ��� 88(4) > 100(2)


// ������� ����������� ���� ����� � ������ �����
function weightNumber (inpNumber: number) {

let digits = inpNumber.toString().split('');
let realDigits = digits.map(Number)
//console.log(realDigits);

let weight = 0;

for (let i = 0; i<realDigits.length; i++){
 if (realDigits[i] == 0 || realDigits[i] == 4 || realDigits[i] == 6 || realDigits[i] == 9)   {
     weight = weight + 1;
     //console.log(realDigits[i]+' (1 �����) ������� ��� = '+weight)
 }
  if (realDigits[i] == 8) {
     weight = weight + 2;
     //console.log(realDigits[i]+' (2 �����) ������� ��� = '+weight)
 }
}
    //console.log('�����:' + inpNumber +' ��� = '+ weight)
    return weight;

}

weightNumber(10)

//������� ��������� ���� ����� � ������ �� ����
function compareNumberHole(inpOne: number, inpTwo: number){
let inpOneWeight = weightNumber(inpOne);
let inpTwoWeight = weightNumber(inpTwo);

if (((inpOne > inpTwo) && ( inpOneWeight>=inpTwoWeight )) || ((inpOne < inpTwo) && ( inpOneWeight > inpTwoWeight ))) {
    return 1;
} else if ((inpOne === inpTwo) && ( inpOneWeight==inpTwoWeight )) {
    return 0;
} else {
    return -1;
}
}


//---------------------------------------------------------------------------------------------------------------------------------
//�������� ������� ���������� ����� � ������ ���������� "�����" � ���
//����� ��� ���������� ������� ������������ ��� "��� �����"
//������ ������� ����������� ��� ������ ������ ������� "sort" ������������ � ���� ������� ��������� ���� ����� 
// � ������ �� ����
function sortHole (mass: number[]){
 return mass.sort(compareNumberHole);
}

// �������� ������� ��� ��������
const testNumbers = [1,2,3,4,5,6,7,8,9,0];

const testNumbers2 = [11,22,33,44,55,66,77,88,99,100, 61, 35, 28, 18 ,550]

console.log(sortHole(testNumbers))
console.log(sortHole(testNumbers2))