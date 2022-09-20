/*
 * @Author: liziwei01
 * @Date: 2022-09-20 05:08:46
 * @LastEditors: liziwei01
 * @LastEditTime: 2022-09-20 06:53:45
 * @Description: file content
 */
import session from "express-session"

function SessionMiddlewareFunc() {
	return session({
		name: "express-fiar-appui",
		secret: `
			-----BEGIN OPENSSH PRIVATE KEY-----
			b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAlwAAAAdzc2gtcn
			NhAAAAAwEAAQAAAIEAxXkDRuS2vZYT96NC1FgYcxbO3xj/YWntGGPct6OZd3kLc/w5MT13
			oX+fTmDRmTwvPVKZzvMTCBmaeafJSliNcyiwuWfX0smbruMyRNzd7EAARXehvCwcLksoGi
			0eAWs/7BA5H/mIcW3OI45qYexYV9dfwM6RSMGHuUZeMAfWGqEAAAIIriSo3a4kqN0AAAAH
			c3NoLXJzYQAAAIEAxXkDRuS2vZYT96NC1FgYcxbO3xj/YWntGGPct6OZd3kLc/w5MT13oX
			+fTmDRmTwvPVKZzvMTCBmaeafJSliNcyiwuWfX0smbruMyRNzd7EAARXehvCwcLksoGi0e
			AWs/7BA5H/mIcW3OI45qYexYV9dfwM6RSMGHuUZeMAfWGqEAAAADAQABAAAAgQChsQqr28
			59wgsrc/Tephuu8PgG2RMTEobet7Ycb8rTdruYBuhVlz0DcdphdQlqbUtI7P+f4oyszzob
			bvV0+LkoJSNJbBgubymrQ1pXnnkktYgvWhdpCi/nZmkHigz0Q31aueeb0TYIcsRC58oGTO
			sMXOrQuO1R/KpnlHhYg9r1+QAAAEEAkpT+XW23Ezt982z+O5W+MpbFXsOAxuggWJiJQFTO
			eXov7IgPk7gQFEHYGHuv+6Vkqmf03wfvxG2vNL7JwwEfJAAAAEEA/kxYtEs3jlmjvCcTm0
			7okcaV2msLrTjr7cGozr7GDR2Ps6V/V1DAGEAcJuSWP+z66ba7LYJCSYvAveZ8stYRbwAA
			AEEAxstQqmHNUP4KmCDAOiQ5Pd0mtMH3bUebJOx6V32NZp5AlMhEgmrdIlCuOPd4FBtTRd
			gNYyoqZqLw0dIZRO9s7wAAABFhbHNzeWxrQGdtYWlsLmNvbQ==
			-----END OPENSSH PRIVATE KEY-----
		`,
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 30 * 60, // ms
			httpOnly: true,
			secure: false
		}
	})
}

export { SessionMiddlewareFunc }