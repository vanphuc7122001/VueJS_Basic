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
            firstName : 'Phúc',
            lastName : 'Dang',
            FullName : ''
        }
    },
    watch : { // chỉ phụ hợp theo dỏi ít data thoi // watch có performance tốt hơn computed
        /**
         * watch dùng để xử lý:
         * + theo dỏi 1 data duy nhất thoi when track one data then its performance will better than
         * 
         */
        count(newValue,OldValue){
            // console.log('Giá trị count đã thay đổi')
            console.log('newValue',newValue)
            console.log('OldValue',OldValue)
            if(newValue > 10) {
                this.count = 0;
            }
        },
        lastName(newValue) {
            this.FullName = newValue + ' ' + this.firstName ;
        },
        firstName(newValue) {
            this.FullName = this.lastName + ' ' + newValue ;
        }
    },
    computed:{
        /** 
         * computed dùng để xử lý  tính toán nhiều data và hiển thị ra màn hình 
         */
        getFullName: function(){
            console.log('run')
            return this.lastName + ' ' + this.firstName;
        } // computed chi chạy khi dử liệu bên trong hàm của attribute computed thay đổi => hiệu năng tốt
    },
    // methods dùng để xử lý các vấn đề 
    // + sự kiện 
    // + và tính năng trên trang website
    methods: {
        handleIncrement(){
            this.count++;
        },
        // getFullName(){
        //     console.log('run');
        //     return this.firstName + ' ' + this.lastName;
        // } ít dùng hàm thay đổi dử liệu bên trong vì hiệu năng kém thời gian thực thi lâu để viết hàm có sự thay đổi dự liệu bên trong chúng ta sẻ sử dụng conputed
    }
}).mount('#computed-and-watcher')

createApp({
    data(){
        return {
            isActive : false,
            ClassName : 'btn btn-primary w-100',
            styleForP: {
                color : 'white',
                backgroundColor : 'rgba(255, 255, 255,0.3)',
                fontSize : '30px',
            },
            styleText : {
                "text-align": "left"
            }
        }
    },
    methods: {
        handleFormat(){
            if(this.styleForP.color === 'white'){
                this.styleForP.color = 'red'
            }else{
                this.styleForP.color = 'white'
            }
        },
        handleFormatColor(){
            console.log(this.isActive)
            if(this.isActive == false){
                this.isActive = true
            }else{
                this.isActive = false
            }
        }
    }
}).mount('#styling')


createApp({
    data(){
        return {
            UrlHero: {
                zed : 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_38.jpg',
                leeSin : 'https://gamek.mediacdn.vn/133514250583805952/2022/6/18/-16555136658111107887341.jpg',
                niDaLee: 'https://leaguefeed.net/wp-content/uploads/2021/10/best-nidalee-skins.jpg'
            },
            nameHero : '',
            className : 'btn btn-primary w-100',
            isLogin : false,
            toggle : false,
            blackpink: [
                {
                    name : 'Lisa',
                    image : 'https://i.pinimg.com/736x/d9/53/cc/d953cc47d08f94eebb0c56377ee6a84c.jpg'
                },
                {
                    name : 'Jisoo',
                    image : 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/9/photo-1-16257989599561090737937.jpeg'
                },
                {
                    name : 'Rose',
                    image : 'https://kenh14cdn.com/203336854389633024/2022/3/8/photo-1-16467175431221225437237.jpg'
                },
                {
                    name : 'Jennie',
                    image : 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089755/Photo-1636025852946-.jpg'
                },
            ]
        }
    },
    methods: {
        handleLogin(){
            this.isLogin = true
        },
        handleToggle(){
            if(this.toggle == false){
                this.toggle = true
            }else{
                this.toggle = false
            }
        },
        handleChoose(nameHero){
            this.nameHero = nameHero;
        }
    }
}).mount('#directive')