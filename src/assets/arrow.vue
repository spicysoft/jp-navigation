<script>
export default {
  name: "ArrowIcon",
  props: {
    direction: {
      type: String,
      required: true,
      default: null,
    },
    fill: {
      type: String,
      required: false,
      default: "#000",
    },
  },
};
</script>

<template>
  <svg
    v-if="direction === 'left'"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    :fill="fill"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.841 5.28a.75.75 0 0 0-1.06-1.06L1.53 7.47 1 8l.53.53 3.25 3.25a.75.75 0 0 0 1.061-1.06l-1.97-1.97H14.25a.75.75 0 0 0 0-1.5H3.871l1.97-1.97Z"
    />
  </svg>
  <svg
    v-else-if="direction === 'right'"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    :fill="fill"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379l-1.97 1.97Z"
    />
  </svg>
  <svg
    v-else-if="direction === 'down'"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    :fill="fill"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.72 10.159a.75.75 0 1 1 1.06 1.06l-3.25 3.25L8 15l-.53-.53-3.25-3.25a.75.75 0 0 1 1.06-1.061l1.97 1.97V1.75a.75.75 0 1 1 1.5 0v10.379l1.97-1.97Z"
    />
  </svg>
  <svg
    v-else-if="direction === 'up'"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    :fill="fill"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.72 5.841a.75.75 0 1 0 1.06-1.06L8.53 1.53 8 1l-.53.53-3.25 3.25a.75.75 0 0 0 1.06 1.061l1.97-1.97V14.25a.75.75 0 0 0 1.5 0V3.871l1.97 1.97Z"
    />
  </svg>
</template>
