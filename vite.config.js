import svelte from 'rollup-plugin-svelte'

export default {
  plugins: [
    svelte({
      emitCss: false,
    }),
  ],
}
