export const Footer = () => {
    return `
        <div class="footer--left" >
            Copyright &copy; ${new Date().toLocaleDateString('en-US')} by Kevin Lockett
        </div>
        <div class="footer--center" >
            <img class="img--footer" src="./img/lockett_designs_logo.png" alt="" />
        </div>
        <div class="footer--right" >
            <a href="https://github.com/kevinlockett" target="blank"><img src="./img/github.png" class="img-github" alt=""></a>
        </div>
    `
}