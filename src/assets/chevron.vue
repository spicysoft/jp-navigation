<script>
export default {
  name: "ChevronIcon",
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
      d="M10.78 2.22a.75.75 0 0 0-1.06 0L4.468 7.472a.75.75 0 0 0 0 1.06l5.252 5.252a.75.75 0 1 0 1.06-1.06L6.06 8.001l4.72-4.721a.75.75 0 0 0 0-1.06Z"
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
      d="M5.22 2.22a.75.75 0 0 1 1.06 0l5.252 5.252a.75.75 0 0 1 0 1.06L6.28 13.784a.75.75 0 1 1-1.06-1.06l4.72-4.723L5.22 3.28a.75.75 0 0 1 0-1.06Z"
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
      d="M2.22 5.22a.75.75 0 0 0 0 1.06l5.252 5.252a.75.75 0 0 0 1.06 0l5.252-5.252a.75.75 0 1 0-1.06-1.06L8.001 9.94 3.28 5.22a.75.75 0 0 0-1.06 0Z"
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
      d="M2.22 10.78a.75.75 0 0 1 0-1.06l5.252-5.252a.75.75 0 0 1 1.06 0l5.252 5.252a.75.75 0 1 1-1.06 1.06L8.001 6.06 3.28 10.78a.75.75 0 0 1-1.06 0Z"
    />
  </svg>
</template>
