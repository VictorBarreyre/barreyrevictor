import me from '../assets/about.svg';
import contact from '../assets/contact.svg';
import folder from '../assets/folder.svg';
import sett from '../assets/sett.svg'





const data = {

    fr: {
        Header: {
            title: 'Barreyrevictor',
            go: 'Foutre le camp',
        },

        Desk: {
            window: 'Passer sur Vr98',
            mac: 'Passer sur Var OS 9',
            tux: 'Passer sur Linux',
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
                content: (
                <ul>
                    <li><a class='default-link' href='https://www.elle.fr/'>ELLE</a></li>
                    <li><a class='default-link' href='https://www.elle.fr/'>ELLE App</a></li>
                    <li><a class='default-link' href='https://www.elle.fr/'>Digitalinkers</a></li>
                    <li><a class='default-link' href='https://www.elle.fr/'>Les Inrocks</a></li>
                    <li><a class='default-link' href='https://www.elle.fr/'>Entreprise Musique</a></li>
                    <li><a class='default-link' href='https://www.elle.fr/'>Orthosmile</a></li>
                    <li><a class='default-link' href='https://www.elle.fr/'>Candide</a></li>
                    <li><a class='default-link' href='https://www.elle.fr/'>Argentik</a></li>
                </ul>),
            },
            settings: {
                icon: sett,
                title: 'Réglages',
                contentIP: 'Votre adresse IP est : ',
                contentLocation: 'Vous êtes situé en : ',
                contentFourni: 'Votre fournisseur internet est : ',
                contentLang: 'Le site est configuré en :',
                contentDarkmode: 'Activer le darkmode',
                contentClearmode: 'Désactiver le darkmode',
                contentCookies: 'Accepter les cookies',
                contentNoCookies: 'Désactiver les cookies',
                contentCSS: 'Désactiver le CSS',
                contentNoCSS: 'Activer le CSS',
            },
        },
    },


    en: {
        Header: {
            title: 'Barreyrevictor',
            go: 'Go out',
        },

        Desk: {
            window: 'Switch to Vr98',
            mac: 'Switch to  Var OS 9',
            tux: 'Linux coming soon',
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
                contentIP: 'Your IP is :',
                contentLocation: 'You are located in : ',
                contentFourni: 'Your internet provider is : ',
                contentLang: 'The website is configured in : ',
                contentDarkmode: 'Content for Archives',
                contentClearmode: 'Disable Dark Mode',
                contentCookies: 'Content for Archives',
                contentNoCookies: 'Disable Cookies',
                contentCSS: ' Disable CSS',
                contentNoCSS: 'Enable CSS',
            },
        },
    },

    jp: {
        Header: {
            title: 'バレイレヴィクター',
            go: '出る',
        },

        Desk: {
            window: 'Vr98に切り替える',
            mac: 'Var OS 9に切り替える',
            tux: ' まもなくLinuxが利用可能 ',
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
                contentIP: 'あなたのIPアドレスは : ',
                contentLocation: 'あなたの位置は以下の通りです : ',
                contentFourni: 'あなたのインターネットプロバイダーは以下の通りです : ',
                contentLang: 'ウェブサイトは以下の言語で設定されています :',
                contentDarkmode: 'アーカイブの内容',
                contentClearmode: 'ダークモードを無効にする',
                contentCookies: 'アーカイブの内容',
                contentNoCookies: 'クッキーを無効にする',
                contentCSS: ' CSSを無効にする',
                contentNoCSS: 'CSSを有効にする',
            },
        },
    },


    ru: {
        Header: {
            title: 'Баррейревиктор',
            go: 'Выйти',
        },

        Desk: {
            window: 'Переключиться на Vr98',
            mac: 'Переключиться на Var OS 9',
            tux: 'Скоро будет доступен Linux',
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
                title: 'Настройки',
                contentIP: 'Ваш IP-адрес :',
                contentLocation: 'Вы находитесь в ：',
                contentFourni: 'Ваш интернет-провайдер : ',
                contentLang: 'Веб-сайт настроен на : ',
                contentDarkmode: 'Контент для раздела "Архивы"',
                contentClearmode: 'Выключить тёмный режим',
                contentCookies: 'Контент для раздела "Архивы"',
                contentNoCookies: 'Отключить куки',
                contentCSS: 'Отключить CSS',
                contentNoCSS: 'Включить CSS'
            },
        },
    },
    cn: {
        Header: {
            title: '巴雷雷维克托',
            go: '退出',
        },

        Desk: {
            window: '切换到Vr98',
            mac: '切换到Var OS 9',
            tux: 'Linux即将推出',
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
                contentIP: '您的IP地址是 : ',
                contentLocation: '您位于 ：',
                contentFourni: '您的互联网提供商是：',
                contentLang: '网站配置为以下语言 : ',
                contentDarkmode: '档案的内容',
                contentClearmode: '禁用深色模式',
                contentCookies: '接受 Cookies',
                contentNoCookies: '禁用 Cookies',
                contentCSS: '禁用CSS',
                contentNoCSS: '启用 CSS'
            },
        },
    },


};

export default data;
