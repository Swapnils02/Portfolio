tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily:{
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
            },
            animation:{
            spin_slow: 'spin 6s linear infinite'
        },
        colors:{
            lightHover: '#fcf4ff',
            darkHover: '#1a002a',
            darkTheme: '#3C3D37'
        },
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        },
    }
},
darkMode: 'selector'
}