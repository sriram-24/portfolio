export interface ISkill{
	name:string,
	icon:string
}

interface IProject{
	name:String,
	description:String,
	demo?:string,
	source:string,
	techUsed: Array<ISkill>
}

interface IUser{
	fullName : String,
	profileDescription : String,
	skills : Array<ISkill>,
	projects : Array<IProject>
}


export const user : IUser = {
	fullName : "Sriram Manoharan",
	profileDescription : "I'm a developer who is interested in learning new things and improve my skills in programming. I spend my free time by listening to music and playing games. I'd like to collaborate on open-source and work as a team.",
	skills : [
		{
			name:'Javascript',
			icon:''
		},
		{
			name:'React',
			icon:''
		},
		{
			name:'Java',
			icon:''
		},
		{
			name:'SQL',
			icon:''
		},
		{
			name:'Mendix',
			icon:''
		},
		{
			name:'REST',
			icon:''
		},
		{
			name:'Git',
			icon:''
		},
	],
	projects : [
		{
			name:"Pin Input",
			description:"Pin Input is a widget used for entering sequence of inputs in a separate input boxes. This widget will provide a modern look and feel for entering the OTP or PIN inputs instead of using a plain input text widget. It is built on top of a @zagjs/pin-input react component.",
			demo:"https://marketplace.mendix.com/link/component/224180",
			source:"https://github.com/sriram-24/PinInputMendix",
			techUsed:[
				{
					name:"React",
					icon:""
				},
				{
					name:"Mendix",
					icon:""
				},
				
			]
		},
		{
			name:"next-note-app",
			description:"A basic note app with CRUD operations for learning the concepts of react and NextJS. This app includes creating a new note, editing notes, deleting notes and search for existing notes in the application.",
			demo:"https://next-note-app-six.vercel.app/",
			source:"https://github.com/sriram-24/next-note-app",
			techUsed:[
				{
					name:"React",
					icon:""
				},
				{
					name:"NextJS",
					icon:""
				},
				{
					name:"MongoDB",
					icon:""
				},

			]
		},
		{
			name:"neo-editor-lexical",
			description:"A simple rich text editor using lexical framework. It has basic functionalities like font variants, font sizes, headings, underline text, Italics and code fence. Main focus of this project is to understand the  framework capabilities and customizing editors.",
			demo:"https://neo-editor-lexical.vercel.app/",
			source:"https://github.com/sriram-24/neo-editor-lexical",
			techUsed:[
				{
					name:"React",
					icon:""
				},
				{
					name:"NextJS",
					icon:""
				},
				
			]
		},
		{
			name:"mendix-sdk-api",
			description:"An express api to fetch the details of duplicated microflows, pages and nanoflows of mendix application using the mendix sdk.",
			
			source:"https://github.com/sriram-24/mendix-sdk-api",
			techUsed:[
				{
					name:"Express",
					icon:""
				},
				{
					name:"NodeJS",
					icon:""
				},
				
			]
		},
		{
			name:"noteappandroid",
			description:"Basic android notes app with CRUD operations. Store notes in sqlite database in user's local storage.",
			demo:"https://github.com/sriram-24/noteappandroid/releases/tag/1.0.0",
			source:"https://github.com/sriram-24/noteappandroid",
			techUsed:[
				{
					name:"Android",
					icon:""
				},
				{
					name:"Sqlite",
					icon:""
				},
				{
					name:"Kotlin",
					icon:""
				},
				
			]
		},


	]
}
