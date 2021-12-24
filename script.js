const person = [
    {
        name:'jules anzures',
        img:'https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.6435-9/93520180_10213107502281960_1767105358397964288_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFo7pr_PQFlT7_8SNULoYM2MCbQhW2xW6gwJtCFbbFbqMD3uFCXtkj6IZmVqPXUuBknewzQoYXetqJ7Gs6EnK4_&_nc_ohc=9gtlOlQuhgQAX9vc9DT&_nc_ht=scontent.fdvo1-1.fna&oh=00_AT8CPRpwf_bir3MDskbVL7ly8sFMfgcwceKvSQn4yh7AOQ&oe=61EA4D30',
        link:'https://kier2.github.io/xmas-greetings/#crystal-fairy',
        alias:'Crystal Fairy'
    },
    {
        name:'kier en',
        img:'./assets/img/k.png',
        link:'https://kier2.github.io/xmas-greetings/',
        alias:'Unknown'
    },
    {
        name:'marvie datolio',
        img:'https://scontent.fdvo1-2.fna.fbcdn.net/v/t39.30808-6/261052691_4564335973653677_2294095381957701654_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGz38o4kxAscq_rjSwd8b6Bkmmd9NpUJDWSaZ302lQkNWgTcArNTh60dlDU4MmkD1hjw-d4xg_N8JVDe55e5-QW&_nc_ohc=bUhmlMqECYEAX8njJH8&_nc_ht=scontent.fdvo1-2.fna&oh=00_AT8Eb3ov0KMqeWAxrZTADO5XAbxVGb6cxQQZeRkGQWZJYQ&oe=61CA4CBA',
        link:'http://127.0.0.1:5500/projects/xmas-greeting/index.html#marvie',
        alias:'Ms. Zamboanguita'
    },
    {
        name:'ralph dagoy',
        img:'https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.6435-9/90348701_2637473096579111_5708686404595220480_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEubeil29h5KbUra3WmIj7aloAU9g84B3WWgBT2DzgHdeCWal3mRFwla1V3IJJOot4HLXc-aQIJIFVqNVUHfCvZ&_nc_ohc=SuS5Xa7roFUAX-tfGZ5&_nc_ht=scontent.fdvo1-1.fna&oh=00_AT_vbJLO9PeJ4xwj2BvgW1ZGF7Zrv5He9_Lvh99pBiLA2w&oe=61EBC8A4',
        link:'http://127.0.0.1:5500/projects/xmas-greeting/index.html#dags',
        alias:'Mr. Raffe'
    },
    {
        name:'rene abejero',
        img:'https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/268274408_5146178888735331_6223123851049485787_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH-QdNJcw7o5rYfBcAWyB_dxYxnhuW_80XFjGeG5b_zRRWzr24ikmf0U6zUnaPgYdRIRL6CGRa_MJxhJeojOp3C&_nc_ohc=0ubTtSGN-EwAX8WYFF5&_nc_ht=scontent.fdvo1-1.fna&oh=00_AT_2qCFMpldK2Cqpiznx-puPg3CqHr0530Ygo7i26iPOcA&oe=61CAAF97',
        link:'http://127.0.0.1:5500/projects/xmas-greeting/index.html#rene',
        alias:'Mother of all Creatures'
    },
    {
        name:'charlie abrigo',
        img:'https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.6435-9/196499490_534205254421751_1250244711544472233_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGdDPrQ8tgkrquV0jVPypvFckGN5CfzY-xyQY3kJ_Nj7IIxEyKtiRI5Q3DHAWfvJRJpzzd8RL24Rl6f8XzYgqgE&_nc_ohc=-N4JPuiM9F4AX_ihowa&tn=1GMRFpVZsA-Sa2At&_nc_ht=scontent.fdvo1-2.fna&oh=00_AT8KGQ4xnPyjwyhnU4606v2zHZVa52r3XokNgC6EKjJL8g&oe=61EC598C',
        link:'http://127.0.0.1:5500/projects/xmas-greeting/index.html#ch',
        alias:'The selfish driver'
    },
    {
        name:'christian ada',
        img:'',
        link:'http://127.0.0.1:5500/projects/xmas-greeting/index.html#ca',
        alias:'The builder'
    },
    {
        name:'alway rallos',
        img:'https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.6435-9/69443736_2419713764783551_8828771272289681408_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHhDfvb9huvJJdbDZloO6utRPNSdPb2iItE81J09vaIi2-gFdI29WRkT7XJpb6RascOES0HnWYuESWYHsWRtKCn&_nc_ohc=hB_mNVpz-uYAX_yY9A3&_nc_ht=scontent.fdvo1-1.fna&oh=00_AT-WGTRDiY188ARFlIWbqk4PJ_DFNLB7aWTfvFCbVZ49aw&oe=61EADE26',
        link:'http://127.0.0.1:5500/projects/xmas-greeting/index.html#ar',
        alias:'The Fixer'
    },
]

const personImg = document.querySelector('#person-img')
const personName = document.querySelector('#person-name')
const personAlias = document.querySelector('#alias')

const currentLink = window.location.href
showInfo()
function showInfo(){
    person.forEach(per => {
        if(per.link === currentLink){
            personImg.setAttribute('src', per.img)
            personName.innerText = per.name
            personAlias.innerText = per.alias
        } 
    })
}
