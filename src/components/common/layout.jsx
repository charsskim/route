export default function Layout({ children, title }) {
	return (
		<main className={`layout ${title}`}>
			<h2>{title}</h2>
			{children}
		</main>
	);
}
