module.exports = {
    deployTest: { //部署到测试服务器上
        remotePath: '/app/', //部署到服务器的路径
        host: '172.16.6.34', //ip地址
        user: 'root', //帐号
        pass: 'dzf-jwh123&*9', //密码
        port: 22 //端口
    },
    deployDist: { //部署正式服务器上
        remotePath: '/app/', //部署到服务器的路径
        host: '111.11.111.111', //ip地址
        user: 'root', //帐号
        pass: '88888888', //密码
        port: 22 //端口
    },
    publicPath: '/app/', //程序在网站根路径地址
    target: 'http://alipay.vpiaotong.cn/' //连接的服务器地址
}
