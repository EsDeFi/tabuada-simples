
function tabuada() {
    let num = document.getElementById('numero')
    let numint = Number(num.value)
    let resul = document.getElementById('res')
    let sel = document.getElementById('selecao')
    let i = 0


    resul.innerHTML = `A <span>tabuada de ${numint} </span>é: <br/>`

    for (i = 0; i < selecao.length; i++) {
        console.log(selecao.options[i]);
            if(sel.options[0].selected == true) {
                        while(i <= 10){
                            resul.innerHTML +=  `${numint} + ${i} = <strong>${numint + i}</strong> <br/>`
                            i++   
                        }  
                    } 
                    
            if(sel.options[1].selected == true) {
                        while(i <= 10){
                            resul.innerHTML +=  `${numint} - ${i} = <strong>${numint - i}</strong> <br/>`
                            i++   
                        }
                        } 
                        
            if(sel.options[2].selected == true) {
                            while(i <= 10){
                                resul.innerHTML +=  `${numint} x ${i} = <strong>${numint * i}</strong> <br/>`
                                i++
                        }
                            } 
                            
            if(sel.options[3].selected == true) {
                                while(i <= 10){
                                    resul.innerHTML +=  `${numint} / ${i} = <strong>${(numint / i).toFixed([1])}</strong> <br/>`
                                    i++    
                                }
                            }
            
    }

}
 
 
