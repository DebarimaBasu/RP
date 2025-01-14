customElements (reactElement,mainContainer)
{

    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendchild(domElement)
    
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in props)
    {
        if (prop==children) continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me'
}



const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)