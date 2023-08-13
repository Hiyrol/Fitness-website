import {SiOpenaigym} from 'react-icons/si'

export const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Gallery',
        path: '/gallery'
    },
    {
        name: 'Plans',
        path: '/plans'
    },
    {
        name: 'Trainers',
        path: '/trainers'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
    
    
]

export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: 'Program One',
        info:  'Never knew React Is This Strenous',
        path: '/programs/111'
    },
    {
        id: 2,
        icon:  <SiOpenaigym/>,
        title: 'Program Two',
        info:   'Never knew React Is This Strenous',
        path: '/programs/222'
        
    },
    {
        id: 3,
        icon:  <SiOpenaigym/>,
        title: 'Program Three',
        info:   'Never knew React Is This Strenous',
        path: '/programs/333'
        
    },
    {
        id: 4,
        icon:  <SiOpenaigym/>,
        title: 'Program Four',
        info:  'Never knew React Is This Strenous',
        path: '/programs/444'
        
    }
    
]


export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: 'Value One',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing.'

    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: 'Value Two',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing.'

    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: 'Value Three',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing.'

    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: 'Value Four',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing.'

    }
]


export const faqs =[
    {
        id: 1,
        question: 'How to get started',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, labore rem illum vitae provident ratione aliquid.'
    },
    {
        id: 2,
        question: 'What time of the day is the best to workout',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione, culpa ipsa veritatis molestiae nulla?'
    },
    {
        id: 3,
        question: 'How often should I workout',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo asperiores facilis adipisci rerum ducimus officia amet ea aperiam dolor.'
    },
    {
        id: 4,
        question: 'Things to avoid inorder to get the perfect body',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, adipisci est?'
    },
    {
        id: 5,
        question: 'Should i do cardio or weightlifting',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ipsa iure fugit quo quasi doloribus, maiores magnam facere impedit, a quod voluptatum.'
    },
    {
        id: 6,
        question: 'How to stay motivated',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, incidunt ipsam laborum unde ea soluta quis corrupti earum id? Quam quae suscipit vitae.'
    },
]



export const testimonials = [
    {
        id: '1',
        name: 'Mariam',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sed rem hic, repellat autem doloribus!',
        job: 'Student',
        avatar: require('./images/Avatar1.jpg')
    },
    {
        id: '2',
        name: 'Dosh',
        quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat cum blanditiis, quas porro repellendus hic eligendi ea!',
        job: 'Student',
        avatar: require('./images/Avatar2.jpg')
    },
    {
        id: '3',
        name: 'Tracy',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis consequuntur dolorem doloremque sint temporibus aliquam aperiam repellat.',
        job: 'Designer',
        avatar: require('./images/Avatar3.jpg')
    },
    {
        id: '4',
        name: 'McGinn',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugiat quod ipsa voluptas ratione. Amet, consectetur? Voluptatem, provident eligendi?',
        job: 'C.T.O',
        avatar: require('./images/Avatar4.jpg')
    },
    {
        id: '5',
        name: 'Vanessa',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione temporibus debitis suscipit ab placeat tenetur non odio magnam?',
        job: 'Financial Analyst',
        avatar: require('./images/Avatar5.jpg')
    }
    
    
]

export const gallery = [
    require('./images/Gallery1.jpg'),
    require('./images/Gallery2.webp'),
    require('./images/Gallery3.jpg'),
    require('./images/Gallery4.jpg'),
    require('./images/Gallery5.jpg'),
    require('./images/Gallery6.jpg'),
    require('./images/Gallery7.jpg'),
    require('./images/gallery8.jpg'),
    require('./images/Gallery9.jpg'),
    require('./images/Gallery10.jpeg'),
    require('./images/About1.jpg'),
    require('./images/Gallery12.jpeg'),
    require('./images/Gallery13.jpeg'),
    require('./images/Gallery16.jpeg'),
    require('./images/Gallery15.webp')
    
]

export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {
                feature: 'First Feature',
                available: true
            },
            {
                feature: 'Second Feature',
                available: true
            },
            {
                feature: 'Third Feature',
                available: true
            },
            {
                feature: 'Fourth Feature',
                available: true
            },
            {
                feature: 'Fifth Feature',
                available: true
            },
            {
                feature: 'Sixth Feature',
                available: false
            },
            {
                feature: 'Seventh Feature',
                available: false
            },
            {
                feature: 'Eighth Feature',
                available: false
            },
            {
                feature: 'Ninth Feature',
                available: false
            },
            {
                feature: 'Tenth Feature',
                available: false
            },
            {
                feature: 'Eleventh Feature',
                available: false
            }
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: `This package is perfect for beginners who know what they're doing`,
        price: 49.99,
        features: [
            {
                feature: 'First Feature',
                available: true
            },
            {
                feature: 'Second Feature',
                available: true
            },
            {
                feature: 'Third Feature',
                available: true
            },
            {
                feature: 'Fourth Feature',
                available: true
            },
            {
                feature: 'Fifth Feature',
                available: true
            },
            {
                feature: 'Sixth Feature',
                available: true
            },
            {
                feature: 'Seventh Feature',
                available: true
            },
            {
                feature: 'Eighth Feature',
                available: false
            },
            {
                feature: 'Ninth Feature',
                available: false
            },
            {
                feature: 'Tenth Feature',
                available: false
            },
            {
                feature: 'Eleventh Feature',
                available: false
            }
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for people who need personal trainer',
        price: 89.99,
        features: [
            {
                feature: 'First Feature',
                available: true
            },
            {
                feature: 'Second Feature',
                available: true
            },
            {
                feature: 'Third Feature',
                available: true
            },
            {
                feature: 'Fourth Feature',
                available: true
            },
            {
                feature: 'Fifth Feature',
                available: true
            },
            {
                feature: 'Sixth Feature',
                available: true
            },
            {
                feature: 'Seventh Feature',
                available: true
            },
            {
                feature: 'Eighth Feature',
                available: true
            },
            {
                feature: 'Ninth Feature',
                available: true
            },
            {
                feature: 'Tenth Feature',
                available: true
            },
            {
                feature: 'Eleventh Feature',
                available: true
            }
        ]
    }
]


const Trainer1 =require('./images/mainheader8.avif')
const Trainer2 =require('./images/Trainer2.jpeg')
const Trainer3 =require('./images/Trainer3.jpeg')
const Trainer4 =require('./images/Trainer4.jpeg')
const Trainer5 =require('./images/mainheader13.avif')
const Trainer6 =require('./images/Trainer6.webp')






export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John McGinn',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twiiter.com/', 'https://linkedin.com/' ]
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Kyoto Nakamura',
        job: 'Judo Trainer',
        socials: ['https://instagram.com/', 'https://twiiter.com/', 'https://linkedin.com/' ]
    },
    {
        id: 3,
        image: Trainer3,
        name: 'George Foreman',
        job: 'Boxing Trainer',
        socials: ['https://instagram.com/', 'https://twiiter.com/', 'https://linkedin.com/' ]
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Asafa Powell',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twiiter.com/', 'https://linkedin.com/' ]
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Hiyrol Smart',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twiiter.com/', 'https://linkedin.com/' ]
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Helen Wyatt',
        job: 'Yoga Trainer',
        socials: ['https://instagram.com/', 'https://twiiter.com/', 'https://linkedin.com/' ]
    }
  
]