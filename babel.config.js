module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      }   
   ]
  }
}
