import Matrix
import numpy as np
import math
A=Matrix.A2
f=Matrix.f2
x=np.zeros((3,))
def ri(x,A,f):
    return np.dot(A,x)-f;

def X_next(A,f):
    global x
    x0=x.copy()
    r=A.dot(x)-f;
    Ar=np.dot(A,r);
    x=x-(np.dot(r,r)/np.dot(Ar,r))*r
    q=np.fabs(x-x0)
    return q.max()
a=0.2;
iter=0;
while a>=0.1:
    a=X_next(A,f)
    iter=iter+1;
print(x)
print(iter)