let u_task = []
let j = 1
let x = 0
let counter_of_cookie = 0
let user = []
let user_cookie = []
let ut = []
let uc = []
let cookie_read
let test_cookie 
let cr_split

let co = () => {
    cookie_read = document.cookie
    cr_split = cookie_read.split('{')
    cr_split.shift()
    // console.log(cookie_read)
    // console.log(cr_split)
    for (let i = 0; i < cr_split.length; i++) {
        let crs_choose = cr_split[counter_of_cookie]
        let crsc = "{" + crs_choose
        let find = crsc.charAt(crsc.length-1)
        let last_cookie
        if (find == ",") {
            last_cookie = crsc.slice(0 , -1)
        } else if (find == "]") {
            last_cookie = crsc.slice(0 , -1)
        } else {
            last_cookie = crsc
        }
        console.log(cookie_read)
        console.log(cr_split)
        let lc = JSON.parse(last_cookie)
        user_cookie[counter_of_cookie] = lc
        console.log(lc);
        // console.log(typeof lc);

        let record_cookie = () => {
            let main_div = document.getElementById("sr")
            let div = document.createElement("div")
            div.classList.add('form-sr')
            div.classList.add('no-' + j)
            div.setAttribute('id','no-' + j)
            main_div.appendChild(div)

            let input = document.createElement("input")
            input.classList.add('input-sr')
            input.setAttribute('type','checkbox')
            input.setAttribute('name','sr' + j)
            input.setAttribute('onclick','checkbox(event)')
            input.classList.add('cb-' + j)
            input.classList.add('no-' + j)
            div.appendChild(input)

            let lable = document.createElement("label")
            lable.classList.add('label-sr')
            lable.setAttribute('for','sr' + j)
            lable.classList.add('no-' + j)
            div.appendChild(lable)
            let text = document.createTextNode(user_cookie[counter_of_cookie].task_text)
            lable.appendChild(text)

            let btn = document.createElement("button")
            btn.classList.add('btn-del-sr')
            btn.setAttribute('onclick','Delete(event)')
            btn.classList.add('no-' + j)
            div.appendChild(btn)
            let text_btn = document.createTextNode("Delete Task")
            btn.appendChild(text_btn)
        }
        record_cookie()
        j++
        counter_of_cookie++
    }
    console.log(user_cookie);
}

let submit = () => {
    let task = document.getElementById("ip").value

    if(task == "") {
        alert("please enter your task then click on submit")
    } else {
        user[x] = {
            task_text: task,
            id: "id" + x,
            check: 0,
        }

        const record = () => {
            let main_div = document.getElementById("sr")
            let div = document.createElement("div")
            div.classList.add('form-sr')
            div.classList.add('no-' + j)
            div.setAttribute('id','no-' + j)
            main_div.appendChild(div)

            let input = document.createElement("input")
            input.classList.add('input-sr')
            input.setAttribute('type','checkbox')
            input.setAttribute('name','sr' + j)
            input.setAttribute('onclick','checkbox(event)')
            input.classList.add('cb-' + j)
            input.classList.add('no-' + j)
            div.appendChild(input)

            let lable = document.createElement("label")
            lable.classList.add('label-sr')
            lable.setAttribute('for','sr' + j)
            lable.classList.add('no-' + j)
            div.appendChild(lable)
            let text = document.createTextNode(user[x].task_text)
            lable.appendChild(text)

            let btn = document.createElement("button")
            btn.classList.add('btn-del-sr')
            btn.setAttribute('onclick','Delete(event)')
            btn.classList.add('no-' + j)
            div.appendChild(btn)
            let text_btn = document.createTextNode("Delete Task")
            btn.appendChild(text_btn)
        }

        record()
        document.getElementById("ip").value = ""

        let cp = user[x]
        let os = JSON.stringify(cp)
        ut.push(os)
        document.cookie = ut

        j++
        x++
    }
}

let Delete = event => {
    let cl = event.target.classList
    let cl_text = cl[1]
    let last_cl = cl_text[3]

    for ( let i = 0 ; i < user.length ; i++) {
        if (user[i].id == ("id" + (last_cl - 1))) {
            user.splice([i] , 1)
        }
    }
    for ( let i = 0 ; i < user_cookie.length ; i++) {
        if (user_cookie[i].id == ("id" + (last_cl - 1))) {
            user_cookie.splice([i] , 1)
        }
    }
    let uck = JSON.stringify(user_cookie)
    uc.push(uck)
    document.cookie = uc

    console.log(user_cookie);
    let a = document.getElementById("no-" + last_cl)
    a.remove()
}

let checkbox = event => {
    let cl = event.target.classList
    let cl_text = cl[1]
    let last_cl = cl_text[3]
    for ( let i = 0 ; i < user.length ; i++) {
        if (user[i].id == ("id" + (last_cl - 1))) {
            user.splice([i] , 1)
        }
    }
    let cb = document.getElementById("cb-" + last_cl)
}