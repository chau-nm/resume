import {
	CSSLogo,
	HTMLLogo,
	JavaScriptLogo,
	JavaSkill,
	Minesweeper, MySQLLogo, ReactLogo, SpringLogo,
	Tetris,
	TypeScriptLogo
} from "assets/images/logo";

export const data = [
	{
		name: "TetrisGame",
		description: (
			<p>
				<img src={Tetris} alt={""} height={15}/> {" "}
				Tetris game is created by Java Swing. <br/>
				Using design patterns like: Observer, Strategy, Factory.
			</p>
		),
		technologies: [JavaSkill],
		link: "https://github.com/chau-nm/TetrisGame"
	},
	{
		name: "MinesweeperJava",
		description: (
			<p>
				<img src={Minesweeper} alt={""} height={15}/> {" "}
				Minesweeper game is created by Java Swing.
			</p>
		),
		technologies: [JavaSkill],
		link: "https://github.com/chau-nm/MinesweeperJava"
	},
	{
		name: "ui_problems",
		description: "I'm using this repository to practice UI coding.",
		technologies: [HTMLLogo, CSSLogo, JavaScriptLogo],
		link: "https://github.com/chau-nm/ui_problems"
	},
	{
		name: "leetcode_problems",
		description: "I'm using this repo to solve problems on LeetCode.",
		technologies: [JavaSkill, TypeScriptLogo],
		link: "https://github.com/chau-nm/leetcode_problems"
	},
	{
		name: "algorithms",
		description: "I'm using this repo to practice data structures and algorithms.",
		technologies: [JavaSkill, TypeScriptLogo],
		link: "https://github.com/chau-nm/algorithms"
	},
	{
		name: "kltn",
		description: "This is my graduation thesis project.",
		technologies: [ReactLogo, SpringLogo, MySQLLogo],
		link: "https://github.com/chau-nm/kltn"
	}
]