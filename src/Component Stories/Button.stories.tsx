// Button.stories.ts|tsx

import * as React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args: {}) => (
	<Button {...args} />
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { backgroundColor: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: "📚📕📈🤓" };
