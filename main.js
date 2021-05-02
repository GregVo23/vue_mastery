const product = 'Socks'


const app = Vue.createApp({
    data() {
        return {

            cart: 0,
            product: 'Chaussettes',
            description: 'De bien belle chaussettes, disponible en deux couleur: verte ou bleue',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vanossel.be',
            onsale: true,
            stock: 9,
            details: ['XXl, ' ,'Xl, ' ,'L, ' ,'M, ' ,'S, ',],
            products: [
                { id: 123, color: 'green', price: 19, image: './assets/images/socks_green.jpg' },
                { id: 241, color: 'blue', price: 19, image: './assets/images/socks_blue.jpg' },
            ],



        }
    },
    methods: {
        addToCart(){
            this.cart += 1
            console.log('ok')
        },
        updateImage(productImage){
            this.image = productImage
        },
    }
})