import React from 'react'
import Link from 'next/link'

function Page () {
	return (
		<>
			<h1>Index page</h1>
			<p>Go to not existing page to trigger 404 error.</p>
			<div>
				<Link href={'/en/abc'}>Link to /en/abc</Link> - here, for example.
			</div>
		</>
	)
}

export default Page
