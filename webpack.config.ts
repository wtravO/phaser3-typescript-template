module.exports = (env: string) => {
    return require(`./webpack.${env}.ts`);
};