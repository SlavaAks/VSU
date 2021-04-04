
let n1,n2 ,i, j, k,kol,index,temp,tempb,temps,pop,del,max;
let perexod;

let d, s;

//const in1=document.querySelector('#text1');
//const in2=document.querySelector('#text2');
//n1=in1.value;
//n2=in2.value;
function inpa(a,b,n1,n2){
	let body=document.querySelector('body')
	body.appendChild(document.createElement('br'))
	let div=[]
	let str=[]
	for(let i=1;i<=n1;i++){
		div[i]=document.createElement('div');
		for(let j=1;j<=n2;j++)
		{
			str[i]+=` ${a[i][j]}`
		}
		str[i]+=`=${b[i]}`
		div[i].innerHTML=str[i];
		body.appendChild(div[i]);
	}
} 
	function inpas(a,n1,n2){
		let body=document.querySelector('body')
		body.appendChild(document.createElement('br'))
		let div=[]
		let str=[]
		for(let i=1;i<=n1;i++){
			div[i]=document.createElement('div');
			for(let j=1;j<=n2;j++)
			{
				str[i]+=` ${a[i][j]}`
			}
			div[i].innerHTML=str[i];
			body.appendChild(div[i]);
		}
	
    
}
function razmer(){
    const in1=document.querySelector('#text1');
    const in2=document.querySelector('#text2');
    const res=document.getElementById('res')
    n1=in1.value;
    n2=in2.value;
    let div=[]
    let inp=[]
    let b=[]
    console.log("input")
    console.log(n1)
    console.log(n2)
    for(let  i=1;i<=n1;i++){
        div[i]=document.createElement("div");
        b[i]= document.createElement("input");
        b[i].className='fx'
        for(let i2=1;i2<=n2;i2++){
            inp[i2]=document.createElement("input")
            inp[i2].className='xi'
            div[i].appendChild(inp[i2])
            
        }
        div[i].appendChild(b[i]);
        res.appendChild(div[i]);
    }
    
    let but=document.createElement('input');
    let but2=document.createElement('input');
	let but3=document.createElement('input');
	let but4=document.createElement('input');
	let but5=document.createElement('input');
	let but6=document.createElement('input');
	let but7=document.createElement('input');
	let but8=document.createElement('input');
	let but9=document.createElement('input');
	let but10=document.createElement('input');
	let but11=document.createElement('input');
    but2.type='button'
    but.type='button';
	but3.type='button'
	but4.type='button'
	but5.type='button'
	but6.type='button'
	but7.type='button'
	but8.type='button'
	but9.type='button'
	but10.type='button'
	but11.type='button'
    but2.value='Решение СЛАУ LU';
    but.value='Решение СЛАУ Гауссом';
	but3.value='Решение Жордана-Гаусса';
	but4.value='Решение СЛАУ главн элем';
	but5.value='SQRT';
	but6.value='OPRED';
	but7.value='OPRED_JORD';
	but8.value='LABA12';
	but9.value='LABA13_1';
	but10.value='LABA13_2';
	but11.value='LABA14_1';
    but2.onclick=LU
    but.onclick=Gausse;
	but3.onclick=Gausse_Jord;
	but4.onclick=Gausse_elem;
	but5.onclick=SQRT;
	but6.onclick=Opred;
	but7.onclick=Gausse_Jord_Opred;
	but8.onclick=lab12;
	but9.onclick=lab13;
	but10.onclick=lab13_2;
	but11.onclick=lab14_1;
    res.appendChild(but)
    res.appendChild(but2)
	res.appendChild(but3)
	res.appendChild(but4)
	res.appendChild(but5)
	res.appendChild(but6)
	res.appendChild(but7)
	res.appendChild(but8)
	res.appendChild(but9)
	res.appendChild(but10)
	res.appendChild(but11)
}


function Gausse(){
    const res=document.getElementById('res')
    kol=0;
    let stolb=[]
	let a = [];
	for (i = 0; i <= n1; i++)
		a[i] =[];
	let a1 = [];
	for (i = 0; i <= n1; i++)
		a1[i] = [];
	let b = [];
	let x =[];
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
    for(let i=1;i<=n2;i++){
        stolb[i]=i

    }
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			a[i][j]=in4[k].value;
			a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        b[i]=in5[i-1].value;
	}

	for (k = 1; k <= n1; k++) // прямой ход
	{
		perexod = true;
		pop=0;
			for(let i=1;i<=n2;i++){if(a[k][i]==0)pop++

			}
			console.log('n2'+ n2+ ' b[k]'+b[k]+' k'+ k)
			if(pop==n2 && b[k]!=0){
				div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
				return ;
			}
			if(pop==n2){
		    for (let q = 1; q <= n1; q++) {
				
					temp = a[k][q];
					a[k][q] = a[n1][q];
					a[n1][q] = temp;
				}
				temps=b[k];
				b[k]=b[n1]
				b[n1]=temps
				
		
		

	}
		if (a[k][k] == 0) {

			for (let p = k + 1; p <= n1; p++) {
				//cout << "a[p][k]" << a[p][k];
				if (a[p][k] != 0) {
					for (let l = k; l <= n1; l++) {
						temp = a[k][l];
                        
						a[k][l] = a[p][l];
						a[p][l] = temp;
					}
                    tempb=b[k];
                    b[k]=b[p];
                    b[p]=tempb;
					perexod = false;
					break;
				}

			}
			//cout << "aaaaa" << endl;
			inpa(a,b,n1,n2);
		}
		else perexod = false;
		
		if (perexod && k!=n1) {
			for (let l = k+1; l <= n1; l++) {
				if (a[k][l] != 0) {
					for (let q = 1; q <= n1; q++) {
                        
						temp = a[q][l];
						a[q][l] = a[q][k];
						a[q][k] = temp;
					}
                    temps=stolb[l]
                    stolb[l]=stolb[k];
                    stolb[k]=temps
					perexod= false;
				}
			}
			console
			inpa(a,b,n1,n2);
		}
	if(perexod && b[k]!=0 ){
		div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
				return ;
	}
	if(perexod)continue;
	
		
		for (j = k + 1; j <= n2; j++)
		{
			
			d = a[j][k] / a[k][k]; // формула (1)
			//cout << "d=" << d << " a["<<j<<"]"<<"["<<k<<"]=" << a[j][k] << " a["<<k<<"]"<<k<<"]=" << a[k][k]<<endl;
			for (i = k; i <= n1; i++)
			{
				//cout << "вычитание строк" <<  " a[" << j << "]" << "[" <<i << "]=" << a[j][i] << " a[" << k << "]" << "["<<i << "]=" << a[k][i] << endl;
				a[j][i] = a[j][i] - d * a[k][i]; // формула (2)
			}
			b[j] = b[j] - d * b[k]; // формула (3)
            inpa(a,b,n1,n2);
		}
        
	}
	for (let i = 1; i <= n1; i++) {
				if (a[n1][i] == 0)kol++;
			}
            console.log(b[n1])
            console.log(kol)
	//cout << "kol=" << kol << "b[n1]" << b[n1];
	if ((kol == n1) && (b[n1]!=0) ) {
				//cout << "Нет решений";
                div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
	}
	else if (kol == n1 && b[n1] == 0) {
		let ink=[]
		index = i;
		for(let l=n1;l>1;l--){
		
			if (a[l][l] == 0) {

				index=l;
			}
		
	}
		for (k = n1; k >= 1; k--) {
			//cout << "basis";

			d = '';
			for (j = k + 1; j <= n2; j++)
			{
				s =`${a[k][j]} * ${x[j]} `; // формула (4)
				d = d + `+${s}`; // формула (4)
			}
			console.log(index+' k='+k)
            if(k>=index){
                x[k]=`x${stolb[k]}`;
            }else
			x[k] =` ((${b[k]} - (${d}) / ${a[k][k]}))`; // формула (4)
		}
        let div=[];
	for (i = 1; i <= n1; i++){
        div[i]=document.createElement("div");
        div[i].innerHTML=`x[${stolb[i]}]=${x[i]}`
        res.appendChild(div[i]);
    }
	}
	else {
    console.log(a)
    console.log(b)
	for (k = n1; k >= 1; k--) // обратный ход
	{	
		
			d = 0;
			for (j = k + 1; j <= n2; j++)
			{   console.log(x[j])
				s = a[k][j] * x[j]; // формула (4)
				d = d + s; // формула (4)
			}
			x[k] = (b[k] - d) / a[k][k]; // формула (4)
		}
	console.log(x)
	let div=[];
    let text=document.createTextNode('Метод Гаусса');
        res.appendChild(text);
	for (i = 1; i <= n1; i++){
        div[i]=document.createElement("div");
        div[i].innerHTML=`x[${i}]=${x[i]}`
        res.appendChild(div[i]);
    }
	}
}
function LU(){
    let g=[]
	let a = [];
	for (i = 0; i <= n1; i++)
		a[i] =[];
	let a1 = [];
	for (i = 0; i <= n1; i++)
		a1[i] = [];
	let b = [];
	let x =[];
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
    
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			a[i][j]=in4[k].value;
			a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        b[i]=in5[i-1].value;
	}
    L=[];
    U=[];
    for (let i = 0; i <= n2; i++)
		L[i] =[];
	
	for (let i = 0; i <= n2; i++)
		U[i] = [];
    for(let i=1;i<=n1;i++){
        for(let i1=i+1;i1<=n2;i1++){
            L[i][i1]=0
        }
    }    
    for(let i=1;i<=n1;i++){
        U[i][i]=1
        for(let i1=i-1;i1>=1;i1--){
            
            U[i][i1]=0
        }
    }    

    for(let i2=1;i2<=n2;i2++){
        for(let i1=1;i1<i2;i1++){
            console.log('U'+i1+i2+'/n')
            U[i1][i2]=a[i1][i2];
            for(let i3=1;i3<=i1-1;i3++){
            U[i1][i2]-=L[i1][i3]*U[i3][i2]
        }
        U[i1][i2]=U[i1][i2]/L[i1][i1]
        }
        for(let i1=i2;i1<=n1;i1++){
            console.log('L'+i1+i2+'/n')
            L[i1][i2]=a[i1][i2];
            
            for(let i3=1;i3<=i2-1;i3++){
            L[i1][i2]-=L[i1][i3]*U[i3][i2];
            }
        }
		inpas(U,n1,n2)
		inpas(L,n1,n2)

    }

    for (k = 1; k <= n2; k++) // обратный ход
	{	
		
			d = 0;
			for (j = 1; j <k; j++)
			{   
				s = L[k][j] * g[j]; // формула (4)
				d = d + s; // формула (4)
			}
            
			g[k] = (b[k] - d) / L[k][k]; // формула (4)
            console.log(g[k]);
            console.log(b[k]+' - '+d+ '/'+L[k][k]);
		}
console.log(g)
        for (k = n1; k >= 1; k--) // обратный ход
	{	
		
			d = 0;
			for (j = k + 1; j <= n2; j++)
			{  
				s = U[k][j] * x[j]; // формула (4)
				d = d + s; // формула (4)
			}
			x[k] = (g[k] - d) / U[k][k]; // формула (4)
		}
        let div=[];
        let text=document.createTextNode('Метод LU');
        res.appendChild(text);
        for (i = 1; i <= n1; i++){
            div[i]=document.createElement("div");
            div[i].innerHTML=`x[${i}]=${x[i]}`
            res.appendChild(div[i]);
        }

    console.log(U);
    console.log(L);


}



function Gausse_Jord(){
    const res=document.getElementById('res')
    kol=0;
    let stolb=[]
	let a = [];
	for (i = 0; i <= n1; i++)
		a[i] =[];
	let a1 = [];
	for (i = 0; i <= n1; i++)
		a1[i] = [];
	let b = [];
	let x =[];
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
    for(let i=1;i<=n2;i++){
        stolb[i]=i

    }
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			a[i][j]=in4[k].value;
			a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        b[i]=in5[i-1].value;
	}

	for (k = 1; k <= n1; k++) // прямой ход
	{
		perexod = true;
		pop=0;
			for(let i=1;i<=n2;i++){
				if(a[k][i]==0)pop++

			}
			console.log('n2'+ n2+ ' b[k]'+b[k]+' k'+ k)
			if(pop==n2 && b[k]!=0){
				div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
				return ;
			}
			if(pop==n2){
		    for (let q = 1; q <= n1; q++) {
				
					temp = a[k][q];
					a[k][q] = a[n1][q];
					a[n1][q] = temp;
				}
				temps=b[k];
				b[k]=b[n1]
				b[n1]=temps
				
		
		

	}
		if (a[k][k] == 0) {

			for (let p = k + 1; p <= n1; p++) {
				//cout << "a[p][k]" << a[p][k];
				if (a[p][k] != 0) {
					for (let l = k; l <= n1; l++) {
						temp = a[k][l];
                        
						a[k][l] = a[p][l];
						a[p][l] = temp;
					}
                    tempb=b[k];
                    b[k]=b[p];
                    b[p]=tempb;
					perexod = false;
					break;
				}

			}
			//cout << "aaaaa" << endl;
			inpa(a,b,n1,n2);
		}
		else {perexod = false;
			del=a[k][k]
			b[k]=b[k]/del
			for(let i=1;i<=n2;i++){
				console.log("строка на k[i]" + a[k][i]+ ' i'+i);
				a[k][i]=a[k][i]/del
		}
	}
		
		if (perexod && k!=n1) {
			for (let l = k+1; l <= n1; l++) {
				if (a[k][l] != 0) {
					for (let q = 1; q <= n1; q++) {
                        
						temp = a[q][l];
						a[q][l] = a[q][k];
						a[q][k] = temp;
					}
                    temps=stolb[l]
                    stolb[l]=stolb[k];
                    stolb[k]=temps
					perexod= false;
				}
			}
			console
			inpa(a,b,n1,n2);
		}
	if(perexod && b[k]!=0 ){
		div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
				return ;
	}
	if(perexod)continue;
	
		
		for (j = 1; j <= n2; j++)
		{
			if(j==k){continue;}
			d = a[j][k] ; // формула (1)
			//cout << "d=" << d << " a["<<j<<"]"<<"["<<k<<"]=" << a[j][k] << " a["<<k<<"]"<<k<<"]=" << a[k][k]<<endl;
			for (i = k; i <= n1; i++)
			{
				//cout << "вычитание строк" <<  " a[" << j << "]" << "[" <<i << "]=" << a[j][i] << " a[" << k << "]" << "["<<i << "]=" << a[k][i] << endl;
				a[j][i] = a[j][i] - d * a[k][i]; // формула (2)
			}
			b[j] = b[j] - d * b[k]; // формула (3)
            inpa(a,b,n1,n2);
		}
        
	}
	for (let i = 1; i <= n1; i++) {
				if (a[n1][i] == 0)kol++;
			}
            console.log(b[n1])
            console.log(kol)
	//cout << "kol=" << kol << "b[n1]" << b[n1];
	if ((kol == n1) && (b[n1]!=0) ) {
				//cout << "Нет решений";
                div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
	}
	else if (kol == n1 && b[n1] == 0) {
		let ink=[]
		index = i;
		for(let l=n1;l>1;l--){
		
			if (a[l][l] == 0) {

				index=l;
			}
		
	}
		for (k = n1; k >= 1; k--) {
			//cout << "basis";

			d = '';
			for (j = k + 1; j <= n2; j++)
			{
				s =`${a[k][j]} * ${x[j]} `; // формула (4)
				d = d + `+${s}`; // формула (4)
			}
			console.log(index+' k='+k)
            if(k>=index){
                x[k]=`x${stolb[k]}`;
            }else
			x[k] =` ((${b[k]} - (${d}) / ${a[k][k]}))`; // формула (4)
		}
        let div=[];
	for (i = 1; i <= n1; i++){
        div[i]=document.createElement("div");
        div[i].innerHTML=`x[${stolb[i]}]=${x[i]}`
        res.appendChild(div[i]);
    }
	}
	else {
    console.log(a)
    console.log(b)
	
	let div=[];
    let text=document.createTextNode('Метод Жордана-Гаусса');
        res.appendChild(text);
	for (i = 1; i <= n1; i++){
        div[i]=document.createElement("div");
        div[i].innerHTML=`x[${i}]=${b[i]}`
        res.appendChild(div[i]);
    }
	}
}

function Gausse_elem(){
    const res=document.getElementById('res')
    kol=0;
    let stolb=[]
	let a = [];
	for (i = 0; i <= n1; i++)
		a[i] =[];
	let a1 = [];
	for (i = 0; i <= n1; i++)
		a1[i] = [];
	let b = [];
	let x =[];
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
    for(let i=1;i<=n2;i++){
        stolb[i]=i

    }
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			a[i][j]=in4[k].value;
			a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        b[i]=in5[i-1].value;
	}

	for (k = 1; k <= n1; k++) // прямой ход
	{	
		max=k;
		for(let i=k+1;i<= n2; i++){console.log('iiiiiii '+i)
			if(Math.abs(a[i][k])>Math.abs(a[max][k])){console.log('djskkd '+i)
				max=i}
		}
		for(let i=k;i<=n2;i++){
			temp=a[k][i];
			a[k][i]=a[max][i];
			a[max][i]=temp;
		}
		temp=b[k]
		b[k]=b[max]
		b[max]=temp
		perexod = true;
		pop=0;
			for(let i=1;i<=n2;i++){
				
				if(a[k][i]==0)pop++

			}
			console.log('n2'+ n2+ ' b[k]'+b[k]+' k'+ k)
			if(pop==n2 && b[k]!=0){
				div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
				return ;
			}
			if(pop==n2){
		    for (let q = 1; q <= n1; q++) {
				
					temp = a[k][q];
					a[k][q] = a[n1][q];
					a[n1][q] = temp;
				}
				temps=b[k];
				b[k]=b[n1]
				b[n1]=temps
				
		
		

	}
		if (a[k][k] == 0) {

			for (let p = k + 1; p <= n1; p++) {
				//cout << "a[p][k]" << a[p][k];
				if (a[p][k] != 0) {
					for (let l = k; l <= n1; l++) {
						temp = a[k][l];
                        
						a[k][l] = a[p][l];
						a[p][l] = temp;
					}
                    tempb=b[k];
                    b[k]=b[p];
                    b[p]=tempb;
					perexod = false;
					break;
				}

			}
			//cout << "aaaaa" << endl;
			inpa(a,b,n1,n2);
		}
		else perexod = false;
		
		if (perexod && k!=n1) {
			for (let l = k+1; l <= n1; l++) {
				if (a[k][l] != 0) {
					for (let q = 1; q <= n1; q++) {
                        
						temp = a[q][l];
						a[q][l] = a[q][k];
						a[q][k] = temp;
					}
                    temps=stolb[l]
                    stolb[l]=stolb[k];
                    stolb[k]=temps
					perexod= false;
				}
			}
			console
			inpa(a,b,n1,n2);
		}
	if(perexod && b[k]!=0 ){
		div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
				return ;
	}
	if(perexod)continue;
	
		
		for (j = k + 1; j <= n2; j++)
		{
			
			d = a[j][k] / a[k][k]; // формула (1)
			//cout << "d=" << d << " a["<<j<<"]"<<"["<<k<<"]=" << a[j][k] << " a["<<k<<"]"<<k<<"]=" << a[k][k]<<endl;
			for (i = k; i <= n1; i++)
			{
				//cout << "вычитание строк" <<  " a[" << j << "]" << "[" <<i << "]=" << a[j][i] << " a[" << k << "]" << "["<<i << "]=" << a[k][i] << endl;
				a[j][i] = a[j][i] - d * a[k][i]; // формула (2)
			}
			b[j] = b[j] - d * b[k]; // формула (3)
            inpa(a,b,n1,n2);
		}
        
	}
	for (let i = 1; i <= n1; i++) {
				if (a[n1][i] == 0)kol++;
			}
            console.log(b[n1])
            console.log(kol)
	//cout << "kol=" << kol << "b[n1]" << b[n1];
	if ((kol == n1) && (b[n1]!=0) ) {
				//cout << "Нет решений";
                div_no_div=document.createElement("div");
                div_no_div.innerHTML="Нет решений";
                res.appendChild(div_no_div);
	}
	else if (kol == n1 && b[n1] == 0) {
		let ink=[]
		index = i;
		for(let l=n1;l>1;l--){
		
			if (a[l][l] == 0) {

				index=l;
			}
		
	}
		for (k = n1; k >= 1; k--) {
			//cout << "basis";

			d = '';
			for (j = k + 1; j <= n2; j++)
			{
				s =`${a[k][j]} * ${x[j]} `; // формула (4)
				d = d + `+${s}`; // формула (4)
			}
			console.log(index+' k='+k)
            if(k>=index){
                x[k]=`x${stolb[k]}`;
            }else
			x[k] =` ((${b[k]} - (${d}) / ${a[k][k]}))`; // формула (4)
		}
        let div=[];
	for (i = 1; i <= n1; i++){
        div[i]=document.createElement("div");
        div[i].innerHTML=`x[${stolb[i]}]=${x[i]}`
        res.appendChild(div[i]);
    }
	}
	else {
    console.log(a)
    console.log(b)
	for (k = n1; k >= 1; k--) // обратный ход
	{	
		
			d = 0;
			for (j = k + 1; j <= n2; j++)
			{   console.log(x[j])
				s = a[k][j] * x[j]; // формула (4)
				d = d + s; // формула (4)
			}
			x[k] = (b[k] - d) / a[k][k]; // формула (4)
		}
	console.log(x)
	let div=[];
    let text=document.createTextNode('Метод Гаусса');
        res.appendChild(text);
	for (i = 1; i <= n1; i++){
        div[i]=document.createElement("div");
        div[i].innerHTML=`x[${i}]=${x[i]}`
        res.appendChild(div[i]);
    }
	}
}

function SQRT(){
    const res=document.getElementById('res')
    kol=0;
    
	let a = [];
	for (i = 0; i <= n1; i++)
		a[i] =[];
	let a1 = [];
	for (i = 0; i <= n1; i++)
		a1[i] = [];
	let b = [];
	let x =[];
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			a[i][j]=in4[k].value;
			a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        b[i]=in5[i-1].value;
	}
	let S=[]
	for(let i=0; i <= n2; i++){
		S[i]=[]
	}
	
	for(let k=1;k<=n1;k++){
		S[k][k]=a[k][k]
		for(let i=1;i<=k-1;i++){
			S[k][k]-=S[i][k]**2
		}
		S[k][k]=Math.sqrt(S[k][k])
		inpas(S,n1,n2)
		for(let i1=k+1;i1<=n2;i1++)
		{S[k][i1]=a[k][i1];
			for(let i2=1;i2<=k-1;i2++){
				S[k][i1]-=S[i2][k]*S[i2][i1]
			}
			S[k][i1]=S[k][i1]/S[k][k]
		}
		inpas(S,n1,n2)

	}
	let S_T=[]
	for(let i=0; i <= n2; i++){
		S_T[i]=[]
	}
	for(let i=1;i<=n1;i++){
		for(let i1=1;i1<=n2;i1++){
			S_T[i][i1]=S[i1][i];
		}

	}
	console.log(S_T)
    
	let Y=[];

	for (k = 1; k <= n1; k++) // обратный ход
	{	
		
			d = 0;
			for (j = 1; j <= k-1; j++)
			{   console.log(Y[j])
				s = S_T[k][j] * Y[j]; // формула (4)
				d = d + s; // формула (4)
			}
			Y[k] = (b[k] - d) / S_T[k][k]; // формула (4)
		}
		console.log(Y)

		for (k = n1; k >= 1; k--) // обратный ход
	{	
		
			d = 0;
			for (j = k + 1; j <= n2; j++)
			{   console.log(x[j])
				s = S[k][j] * x[j]; // формула (4)
				d = d + s; // формула (4)
			}
			x[k] = (Y[k] - d) / S[k][k]; // формула (4)
		}

		let div=[];
    let text=document.createTextNode('Квадратов');
        res.appendChild(text);
	for (i = 1; i <= n1; i++){
        div[i]=document.createElement("div");
        div[i].innerHTML=`x[${i}]=${x[i]}`
        res.appendChild(div[i]);
    }

}

function Opred(){
    let g=[]
	for(let k=1;k<=n1;k++){
		g[k]=[]
	}
	let a = [];
	for (i = 0; i <= n1; i++)
		a[i] =[];
	let a1 = [];
	for (i = 0; i <= n1; i++)
		a1[i] = [];
	let x =[];
	for(let k=1;k<=n1;k++){
		x[k]=[]
	}
	let x_t =[];
	for(let k=1;k<=n1;k++){
		x_t[k]=[]
	}
	let y=[]
	for(let k=1;k<=n1;k++){
		y[k]=[]
	}
	for(let k=1;k<=n1;k++){
		for(let k1=1;k1<=n2;k1++){
			if(k1==k){
				y[k][k]=1
			}
			else{
			y[k][k1]=0
			}
		}
	}

	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			a[i][j]=in4[k].value;
			a1[i][j] = a[i][j];
            k++;
		}
	}
    L=[];
    U=[];
    for (let i = 0; i <= n2; i++)
		L[i] =[];
	
	for (let i = 0; i <= n2; i++)
		U[i] = [];
    for(let i=1;i<=n1;i++){
        for(let i1=i+1;i1<=n2;i1++){
            L[i][i1]=0
        }
    }    
    for(let i=1;i<=n1;i++){
        U[i][i]=1
        for(let i1=i-1;i1>=1;i1--){
            
            U[i][i1]=0
        }
    }    

    for(let i2=1;i2<=n2;i2++){
        for(let i1=1;i1<i2;i1++){
            console.log('U'+i1+i2+'/n')
            U[i1][i2]=a[i1][i2];
            for(let i3=1;i3<=i1-1;i3++){
            U[i1][i2]-=L[i1][i3]*U[i3][i2]
        }
        U[i1][i2]=U[i1][i2]/L[i1][i1]
        }
        for(let i1=i2;i1<=n1;i1++){
            console.log('L'+i1+i2+'/n')
            L[i1][i2]=a[i1][i2];
            
            for(let i3=1;i3<=i2-1;i3++){
            L[i1][i2]-=L[i1][i3]*U[i3][i2];
            }
        }
		inpas(U,n1,n2)
		inpas(L,n1,n2)

    }



	let opr=1;
	for(let i=1;i<=n1;i++){
			opr*=L[i][i];	

	}



	
	for(let i=1;i<=n1;i++){

	
    for (k = 1; k <= n2; k++) // обратный ход
	{	
		
			d = 0;
			for (j = 1; j <k; j++)
			{   
				s = L[k][j] * g[i][j]; // формула (4)
				d = d + s; // формула (4)
			}
            
			g[i][k] = (y[i][k] - d) / L[k][k]; // формула (4)
            console.log(g[k]);
            console.log(y[i][k]+' - '+d+ '/'+L[k][k]);
		}
	}
console.log(g)
for(let i=1;i<=n2; i++){
        for (k = n1; k >= 1; k--) // обратный ход
	{	
		
			d = 0;
			for (j = k + 1; j <= n2; j++)
			{  
				s = U[k][j] * x[i][j]; // формула (4)
				d = d + s; // формула (4)
			}
			x[i][k] = (g[i][k] - d) / U[k][k]; // формула (4)
		}
	}
        let div=[];
        let text=document.createTextNode('A');
        res.appendChild(text);
		let qr=document.createElement('div');
		qr.innerHTML=`Определитель= ${opr}`

		for(let i=1;i<=n1;i++){
			for(let i1=1;i1<=n2;i1++){
				x_t[i][i1]=x[i1][i]
			}
		}
		inpas(x_t,n1,n2)
		res.appendChild(qr);
    console.log(U);
    console.log(L);

}



function Gausse_Jord_Opred(){
    const res=document.getElementById('res')
    kol=0;
    let stolb=[]
	let a = [];
	for (i = 0; i <= n1; i++)
		a[i] =[];
	let a1 = [];
	for (i = 0; i <= n1; i++)
		a1[i] = [];

	let x =[];
	let y=[]
	for(let k=1;k<=n1;k++){
		y[k]=[]
	}
	for(let k=1;k<=n1;k++){
		for(let k1=1;k1<=n2;k1++){
			if(k1==k){
				y[k][k]=1
			}
			else{
			y[k][k1]=0
			}
		}
	}
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    for(let i=1;i<=n2;i++){
        stolb[i]=i

    }
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			a[i][j]=in4[k].value;
			a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
	}

	for (k = 1; k <= n1; k++) // прямой ход
	{
		perexod = true;
		pop=0;
			for(let i=1;i<=n2;i++){
				if(a[k][i]==0)pop++

			}

			if(pop==n2){
		    for (let q = 1; q <= n1; q++) {
					temps=	y[k][q]
					temp = a[k][q];
					y[k][q] = y[n1][q];
					y[n1][q] = temps;
					a[k][q] = a[n1][q];
					a[n1][q] = temp;
				}

				
		
		

	}
		if (a[k][k] == 0) {

			for (let p = k + 1; p <= n1; p++) {
				//cout << "a[p][k]" << a[p][k];
				if (a[p][k] != 0) {
					for (let l = k; l <= n1; l++) {
						temp = a[k][l];
                        
						a[k][l] = a[p][l];
						a[p][l] = temp;
						temps = y[k][l];
                        
						y[k][l] =y[p][l];
						y[p][l] = temps;
					}

					perexod = false;
					break;
				}

			}
			//cout << "aaaaa" << endl;
			inpa(a,b,n1,n2);
		}
		else {perexod = false;
			del=a[k][k]
			for(let i=1;i<=n2;i++){
				console.log("строка на k[i]" + a[k][i]+ ' i'+i);
				a[k][i]=a[k][i]/del
				y[k][i]=y[k][i]/del
		}
	}
		
		if (perexod && k!=n1) {
			for (let l = k+1; l <= n1; l++) {
				if (a[k][l] != 0) {
					for (let q = 1; q <= n1; q++) {
                        tempb=y[q][l]
						temp = a[q][l];
						y[q][l]=y[q][k]
						a[q][l] = a[q][k];
						y[q][k]=tempb
						a[q][k] = temp;
					}
                    temps=stolb[l]
                    stolb[l]=stolb[k];
                    stolb[k]=temps
					perexod= false;
				}
			}
			console
			inpas(a,n1,n2);
			inpas(y,n1,n2)
		}

	
		
		for (j = 1; j <= n2; j++)
		{
			if(j==k){continue;}
			d = a[j][k] ; // формула (1)
			//cout << "d=" << d << " a["<<j<<"]"<<"["<<k<<"]=" << a[j][k] << " a["<<k<<"]"<<k<<"]=" << a[k][k]<<endl;
			for (i = 1; i <= n1; i++)
			{
				//cout << "вычитание строк" <<  " a[" << j << "]" << "[" <<i << "]=" << a[j][i] << " a[" << k << "]" << "["<<i << "]=" << a[k][i] << endl;
				a[j][i] = a[j][i] - d * a[k][i]; // формула (2)
				y[j][i]=y[j][i]-d * y[k][i]
			}
			
            inpas(a,n1,n2);
			inpas(y,n1,n2);
		}
        
	}
	
}

function lab12(){
	const res=document.getElementById('res')
    kol=0;
    let stolb=[]
	let M = [];
	for (i = 0; i <= n1; i++)
		M[i] =[];
	//let a1 = [];
	//for (i = 0; i <= n1; i++)
	//	a1[i] = [];
	let f = [];
	let x =[];
	let a=[];
	let b=[];
	let c=[];
	
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
    for(let i=1;i<=n2;i++){
        stolb[i]=i

    }
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			M[i][j]=in4[k].value;
			//a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        f[i]=in5[i-1].value;
	}
	b.push(M[1][1]);
	c.push(M[1][2]);

	for(let i1=2;i1<=n1;i1++){
		
			a.push(M[i1][i1-1])
			b.push(M[i1][i1])
			c.push(M[i1][i1+1])
		
	}
	console.log('jksdkjdskjds'+a)
	let Ai=[- c[0] / b[0]]
	let Bi=[f[1] / b[0]];
	let denominator=0;
    for(let i=1;i< n2-1; i++){
        denominator = (a[i-1] * Ai[i - 1]) + (+(b[i]))
        console.log(a[i-1])
        console.log(Ai[i - 1])
        console.log(b[i])

        console.log('denominator '+ denominator)
        Ai.push((-(+c[i]) )/ denominator)
        Bi.push((f[i+1] - a[i - 1] * Bi[i - 1]) / denominator)
	}
	console.log(Ai)
	console.log(Bi)
	console.log(f[n1])
	console.log((+a[n1-1]))
	console.log((+a[n1-1]))
	console.log(Bi[n1-2])
	console.log(+b[n1-1])
	console.log(Ai[n1-2])
    
	x = [(+f[n1] - (+a[n1-2]) * Bi[n1-2])/ (+b[n1-1] + (+a[n1-2]) * Ai[n1-2])]
	console.log("x[0]" + x)
	for( let i=n1-1;i>0;i--){
		  x.push( Ai[i-1] * x[x.length-1] + Bi[i-1])
		}
		div=[]
		for (i = 0; i < n1; i++){
			div[i]=document.createElement("div");
			div[i].innerHTML=`x[${n1-i}]=${x[i]}`
			res.appendChild(div[i]);
		}

}



function lab13(){
	const res=document.getElementById('res')
    kol=0;
    let stolb=[]
	let M = [];
	for (i = 0; i <= n1; i++)
		M[i] =[];
	let B = [];
	for (i = 0; i <= n1; i++)
			B[i] =[];
	//let a1 = [];
	//for (i = 0; i <= n1; i++)
	//	a1[i] = [];
	let f = [];
	let x1=[];
	let x =[];
	let g=[];
	
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
    for(let i=1;i<=n2;i++){
        stolb[i]=i

    }
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			M[i][j]=in4[k].value;
			//a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        f[i]=in5[i-1].value;
	}

for(let i=1;i<=n1;i++){
	for(let j=1;j <= n2; j++){
		B[i][j]=-(M[i][j]/M[i][i])
	}
	B[i][i]=0
}
for(let i=1;i<= n1; i++){
	g[i]=f[i]/M[i][i]
}

for(let i=1 ;i<=n2;i++){
	x1[i]=g[i]
}
a=[]
let max=3
let iter=0
while(max>0.001){iter++
	max=0
	for(let i=1 ;i<=n2;i++){
		x[i]=x1[i]
	}
	console.log("xxxxx"+x)

for(let i=1;i<= n1; i++){x1[i]=0
	for(let j=1;j<= n2; j++){
		x1[i]=(+x1[i])+(+B[i][j])*(+x[j])
	}
	x1[i]=x1[i]+g[i]
	
}
console.log(x1)
for(let i=1;i<= n2;i++){
if(Math.abs(x[i]-x1[i])>max)max=Math.abs(x[i]-x1[i]);
}
}
let text=document.createTextNode(`Количество итераций ${iter}`);
res.appendChild(text);
		div=[]
		for (i = 1; i <= n1; i++){
			div[i]=document.createElement("div");
			div[i].innerHTML=`x[${i}]=${x[i]}`
			res.appendChild(div[i]);
		}

}

function lab13_2(){
	const res=document.getElementById('res')
    kol=0;
    let stolb=[]
	let M = [];
	for (i = 0; i <= n1; i++)
		M[i] =[];
	let B = [];
	for (i = 0; i <= n1; i++)
			B[i] =[];
	//let a1 = [];
	//for (i = 0; i <= n1; i++)
	//	a1[i] = [];
	let f = [];
	let x1=[];
	let x =[];
	let g=[];
	
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
    for(let i=1;i<=n2;i++){
        stolb[i]=i

    }
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			M[i][j]=in4[k].value;
			//a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        f[i]=in5[i-1].value;
	}

for(let i=1;i<=n1;i++){
	for(let j=1;j <= n2; j++){
		B[i][j]=-(M[i][j]/M[i][i])
	}
	B[i][i]=0
}
for(let i=1;i<= n1; i++){
	g[i]=f[i]/M[i][i]
}

for(let i=1 ;i<=n2;i++){
	x1[i]=g[i]
}
a=[]
let max=3;
let iter=0
while(max>0.001){iter++;
	max=0
	for(let i=1 ;i<=n2;i++){
		x[i]=x1[i]
	}
	console.log("xxxxx"+x)

for(let i=1;i<= n1; i++){x1[i]=0
	for(let j=1;j<= n2; j++){
		if(j<i){
		x1[i]=(+x1[i])+(+B[i][j])*(+x1[j])
		}
		else{
			x1[i]=(+x1[i])+(+B[i][j])*(+x[j])
		}
	}
	x1[i]=x1[i]+g[i]
	
}
console.log(x1)
for(let i=1;i<= n2;i++){
if(Math.abs(x[i]-x1[i])>max)max=Math.abs(x[i]-x1[i]);
}
}
let text=document.createTextNode(`Количество итераций ${iter}`);
res.appendChild(text);
		div=[]
		for (i = 1; i <= n1; i++){
			div[i]=document.createElement("div");
			div[i].innerHTML=`x[${i}]=${x[i]}`
			res.appendChild(div[i]);
		}

}


function lab14_1(){
	const res=document.getElementById('res')
	let w=1
    kol=0;
    let stolb=[]
	let M = [];
	for (i = 0; i <= n1; i++)
		M[i] =[];
	let B = [];
	for (i = 0; i <= n1; i++)
			B[i] =[];
	//let a1 = [];
	//for (i = 0; i <= n1; i++)
	//	a1[i] = [];
	let f = [];
	let x1=[];
	let x =[];
	let g=[];
	
	//cout << "Vvedite koefficienty i svobodnye chleny " << endl;
    let k=0;
    let in4=document.querySelectorAll('input.xi')
    let in5=document.querySelectorAll('input.fx')
    for(let i=1;i<=n2;i++){
        stolb[i]=i

    }
	for (i = 1; i <= n1; i++)
	{
		for (j = 1; j <= n2; j++)
		{
			M[i][j]=in4[k].value;
			//a1[i][j] = a[i][j];
            k++;
		}
		//cout << "b,[ " << i << "]= ";
		//cin >> b[i];
        f[i]=in5[i-1].value;
	}

for(let i=1;i<=n1;i++){
	for(let j=1;j <= n2; j++){
		B[i][j]=-(M[i][j]/M[i][i])
	}
	B[i][i]=0
}
for(let i=1;i<= n1; i++){
	g[i]=f[i]/M[i][i]
}

for(let i=1 ;i<=n2;i++){
	x1[i]=g[i]
}
a=[]
let max=3;
let iter=0
while(max>0.001){iter++;
	max=0
	for(let i=1 ;i<=n2;i++){
		x[i]=x1[i]
	}
	console.log("xxxxx"+x)

for(let i=1;i<= n1; i++){x1[i]=0
	for(let j=1;j<= n2; j++){
		if(j<i){
		x1[i]=(1-w)*x[j]+(+x1[i])+(+B[i][j])*(+x1[j])*w
		}
		else{
			x1[i]=(1-w)*x[j]+(+x1[i])+(+B[i][j])*(+x[j])*w
		}
	}
	x1[i]=x1[i]+g[i]
	
}
console.log(x1)
for(let i=1;i<= n2;i++){
if(Math.abs(x[i]-x1[i])>max)max=Math.abs(x[i]-x1[i]);
}
}
let text=document.createTextNode(`Количество итераций ${iter}`);
res.appendChild(text);
		div=[]
		for (i = 1; i <= n1; i++){
			div[i]=document.createElement("div");
			div[i].innerHTML=`x[${i}]=${x[i]}`
			res.appendChild(div[i]);
		}

}