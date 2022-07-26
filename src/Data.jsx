const DATA = [
    {
        id: 0,
        title: "iPhone 13 Pro",
        price: 999.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433"
    },
    {
        id: 1,
        title: "iPhone 13",
        price: 799.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645036276543"
    },
    {
        id: 2,
        title: "iPhone SE",
        price: 579.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-family-select-202203?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1646070494883"
    },
    {
        id: 3,
        title: "iPhone 12",
        price: 579.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"
    },
    {
        id: 4,
        title: "iPad Air",
        price: 749.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-pink-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066399526"
    },
    {
        id: 5,
        title: "iPad Pro",
        price: 1099.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104?wid=545&hei=550&fmt=jpeg&qlt=95&.v=1617067380000"
    },
    {
        id: 6,
        title: "iPad",
        price: 479.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2021-hero-landing-wifi?wid=450&hei=523&fmt=jpeg&qlt=95&.v=1630973863000"
    },
    {
        id: 7,
        title: "iPad mini",
        price: 649.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-202109?wid=540&hei=530&fmt=jpeg&qlt=95&.v=1631751017000"
    },
    {
        id: 8,
        title: "Macbook Air",
        price: 1199.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=446&hei=410&fmt=jpeg&qlt=95&.v=1653084303665"
    },
    {
        id: 9,
        title: "Macbook Pro",
        price: 1299.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653493200207"
    },
    {
        id: 10,
        title: "Mac Pro",
        price: 5999.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-hero-splitter?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1572645163008"
    },
    {
        id: 11,
        title: "iMac",
        price: 1299.00,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta eum nihil iure dicta maxime incidunt sunt saepe voluptatibus praesentium. Minus suscipit necessitatibus placeat cupiditate maiores facere consequuntur recusandae hic?",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-green-selection-hero-202104?wid=446&hei=410&fmt=jpeg&qlt=95&.v=1617492405000"
    },
   

]

export default DATA;