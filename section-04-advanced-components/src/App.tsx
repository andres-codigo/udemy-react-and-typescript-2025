import { useRef } from 'react';

import Form, { type FormHandle } from './components/Form.tsx';
import Input from './components/Input.tsx';
// import Container from './components/Container.tsx';
import Button from './components/Button.tsx';
// import Card from './components/examples/Card.tsx';
// import IconButton from './components/examples/IconButton.tsx';
// import List from './components/examples/List.tsx';

// function HeartIcon() {
// 	return <span>❤️</span>;
// }

// const users = [
// 	{ id: 'u1', name: 'Max' },
// 	{ id: 'u2', name: 'Manuel' },
// ];

// const hobbies = ['Sports', 'Reading', 'Cooking'];

function App() {
	const customForm = useRef<FormHandle>(null);

	// const input = useRef<HTMLInputElement>(null);
	function handleSave(data: unknown) {
		// const extractedData = data as { name: string; age: string };

		if (
			!data ||
			typeof data !== 'object' ||
			!('name' in data) ||
			!('age' in data)
		) {
			return;
		}

		console.log(data);
		customForm.current?.clear();
	}

	return (
		<main>
			<Form onSave={handleSave} ref={customForm}>
				<Input type="text" label="Name" id="name" />
				<Input type="number" label="Age" id="age" />
				<p>
					<Button>Save</Button>
				</p>
				{/* <Input label="Name" id="name" ref={input} /> */}
			</Form>

			{/* <Card
				title="My Card"
				actions={
					<Container as={Button} type="button">
						Click me
					</Container>
				}>
				<p>Some content</p>
			</Card>
			<section>
				<IconButton
					icon={HeartIcon}
					onClick={() => console.log('Button clicked!')}>
					Like
				</IconButton>
			</section>
			<section>
				<h2>Users</h2>
				<List
					items={users}
					renderItem={(user) => <li key={user.id}>{user.name}</li>}
				/>
			</section>
			<section>
				<h2>Hobbies</h2>
				<List
					items={hobbies}
					renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
				/>
			</section> */}
		</main>
	);
}

export default App;
