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
