const mainroot = document.getElementById("root")
const reactObject = {
    type: 'a',
    props: {
        target: '_blank',
        href: 'https://www.google.com'
    },
    Html:"Click me"
}

function creator(reactObject,container){
    const createNew=document.createElement(reactObject.type)
    createNew.innerHTML=reactObject.Html
for (const prop in reactObject.props){
    createNew.setAttribute(prop,reactObject.props[prop])
}
    container.appendChild(createNew)
}
creator(reactObject,mainroot)