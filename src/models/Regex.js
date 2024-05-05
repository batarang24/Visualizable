import first_last from "./First_last"
import Node from "./Node"

var alpha=[]
var symbol=[]
var kera=[]
var prev=''
var follow=[]
var dumper='1';
function obj(left,root,right)
{
    if ((left==null) && (right==null)) {
        return (
            {
                name:root,
                
            }
        )
    }
    else if (right==null) {
        return(
            {
                name:root,
                children:[
                   left
                ]
            }
        );
    }
    else if (left==null) {
        return(
            {
                name:root,
                children:[
                   right
                ]
            }
        );
    }
    return(
        {
            name:root,
            children:[
               left,
               right
            ]
        }
    );
}
function regex(reg)
{
    
    for (let index = 0; index < reg.length; index++) {
        if ((reg[index]=='(') || (reg[index]=='|') || (reg[index]=='.')) {
            symbol.unshift(reg[index])
        }
        else if (reg[index]==')') {
            if (symbol[0]=='(') {
                var dum=index+1
                if (reg[dum]=='*') {
                    let node=obj(alpha[0],reg[dum],null)
                    alpha.shift()
                    alpha.unshift(node)
                    var fl=first_last(node,dumper,follow)
                    dumper=fl.dumper
                    follow=fl.follow
                    node.first=fl.first
                    node.last=fl.last
                    node.nullable=fl.nullable
                    kera.push(node)
                    
                    index=dum
                }
                symbol.shift()
                
            }
            else{
                while(symbol[0]!='(')
                {
                    let node=obj(alpha[1],symbol[0],alpha[0])
                    var fl=first_last(node,dumper,follow)
                    dumper=fl.dumper
                    follow=fl.follow
                    node.first=fl.first
                    node.last=fl.last
                    node.nullable=fl.nullable
                    symbol.shift()
                    alpha.shift()
                    alpha.shift()
                    alpha.unshift(node)
                    kera.push(node)
                }
                symbol.shift()
                var dum=index+1
                if (reg[dum]=='*') {
                    let node=obj(alpha[0],reg[dum],null)
                    var fl=first_last(node,dumper,follow)
                    dumper=fl.dumper
                    follow=fl.follow
                    node.first=fl.first
                    node.last=fl.last
                    node.nullable=fl.nullable
                    alpha.shift()
                    alpha.unshift(node)
                    kera.push(node)
                    index=dum
                }
               
                
            }
            while(symbol.length!=0)
            {
                let node=obj(alpha[1],symbol[0],alpha[0])
                var fl=first_last(node,dumper,follow)
                dumper=fl.dumper
                follow=fl.follow
                node.first=fl.first
                node.last=fl.last
                node.nullable=fl.nullable
                alpha.shift()
                alpha.shift()
                alpha.unshift(node)
                kera.push(node)
                symbol.shift()
            }
            
           
        }
        else if (reg[index].match(/^[a-zA-Z]+$/)) {
            if (symbol[0]!='(' && symbol.length>0) {
                var dum=index+1
                if (reg[dum]=='*') {
                   
                    let node2=obj(null,reg[index],null)
                    var fls=first_last(node2,dumper,follow)
                    dumper=fls.dumper
                    follow=fls.follow
                    node2.first=fls.first
                    node2.last=fls.last
                    node2.nullable=fls.nullable
                    kera.push(node2)
                    let node=obj(node2,reg[dum],null)
                    var fl=first_last(node,dumper,follow)
                    dumper=fl.dumper
                    follow=fl.follow
                  
                    node.first=fl.first
                    node.last=fl.last
                    node.nullable=fl.nullable
                    alpha.unshift(node)
                    kera.push(node)
                    index=dum
                    let node1=obj(alpha[1],symbol[0],alpha[0])
                    var fll=first_last(node1,dumper,follow)
                    dumper=fll.dumper
                    follow=fll.follow
                    node1.first=fll.first
                    node1.last=fll.last
                    node1.nullable=fll.nullable
                    alpha.shift()
                    alpha.shift()
                    symbol.shift()
                    alpha.unshift(node1)
                    kera.push(node1)
                }
                else
                {
                    let node=obj(null,reg[index],null)
                    var fl=first_last(node,dumper,follow)
                    dumper=fl.dumper
                    follow=fl.follow
                    node.first=fl.first
                    node.last=fl.last
                    node.nullable=fl.nullable
                    kera.push(node)
                    let node1=obj(alpha[0],symbol[0],node)
                    var fll=first_last(node1,dumper,follow)
                    dumper=fll.dumper
                    follow=fll.follow
                    node1.first=fll.first
                    node1.last=fll.last
                    node1.nullable=fll.nullable
                    alpha.shift()
                    symbol.shift()
                    alpha.unshift(node1)
                    kera.push(node1)
                }
            }
            else
            {
                var dum=index+1
                if (reg[dum]=='*') {
                    
                    let node1=obj(null,reg[index],null)
                    var fll=first_last(node1,dumper,follow)
                    dumper=fll.dumper
                    follow=fll.follow
                    node1.first=fll.first
                    node1.last=fll.last
                    node1.nullable=fll.nullable
                    kera.push(node1)
                    let node=obj(node1,reg[dum],null)
                    var fl=first_last(node,dumper,follow)
                    dumper=fl.dumper
                    follow=fl.follow
                    node.first=fl.first
                    node.last=fl.last
                    node.nullable=fl.nullable
                    alpha.unshift(node)
                    kera.push(node)
                    index=dum
                }
                else
                {
                    let node=obj(null,reg[index],null)
                    var fl=first_last(node,dumper,follow)
                    dumper=fl.dumper
                    follow=fl.follow
                    node.first=fl.first
                    node.last=fl.last
                    node.nullable=fl.nullable
                    alpha.unshift(node)
                    kera.push(node)
                }
            }
        }
       
        
       
        
    }
    return {
        kera:kera,
        follow:follow
    }
}

//console.log(alpha[0])
//console.log(kera)
export default regex
