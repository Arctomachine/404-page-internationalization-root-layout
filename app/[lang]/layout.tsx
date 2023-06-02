import React, { ReactNode } from 'react'

function Layout ({
	params: { lang },
	children,
}: {
	params: { lang: string }
	children: ReactNode
}) {
	return (
		<html lang={lang}>
		<body>
		<p>This is app/[lang] layout</p>
		{children}
		</body>
		</html>
	)
}

export default Layout
