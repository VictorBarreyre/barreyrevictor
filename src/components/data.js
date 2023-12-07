import me from '../assets/about.svg';
import contact from '../assets/contact.svg';
import folder from '../assets/folder.svg';
import sett from '../assets/sett.svg'





const data = {

fr:{ 
        Header: {
            title: 'Barreyrevictor',
            go: 'Foutre le camp',
        },

        Button: {
            about: {
                icon: me,
                title: 'À propos',
                content: 'Contenu pour à propos',
            },
            contact: {
                icon: contact,
                title: 'Contact',
                content: 'Contenu pour Contact',
            },
            archives: {
                icon: folder,
                title: 'Archives',
                content: 'Contenu pour Archives',
            },
            settings: {
                icon: sett,
                title: 'Réglages',
                contentDarkmode: 'Activer le darkmode',
                contentCookies: 'Accepter les cookies',
                contentCSS: 'Désactiver le CSS',
            },
        },
    },


    en:{ 
        Header: {
            title: 'Barreyrevictor',
            go: 'Go out',
        },

        Button: {
            about: {
                icon: me,
                title: 'About',
                content: 'Content for About',
            },
            contact: {
                icon: contact,
                title: 'Contact',
                content: 'Content for Contact',
            },
            archives: {
                icon: folder,
                title: 'Archives',
                content: 'Content for Archives',
            },
            settings: {
                icon: sett,
                title: 'Settings',
                contentDarkmode: 'Content for Archives',
                contentCookies: 'Content for Archives',
            },
        },
    },

    jp:{ 
        Header: {
            title: 'バレイレヴィクター',
            go: '出る',
        },

        Button: {
            about: {
                icon: me,
                title: 'アバウト',
                content: 'アバウトの内容',
            },
            contact: {
                icon: contact,
                title: '連絡先',
                content: '連絡先の内容',
            },
            archives: {
                icon: folder,
                title: 'アーカイブ',
                content: 'アーカイブの内容',
            },
            settings: {
                icon: sett,
                title: '設定',
                contentDarkmode: 'アーカイブの内容',
                contentCookies: 'アーカイブの内容',
            },
        },
    },


    ru: {
        Header: {
            title: 'Баррейревиктор',
            go: 'Выйти',
        },
    
        Button: {
            about: {
                icon: me, 
                title: 'Обо мне',
                content: 'Контент для раздела "Обо мне"',
            },
            contact: {
                icon: contact, 
                title: 'Контакт',
                content: 'Контент для раздела "Контакт"',
            },
            archives: {
                icon: folder, 
                title: 'Архивы',
                content: 'Контент для раздела "Архивы"',
            },
            settings: {
                icon: sett, 
                title:'Настройки',
                contentDarkmode: 'Контент для раздела "Архивы"',
                contentCookies: 'Контент для раздела "Архивы"',
            },
        },
    },
    cn: {
        Header: {
            title: '巴雷雷维克托',
            go: '退出',
        },
    
        Button: {
            about: {
                icon: me, 
                title: '关于',
                content: '关于的内容',
            },
            contact: {
                icon: contact, 
                title: '联系',
                content: '联系的内容',
            },
            archives: {
                icon: folder, 
                title: '档案',
                content: '档案的内容',
            },
            settings: {
                icon: sett, 
                title: '设置',
                contentDarkmode: '档案的内容',
                contentCookies: '档案的内容',
            },
        },
    },
    

};

export default data;
