// Suggested solution for fixing breaking issue using ESLint V9 with React Hooks eslint-plugin-react-hooks package
// https://github.com/facebook/react/issues/28313

// TODO: Remove when https://github.com/facebook/react/issues/30119 is resolved
declare module 'eslint-plugin-react-hooks' {
	import type { Linter, Rule } from 'eslint';

	export const configs: {
		recommended: Linter.Config;
	};

	const rules: {
		'rules-of-hooks': Rule.RuleModule;
		'exhaustive-deps': Rule.RuleModule;
	};

	const plugin: {
		configs: typeof configs;
		rules: typeof rules;
	};

	export default plugin;
}
