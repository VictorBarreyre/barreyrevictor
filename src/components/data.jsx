import me from '../assets/about.svg';
import contact from '../assets/contact.svg';
import folder from '../assets/folder.svg';
import sett from '../assets/sett.svg'





const data = {

    fr: {
        Header: {
            title: 'Barreyrevictor',
            go: 'Foutre le camp',
            cekonsait:"Ce que l'on sait sur vous :",
        },

        Desk: {
            window: 'Passer sur Vr98',
            mac: 'Passer sur Var OS 9',
            tux: 'Passer sur Linux',
        },

        Quote:{
            design:'Designed and developed by Barreyre Victor / © all rights reserved etc',
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
                contentRien: (<p>On ne sait car vous avez refusé les cookies.<br/>
                Si vous voulez connaitre votre localisation et votre adresse IP ou même votre fournisseur d'accès.<br/>
                Activez-les dans la fenêtre de reglages. </p>
                ),
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
            cekonsait:"What we know about you :",
        },

        Desk: {
            window: 'Switch to Vr98',
            mac: 'Switch to  Var OS 9',
            tux: 'Linux coming soon',
        },

        Quote:{
            design:'Designed and developed by Barreyre Victor / © all rights reserved etc',
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
                contentRien: (<p>We don't know nothin' because you refused the cookies.<br/>
                If you want to know your location and IP address, or even your internet provider.<br/>
                please enable them in the settings window.</p>
                ),
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
            cekonsait:"あなたについて私たちが知っていること ：",
        },

        Desk: {
            window: 'Vr98に切り替える',
            mac: 'Var OS 9に切り替える',
            tux: ' まもなくLinuxが利用可能 ',
        },

        Quote:{
            design:'バレイレ・ヴィクトールによって設計・開発されました / © すべての権利を保有等',
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
                contentRien: (<p>クッキーを拒否したため、わかりません<br/>
                あなたの位置情報やIPアドレス、あるいはインターネットプロバイダーを知りたい場合は<br/>
                設定ウィンドウでそれらを有効にしてください。</p>
                ),
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
            cekonsait:"Что мы знаем о вас :",
        },

        Desk: {
            window: 'Переключиться на Vr98',
            mac: 'Переключиться на Var OS 9',
            tux: 'Скоро будет доступен Linux',
        },

        Quote:{
            design:'Разработано и создано Виктором Баррейре / © Все права защищены и т.д.',
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
                contentRien: (<p>Мы не знаем, потому что вы отказались от куки.<br/>
                Если вы хотите узнать ваше местоположение и IP-адрес, или даже вашего интернет-провайдера,<br/>
                пожалуйста, включите их в окне настроек.</p>
                ),
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
            cekonsait:"我们对您所知的 ：",
        },

        Desk: {
            window: '切换到Vr98',
            mac: '切换到Var OS 9',
            tux: 'Linux即将推出',
        },


        Quote:{
            design:'由巴雷尔·维克托设计和开发 / © 版权所有等',
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
                contentRien: (<p>"我们不知道，因为您拒绝了 cookies。<br/>
                如果您想要知道您的位置和 IP 地址，甚至是您的互联网服务提供商，<br/>
                请在设置窗口中启用它们。</p>
                ),
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
