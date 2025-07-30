import project1 from "./assets/projects-1.png";
import project2 from "./assets/projects-2.png";
import project3 from "./assets/projects-3.png";
import profilfoto from "./assets/banner.png";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const data = {
	en: {
		headerSection: {
			navButtons: [
				{
					text: "Skills",
					link: "#skills",
				},
				{
					text: "Projects",
					link: "#projects",
				},
				{
					text: "Hire me",
				},
			],
			nameIcon: "A",
			darkMode: "DARK MODE",
			lightMode: "LIGHT MODE",
			language1: "TÜRKÇE'YE",
			language2: "GEÇ",
		},
		heroSection: {
			name: "Asel Haraççı",
			title1: "Creative thinker",
			title2: "Minimalism lover",
			intro: "Hi, I’m Asel. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
			buttons: [
				{
					text: "Hire me",
					link: "#",
					icon: "",
				},
				{
					text: "Github",
					link: "https://github.com/aselharacci",
					icon: faGithub,
				},
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/asel-irem-haracci-6362b3146/",
					icon: faLinkedinIn,
				}
			],
			profileImage: profilfoto,
		},
		skillsSection: {
			title: "Skills",
			skills: [
				{
					name: "JavaScript",
					info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				},
				{
					name: "React.Js",
					info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				},
				{
					name: "Node.Js",
					info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				}
			],
		},
		profileSection: {
			title: "Profile",
			profile: "Profile",
			birthday1: "Birth Date",
			birthday2: "18.10.1995",
			city1: "City ​​of Residence",
			city2: "İstanbul",
			education1: "Education Status",
			education2: "İstanbul Bilgi University",
			education3: "Public Relations, 2019",
			role1: "Preferred Role",
			role2: "Frontend, UI",
			aboutMe: "About Me",
			aboutMeText1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
			aboutMeText2: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
		},
		projectsSection: {
			title: "Projects",
			projects: [
				{
					name: "Workintech",
					description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
					image: project1,
					buttons: [
						{
							text: "react",
							link: "#",
						},
						{
							text: "redux",
							link: "#",
						},
						{
							text: "axios",
							link: "#",
						},
					],
					links: [
						{
							text: "Github",
							link: "#",
						},
						{
							text: "View Site",
							link: "#",
						},
					],
				},
				{
					name: "Random Jokes",
					description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
					image: project2,
					buttons: [
						{
							text: "react",
							link: "#",
						},
						{
							text: "redux",
							link: "#",
						},
						{
							text: "axios",
							link: "#",
						},
					],
					links: [
						{
							text: "Github",
							link: "#",
						},
						{
							text: "View Site",
							link: "#"
						},
					],
				},
				{
					name: "Journey",
					description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
					image: project3,
					buttons: [
						{
							text: "react",
							link: "#",
						},
						{
							text: "redux",
							link: "#",
						},
						{
							text: "axios",
							link: "#",
						},
					],
					links: [
						{
							text: "Github",
							link: "#",
						},
						{
							text: "View Site",
							link: "#",
						},
					],
				},
			]
		},
		footerSection: {
			title: "Let's work together on your next product.",
			email: "asel.haracci@gmail.com",
			blog: "Personal Blog",
			github: "Github",
			githubLink: "https://github.com/aselharacci",
			linkedin: "Linkedin",
			linkedinLink: "https://www.linkedin.com/in/asel-irem-haracci-6362b3146/",
		},
	},
	tr: {
		headerSection: {
			navButtons: [
				{
					text: "Yetenekler",
				},
				{
					text: "Projeler",
				},
				{
					text: "Birlikte Çalışalım",
				},
			],
			nameIcon: "A",
			darkMode: "KARANLIK MOD",
			lightMode: "AYDINLIK MOD",
			language1: "SWITCH TO",
			language2: "ENGLISH",
		},
		heroSection: {
			name: "Asel Haraççı",
			title1: "Yaratıcı düşünür",
			title2: "Minimalizm sever",
			intro: "Merhaba, ben Asel. Ben bir full-stack geliştiriciyim. Harika kullanıcı deneyimiyle, sağlam ve ölçeklenebilir frontend ürünler geliştiribelen bir geliştirici arıyorsanız, gelin el sıkışalım.",
			buttons: [
				{
					text: "Birlikte çalışalım",
					link: "#",
					icon: "",
				},
				{
					text: "Github",
					link: "https://github.com/aselharacci",
					icon: faGithub,
				},
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/asel-irem-haracci-6362b3146/",
					icon: faLinkedinIn,
				}
			],
			profileImage: profilfoto,
		},
		skillsSection: {
			title: "Yetenekler",
			skills: [
				{
					name: "JavaScript",
					info: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan, basit, özelleştirilebilir ve minimum kurulum gerektiren bir çerez eklentisidir. Bu eklenti, standart JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
				},
				{
					name: "React.Js",
					info: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan, basit, özelleştirilebilir ve minimum kurulum gerektiren bir çerez eklentisidir. Bu eklenti, standart JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
				},
				{
					name: "Node.Js",
					info: "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan, basit, özelleştirilebilir ve minimum kurulum gerektiren bir çerez eklentisidir. Bu eklenti, standart JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur. Git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
				}
			],
		},
		profileSection: {
			title: "Profil",
			profile: "Profil",
			birthday1: "Doğum Tarihi",
			birthday2: "18.10.1995",
			city1: "İkamet Şehri",
			city2: "İstanbul",
			education1: "Eğitim Durumu",
			education2: "İstanbul Bilgi Ünviversitesi",
			education3: "Halkla İlişkiler, 2019",
			role1: "Tercih Ettiği Rol ",
			role2: "Frontend, UI",
			aboutMe: "Hakkımda",
			aboutMeText1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
			aboutMeText2: "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
		},
		projectsSection: {
			title: "Projeler",
			projects: [
				{
					name: "Workintech",
					description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
					image: project1,
					buttons: [
						{
							text: "react",
							link: "#",
						},
						{
							text: "redux",
							link: "#",
						},
						{
							text: "axios",
							link: "#",
						},
					],
					links: [
						{
							text: "Github",
							link: "#",
						},
						{
							text: "Websiteye Git",
							link: "#",
						},
					],
				},
				{
					name: "Random Jokes",
					description: "Bir tek sayfa uygulama projesidir. Bu React projesi Vite kullanılarak oluşturulmuştur. Bileşenler arasında gezinmek için React Router'ı, FormData'yı bir sahte api hizmetine göndermek için Axios'u ve birkaç başarı ve hata senaryosunu test etmek için Cypress'i kullanır.",
					image: project2,
					buttons: [
						{
							text: "react",
							link: "#",
						},
						{
							text: "redux",
							link: "#",
						},
						{
							text: "axios",
							link: "#",
						},
					],
					links: [
						{
							text: "Github",
							link: "https://github.com/kaanarslann/fsweb-s8-challenge-pizza",
						},
						{
							text: "View Site",
							link: "https://fsweb-s8-challenge-pizza-alpha.vercel.app/",
						},
					],
				},
				{
					name: "Journey",
					description: "Basit, statik bir web sayfasıdır. İlk frontend projelerimden biriydi. Temel HTML öğelerini, film kutularını yatay kaydırmak için bir kaydırma özelliğini, yıldız derecelendirmeleri gibi özellikler oluşturmak için Fontawesome simgelerini ve Netflix benzeri bir sayfanın iskeletini oluşturmak için CSS kullanır.",
					image: project3,
					buttons: [
						{
							text: "react",
							link: "#",
						},
						{
							text: "redux",
							link: "#",
						},
						{
							text: "axios",
							link: "#",
						},
					],
					links: [
						{
							text: "Github",
							link: "#",
						},
						{
							text: "Websiteye Git",
							link: "#",
						},
					],
				},
			]
		},
		footerSection: {
			title: "Haydi bir sonraki ürününüzde birlikte çalışalım.",
			email: "asel.haracci@gmail.com",
			blog: "Kişisel Blog",
			github: "Github",
			githubLink: "https://github.com/aselharacci",
			linkedin: "Linkedin",
			linkedinLink: "https://www.linkedin.com/in/asel-irem-haracci-6362b3146/",
		},
	},
}

export default data;