function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
const { createApp } = Vue

createApp({
    data(){
        return {
            User : 'Đặng Văn Phúc',
            Age : 18
        }
    }
}).mount('#interpolation')

createApp({
    data(){
        return {
            image : 'https://www.bleepstatic.com/content/hl-images/2020/01/03/Kali_Linux_4.jpg',
            red : 'text-danger',
            linkInfo : 'https://www.kali.org/',
            btnInfo : 'btn btn-primary mt-3 d-block',
        }
    }
}).mount('#bind-attribute')


createApp({
    methods: {
        createNut : function(){
            const random3Nut = [getRandomInt(1,6),getRandomInt(1,6),getRandomInt(1,6)];
            return random3Nut.reduce( (total, each) => total+= each,0)
        }, 
        renderTaiXiu(){
            const Number = this.createNut(); ;
            if(Number > 11){
                return 'Tài'
            }else{
                return 'Xĩu'
            }
        }
    }
}).mount('#methods')


createApp({
    data(){
        return {
            mgs : '<h3 class="text-info">Raw h3 của raw html trong vue</h3>'
        }
    }
}).mount('#raw-html')

createApp({
    data(){
        return {
            className : 'btn btn-primary w-100 mb-3',
            count : 0,
            classCount : 'btn btn-warning w-100 mb-3',
            name : '',
        }
    },
    methods : {
        handleClickHere (){
            alert('Bạn vừa click vào đây')
        },
        handleIncrement (count, event){
            console.log(event.target);
            this.count+=count;
        },
        handleSetName(name){
            this.name = name;
        }
        ,
        handleSubmit(){
            alert('Bạn vừa submit')
        },
        handleEnter(event){
            alert(' Bạn vừa nhấn Enter')
        }
    }
}).mount('#event')