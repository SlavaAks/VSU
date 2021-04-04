import math
# 1-ое задание
print("Lacit")
# 2-ое задание
print('Суббота')
print('Апрель')
print('Вячеслав')
#3-ее задание
for i in range(1,26):
    print('0'*i)
#5-ое задание
print('*'+' '*14+'*'+' '*14+'*')
for i in range(6):
    print(' '*(i+1)+'*' +' '*2*(6-i)+"*"+' '*(2*i+1)+'*' +' '*2*(6-i)+"*")
print(' '*7+'*'+' '*14+'*')
#6-ое
print('-------------------------\n|\t4\t|\t9\t|\t2\t|\n-------------------------\n|\t3\t|\t5\t|\t7\t|\n-------------------------\n|\t8\t|\t1\t|\t6\t|\n-------------------------')



#7-ое
def seven(a,b):
    print(1/a+1/b)
seven(float(input("введите первое значение 7 ого задания")),float(input("введите второе значение 7 ого задания")))
def eight(a,b):
    print((a+4*b)*(a-3*b)+a**2)
eight(float(input("введите первое значение 8 ого задания")),float(input("введите второе значение 8 ого за")))
def nine(x):
    print(math.fabs(x)+x**5)
nine(float(input("введите  значение 9 ого задания")))
def ten(x):
    print((x+1)**2+3*(x+1))
ten(float(input("введите  значение 10 ого задания")))
def eleven(x):
    print((math.fabs(x-5)-math.sin(x))/3 +math.sqrt(x**2+2014)*math.cos(2*x)-3)
eleven(float(input("введите  значение 11 ого задания")))
def twelv(x):
    print((math.exp(x-2)+math.fabs(math.sin(x))) - x**4*math.cos(1/x))
twelv(float(input("введите  значение 12 ого задания")))
def thirty(x,a,b):
    print((x**2+b)**(1/5)-(b**2*math.sin(x+a)**3)/x)
thirty(float(input("введите x значение 13 ого задания")),float(input("введите a значение 13 ого задания")),float(input("введите b значение 13 ого задания")))

#Времена года
m = int(input('Введите номер месяца'))
a = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
print(a[m-1])

