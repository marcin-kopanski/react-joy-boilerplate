import { CssVarsProvider } from "@mui/joy";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SignUp } from "../../feature/Auth";

export default {
  titls: "Sign Up",
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = (args) => (
  <CssVarsProvider>
    <SignUp {...args} />
  </CssVarsProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
