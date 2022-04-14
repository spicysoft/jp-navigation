import SlpFooter from "./Footer.vue";

export default {
  title: "Components/Footer",
  component: SlpFooter,
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => {
  return {
    components: { SlpFooter },
    props: Object.keys(argTypes),
    template: `<SlpFooter v-bind="$props" />`,
  };
};

export const Default = Template.bind({});
Default.args = {};
