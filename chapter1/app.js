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
            className : 'text-danger',
            linkInfo : 'https://www.kali.org/',
            btnInfo : 'btn btn-primary mt-3 d-block',
        }
    }
}).mount('#bind-attribute')


createApp({
    data(){
        return {
            sum3Number : '0',
            option : 'Xĩu',
            className : 'btn btn-primary mt-3 w-100'
        }
    },
    methods: {
        createNut : function(){
            const random3Nut = [getRandomInt(1,6),getRandomInt(1,6),getRandomInt(1,6)];
            return this.sum3Number = random3Nut.reduce( (total, each) => total+= each,0)
        }, 
        renderTaiXiu(){
            this.createNut();
            Number = this.sum3Number;
            if(Number > 11){
                this.option = 'Tài'
            }else{
                this.option = 'Xĩu'
            }
        },
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


createApp({
    data(){
        return {
            message : '',
            msg : "",
            className : 'text-danger'
        }
    },
    methods: {
        handleInput(event){
            this.msg = event.target.value;
        }
    }
}).mount('#two-way-binding')

createApp({
    data(){
        return {
            count : 0,
            className : 'btn btn-danger w-100 mt-3',
            firstName : 'Dang',
            lastName : 'Phúc'
        }
    },
    watch : {
        count(newValue,OldValue){
            // console.log('Giá trị count đã thay đổi')
            console.log('newValue',newValue)
            console.log('OldValue',OldValue)
            if(newValue > 10) {
                this.count = 0;
            }
        }
    },
    computed:{
        
        getFullName: function(){
            console.log('run')
            return this.firstName + ' ' + this.lastName;
        } // computed chi chạy khi dử liệu bên trong hàm của attribute computed thay đổi => hiệu năng tốt
    },
    methods: {
        handleIncrement(){
            this.count++;
            this.firstName = "Đặng Văn"
        },
        // getFullName(){
        //     console.log('run');
        //     return this.firstName + ' ' + this.lastName;
        // } ít dùng hàm thay đổi dử liệu bên trong vì hiệu năng kém thời gian thực thi lâu để viết hàm có sự thay đổi dự liệu bên trong chúng ta sẻ sử dụng conputed
    }
}).mount('#computed-and-watcher')