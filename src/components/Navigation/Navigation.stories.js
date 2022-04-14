import SlpNavigation from "./Navigation.vue";

export default {
  title: "Components/Navigation",
  component: SlpNavigation,
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => {
  return {
    components: { SlpNavigation },
    props: Object.keys(argTypes),
    template: `<SlpNavigation v-bind="$props" />`,
  };
};

export const Default = Template.bind({});
Default.args = {};
