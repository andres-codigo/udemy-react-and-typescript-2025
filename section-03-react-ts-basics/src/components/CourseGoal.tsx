// #1 define the children props type using PropsWithChildren type and props using ReactNode type
// import { type PropsWithChildren, type ReactNode } from "react";

// interface CourseGoalProps {
// 	title: string;
// 	children: ReactNode;
// }

// #2 define the children props type using PropsWithChildren type and define custom props type using <{ custom prop type}>
import { type PropsWithChildren } from 'react';
type CourseGoalProps = PropsWithChildren<{
	id: number;
	title: string;
	onDelete: (id: number) => void;
}>;

// #1 export option
export default function CourseGoal({
	id,
	title,
	children,
	onDelete,
}: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>DELETE</button>
		</article>
	);
}

// #2 export option
// import { type FC, type PropsWithChildren } from "react";
// type CourseGoalProps = PropsWithChildren<{title: string}>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
// 	return <article>
// 		<div>
// 			<h2>{title}</h2>
// 			{children}
// 		</div>
// 		<button>DELETE</button>
// 	</article>
// }

// export default CourseGoal;
