const product = 'Socks'


const app = Vue.createApp({
    data() {
        return {
            product: 'Chaussettes', // updated data value //
            description: 'De bien belle chaussettes, disponible en deux couleur: verte ou bleue',
            image: './assets/images/socks_green.jpg',
            image_blue: './assets/images/socks_blue.jpg',
            url: 'https://www.vanossel.be',
            onsale: true,
            stock: 9,
        }
    }
})