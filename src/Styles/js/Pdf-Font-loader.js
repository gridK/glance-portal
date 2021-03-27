import {Font} from '@react-pdf/renderer'

Font.register({ 
    family: 'Quicksand', 
    fonts: [
    { 
        src: '../Fonts/Quicksand-Regular.ttf' 
    }, // font-style: normal, font-weight: normal
    { 
        src: '../Fonts/Quicksand-Bold.ttf' , 
        fontWeight: 'bold' 
    },
    { 
        src: '../Fonts/Quicksand-Light.ttf' , 
        fontWeight: 'light'
    },
    { 
        src: '../Fonts/Quicksand-Medium.ttf' , 
        fontWeight: 'medium'
    },
    { 
        src: '../Fonts/Quicksand-SemiBold.ttf' , 
        fontWeight: 'semibold'
    },
   ]
});