document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    cursor.classList.add('cursor');
    // cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursorDot.style.left = e.clientX - 2 + 'px';
        cursorDot.style.top = e.clientY - 2 + 'px';
    });

    document.querySelectorAll('a, button, .car-card, .menu-toggle').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2.5)';
            cursor.style.background = 'rgba(218, 165, 32, 0.2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });

    // 1.1 Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // 2. Preloader
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.querySelectorAll('.reveal-text').forEach(el => {
                    el.classList.add('active');
                });
            }, 1000);
        }, 2000);
    });

    // 3. Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const trigger = window.innerHeight * 0.9;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < trigger) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 4. Parallax Effect on Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
        }
    });

    // 5. Form Logic
    const form = document.getElementById('inquiry-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerText = 'Transmitting...';
            setTimeout(() => {
                btn.innerText = 'Request Received';
                btn.style.background = '#fff';
                btn.style.color = '#000';
                form.reset();
            }, 2000);
        });
    }

    // 6. Dynamic Context-Aware Modals
    const brandVault = {
        porsche: {
            title: "The Porsche Essence",
            collection: [
                { name: "Porsche 911 (Black)", year: "1964", price: "$285,000", img: "https://images.unsplash.com/photo-1680984819428-03cda2441ba7?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tyler-OC-Ei3JLqGw-unsplash.jpg" },
                { name: "Porsche 911 (White)", year: "1975", price: "$195,000", img: "https://images.unsplash.com/photo-1760339900821-dee06786a2d3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=miko-rohat-tB11NbRJqGg-unsplash.jpg" },
                { name: "Martini Racing 911", year: "1973", price: "$450,000", img: "https://images.unsplash.com/photo-1633865591812-89bc8229a360?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=maxime-renard-dl1MA0OoMGY-unsplash.jpg" },
                { name: "Classic 911 Silver", year: "1969", price: "$325,000", img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=josh-berquist-pjxe3p4u5aI-unsplash.jpg" }
            ]
        },
        jaguar: {
            title: "The Jaguar Heritage",
            collection: [
                { name: "Jaguar MK II", year: "1959", price: "$95,000", img: "https://images.unsplash.com/photo-1592252824871-63d7b594f251?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jerry-kavan-hPbMO39Qcec-unsplash.jpg" },
                { name: "Jaguar E-Type Grey", year: "1961", price: "$165,000", img: "https://images.unsplash.com/photo-1630045698239-316e53b75048?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=valery-fedotov-rZNQQrnCDSY-unsplash.jpg" },
                { name: "Jaguar MK II Racing", year: "1962", price: "$125,000", img: "https://images.unsplash.com/photo-1706956351690-125f81996309?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=david-dintsh-7CDKllFj75k-unsplash.jpg" },
                { name: "Jaguar E-Type Black", year: "1965", price: "$185,000", img: "https://images.unsplash.com/photo-1577984688506-c2db6fec4a85?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jeff-tumale-n1dy5EdmU7M-unsplash.jpg" }
            ]
        },
        ferrari: {
            title: "The Ferrari Atelier",
            collection: [
                { name: "Ferrari F40 Red", year: "1987", price: "$3,200,000", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000" },
                { name: "Ferrari Vintage Bleu", year: "1965", price: "$425,000", img: "https://images.unsplash.com/photo-1684732901611-3e1ddc6873e0?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ryan-kircher-KLc2qogtYzM-unsplash.jpg" },
                { name: "Ferrari #41 Racing", year: "1957", price: "$1,500,000", img: "https://images.unsplash.com/photo-1704208121934-ca3da88783e6?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sean-davis-LMu3s9_wPzM-unsplash.jpg" },
                { name: "Ferrari F40 Top", year: "1988", price: "$3,500,000", img: "https://images.unsplash.com/photo-1714860082122-458433beafe1?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=maciej-marko-IlD7_ygZjww-unsplash.jpg" }
            ]
        },
        mercedes: {
            title: "The Mercedes Archives",
            collection: [
                { name: "300SL Gullwing", year: "1955", price: "$1,450,000", img: "https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=meik-schneider-e9zSM8orIfA-unsplash.jpg" },
                { name: "190SL Convertible", year: "1957", price: "$185,000", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=aaron-huber-8qYE6LGHW-c-unsplash.jpg" },
                { name: "300 SEL 6.3", year: "1970", price: "$95,000", img: "https://images.unsplash.com/photo-1755585191053-52598d2750a7?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=dhruv-vishwakarma-RofoJB1IGvw-unsplash.jpg" },
                { name: "280SL Pagoda", year: "1969", price: "$145,000", img: "https://images.unsplash.com/photo-1601320086349-64720d50c1d8?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sergey-raikin-L0oV8CuJLCE-unsplash.jpg" }
            ]
        },
        aston: {
            title: "The Aston Martin Vault",
            collection: [
                { name: "Aston Martin DB5", year: "1964", price: "$1,100,000", img: "https://images.unsplash.com/photo-1730365646905-8635bb42eb2e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=dark-ace-studios-TYSdcbA0TE4-unsplash.jpg" },
                { name: "V8 Vantage", year: "1977", price: "$245,000", img: "https://images.unsplash.com/photo-1597986121176-29aa34d61bca?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=erik-mclean-9iw5o-TLkyU-unsplash.jpg" },
                { name: "DB4 GT", year: "1960", price: "$3,500,000", img: "https://images.unsplash.com/photo-1638398414787-4b8c31700157?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tyrel-johnson-b97mFm4-mzo-unsplash.jpg" },
                { name: "DB6 Volante", year: "1968", price: "$425,000", img: "https://images.unsplash.com/photo-1551217996-9e4d3bbcbfc2?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=viktor-theo-KbVQ1hySvTw-unsplash.jpg" }
            ]
        },
        bugatti: {
            title: "The Bugatti Atelier",
            collection: [
                { name: "Bugatti Type 57 SC", year: "1936", price: "$12,500,000", img: "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=spencer-davis-GCm0tha8IGY-unsplash.jpg" },
                { name: "Bugatti EB110", year: "1991", price: "$2,200,000", img: "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=flavien-WJiSMLedW3o-unsplash.jpg" },
                { name: "Bugatti Type 35", year: "1924", price: "$950,000", img: "https://images.unsplash.com/photo-1617153045090-131feca88fae?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mariah-hewines-E2pp5hI9Gyo-unsplash.jpg" },
                { name: "Bugatti Veyron SS", year: "2010", price: "$3,800,000", img: "https://images.unsplash.com/photo-1647373939961-f2cc00ddc633?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=josue-soto-9jB1KjbMod4-unsplash.jpg" }
            ]
        },
        lamborghini: {
            title: "The Lamborghini Collection",
            collection: [
                { name: "Lamborghini Countach", year: "1985", price: "$750,000", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=bailey-mahon-JMpdblrHTrQ-unsplash.jpg" },
                { name: "Lamborghini Miura", year: "1966", price: "$2,500,000", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=dhiva-krishna-X16zXcbxU4U-unsplash.jpg" },
                { name: "Lamborghini Diablo", year: "1990", price: "$350,000", img: "https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=daniel-lincoln-JxbvdKB6_3g-unsplash.jpg" },
                { name: "Lamborghini Espada", year: "1968", price: "$120,000", img: "https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=krish-parmar-I70_S2OkWM4-unsplash.jpg" }
            ]
        },
        rolls: {
            title: "The Rolls-Royce Heritage",
            collection: [
                { name: "Rolls-Royce Phantom", year: "1936", price: "$450,000", img: "https://images.unsplash.com/photo-1627838908649-758541adc67b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=martin-katler-sCrGz2s_hUQ-unsplash.jpg" },
                { name: "Silver Shadow", year: "1970", price: "$85,000", img: "https://images.unsplash.com/photo-1551040153-47e13ad6f2e5?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=serge-paramount-pvksM9DGPg4-unsplash.jpg" },
                { name: "Silver Cloud", year: "1955", price: "$125,000", img: "https://images.unsplash.com/photo-1624804269473-828dcc30a210?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=martin-katler-YI-9-n4232c-unsplash.jpg" },
                { name: "Phantom II", year: "1929", price: "$380,000", img: "https://images.unsplash.com/photo-1651915216757-1774c23ca5dc?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tjeerd-braat-xbD8u795SCk-unsplash.jpg" }
            ]
        },
        mclaren: {
            title: "The McLaren Archives",
            collection: [
                { name: "McLaren F1", year: "1992", price: "$20,000,000", img: "https://images.unsplash.com/photo-1617335692042-7a3779b8e050?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=wes-tindel-ZcMcyeGzgrk-unsplash.jpg" },
                { name: "McLaren P1 Legacy", year: "2013", price: "$2,200,000", img: "https://images.unsplash.com/photo-1715372028767-f89c9818634a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=warren-valentine-GZZpYjSgJTM-unsplash.jpg" },
                { name: "McLaren M23", year: "1973", price: "$1,500,000", img: "https://images.unsplash.com/photo-1615394695852-da39a8df9bf1?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=andrew-grove-d3Nuz-3LtA8-unsplash.jpg" },
                { name: "McLaren Senna Heritage", year: "2018", price: "$1,800,000", img: "https://images.unsplash.com/photo-1516298252535-cf2ac5147f9b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=cory-rogers-6l4CBNleEBE-unsplash.jpg" }
            ]
        },
        bentley: {
            title: "The Bentley Heritage",
            collection: [
                { name: "Bentley Blue Train", year: "1930", price: "$4,500,000", img: "https://images.unsplash.com/photo-1631827741430-98c01f33e84f?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=humberto-portillo-ghwx9-wDn-w-unsplash.jpg" },
                { name: "Continental R", year: "1952", price: "$850,000", img: "https://images.unsplash.com/photo-1604946881982-a3321fcf07f0?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=bradley-pisney-36-IfOncKSw-unsplash.jpg" },
                { name: "Bentley Turbo R", year: "1985", price: "$45,000", img: "https://images.unsplash.com/photo-1582649335985-cd6a3d66e502?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=peter-plashkin-WTJHkULOiA4-unsplash.jpg" },
                { name: "Speed Six", year: "1929", price: "$2,200,000", img: "https://images.unsplash.com/photo-1749215530386-e011171450df?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=eric-soubeyrand-de-saint-prix-MFweyoZ_ges-unsplash.jpg" }
            ]
        },
        maserati: {
            title: "The Maserati Classiche",
            collection: [
                { name: "Maserati Ghibli", year: "1967", price: "$240,000", img: "https://images.unsplash.com/photo-1593055339366-26882b66e012?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=talia-zsJZhl-dZMU-unsplash.jpg" },
                { name: "Maserati 3500 GT", year: "1960", price: "$350,000", img: "https://images.unsplash.com/photo-1657714601182-6bace9183b50?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=vlad-grebenyev-g4UjRXhm2j4-unsplash.jpg" },
                { name: "Maserati Bora", year: "1971", price: "$180,000", img: "https://images.unsplash.com/photo-1615966996783-5d361a011237?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=felix-janssen-2eMJDJM9vxk-unsplash.jpg" },
                { name: "Maserati Khamsin", year: "1974", price: "$145,000", img: "https://images.unsplash.com/photo-1695444934240-2f34cd275f79?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=hoyoun-lee-R43VEYlmIZ8-unsplash.jpg" }
            ]
        },
        shelby: {
            title: "The Shelby Archive",
            collection: [
                { name: "Shelby Cobra 427", year: "1965", price: "$1,800,000", img: "https://images.unsplash.com/photo-1709014950976-b64b353bd8c2?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=stoyan-ramalchanov-Qw31hyQVV-A-unsplash.jpg" },
                { name: "Shelby GT500", year: "1967", price: "$220,000", img: "https://images.unsplash.com/photo-1691042393289-c203cd56289c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=daniel-garcia-bAwSbh1CcG8-unsplash.jpg" },
                { name: "Shelby GT350", year: "1965", price: "$350,000", img: "https://images.unsplash.com/photo-1753475624088-49c7f3d31782?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=lucas-cogrossi-W7NsKkwMDA8-unsplash.jpg" },
                { name: "Shelby Series 1", year: "1998", price: "$165,000", img: "https://images.unsplash.com/photo-1753475560073-597230a4fd5e?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=lucas-cogrossi-Wp1WcBqExew-unsplash.jpg" }
            ]
        },
        alfa: {
            title: "The Alfa Romeo Cuore",
            collection: [
                { name: "33 Stradale", year: "1967", price: "$10,000,000", img: "https://images.unsplash.com/photo-1565736736479-eb33dd45482d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=alessio-zaccaria-Fk2QbQWZmLM-unsplash.jpg" },
                { name: "Giulia GTA", year: "1965", price: "$350,000", img: "https://images.unsplash.com/photo-1590406747126-4c1d1ea22282?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=serjan-midili-iQDZeiHmRpg-unsplash.jpg" },
                { name: "Alfa Spider", year: "1966", price: "$85,000", img: "https://images.unsplash.com/photo-1504455637435-8d1a13cd8a93?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=severin-demchuk-Qw1VPF8_fws-unsplash.jpg" },
                { name: "Montreal", year: "1970", price: "$125,000", img: "https://images.unsplash.com/photo-1678214216417-d1f1ed399a35?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=denys-nlU87d7Ke14-unsplash.jpg" }
            ]
        },
        lotus: {
            title: "The Lotus Archives",
            collection: [
                { name: "Lotus Esprit S1", year: "1976", price: "$150,000", img: "https://images.unsplash.com/photo-1681758043765-e09cdd67e127?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=j-z-5kn5jQkDpaM-unsplash.jpg" },
                { name: "Lotus Seven", year: "1957", price: "$65,000", img: "https://images.unsplash.com/photo-1697830337788-42c6c638e7c6?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mate-vanyek-6oVsvV3MRHo-unsplash.jpg" },
                { name: "Lotus Elan", year: "1962", price: "$45,000", img: "https://images.unsplash.com/photo-1721908327543-99dba806dd57?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tiago-ferreira-ShTLjANI__I-unsplash.jpg" },
                { name: "Lotus Europa", year: "1966", price: "$35,000", img: "https://images.unsplash.com/photo-1752959804919-99a580fc100b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rob-wingate-Na5HaH7w2og-unsplash.jpg" }
            ]
        },
        dodge: {
            title: "The Dodge Muscle",
            collection: [
                { name: "Dodge Challenger", year: "1969", price: "$180,000", img: "https://images.unsplash.com/photo-1657385721478-5c913be94e47?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=marcel-sulborski-btJWFW44vX8-unsplash.jpg" },
                { name: "Dodge Challenger", year: "1970", price: "$145,000", img: "https://images.unsplash.com/photo-1609386462833-6b0d46b2fce0?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=haidong-liang-rcoDRb_2x90-unsplash.jpg" },
                { name: "Super Bee", year: "1968", price: "$95,000", img: "https://images.unsplash.com/photo-1680574893873-c7563dc5f81d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=andrew-akabane-psNg6lEq698-unsplash.jpg" },
                { name: "Dart GTS", year: "1967", price: "$55,000", img: "https://images.unsplash.com/photo-1646512267334-158b3e6ddc47?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=enrico-landmesser-Np0zuHTk5CU-unsplash.jpg" }
            ]
        },
        nissan: {
            title: "The Nissan Skyline Archive",
            collection: [
                { name: "Skyline GT-R R34", year: "1999", price: "$280,000", img: "https://images.unsplash.com/photo-1609964729554-a02fb2a04830?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=martin-katler-71MFodxIz8c-unsplash.jpg" },
                { name: "Nissan 240Z", year: "1971", price: "$65,000", img: "https://images.unsplash.com/photo-1584273421792-84b448728b38?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=faisal-waheed-8s9et-Zc6X4-unsplash.jpg" },
                { name: "Skyline GT-R R32", year: "1989", price: "$95,000", img: "https://images.unsplash.com/photo-1580274437636-1c384e59e9b5?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=josh-berquist-9nrPNX1QWEM-unsplash.jpg" },
                { name: "Nissan Fairlady Z", year: "1969", price: "$85,000", img: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=d-panyukov-_4ZLmHzwARY-unsplash.jpg" }
            ]
        },
        toyota: {
            title: "Toyota Heritage & JDM",
            collection: [
                { name: "Supra MKIV", year: "1994", price: "$120,000", img: "https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=anastase-maragos-Lrfuy93_hAc-unsplash.jpg" },
                { name: "Toyota 2000GT", year: "1967", price: "$1,100,000", img: "https://images.unsplash.com/photo-1627008119017-f89d9704a799?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=chris-demers-03tMuL_a3vM-unsplash.jpg" },
                { name: "Celica GT-Four", year: "1994", price: "$45,000", img: "https://images.unsplash.com/photo-1690349607381-a9d705537ed5?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nate-dieckhaus-dbltuPsfd_A-unsplash.jpg" },
                { name: "AE86 Trueno", year: "1983", price: "$35,000", img: "https://images.unsplash.com/photo-1655159295882-f4797272b411?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=damien-leblanc-93BJWK0lu4Q-unsplash.jpg" }
            ]
        },
        mazda: {
            title: "The Mazda Rotary Archive",
            collection: [
                { name: "Mazda RX-7 FD", year: "1992", price: "$85,000", img: "https://images.unsplash.com/photo-1643142311296-304953706775?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=crosby-hinze-nsKQWNucrPE-unsplash.jpg" },
                { name: "Mazda Cosmo", year: "1967", price: "$145,000", img: "https://images.unsplash.com/photo-1599491143816-8c1ea12a4e06?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=austin-lowman-SpSVyLVB_5g-unsplash.jpg" },
                { name: "RX-7 Savanna", year: "1985", price: "$35,000", img: "https://images.unsplash.com/photo-1521410195597-69e2218fcee8?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=samuele-errico-piccarini-N_oLnW2ZotE-unsplash.jpg" },
                { name: "787B Legacy", year: "1991", price: "$5,000,000", img: "https://images.unsplash.com/photo-1668415759930-5a9dbe80c488?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nam-cz-SFXtAJTtYRE-unsplash.jpg" }
            ]
        },
        pagani: {
            title: "The Pagani Atelier",
            collection: [
                { name: "Pagani Zonda C12", year: "1999", price: "$5,500,000", img: "https://images.unsplash.com/photo-1635974631051-d21dbfdc4c8b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=wes-tindel-QPexVtdAUrU-unsplash.jpg" },
                { name: "Zonda Cinque", year: "2009", price: "$12,000,000", img: "https://images.unsplash.com/photo-1597935526289-3fb74b52e2ae?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=yannis-zaugg-Nv47UkEPMRE-unsplash.jpg" },
                { name: "Zonda Roadster", year: "2003", price: "$4,200,000", img: "https://images.unsplash.com/photo-1635974067648-ff1a1bc9d5f6?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=wes-tindel-zMHYXOhonNw-unsplash.jpg" },
                { name: "HyayraBC Genesis", year: "2016", price: "$3,800,000", img: "https://images.unsplash.com/photo-1597775738045-96695099c7b8?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=yannis-zaugg-mOrmxn_Rn40-unsplash.jpg" }
            ]
        },
        koenigsegg: {
            title: "Koenigsegg Hyperexotics",
            collection: [
                { name: "Koenigsegg CC8S", year: "2002", price: "$2,800,000", img: "https://images.unsplash.com/photo-1596906673164-fffb05b8333d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=yannis-zaugg-xMyu5VQ4su4-unsplash.jpg" },
                { name: "CCR Legacy", year: "2004", price: "$3,200,000", img: "https://images.unsplash.com/photo-1632993950427-44e4c8f90023?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=eugene-tkachenko-poWsLrpntc8-unsplash.jpg" },
                { name: "CCX Pursuit", year: "2006", price: "$1,800,000", img: "https://images.unsplash.com/photo-1566024164372-0281f1133aa6?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=spencer-davis-DFnCCRExDdc-unsplash.jpg" },
                { name: "Agera Heritage", year: "2010", price: "$4,500,000", img: "https://images.unsplash.com/photo-1600710967322-a4562604bb10?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=yannis-zaugg--e3dLZ803h0-unsplash.jpg" }
            ]
        },
        maybach: {
            title: "Maybach Excellence",
            collection: [
                { name: "Maybach Zeppelin", year: "1932", price: "$2,500,000", img: "https://images.unsplash.com/photo-1702543180823-9722d8f76cc3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=eser-desu-xYGWuJUQQt0-unsplash.jpg" },
                { name: "Maybach 62", year: "2002", price: "$450,000", img: "https://images.unsplash.com/photo-1716544586714-a75001abbdce?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mathew-antony-fn6189Inu_g-unsplash.jpg" },
                { name: "Exelero Concept", year: "2004", price: "$8,000,000", img: "https://images.unsplash.com/photo-1723075472194-4046578eea93?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=angelina-kusznirewicz-9kEjDEBC8As-unsplash.jpg" },
                { name: "Maybach SW38", year: "1936", price: "$1,200,000", img: "https://images.unsplash.com/photo-1682807489028-489575b0d3ee?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=vitali-adutskevich-xqd4_tL1GhA-unsplash.jpg" }
            ]
        }
    };

    const modal = document.getElementById('collection-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGrid = document.getElementById('modal-grid');
    const closeBtn = document.querySelector('.close-modal');
    const carCards = document.querySelectorAll('.car-card');

    const openModal = (brand) => {
        let title, collection;

        if (brand === 'all') {
            title = "The Complete Archive";
            collection = Object.values(brandVault).flatMap(b => b.collection);
        } else {
            const data = brandVault[brand];
            if (!data) return;
            title = data.title;
            collection = data.collection;
        }

        // Populate Modal
        modalTitle.textContent = title;
        modalGrid.innerHTML = '';

        collection.forEach((car, index) => {
            const card = document.createElement('div');
            card.className = `modal-car-card reveal active`;
            card.style.animationDelay = `${index * 0.15}s`;
            card.innerHTML = `
                <div class="modal-car-img-container">
                    <img src="${car.img}" alt="${car.name}" class="modal-car-img">
                </div>
                <div class="modal-car-info">
                    <h3>${car.name}</h3>
                    <div class="modal-car-meta">
                        <p>${car.year} | Classic Spec</p>
                        <span class="modal-car-price">${car.price}</span>
                    </div>
                </div>
            `;
            modalGrid.appendChild(card);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // 6.1 Master Gallery Listeners
    const collLinks = document.querySelectorAll('#nav-collection, #mobile-collection');
    collLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('all');

            // If mobile, close the menu
            if (mobileNav.classList.contains('active')) {
                menuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    carCards.forEach(card => {
        card.addEventListener('click', () => {
            const brand = card.getAttribute('data-car');
            openModal(brand);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});
