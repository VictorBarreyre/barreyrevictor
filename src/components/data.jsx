import me from '../assets/about.svg';
import contact from '../assets/contact.svg';
import folder from '../assets/folder.svg';
import sett from '../assets/sett.svg'

const data = {

    fr: {
        Modal: {
            content: (
                <>
                    <p className='centered-modal-p'>
                        Nous respectons votre vie privée et ne collectons pas de données personnelles.
                    </p>
                    <p className='centered-modal-p'>
                        Pour enrichir votre expérience sur notre site,
                    </p>
                    <p className='centered-modal-p'>
                        nous avons besoin de votre accord pour utiliser votre adresse IP ainsi que votre localisation géographique à des fins ludiques.
                    </p>
                    <p className='centered-modal-p'>
                        Ces informations ne sont pas stockées ni utilisées pour le suivi.
                    </p>
                    <p className='centered-modal-p'>
                        Vous pouvez retirer ce consentement à tout moment.
                    </p>
                    <p className='centered-modal-p'>
                        En cliquant sur "Accepter", vous permettez l'affichage de ces informations pour une expérience personnalisée.
                    </p>
                    <p className='centered-modal-p'>
                        Si vous refusez, certaines fonctionnalités ne seront pas disponibles.
                    </p>
                </>
            ),

            contentMobile: (
                <>
                    <p className='centered-modal-p'>
                        Nous respectons votre vie privée
                    </p>
                    <p className='centered-modal-p'>
                        et ne collectons pas de données personnelles.
                    </p>
                    <p className='centered-modal-p'>
                        Pour enrichir votre expérience sur notre site,
                    </p>
                    <p className='centered-modal-p'>
                        nous avons besoin de votre accord pour utiliser
                    </p>
                    <p className='centered-modal-p'>
                        votre adresse IP ainsi que
                    </p>
                    <p className='centered-modal-p'>
                        votre localisation géographique à des fins ludiques. 
                    </p>
                    <p className='centered-modal-p'>
                        Ces informations ne sont pas stockées 
                    </p>
                    <p className='centered-modal-p'>
                        ni utilisées pour le suivi.
                    </p>
                    <p className='centered-modal-p'>
                        Vous pouvez retirer ce consentement à tout moment.
                    </p>
                    <p className='centered-modal-p'>
                        vous permettez l'affichage de ces informations
                    </p>
                    <p className='centered-modal-p'>
                        pour une expérience personnalisée. 
                    </p>
                    <p className='centered-modal-p'>
                    Si vous refusez,
                    </p>
                    <p className='centered-modal-p'>
                    certaines fonctionnalités ne seront pas disponibles.
                    </p>
                </>
            ),
            accept: 'Accepter',
            refuse: 'Refuser',
        },

        Header: {
            title: 'Barreyrevictor/',
            go: 'Foutre le camp/',
            cekonsait: "Ce que l'on sait sur vous :",
        },

        Desk: {
            window: 'Passer sur Vr98',
            mac: 'Passer sur Var OS 9',
            tux: 'Passer sur Linux',
        },

        Quote: {
            design: 'Designed and developed by Barreyre Victor / © all rights reserved etc',
        },

        Button: {
            about: {
                icon: me,
                title: 'À propos/',
                content: (
                    <ul>
                        <li>Product Designer & Creativ Developper/</li>
                        <li>HTML/ CSS/ JS/ React/ Shopify/ Strapi/ DS/ CMS</li>
                        <li>Co-fondateur d'<a className='default-link' href='https://argentikmag.fr/'>Argentik/</a ></li>
                        <li>Basé à Paris/</li>
                        <li>Plus de détails <a className='default-link' href='https://www.linkedin.com/in/victor-barreyre-92a453164/'>Ici/</a ></li>
                    </ul>
                ),
            },

            contact: {
                icon: contact,
                title: 'Contact/',
                content:
                    (<p>Si vous cherchez à me joindre, vous pouvez m'envoyer un mail à l'adresse suivante : barreyrevictor.contact@gmail.com <br />

                    </p>
                    ),
            },

            archives: {
                icon: folder,
                title: 'Archives/',
                content: (
                    <ul>
                        <li><a className='default-link' href='https://www.lesinrocks.com/'>Les Inrocks</a></li>
                        <li><a className='default-link' href='https://www.elle.fr/'>ELLE</a></li>
                        <li><a className='default-link' href='https://apps.apple.com/fr/app/elle-actualit%C3%A9-mode-beaut%C3%A9/id366998556'>ELLE App</a></li>
                        <li><a className='default-link' href='https://argentikmag.fr/'>Argentik</a></li>
                        <li><a className='default-link' href='https://entreprisemusique.fr/artistes/'>Entreprise Musique</a></li>
                        <li><a className='default-link' href='https://www.digitalinkers.com/'>Digitalinkers</a></li>
                        <li><a className='default-link' href='https://www.drhanras.fr/'>Orthosmile</a></li>
                        <li><a className='default-link' href='https://www.candide.co/'>Candide</a></li>
                    </ul>),
            },
            settings: {
                icon: sett,
                title: 'Réglages/',
                contentRien: (<p>On ne sait car vous avez refusé les cookies.<br />
                    Si vous voulez connaitre votre localisation et votre adresse IP ou même votre fournisseur d'accès.<br />
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

        Modal: {
            content: (
                <>
                    <p className='centered-modal-p'>
                        We respect your privacy and do not collect personal data.
                    </p>
                    <p className='centered-modal-p'>
                        To enrich your experience on our site,
                    </p>
                    <p className='centered-modal-p'>
                        we need your consent to use your IP address and geographical location for playful purposes.
                    </p>
                    <p className='centered-modal-p'>
                        This information is not stored or used for tracking.
                    </p>
                    <p className='centered-modal-p'>
                        You can withdraw this consent at any time.
                    </p>
                    <p className='centered-modal-p'>
                        By clicking "Accept", you allow the display of this information for a personalized experience.
                    </p>
                    <p className='centered-modal-p'>
                        If you refuse, some features will not be available.
                    </p>
                </>
            ),
            accept: 'Accept',
            refuse: 'Refuse',
        },


        Header: {
            title: 'Barreyrevictor/',
            go: 'Go out/',
            cekonsait: "What we know about you :",
        },

        Desk: {
            window: 'Switch to Vr98',
            mac: 'Switch to  Var OS 9',
            tux: 'Linux coming soon',
        },

        Quote: {
            design: 'Designed and developed by Barreyre Victor / © all rights reserved etc',
        },

        Button: {
            about: {
                icon: me,
                title: 'About/',
                content: (
                    <ul>
                        <li>Product Designer & Creative Developer /</li >
                        <li>HTML/ CSS/ JS/ React/ Shopify/ Strapi/ DS/ CMS</li>
                        <li>Co-founder of <a class='default-link' href='https://argentikmag.fr/'>Argentik/</a></li>
                        <li>Based in Paris/</li>
                        <li>More details <a class='default-link' href='https://www.linkedin.com/in/victor-barreyre-92a453164/'>here/</a></li>
                    </ul >
                )
            },
            contact: {
                icon: contact,
                title: 'Contact/',
                content: (<p>If you are looking to contact me, you can email me at : barreyrevictor.contact@gmail.com <br />
                </p>
                )
                ,
            },
            archives: {
                icon: folder,
                title: 'Archives/',
                content: (
                    <ul>
                        <li><a className='default-link' href='https://www.lesinrocks.com/'>Les Inrocks</a></li>
                        <li><a className='default-link' href='https://www.elle.fr/'>ELLE</a></li>
                        <li><a className='default-link' href='https://apps.apple.com/fr/app/elle-actualit%C3%A9-mode-beaut%C3%A9/id366998556'>ELLE App</a></li>
                        <li><a className='default-link' href='https://argentikmag.fr/'>Argentik</a></li>
                        <li><a className='default-link' href='https://entreprisemusique.fr/artistes/'>Entreprise Musique</a></li>
                        <li><a className='default-link' href='https://www.digitalinkers.com/'>Digitalinkers</a></li>
                        <li><a className='default-link' href='https://www.drhanras.fr/'>Orthosmile</a></li>
                        <li><a className='default-link' href='https://www.candide.co/'>Candide</a></li>
                    </ul>),
            },
            settings: {
                icon: sett,
                title: 'Settings/',
                contentRien: (<p>We don't know nothin' because you refused the cookies.<br />
                    If you want to know your location and IP address, or even your internet provider.<br />
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

        Modal: {
            content: (
                <>
                    <p className='centered-modal-p'>
                        私たちはあなたのプライバシーを尊重し、個人データを収集しません。
                    </p>
                    <p className='centered-modal-p'>
                        当サイトの体験を豊かにするために、
                    </p>
                    <p className='centered-modal-p'>
                        あなたのIPアドレスと地理的位置情報を楽しい目的で使用することに同意が必要です。
                    </p>
                    <p className='centered-modal-p'>
                        この情報は保存されたり、追跡に使用されたりはしません。
                    </p>
                    <p className='centered-modal-p'>
                        この同意はいつでも撤回できます。
                    </p>
                    <p className='centered-modal-p'>
                        「承諾する」をクリックすると、これらの情報の表示を許可し、パーソナライズされた体験ができます。
                    </p>
                    <p className='centered-modal-p'>
                        拒否する場合、一部の機能が利用できなくなります。
                    </p>
                </>
            ),
            accept: '承諾する',
            refuse: '拒否する',
        },

        Header: {
            title: 'バレイレヴィクター/',
            go: '出る/',
            cekonsait: "あなたについて私たちが知っていること ：",
        },

        Desk: {
            window: 'Vr98に切り替える',
            mac: 'Var OS 9に切り替える',
            tux: ' まもなくLinuxが利用可能 ',
        },

        Quote: {
            design: 'バレイレ・ヴィクトールによって設計・開発されました / © すべての権利を保有等',
        },

        Button: {
            about: {
                icon: me,
                title: 'アバウト/',
                content: (
                    <ul>
                        <li>プロダクトデザイナー & クリエイティブ開発者/</li>
                        <li>HTML/ CSS/ JS/ React/ Shopify/ Strapi/ DS/ CMS</li>
                        <li><a className='default-link' href='https://argentikmag.fr/'>アルジェンティック</a>の共同創設者/</li>
                        <li>パリ拠点/</li>
                        <li>詳細は<a className='default-link' href='https://www.linkedin.com/in/victor-barreyre-92a453164/'>こちら/</a></li>
                    </ul>
                )

            },
            contact: {
                icon: contact,
                title: 'コンタクト/',
                content: (<p>連絡を取りたい場合は、次のメールアドレスにメールを送ってください：barreyrevictor.contact@gmail.com <br />
                </p>
                )

            },
            archives: {
                icon: folder,
                title: 'アーカイブ/',
                content: (
                    <ul>
                        <li><a className='default-link' href='https://www.lesinrocks.com/'>Les Inrocks</a></li>
                        <li><a className='default-link' href='https://www.elle.fr/'>ELLE</a></li>
                        <li><a className='default-link' href='https://apps.apple.com/fr/app/elle-actualit%C3%A9-mode-beaut%C3%A9/id366998556'>ELLE App</a></li>
                        <li><a className='default-link' href='https://argentikmag.fr/'>Argentik</a></li>
                        <li><a className='default-link' href='https://entreprisemusique.fr/artistes/'>Entreprise Musique</a></li>
                        <li><a className='default-link' href='https://www.digitalinkers.com/'>Digitalinkers</a></li>
                        <li><a className='default-link' href='https://www.drhanras.fr/'>Orthosmile</a></li>
                        <li><a className='default-link' href='https://www.candide.co/'>Candide</a></li>
                    </ul>),

            },
            settings: {
                icon: sett,
                title: '設定/',
                contentRien: (<p>クッキーを拒否したため、わかりません<br />
                    あなたの位置情報やIPアドレス、あるいはインターネットプロバイダーを知りたい場合は<br />
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

        Modal: {
            content: (
                <>
                    <p className='centered-modal-p'>
                        Мы уважаем вашу конфиденциальность и не собираем личные данные.
                    </p>
                    <p className='centered-modal-p'>
                        Чтобы улучшить ваш опыт на нашем сайте,
                    </p>
                    <p className='centered-modal-p'>
                        нам нужно ваше согласие на использование вашего IP-адреса и географического местоположения в игровых целях.
                    </p>
                    <p className='centered-modal-p'>
                        Эта информация не хранится и не используется для отслеживания.
                    </p>
                    <p className='centered-modal-p'>
                        Вы можете отозвать это согласие в любое время.
                    </p>
                    <p className='centered-modal-p'>
                        Нажимая «Принять», вы разрешаете отображение этой информации для персонализированного опыта.
                    </p>
                    <p className='centered-modal-p'>
                        Если вы откажетесь, некоторые функции будут недоступны.
                    </p>
                </>
            ),
            accept: 'Принять',
            refuse: 'Отказать',
        },


        Header: {
            title: 'Баррейревиктор/',
            go: 'Выйти/',
            cekonsait: "Что мы знаем о вас :",
        },

        Desk: {
            window: 'Переключиться на Vr98',
            mac: 'Переключиться на Var OS 9',
            tux: 'Скоро будет доступен Linux',
        },

        Quote: {
            design: 'Разработано и создано Виктором Баррейре / © Все права защищены и т.д.',
        },

        Button: {
            about: {
                icon: me,
                title: 'Обо мне/',
                content: (
                    <ul>
                        <li>Дизайнер продуктов & Творческий разработчик/</li>
                        <li>HTML/ CSS/ JS/ React/ Shopify/ Strapi/ DS/ CMS</li>
                        <li>Соучредитель <a class='default-link' href='https://argentikmag.fr/'>Argentik/</a></li>
                        <li>Базируется в Париже/</li>
                        <li>Больше информации <a class='default-link' href='https://www.linkedin.com/in/victor-barreyre-92a453164/'>здесь/</a></li>
                    </ul>
                )

            },
            contact: {
                icon: contact,
                title: 'Контакт/',
                content: (<p>Если вы хотите со мной связаться, вы можете отправить мне письмо на следующий адрес: barreyrevictor.contact@gmail.com <br />
                </p>
                )

            },
            archives: {
                icon: folder,
                title: 'Архивы/',
                content: (
                    <ul>
                        <li><a className='default-link' href='https://www.lesinrocks.com/'>Les Inrocks</a></li>
                        <li><a className='default-link' href='https://www.elle.fr/'>ELLE</a></li>
                        <li><a className='default-link' href='https://apps.apple.com/fr/app/elle-actualit%C3%A9-mode-beaut%C3%A9/id366998556'>ELLE App</a></li>
                        <li><a className='default-link' href='https://argentikmag.fr/'>Argentik</a></li>
                        <li><a className='default-link' href='https://entreprisemusique.fr/artistes/'>Entreprise Musique</a></li>
                        <li><a className='default-link' href='https://www.digitalinkers.com/'>Digitalinkers</a></li>
                        <li><a className='default-link' href='https://www.drhanras.fr/'>Orthosmile</a></li>
                        <li><a className='default-link' href='https://www.candide.co/'>Candide</a></li>
                    </ul>),

            },
            settings: {
                icon: sett,
                title: 'Настройки/',
                contentRien: (<p>Мы не знаем, потому что вы отказались от куки.<br />
                    Если вы хотите узнать ваше местоположение и IP-адрес, или даже вашего интернет-провайдера,<br />
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


        Modal: {
            content: (
                <>
                    <p className='centered-modal-p'>
                        我们尊重您的隐私，不收集个人数据。
                    </p>
                    <p className='centered-modal-p'>
                        为了丰富您在我们网站上的体验，
                    </p>
                    <p className='centered-modal-p'>
                        我们需要您的同意来使用您的IP地址和地理位置，以达到娱乐的目的。
                    </p>
                    <p className='centered-modal-p'>
                        这些信息不会被存储或用于追踪。
                    </p>
                    <p className='centered-modal-p'>
                        您可以随时撤销这一同意。
                    </p>
                    <p className='centered-modal-p'>
                        点击“接受”即表示您允许为了个性化体验而显示这些信息。
                    </p>
                    <p className='centered-modal-p'>
                        如果您拒绝，某些功能可能无法使用。
                    </p>
                </>
            ),
            accept: '接受',
            refuse: '拒绝',
        },



        Header: {
            title: '巴雷雷维克托/',
            go: '退出/',
            cekonsait: "我们对您所知的 ：",
        },

        Desk: {
            window: '切换到Vr98',
            mac: '切换到Var OS 9',
            tux: 'Linux即将推出',
        },


        Quote: {
            design: '由巴雷尔·维克托设计和开发 / © 版权所有等',
        },

        Button: {
            about: {
                icon: me,
                title: '关于/',
                content: (
                    <ul>
                        <li>产品设计师 & 创意开发者/</li>
                        <li>HTML/ CSS/ JS/ React/ Shopify/ Strapi/ DS/ CMS</li>
                        <li><a className='default-link' href='https://argentikmag.fr/'>Argentik</a>的联合创始人/</li>
                        <li>位于巴黎/</li>
                        <li>更多详情<a class='default-link' href='https://www.linkedin.com/in/victor-barreyre-92a453164/'>点击这里/</a></li>
                    </ul>
                )

            },
            contact: {
                icon: contact,
                title: '联系/',
                content: (<p>如果您想与我联系，可以通过以下电子邮件地址向我发送邮件：barreyrevictor.contact@gmail.com <br />
                </p>
                )

            },
            archives: {
                icon: folder,
                title: '档案/',
                content: (
                    <ul>
                        <li><a class='default-link' href='https://www.lesinrocks.com/'>Les Inrocks</a></li>
                        <li><a class='default-link' href='https://www.elle.fr/'>ELLE</a></li>
                        <li><a class='default-link' href='https://apps.apple.com/fr/app/elle-actualit%C3%A9-mode-beaut%C3%A9/id366998556'>ELLE App</a></li>
                        <li><a class='default-link' href='https://argentikmag.fr/'>Argentik</a></li>
                        <li><a class='default-link' href='https://entreprisemusique.fr/artistes/'>Entreprise Musique</a></li>
                        <li><a class='default-link' href='https://www.digitalinkers.com/'>Digitalinkers</a></li>
                        <li><a class='default-link' href='https://www.drhanras.fr/'>Orthosmile</a></li>
                        <li><a class='default-link' href='https://www.candide.co/'>Candide</a></li>
                    </ul>)
            },
            settings: {
                icon: sett,
                title: '设置/',
                contentRien: (<p>"我们不知道，因为您拒绝了 cookies。<br />
                    如果您想要知道您的位置和 IP 地址，甚至是您的互联网服务提供商，<br />
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
